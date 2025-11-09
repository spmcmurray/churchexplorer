// Church Explorer API Server - Updated 2025-11-04
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const admin = require('firebase-admin');

// Log Stripe Price IDs at startup for debugging
console.log('✅ Stripe Basic Price ID:', process.env.STRIPE_BASIC_PRICE_ID);
console.log('✅ Stripe Premium Price ID:', process.env.STRIPE_PREMIUM_PRICE_ID);

// Initialize Firebase Admin
if (process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON) {
  const serviceAccount = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON);
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    projectId: process.env.FIREBASE_PROJECT_ID || 'church-explorer-20e5a',
  });
} else {
  admin.initializeApp({
    projectId: process.env.FIREBASE_PROJECT_ID || 'church-explorer-20e5a',
  });
}

const db = admin.firestore();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());

// Stripe webhook - MUST be before express.json() to get raw body
app.post('/api/stripe-webhook', express.raw({type: 'application/json'}), async (req, res) => {
  console.log('🔔 Webhook received at', new Date().toISOString());
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
    console.log('✅ Webhook signature verified');
  } catch (err) {
    console.error('❌ Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  console.log('📩 Webhook event received:', event.type, 'ID:', event.id);

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object;
        console.log('🎉 Checkout completed:', session.id);
        console.log('Session metadata:', session.metadata);
        
        const userId = session.metadata.userId;
        const customerId = session.customer;
        const subscriptionId = session.subscription;
        
        console.log('User ID:', userId);
        console.log('Customer ID:', customerId);
        console.log('Subscription ID:', subscriptionId);
        
        if (!userId) {
          console.error('❌ No userId in session metadata!');
          return res.status(400).json({ error: 'No userId in metadata' });
        }

        // If the session doesn't include a subscription ID (rare), skip here
        // and let the customer.subscription.created event handle creation.
        if (!subscriptionId) {
          console.warn('⚠️ No subscription ID on checkout.session.completed; waiting for customer.subscription.created event');
          break;
        }

        // Get subscription details to retrieve the price
        const subscription = await stripe.subscriptions.retrieve(subscriptionId);
        console.log('Subscription object:', JSON.stringify(subscription, null, 2));
        const priceId = subscription.items.data[0].price.id;
        
        console.log('Price ID:', priceId);
        console.log('Expected Basic:', process.env.STRIPE_BASIC_PRICE_ID);
        console.log('Expected Premium:', process.env.STRIPE_PREMIUM_PRICE_ID);
        
        let tier = 'free';
        if (priceId === process.env.STRIPE_BASIC_PRICE_ID) {
          tier = 'basic';
        } else if (priceId === process.env.STRIPE_PREMIUM_PRICE_ID) {
          tier = 'premium';
        }
        
        console.log('Determined tier:', tier);
        
        // Get period dates from subscription items
        const periodStart = subscription.items.data[0].current_period_start;
        const periodEnd = subscription.items.data[0].current_period_end;
        
        console.log('Period start:', periodStart, 'Period end:', periodEnd);
        
        // Update Firestore - store as JavaScript Date objects
        const subscriptionData = {
          tier: tier,
          status: 'active',
          stripeCustomerId: customerId,
          stripeSubscriptionId: subscriptionId,
          currentPeriodStart: new Date(periodStart * 1000),
          currentPeriodEnd: new Date(periodEnd * 1000),
          aiLessonsUsed: 0, // Reset usage counter on new subscription
          updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        };
        
        console.log('Writing to Firestore:', `users/${userId}/subscription/current`);
        console.log('Subscription data:', subscriptionData);
        
        await db.collection('users').doc(userId).collection('subscription').doc('current').set(subscriptionData, { merge: true });
        
        console.log('✅ Firestore write successful!');
        
        console.log(`✅ Updated subscription for user ${userId} to ${tier}`);
        break;
        
      case 'customer.subscription.updated':
        const updatedSub = event.data.object;
        console.log('Subscription updated:', updatedSub.id);
        console.log('Cancel at period end:', updatedSub.cancel_at_period_end);
        console.log('Status:', updatedSub.status);
        console.log('Schedule:', updatedSub.schedule);
        
        // Find user by subscription ID
        const subSnapshot = await db.collectionGroup('subscription')
          .where('stripeSubscriptionId', '==', updatedSub.id)
          .limit(1)
          .get();
        
        if (!subSnapshot.empty) {
          const userDoc = subSnapshot.docs[0].ref.parent.parent;
          
          // Determine new tier from price ID
          const newPriceId = updatedSub.items.data[0].price.id;
          let newTier = 'free';
          if (newPriceId === process.env.STRIPE_BASIC_PRICE_ID) {
            newTier = 'basic';
          } else if (newPriceId === process.env.STRIPE_PREMIUM_PRICE_ID) {
            newTier = 'premium';
          }
          
          const updateData = {
            tier: newTier,
            status: updatedSub.status,
            currentPeriodStart: new Date(updatedSub.current_period_start * 1000),
            currentPeriodEnd: new Date(updatedSub.current_period_end * 1000),
            cancelAtPeriodEnd: updatedSub.cancel_at_period_end || false,
            updatedAt: admin.firestore.FieldValue.serverTimestamp(),
          };

          // Check if there's a subscription schedule (plan change)
          if (updatedSub.schedule) {
            try {
              const schedule = await stripe.subscriptionSchedules.retrieve(updatedSub.schedule);
              console.log('Schedule phases:', schedule.phases);
              
              // Check if there's a future phase (downgrade/upgrade scheduled)
              if (schedule.phases && schedule.phases.length > 1) {
                const currentPhase = schedule.phases[0];
                const nextPhase = schedule.phases[1];
                
                const nextPriceId = nextPhase.items[0].price;
                let pendingTier = 'free';
                if (nextPriceId === process.env.STRIPE_BASIC_PRICE_ID) {
                  pendingTier = 'basic';
                } else if (nextPriceId === process.env.STRIPE_PREMIUM_PRICE_ID) {
                  pendingTier = 'premium';
                }
                
                updateData.pendingTierChange = pendingTier;
                updateData.pendingTierChangeDate = new Date(nextPhase.start_date * 1000);
                
                console.log(`📅 Scheduled plan change: ${newTier} → ${pendingTier} on ${new Date(nextPhase.start_date * 1000)}`);
              }
            } catch (scheduleError) {
              console.error('Error fetching schedule:', scheduleError);
            }
          } else {
            // No schedule, clear any pending changes
            updateData.pendingTierChange = admin.firestore.FieldValue.delete();
            updateData.pendingTierChangeDate = admin.firestore.FieldValue.delete();
          }

          // If subscription is set to cancel at period end, mark status as 'canceled'
          if (updatedSub.cancel_at_period_end) {
            updateData.status = 'canceled';
            console.log(`⚠️ Subscription will cancel at ${new Date(updatedSub.current_period_end * 1000)}`);
          }
          
          await subSnapshot.docs[0].ref.update(updateData);
          
          console.log(`✅ Updated subscription to ${newTier}, status: ${updateData.status}`);
        }
        break;

      case 'customer.subscription.created':
        const createdSub = event.data.object;
        console.log('Subscription created:', createdSub.id);

        // Try to get userId from subscription metadata (set during checkout)
        const createdUserId = createdSub.metadata?.userId;
        const createdCustomerId = createdSub.customer;

        // Determine price and tier
        const createdPriceId = createdSub.items?.data[0]?.price?.id;
        let createdTier = 'free';
        if (createdPriceId === process.env.STRIPE_BASIC_PRICE_ID) {
          createdTier = 'basic';
        } else if (createdPriceId === process.env.STRIPE_PREMIUM_PRICE_ID) {
          createdTier = 'premium';
        }

        const createdPeriodStart = createdSub.items?.data[0]?.current_period_start;
        const createdPeriodEnd = createdSub.items?.data[0]?.current_period_end;

        const createdSubscriptionData = {
          tier: createdTier,
          status: createdSub.status || 'active',
          stripeCustomerId: createdCustomerId,
          stripeSubscriptionId: createdSub.id,
          currentPeriodStart: createdPeriodStart ? new Date(createdPeriodStart * 1000) : null,
          currentPeriodEnd: createdPeriodEnd ? new Date(createdPeriodEnd * 1000) : null,
          aiLessonsUsed: 0, // Reset usage counter on new subscription
          updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        };

        if (createdUserId) {
          await db.collection('users').doc(createdUserId).collection('subscription').doc('current').set(createdSubscriptionData, { merge: true });
          console.log(`✅ Created subscription record for user ${createdUserId} (tier: ${createdTier})`);
        } else {
          // Try to find user by customer id if metadata wasn't present
          const custSnapshot = await db.collectionGroup('subscription')
            .where('stripeCustomerId', '==', createdCustomerId)
            .limit(1)
            .get();

          if (!custSnapshot.empty) {
            await custSnapshot.docs[0].ref.update(createdSubscriptionData);
            console.log(`✅ Updated existing subscription record for customer ${createdCustomerId}`);
          } else {
            console.warn('⚠️ Could not associate created subscription with a user (no metadata, no matching customer)');
          }
        }
        break;
        
      case 'customer.subscription.deleted':
        const deletedSub = event.data.object;
        console.log('Subscription canceled:', deletedSub.id);
        
        // Find user by subscription ID
        const delSnapshot = await db.collectionGroup('subscription')
          .where('stripeSubscriptionId', '==', deletedSub.id)
          .limit(1)
          .get();
        
        if (!delSnapshot.empty) {
          await delSnapshot.docs[0].ref.update({
            status: 'canceled',
            tier: 'free',
            updatedAt: admin.firestore.FieldValue.serverTimestamp(),
          });
          
          console.log(`✅ Canceled subscription, reverted to free tier`);
        }
        break;
        
      case 'invoice.payment_failed':
        const failedInvoice = event.data.object;
        console.log('Payment failed for subscription:', failedInvoice.subscription);
        
        // Find user by subscription ID
        const failSnapshot = await db.collectionGroup('subscription')
          .where('stripeSubscriptionId', '==', failedInvoice.subscription)
          .limit(1)
          .get();
        
        if (!failSnapshot.empty) {
          await failSnapshot.docs[0].ref.update({
            status: 'past_due',
            updatedAt: admin.firestore.FieldValue.serverTimestamp(),
          });
          
          console.log(`⚠️ Subscription marked as past_due`);
        }
        break;
    }
  } catch (error) {
    console.error('Error processing webhook:', error);
    return res.status(500).json({ error: 'Webhook processing failed' });
  }

  res.json({received: true});
});

app.use(express.json());

// OpenAI API endpoint proxy
app.post('/api/ai/generate-lesson', async (req, res) => {
  try {
    const { topic, additionalContext } = req.body;

    if (!process.env.REACT_APP_OPENAI_API_KEY) {
      return res.status(500).json({ error: 'OpenAI API key not configured on server' });
    }

    const systemPrompt = `You are a Christian education expert with deep knowledge of Bible history, church history, theology, and apologetics. You MUST create lessons that are 100% theologically accurate and fact-checked.

IMPORTANT: You ONLY create lessons about Christian topics. If the user requests a lesson about:
- Cooking, recipes, food (UNLESS it's biblical food/culture or communion)
- Politics, political figures, elections
- Business, cryptocurrency, stocks, investments
- Entertainment, movies, TV shows
- Sports, gaming, hobbies
- Or any other non-Christian topic

You MUST refuse and respond with this JSON:
{
  "error": "This topic is outside Church Explorer's scope. We focus on Bible study, church history, Christian theology, apologetics, and denominational studies."
}

APPROVED TOPICS ONLY:
- Bible study, biblical history, biblical archaeology
- Church history, historical Christian figures
- Christian theology, doctrine, apologetics
- Denominational beliefs (Catholic, Protestant, Orthodox, etc.)
- Christian ethics and worldview
- How Christianity addresses modern issues
- Christian worship, prayer, spiritual disciplines

CRITICAL ACCURACY REQUIREMENTS - ZERO TOLERANCE FOR ERRORS:
- All historical dates, events, and figures must be factually correct
- Biblical references must be accurate and properly cited
- **CHRONOLOGICAL ERRORS ARE FORBIDDEN**: Jesus lived ~4 BC to ~30 AD. He could NOT have quoted New Testament books (written 50-100 AD). He quoted Old Testament/Hebrew Bible ONLY.
- Quiz questions must have definitively correct answers based on Scripture and historical fact
- Never confuse different biblical events (e.g., Pentecost vs. Jesus's birth)
- Never attribute quotes/verses to wrong sources (e.g., Paul's words to Jesus, etc.)
- Cross-verify all theological claims against orthodox Christian teaching
- For quiz questions, triple-check the correct answer before marking it
- If uncertain about ANY fact, DO NOT include it - choose verifiable information only

Create a comprehensive Christian education lesson with these components:

LESSON STRUCTURE TO FOLLOW:
1. Title & Subtitle (engaging and descriptive)
2. Introduction (2-3 paragraphs setting context)
3. Main Sections (3-4 sections, each with title, content paragraphs, and key points)
4. Quiz (5 multiple-choice questions)
5. Memory Verse (relevant scripture with reference)
6. Further Reading (3 recommended resources)
7. Reflection (thought-provoking question with prompt)

IMPORTANT FORMATTING RULES:
- Return ONLY valid JSON
- Use proper escaping for quotes and special characters
- Keep content theologically accurate and orthodox
- Make it engaging and educational

Return the lesson in this exact JSON structure:
{
  "title": "string",
  "subtitle": "string",
  "introduction": "string (2-3 paragraphs)",
  "sections": [
    {
      "title": "string",
      "content": "string (multiple paragraphs)",
      "keyPoints": ["string", "string", "string"]
    }
  ],
  "quiz": [
    {
      "question": "string",
      "options": ["string", "string", "string", "string"],
      "correct": 0,
      "explanation": "string - MUST explain why this answer is biblically/historically correct"
    }
  ],
  "memoryVerse": {
    "reference": "string",
    "text": "string"
  },
  "furtherReading": ["string", "string", "string"],
  "reflection": {
    "question": "string",
    "prompt": "string"
  }
}

Do not include any text before or after the JSON object.`;

    const userPrompt = `Create a comprehensive Christian education lesson about: "${topic}"

    ${additionalContext ? `Additional context: ${additionalContext}` : ''}

    QUIZ QUESTION REQUIREMENTS:
    - Each question must test factual knowledge from the lesson
    - Verify the correct answer against Scripture or historical records
    - **CRITICAL**: Never ask about Jesus quoting New Testament (NT didn't exist in His lifetime)
    - Jesus only quoted the Hebrew Bible/Old Testament (Torah, Prophets, Writings)
    - Verify ALL biblical references are from the correct time period
    - Include an explanation that cites biblical references or historical sources
    - Ensure wrong answers are plausible but definitively incorrect
    - Never guess - if unsure about a fact, research it or choose a different topic
    
    Please generate a complete lesson following the specified structure. Ensure the content is:
    - Theologically accurate according to historic Christian orthodoxy
    - Appropriate for adult learners with conservative Christian values
    - Make vocabulary appropriate fora high school graduate or adult audience
    - Balanced and neutral when presenting different denominational views
    - Engaging and educational
    - Well-structured with clear sections and key takeaways`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        temperature: 0.2,
        max_tokens: 3000
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'OpenAI API request failed');
    }

    const data = await response.json();
    const lessonContent = data.choices[0].message.content;

    // Clean and parse the response
    let cleanedResponse = lessonContent.trim();
    if (cleanedResponse.startsWith('```json')) {
      cleanedResponse = cleanedResponse.replace(/```json\n?/g, '').replace(/```\n?$/g, '');
    } else if (cleanedResponse.startsWith('```')) {
      cleanedResponse = cleanedResponse.replace(/```\n?/g, '');
    }

    const lessonData = JSON.parse(cleanedResponse);

    // FACT-CHECK STEP: Validate the lesson before returning
    console.log('🔍 Fact-checking lesson...');
    const factCheckPrompt = `You are a Christian theology and history fact-checker. Review this lesson for CRITICAL ERRORS ONLY:

LESSON TO REVIEW:
${JSON.stringify(lessonData, null, 2)}

CHECK FOR THESE CRITICAL ERRORS:
1. **Chronological impossibilities** (e.g., Jesus quoting New Testament verses, which didn't exist yet)
2. **Biblical misattribution** (verses attributed to wrong books/authors)
3. **Historical inaccuracies** (wrong dates, events, people, councils)
4. **Theological errors** that contradict core Christian orthodoxy (Nicene Creed, etc.)
5. **Quiz questions with factually wrong answers marked as correct**

IGNORE minor stylistic issues, different theological interpretations, or denominational variations.

Respond with ONLY this JSON format:
{
  "hasErrors": true/false,
  "errors": [
    {
      "location": "quiz question 3" or "section 2" or "memory verse",
      "error": "Specific description of the factual error",
      "correction": "What the correct information should be"
    }
  ]
}

If NO critical errors found, return: {"hasErrors": false, "errors": []}`;

    const factCheckResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: 'You are a meticulous Christian theology and history fact-checker. Only flag CRITICAL factual errors, not stylistic or interpretive differences.' },
          { role: 'user', content: factCheckPrompt }
        ],
        temperature: 0.1, // Very low temperature for consistency
        max_tokens: 1000
      })
    });

    if (!factCheckResponse.ok) {
      console.error('Fact-check API failed, proceeding without validation');
    } else {
      const factCheckData = await factCheckResponse.json();
      let factCheckContent = factCheckData.choices[0].message.content.trim();
      
      // Clean JSON formatting
      if (factCheckContent.startsWith('```json')) {
        factCheckContent = factCheckContent.replace(/```json\n?/g, '').replace(/```\n?$/g, '');
      } else if (factCheckContent.startsWith('```')) {
        factCheckContent = factCheckContent.replace(/```\n?/g, '');
      }
      
      const factCheckResult = JSON.parse(factCheckContent);
      
      if (factCheckResult.hasErrors && factCheckResult.errors.length > 0) {
        console.error('❌ FACT-CHECK FAILED:', factCheckResult.errors);
        
        // Return error with details
        return res.status(400).json({
          error: 'Generated lesson contains factual errors',
          factCheckErrors: factCheckResult.errors,
          message: 'The AI generated a lesson with factual inaccuracies. Please try again with a different topic or phrasing.'
        });
      } else {
        console.log('✅ Fact-check passed');
      }
    }

    res.json({
      lesson: {
        ...lessonData,
        generatedAt: new Date().toISOString(),
        topic: topic,
        factChecked: true
      },
      usage: data.usage
    });

  } catch (error) {
    console.error('Error generating lesson:', error);
    res.status(500).json({ 
      error: 'Failed to generate lesson',
      message: error.message 
    });
  }
});

// Topic suggestions endpoint
app.post('/api/ai/suggest-topics', async (req, res) => {
  try {
    const { userInterests } = req.body;

    if (!process.env.REACT_APP_OPENAI_API_KEY) {
      return res.status(500).json({ error: 'OpenAI API key not configured on server' });
    }

    const prompt = `Based on these interests: ${userInterests || 'general Christian education'}, suggest 5 engaging Christian education topics that would make excellent lessons. Return ONLY a JSON array of topic strings, nothing else.`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: 'You are a Christian education expert. Provide topic suggestions as a JSON array.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.8,
        max_tokens: 300
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'OpenAI API request failed');
    }

    const data = await response.json();
    let content = data.choices[0].message.content.trim();
    
    if (content.startsWith('```json')) {
      content = content.replace(/```json\n?/g, '').replace(/```\n?$/g, '');
    }

    const suggestions = JSON.parse(content);
    res.json({ suggestions });

  } catch (error) {
    console.error('Error suggesting topics:', error);
    res.status(500).json({ 
      error: 'Failed to suggest topics',
      message: error.message 
    });
  }
});

// Learning path outline endpoint
app.post('/api/ai/generate-path-outline', async (req, res) => {
  try {
    const { topic, pathType, lessonCount, additionalContext } = req.body;

    if (!process.env.REACT_APP_OPENAI_API_KEY) {
      return res.status(500).json({ error: 'OpenAI API key not configured on server' });
    }

    const prompt = `Create a learning path outline about "${topic}" with ${lessonCount} lessons.
    
    ${additionalContext ? `Additional context: ${additionalContext}` : ''}
    
    The path type is: ${pathType}
    
    Return ONLY a JSON object with this exact structure:
{
  "pathTitle": "string (engaging title for the learning path)",
  "pathDescription": "string (brief description of what the path covers)",
  "totalLessons": ${lessonCount},
  "estimatedTime": "X-Y minutes per lesson",
  "lessons": [
    {
      "lessonNumber": number (1 to ${lessonCount}),
      "title": "string (lesson title)",
      "description": "string (what this lesson covers)",
      "objectives": ["objective 1", "objective 2", "objective 3"]
    }
  ]
}

Make sure the content is theologically accurate and appropriate for Christian education.
Each lesson should have 3-4 specific learning objectives.`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: 'You are a Christian education curriculum designer.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.3,
        max_tokens: 1000
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'OpenAI API request failed');
    }

    const data = await response.json();
    let content = data.choices[0].message.content.trim();
    
    console.log('OpenAI raw response for path outline:', content);
    
    if (content.startsWith('```json')) {
      content = content.replace(/```json\n?/g, '').replace(/```\n?$/g, '');
    }

    const outline = JSON.parse(content);
    
    console.log('Parsed outline:', JSON.stringify(outline, null, 2));
    
    // Validate the outline has required fields
    if (!outline.lessons || !Array.isArray(outline.lessons)) {
      console.error('Invalid outline structure - missing or invalid lessons array');
      return res.status(500).json({ 
        error: 'Invalid outline structure from AI',
        message: 'The AI response did not include a valid lessons array'
      });
    }
    
    res.json({ outline });

  } catch (error) {
    console.error('Error generating path outline:', error);
    res.status(500).json({ 
      error: 'Failed to generate path outline',
      message: error.message 
    });
  }
});

// Topic validation endpoint
app.post('/api/ai/validate-topic', async (req, res) => {
  try {
    const { topic } = req.body;

    if (!process.env.REACT_APP_OPENAI_API_KEY) {
      return res.status(500).json({ error: 'OpenAI API key not configured on server' });
    }

    // Server-side validation prompt (don't rely on client)
    const validationPrompt = `You are a content moderator for Church Explorer, a Christian education platform.

Your job is to determine if a lesson topic request is appropriate for our platform.

APPROVED TOPICS:
- Bible study, biblical history, biblical archaeology
- Church history, historical figures in Christianity
- Christian theology, doctrine, apologetics
- Denominational beliefs and practices (Catholic, Protestant, Orthodox, etc.)
- Christian ethics, morality, and worldview
- How Christianity addresses modern issues
- Christian worship, prayer, and spiritual disciplines
- Biblical languages, hermeneutics, interpretation

REJECTED TOPICS (return approved: false):
- Cooking, recipes, food preparation
- Politics, elections, political figures
- Cryptocurrency, stocks, investments, business
- Entertainment, movies, TV shows, celebrities
- Sports, gaming, hobbies
- Science unrelated to faith (unless it's apologetics/creation)
- Self-help or secular psychology (unless from Christian perspective)
- Other religions taught comparatively without Christian context
- Explicit content, violence, drugs
- Any topic that doesn't relate to Christianity or Christian education

ANALYZE THIS TOPIC REQUEST: "${topic}"

Respond with ONLY valid JSON in this format:
{
  "approved": true or false,
  "reason": "Brief explanation of why approved or rejected"
}`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: validationPrompt
          }
        ],
        temperature: 0.1, // Low temperature for consistent moderation
        max_tokens: 150
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'OpenAI API request failed');
    }

    const data = await response.json();
    const validationResult = data.choices[0].message.content.trim();
    
    console.log('Topic validation result:', validationResult);
    
    res.json({ validationResult });

  } catch (error) {
    console.error('Error validating topic:', error);
    res.status(500).json({ 
      error: 'Failed to validate topic',
      message: error.message 
    });
  }
});

// Study Buddy Chat - AI assistant for premium users
app.post('/api/ai/study-buddy', async (req, res) => {
  try {
    const { messages, userId, pageContext, denomination } = req.body;

    if (!userId) {
      return res.status(400).json({ error: 'User ID required' });
    }

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Messages array required' });
    }

    if (!process.env.REACT_APP_OPENAI_API_KEY) {
      return res.status(500).json({ error: 'OpenAI API key not configured on server' });
    }

    // Check subscription tier - only Premium users can use Study Buddy
    const userDoc = await db.collection('users').doc(userId).get();
    if (!userDoc.exists) {
      return res.status(403).json({ error: 'User not found' });
    }

    const subscriptionDoc = await db.collection('users').doc(userId).collection('subscription').doc('current').get();
    const subscription = subscriptionDoc.exists ? subscriptionDoc.data() : null;
    const tier = subscription?.tier || 'free';

    if (tier !== 'premium') {
      return res.status(403).json({ 
        error: 'Study Buddy is only available for Premium subscribers',
        upgradeNeeded: true,
        currentTier: tier
      });
    }

    // Build context-aware system prompt
    let contextInfo = '';
    console.log('Study Buddy - Received page context:', pageContext);
    
    if (pageContext) {
      if (pageContext.lessonTitle) {
        contextInfo += `\n\nCURRENT LESSON CONTEXT:\nLesson: "${pageContext.lessonTitle}"`;
        console.log('Adding lesson title to context:', pageContext.lessonTitle);
      }
      if (pageContext.lessonContent) {
        contextInfo += `\nContent: ${pageContext.lessonContent.substring(0, 2000)}`; // Limit to 2000 chars
        console.log('Adding lesson content to context, length:', pageContext.lessonContent.length);
      }
      if (pageContext.currentSlide) {
        contextInfo += `\nCurrent slide: ${pageContext.currentSlide}`;
        console.log('Adding current slide to context');
      }
      if (pageContext.pageType) {
        contextInfo += `\nPage: ${pageContext.pageType}`;
        console.log('Adding page type to context:', pageContext.pageType);
      }
      contextInfo += `\n\nWhen the user asks questions, consider this context. If they ask "what does this mean?" or refer to concepts from the lesson, use the lesson content above to provide specific, relevant answers.`;
      console.log('Final context info length:', contextInfo.length);
    } else {
      console.log('No page context provided');
    }

    // Add denomination context if available
    let denominationContext = '';
    if (denomination) {
      denominationContext = `\n\nUSER'S DENOMINATION: ${denomination}
When the user asks questions about theological topics, you may reference their ${denomination} tradition for context. For example:
- "In the ${denomination} tradition, this is typically understood as..."
- "While ${denomination} churches generally teach X, other denominations hold to Y"
- Use terminology familiar to their tradition when appropriate

Important: Simply state facts about different denominational views. Do not suggest the user should reflect on, consider, or validate other perspectives. Present information objectively without encouraging any particular stance.`;
      console.log('Adding denomination context:', denomination);
    }

    // System prompt for the Study Buddy
    const systemPrompt = `You are a knowledgeable and encouraging Christian study companion for Church Explorer users. Your role is to help users deepen their understanding of the Bible, Christian theology, church history, apologetics, and denominational beliefs.

IMPORTANT GUIDELINES:
1. ONLY discuss Christian topics:
   - Bible study, biblical interpretation, Scripture
   - Christian theology, doctrine, and apologetics
   - Church history and historical Christian figures
   - Denominational beliefs and practices
   - Christian ethics, morality, and worldview
   - Prayer, worship, and spiritual disciplines
   - How Christianity addresses modern issues

2. REJECT non-Christian topics politely:
   - If asked about cooking, recipes, politics, entertainment, sports, business, etc., respond:
   "I'm here to help you explore Christian faith, the Bible, theology, and church history. Let's talk about your faith journey instead! What would you like to learn about Christianity?"

3. RESPONSE LENGTH - Be naturally concise and match your depth to the question:
   - Simple factual questions ("Who was Paul?", "What is baptism?"): Answer briefly in 1-3 clear sentences
   - Moderate questions ("Explain justification by faith"): Provide a focused explanation in 1-2 paragraphs
   - Complex/theological questions ("How do denominations differ on..."): Give a thorough but concise answer in 2-3 paragraphs
   - Discussion questions: Respond thoughtfully in 2-3 paragraphs and invite further reflection
   
   Don't pad your answers. Be clear, direct, and stop when you've answered the question fully.

4. Teaching style:
   - Be warm, encouraging, and patient
   - Cite Scripture when relevant (include references)
   - Present different theological perspectives fairly when denominational views differ
   - Encourage deeper study and personal reflection
   - Ask thought-provoking questions when appropriate

5. Tone: Friendly, knowledgeable, non-judgmental, and Christ-centered${contextInfo}${denominationContext}

Remember: You're a study companion, not a replacement for church community, pastoral counsel, or medical/legal advice. Encourage users to seek appropriate help when needed.`;

    // Use a consistent token limit and let the AI decide appropriate length based on prompt instructions
    // 600 tokens gives plenty of room (~400-500 words) while preventing extremely long responses
    const maxTokens = 600;
    
    console.log(`Max tokens set to: ${maxTokens}`);

    // Call OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages
        ],
        temperature: 0.7,
        max_tokens: maxTokens
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'OpenAI API request failed');
    }

    const data = await response.json();
    const assistantMessage = data.choices[0].message.content;

    res.json({
      message: assistantMessage,
      usage: data.usage
    });

  } catch (error) {
    console.error('Error in study buddy chat:', error);
    res.status(500).json({ 
      error: 'Failed to process chat message',
      message: error.message 
    });
  }
});

// Stripe Checkout Session - Create subscription checkout
app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { priceId, userId, userEmail } = req.body;

    if (!priceId || !userId || !userEmail) {
      return res.status(400).json({ error: 'Missing required fields: priceId, userId, userEmail' });
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      customer_email: userEmail,
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      // Enable promo code input in checkout
      allow_promotion_codes: true,
      success_url: `${req.headers.origin}/#/profile?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/#/profile?canceled=true`,
      metadata: {
        userId: userId,
      },
      subscription_data: {
        metadata: {
          userId: userId,
        },
      },
    });

    res.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: error.message });
  }
});

// Stripe Customer Portal - Manage subscription/billing
app.post('/api/create-portal-session', async (req, res) => {
  try {
    const { customerId } = req.body;

    if (!customerId) {
      return res.status(400).json({ error: 'Missing customerId' });
    }

    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${req.headers.origin}/#/profile`,
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Error creating portal session:', error);
    res.status(500).json({ error: error.message });
  }
});

// Cancel subscription endpoint
app.post('/api/cancel-subscription', async (req, res) => {
  try {
    const { subscriptionId } = req.body;

    if (!subscriptionId) {
      return res.status(400).json({ error: 'Missing subscriptionId' });
    }

    // Cancel at period end (not immediately) - user keeps access until billing period ends
    const subscription = await stripe.subscriptions.update(subscriptionId, {
      cancel_at_period_end: true
    });

    console.log(`✅ Subscription ${subscriptionId} will cancel at period end:`, new Date(subscription.cancel_at * 1000));

    res.json({ 
      success: true, 
      message: 'Subscription will cancel at period end',
      cancelAt: subscription.cancel_at 
    });
  } catch (error) {
    console.error('Error canceling subscription:', error);
    res.status(500).json({ error: error.message });
  }
});

// Backfill reviews for completed AI lessons (one-time use)
app.post('/api/backfill-reviews', async (req, res) => {
  try {
    const { userId } = req.body;
    
    if (!userId) {
      return res.status(400).json({ error: 'User ID required' });
    }
    
    console.log(`\n🔍 Starting review backfill for user: ${userId}`);
    
    // Review intervals in days
    const REVIEW_INTERVALS = [1, 3, 7, 14];
    
    // Get all AI paths for the user
    const pathsSnapshot = await db
      .collection('aiPaths')
      .where('userId', '==', userId)
      .get();
    
    if (pathsSnapshot.empty) {
      return res.json({ 
        success: true, 
        message: 'No AI paths found for this user',
        stats: { totalPaths: 0, lessonsProcessed: 0, reviewsCreated: 0 }
      });
    }
    
    console.log(`Found ${pathsSnapshot.size} AI learning paths`);
    
    let totalLessonsProcessed = 0;
    let reviewsCreated = 0;
    let reviewsSkipped = 0;
    
    // Process each path
    for (const pathDoc of pathsSnapshot.docs) {
      const pathData = pathDoc.data();
      const pathId = pathDoc.id;
      
      console.log(`\n📚 Processing path: ${pathData.title || 'Untitled'} (${pathId})`);
      
      if (!pathData.lessons || pathData.lessons.length === 0) {
        console.log('  ⚠️  No lessons in this path, skipping');
        continue;
      }
      
      // Check progress to see which lessons are completed
      const progress = pathData.progress || {};
      const completedLessons = progress.completedLessons || [];
      
      console.log(`  Total lessons: ${pathData.lessons.length}`);
      console.log(`  Completed lessons: ${completedLessons.length}`);
      
      // Process each completed lesson
      for (let lessonIndex = 0; lessonIndex < completedLessons.length; lessonIndex++) {
        if (!completedLessons[lessonIndex]) continue;
        
        totalLessonsProcessed++;
        const lesson = pathData.lessons[lessonIndex];
        const lessonKey = `ai_path_${pathId}_${lessonIndex}`;
        
        // Check if review schedule already exists
        const reviewRef = db
          .collection('users')
          .doc(userId)
          .collection('reviewSchedule')
          .doc(lessonKey);
        
        const existingReview = await reviewRef.get();
        
        if (existingReview.exists()) {
          console.log(`  ✓ Review already exists for lesson ${lessonIndex + 1}`);
          reviewsSkipped++;
          continue;
        }
        
        // Create review schedule
        // For backfilled lessons, set the first review to be due TODAY
        // so users can immediately review their old lessons
        const completedDate = progress.lastCompletedAt || new Date().toISOString();
        const now = new Date();
        
        const reviews = REVIEW_INTERVALS.map((interval, index) => {
          const dueDate = new Date(now);
          // First review is due today, subsequent reviews scheduled normally
          if (index === 0) {
            // Set to today
            dueDate.setHours(0, 0, 0, 0);
          } else {
            // Schedule future reviews based on today + previous intervals
            let totalDays = 0;
            for (let i = 0; i <= index; i++) {
              totalDays += REVIEW_INTERVALS[i];
            }
            dueDate.setDate(now.getDate() + totalDays - REVIEW_INTERVALS[0]); // Subtract first interval since it's today
          }
          
          return {
            dueDate: dueDate.toISOString(),
            completed: false,
            completedDate: null,
            interval: interval,
            reviewNumber: index + 1
          };
        });
        
        const scheduleData = {
          path: `ai_path_${pathId}`,
          lessonNumber: lessonIndex,
          completedDate: completedDate,
          reviews,
          masteryLevel: 0,
          lessonTitle: lesson?.title || 'AI Lesson',
          pathTitle: pathData.title || 'AI Learning Path'
        };
        
        await reviewRef.set(scheduleData);
        reviewsCreated++;
        console.log(`  ✅ Created review for lesson ${lessonIndex + 1}: ${lesson?.title || 'Untitled'}`);
      }
    }
    
    const stats = {
      totalPaths: pathsSnapshot.size,
      lessonsProcessed: totalLessonsProcessed,
      reviewsCreated: reviewsCreated,
      reviewsSkipped: reviewsSkipped
    };
    
    console.log(`\n📊 Backfill Summary:`, stats);
    
    res.json({
      success: true,
      message: 'Review backfill complete',
      stats
    });
    
  } catch (error) {
    console.error('❌ Error backfilling reviews:', error);
    res.status(500).json({ error: error.message });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`🚀 AI Proxy Server running on port ${PORT}`);
  console.log(`✅ OpenAI API key configured: ${!!process.env.REACT_APP_OPENAI_API_KEY}`);
  console.log(`✅ Stripe configured: ${!!process.env.STRIPE_SECRET_KEY}`);
  console.log(`✅ Stripe Basic Price ID: ${process.env.STRIPE_BASIC_PRICE_ID}`);
  console.log(`✅ Stripe Premium Price ID: ${process.env.STRIPE_PREMIUM_PRICE_ID}`);
});
