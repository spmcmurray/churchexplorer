/**
 * AI-Assisted Lesson Creator Service
 * Uses OpenAI API to generate custom lessons via Vercel proxy
 */

// Always use the proxy endpoint (Vercel) in production
// The API key is stored securely on the Vercel backend
const AI_API_ENDPOINT = process.env.REACT_APP_AI_API_ENDPOINT || 'http://localhost:3001/api/ai';

// For local development only (not used in production)
const AI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

/**
 * Validate topic before generation using AI to analyze intent
 * Returns { valid: boolean, message: string }
 */
const validateTopic = async (topic, additionalContext = '') => {
  const combinedText = `${topic} ${additionalContext}`.trim();
  
  // Check if topic is too short or generic
  if (combinedText.length < 3) {
    return {
      valid: false,
      message: 'Please enter a more specific topic for your lesson.'
    };
  }

  // Use AI to validate the topic's alignment with orthodox Christian teaching
  try {
    const response = await fetch(`${AI_API_ENDPOINT}/validate-topic`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        topic: combinedText,
        validationPrompt: `You are a content moderator for a Christian educational platform that teaches historic, orthodox Christian doctrine. 

Your task is to evaluate if the following lesson topic request is appropriate for our platform.

REJECT topics that:
- Advocate for progressive theology or revisionist interpretations that contradict historic Christian teaching
- Promote LGBTQ+ theology, gender identity ideology, or sexual ethics contrary to biblical teaching
- Argue for women in senior pastoral roles (pastors, elders) or women's ordination
- Advocate for political movements, social justice activism, or critical theory
- Promote abortion, premarital sex, cohabitation, or other behaviors contrary to Christian ethics
- Request content that undermines biblical authority or promotes theological liberalism
- Seek to "make a case" for positions contrary to orthodox Christian teaching

ACCEPT topics that:
- Teach what the Bible says about various topics (even controversial ones)
- Explain historic Christian positions on theology, doctrine, or ethics
- Present apologetics defending the Christian faith
- Explore church history, biblical history, or Christian doctrine
- Discuss how Christians should think about modern issues from a biblical perspective

Topic to evaluate: "${combinedText}"

Respond with ONLY a JSON object in this exact format:
{"approved": true/false, "reason": "brief explanation"}

Do not include any other text or formatting.`
      })
    });

    if (!response.ok) {
      console.error('Topic validation API error:', response.status);
      // If validation fails, allow the topic (fail open to avoid blocking legitimate requests)
      return { valid: true };
    }

    const data = await response.json();
    
    // Parse the AI response
    let result;
    if (data.validationResult) {
      try {
        // Try to parse the AI's response as JSON
        const cleanedResponse = data.validationResult.trim();
        result = JSON.parse(cleanedResponse);
      } catch (e) {
        console.error('Failed to parse validation result:', e);
        // If we can't parse, check for keywords in the response
        const responseText = data.validationResult.toLowerCase();
        result = {
          approved: !responseText.includes('"approved": false') && !responseText.includes('not appropriate'),
          reason: 'Unable to parse validation response'
        };
      }
    } else {
      console.error('No validation result in response');
      return { valid: true }; // Fail open
    }

    if (!result.approved) {
      return {
        valid: false,
        message: 'This topic is outside our educational scope. Church Explorer focuses on historic Christian teaching and theology. Please try a different topic related to Bible study, church history, apologetics, or Christian doctrine.'
      };
    }

    return { valid: true };

  } catch (error) {
    console.error('Topic validation error:', error);
    // Fail open - allow the topic if validation fails to avoid blocking legitimate requests
    return { valid: true };
  }
};

/**
 * Generate a system prompt for the AI based on existing lesson examples
 */
const generateSystemPrompt = () => {
  return `You are an expert Christian educator and theologian. Your task is to create comprehensive, educational lessons about Christian topics using a specific lesson structure.

LESSON STRUCTURE TO FOLLOW:
1. Title & Subtitle (engaging and descriptive)
2. Introduction (2-3 paragraphs setting context)
3. Main Sections (3-4 sections, each with title, content, and key points)
4. Quiz Questions (5 multiple choice questions with explanations)
5. Practical Application (how to apply this knowledge)
6. Memory Verse (relevant Bible verse with reference)
7. Further Reading (3-4 recommended resources)
8. Reflection (thoughtful question for personal consideration)

THEOLOGICAL GUARDRAILS - CRITICAL:
You MUST remain neutral and objective on theologically disputed topics. Your audience includes Orthodox, Catholic, and Protestant Christians with conservative beliefs.

REQUIRED NEUTRALITY on these topics:
- Women in ministry/ordination (present all views objectively without advocacy)
- Creation vs. evolution (respect literal interpretations)
- End times theology (present views without favoring one)
- Sacramental theology (respect differences between traditions)
- Church governance structures (episcopal, presbyterian, congregational)
- Charismatic gifts (tongues, prophecy, healing)
- Mary and the saints (Catholic vs. Protestant views)
- Salvation theology (faith alone, faith plus works, perseverance of saints)
- Biblical interpretation methods (literal vs. allegorical)
- Social and cultural issues (present traditional Christian perspectives)

REQUIRED POSITIONS - NO DEVIATION:
- Marriage and sexuality: Present only the historic Christian teaching that marriage is between one man and one woman
- Sexual ethics: Present only traditional Christian sexual ethics (celibacy outside of heterosexual marriage)
- Gender and identity: Present only the biblical teaching that God created humans male and female
- NEVER advocate for or normalize LGBT behavior, relationships, or identity
- Church leadership and gender roles: Present only historic Christian teaching on male headship and biblical gender roles
  * Orthodox, Catholic, and most Protestant traditions teach male-only ordination/eldership
  * Do NOT advocate for "gender equality" in church leadership
  * Do NOT promote women pastors, elders, or priests as normative
  * When discussing women in ministry, present only complementarian and traditional views
  * You may mention egalitarian views exist, but do not advocate for them
  * Focus on biblical teaching about distinct male and female roles
- When these topics arise, present the consistent historic Christian position held by Orthodox, Catholic, and traditional Protestant churches
- Do not present progressive Christian views on these topics as valid alternatives
- Focus on God's design for sexuality, marriage, and church order as taught in Scripture

BANNED TOPICS AND PHRASES:
- DO NOT generate lessons titled or focused on "gender equality in church leadership"
- DO NOT advocate for women's ordination or women as senior pastors/priests
- DO NOT use phrases like "breaking barriers" or "empowering women in ministry" in an advocacy context
- DO NOT frame complementarian theology as oppressive or outdated
- DO NOT suggest the church needs to "progress" on gender roles
- When discussing denominations that ordain women, present it factually without endorsement

APPROACH FOR DISPUTED TOPICS:
- State: "Christians hold different views on this topic"
- Present multiple perspectives fairly and objectively
- Cite which traditions hold which views (e.g., "Catholic teaching...", "Many Protestant denominations...", "Orthodox tradition...")
- Do NOT advocate for progressive or liberal theological positions
- Focus on historical orthodox Christian teaching as the baseline
- Respect traditional interpretations of Scripture
- When discussing denominations, present their official teachings accurately

CONTENT REQUIREMENTS:
- Theologically accurate according to historic Christian orthodoxy
- Appropriate for adult learners with conservative Christian values
- Rich with relevant Scripture references (use traditional translations)
- Present denominational differences objectively and respectfully
- Maintain an educational, not activist, tone
- Respect the authority of Scripture as held by all major traditions
- Each section should be 200-400 words
- Quiz questions should test understanding, not memorization
- Include both historical context and modern relevance

CRITICAL: You must respond with a valid JSON object that matches this exact structure:
{
  "title": "string",
  "subtitle": "string", 
  "introduction": "string",
  "sections": [
    {
      "title": "string",
      "content": "string",
      "keyPoints": ["string", "string", "string"]
    }
  ],
  "quiz": [
    {
      "question": "string",
      "options": ["string", "string", "string", "string"],
      "correct": 0,
      "explanation": "string"
    }
  ],
  "practicalApplication": "string",
  "memorizeVerse": {
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
};

/**
 * Generate lesson content using AI
 */
/**
 * Generate AI lesson with usage tracking
 * Now requires userId to check subscription limits
 */
export const generateAILesson = async (topic, additionalContext = '', userId = null) => {
  // Check subscription limits if userId provided
  if (userId) {
    const { canCreateAILesson, incrementAILessonUsage } = await import('../firebase/subscriptionService');
    const eligibility = await canCreateAILesson(userId, 'lesson');
    
    if (!eligibility.allowed) {
      const error = new Error(eligibility.reason || 'You have reached your monthly AI lesson limit.');
      error.upgradeNeeded = eligibility.upgradeNeeded;
      error.tier = eligibility.tier;
      error.used = eligibility.used;
      error.limit = eligibility.limit;
      throw error;
    }
  }
  
  // Validate topic before making API call
  const validation = await validateTopic(topic, additionalContext);
  if (!validation.valid) {
    throw new Error(validation.message);
  }
  
  try {
    // Always use the proxy server for security
    const response = await fetch(`${AI_API_ENDPOINT}/generate-lesson`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        topic,
        additionalContext
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI API Error:', errorText);
      throw new Error(`AI API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    
    if (!data.lesson) {
      throw new Error('Invalid response format from AI API');
    }

    // Validate the generated lesson structure
    const validatedLesson = validateAndEnhanceLesson(data.lesson, topic);

    // Increment usage counter after successful generation
    if (userId) {
      const { incrementAILessonUsage } = await import('../firebase/subscriptionService');
      await incrementAILessonUsage(userId, 'lesson');
    }

    return {
      success: true,
      lesson: validatedLesson,
      usage: data.usage
    };

  } catch (error) {
    console.error('AI lesson generation error:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

/**
 * Clean text content by replacing escaped newlines with actual newlines
 */
const cleanText = (text) => {
  if (typeof text !== 'string') return text;
  return text
    .replace(/\\n/g, '\n')  // Convert \n to actual newlines
    .replace(/\\t/g, '\t')  // Convert \t to actual tabs
    .replace(/\\"/g, '"')   // Convert \" to quotes
    .trim();
};

/**
 * Validate and enhance the AI-generated lesson
 */
const validateAndEnhanceLesson = (lesson, originalTopic) => {
  // Ensure all required fields are present
  const enhancedLesson = {
    id: `ai_${Date.now()}`,
    type: 'ai_generated',
    originalTopic: originalTopic,
    generatedAt: new Date().toISOString(),
    title: cleanText(lesson.title) || `Learning About: ${originalTopic}`,
    subtitle: cleanText(lesson.subtitle) || 'AI-Generated Lesson',
    introduction: cleanText(lesson.introduction) || 'This lesson was generated to help you learn about this topic.',
    sections: [],
    quiz: [],
    practicalApplication: cleanText(lesson.practicalApplication) || 'Consider how this knowledge applies to your faith journey.',
    memorizeVerse: lesson.memorizeVerse ? {
      reference: cleanText(lesson.memorizeVerse.reference) || 'John 8:32',
      text: cleanText(lesson.memorizeVerse.text) || 'Then you will know the truth, and the truth will set you free.'
    } : {
      reference: 'John 8:32',
      text: 'Then you will know the truth, and the truth will set you free.'
    },
    furtherReading: Array.isArray(lesson.furtherReading) 
      ? lesson.furtherReading.map(item => cleanText(item))
      : [],
    reflection: lesson.reflection ? {
      question: cleanText(lesson.reflection.question) || 'How does this lesson deepen your understanding of Christian faith?',
      prompt: cleanText(lesson.reflection.prompt) || 'Take a moment to reflect on what you\'ve learned and how it applies to your life.'
    } : {
      question: 'How does this lesson deepen your understanding of Christian faith?',
      prompt: 'Take a moment to reflect on what you\'ve learned and how it applies to your life.'
    },
    xpReward: 50 // Standard XP for AI lessons
  };

  // Validate sections
  if (lesson.sections && Array.isArray(lesson.sections)) {
    enhancedLesson.sections = lesson.sections.map((section, index) => ({
      title: cleanText(section.title) || `Section ${index + 1}`,
      content: cleanText(section.content) || '',
      keyPoints: Array.isArray(section.keyPoints) 
        ? section.keyPoints.map(point => cleanText(point))
        : []
    }));
  }

  // Validate quiz questions
  if (lesson.quiz && Array.isArray(lesson.quiz)) {
    enhancedLesson.quiz = lesson.quiz.map((question, index) => ({
      question: cleanText(question.question) || `Question ${index + 1}`,
      options: Array.isArray(question.options) && question.options.length === 4 
        ? question.options.map(opt => cleanText(opt))
        : ['Option A', 'Option B', 'Option C', 'Option D'],
      correct: typeof question.correct === 'number' && question.correct >= 0 && question.correct <= 3 
        ? question.correct 
        : 0,
      explanation: cleanText(question.explanation) || 'This is the correct answer.'
    }));
  }

  return enhancedLesson;
};

/**
 * Generate topic suggestions based on user interests
 */
export const generateTopicSuggestions = async (userInterests = []) => {
  try {
    // Use the proxy server
    const response = await fetch(`${AI_API_ENDPOINT}/suggest-topics`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userInterests: userInterests.join(', ')
      })
    });

    if (!response.ok) {
      throw new Error(`AI API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    
    return {
      success: true,
      suggestions: data.suggestions || data.topics || []
    };

  } catch (error) {
    console.error('Topic suggestion error:', error);
    return {
      success: false,
      error: error.message,
      fallbackSuggestions: [
        { title: 'Catholic Church Beliefs', description: 'Explore the core doctrines and practices of Catholicism' },
        { title: 'Protestant Reformation', description: 'Learn about the key events and figures of the Reformation' },
        { title: 'Eastern Orthodox Theology', description: 'Understand the distinctive beliefs of Eastern Christianity' },
        { title: 'Baptist Traditions', description: 'Discover the history and practices of Baptist churches' },
        { title: 'Pentecostal Movement', description: 'Learn about the modern Pentecostal and Charismatic movements' }
      ]
    };
  }
};

/**
 * Generate a learning path outline (lesson titles and descriptions)
 */
/**
 * Generate a learning path outline (lesson titles and descriptions)
 * Now requires userId to check subscription limits
 */
export const generateLearningPathOutline = async (topic, pathType, additionalContext = '', userId = null) => {
  // Check subscription limits if userId provided
  if (userId) {
    const { canCreateAILesson, incrementAILessonUsage } = await import('../firebase/subscriptionService');
    
    // Determine lesson type for limit checking
    const lessonType = pathType === 'quick' ? 'quick' : 'lesson';
    const eligibility = await canCreateAILesson(userId, lessonType);
    
    if (!eligibility.allowed) {
      const error = new Error(eligibility.reason || 'You have reached your monthly AI lesson limit.');
      error.upgradeNeeded = eligibility.upgradeNeeded;
      error.tier = eligibility.tier;
      error.used = eligibility.used;
      error.limit = eligibility.limit;
      throw error;
    }
  }
  
  // Validate topic before making API call
  const validation = await validateTopic(topic, additionalContext);
  if (!validation.valid) {
    throw new Error(validation.message);
  }
  
  try {
    const lessonCounts = {
      'quick': 1,
      'deep-dive': 3,
      'complete': 8
    };

    const lessonCount = lessonCounts[pathType] || 1;

    // Use the proxy server
    const response = await fetch(`${AI_API_ENDPOINT}/generate-path-outline`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        topic,
        pathType,
        lessonCount,
        additionalContext
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`AI API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    const outline = data.outline || data;

    // Validate that we have the lessons array
    if (!outline || !outline.lessons || !Array.isArray(outline.lessons)) {
      console.error('Invalid outline received:', outline);
      throw new Error('Server returned invalid path outline (missing lessons array)');
    }

    // Increment usage counter after successful generation
    if (userId) {
      const { incrementAILessonUsage } = await import('../firebase/subscriptionService');
      const lessonType = pathType === 'quick' ? 'quick' : 'lesson';
      await incrementAILessonUsage(userId, lessonType);
    }

    return {
      success: true,
      outline: {
        ...outline,
        pathId: `path_${Date.now()}`,
        originalTopic: topic,
        pathType: pathType,
        createdAt: new Date().toISOString()
      },
      usage: data.usage
    };

  } catch (error) {
    console.error('Path outline generation error:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

/**
 * Generate full content for a specific lesson in a learning path
 */
export const generatePathLesson = async (pathOutline, lessonNumber) => {
  try {
    const lessonInfo = pathOutline.lessons[lessonNumber - 1];
    if (!lessonInfo) {
      throw new Error('Invalid lesson number');
    }

    // Build context from previous lessons
    const previousLessons = pathOutline.lessons.slice(0, lessonNumber - 1);
    const contextText = previousLessons.length > 0
      ? `This is lesson ${lessonNumber} of ${pathOutline.totalLessons} in the path "${pathOutline.pathTitle}".
         Previous lessons covered: ${previousLessons.map(l => l.title).join(', ')}.
         Build upon this foundation.`
      : `This is the first lesson in the path "${pathOutline.pathTitle}".`;

    // Build objectives text with fallback
    const objectivesText = lessonInfo.objectives && Array.isArray(lessonInfo.objectives) && lessonInfo.objectives.length > 0
      ? `Learning Objectives:\n${lessonInfo.objectives.map((obj, i) => `${i + 1}. ${obj}`).join('\n')}`
      : `Focus: ${lessonInfo.description || 'Cover the key concepts of this topic.'}`;

    const additionalContext = `${contextText}

${objectivesText}

${lessonNumber > 1 ? 'Build on concepts from previous lessons.' : 'Establish foundational understanding.'}
${lessonNumber < pathOutline.totalLessons ? 'Prepare for upcoming lessons.' : 'Provide comprehensive conclusion and application.'}`;

    // Use the existing generate-lesson endpoint
    const result = await generateAILesson(lessonInfo.title, additionalContext);
    
    if (!result.success) {
      throw new Error(result.error);
    }

    // Add path metadata
    const lesson = result.lesson;
    lesson.pathId = pathOutline.pathId;
    lesson.pathTitle = pathOutline.pathTitle;
    lesson.lessonNumber = lessonNumber;
    lesson.totalLessonsInPath = pathOutline.totalLessons;

    return {
      success: true,
      lesson: lesson,
      usage: result.usage
    };

  } catch (error) {
    console.error('Path lesson generation error:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

/**
 * Generate all lessons in a learning path sequentially
 */
export const generateCompleteLearningPath = async (pathOutline, onProgressUpdate) => {
  const lessons = [];
  let totalUsage = { prompt_tokens: 0, completion_tokens: 0, total_tokens: 0 };

  try {
    // Validate pathOutline has the required structure
    if (!pathOutline || !pathOutline.lessons || !Array.isArray(pathOutline.lessons)) {
      throw new Error('Invalid path outline: missing lessons array');
    }

    for (let i = 1; i <= pathOutline.totalLessons; i++) {
      if (onProgressUpdate) {
        onProgressUpdate({
          current: i,
          total: pathOutline.totalLessons,
          status: 'generating',
          lessonTitle: pathOutline.lessons[i - 1]?.title || `Lesson ${i}`
        });
      }

      const result = await generatePathLesson(pathOutline, i);
      
      if (!result.success) {
        throw new Error(`Failed to generate lesson ${i}: ${result.error}`);
      }

      lessons.push(result.lesson);
      
      if (result.usage) {
        totalUsage.prompt_tokens += result.usage.prompt_tokens || 0;
        totalUsage.completion_tokens += result.usage.completion_tokens || 0;
        totalUsage.total_tokens += result.usage.total_tokens || 0;
      }

      // Small delay to avoid rate limiting
      if (i < pathOutline.totalLessons) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }

    if (onProgressUpdate) {
      onProgressUpdate({
        current: pathOutline.totalLessons,
        total: pathOutline.totalLessons,
        status: 'complete'
      });
    }

    return {
      success: true,
      path: {
        ...pathOutline,
        lessons: lessons,
        completedAt: new Date().toISOString(),
        usage: totalUsage
      }
    };

  } catch (error) {
    console.error('Complete path generation error:', error);
    return {
      success: false,
      error: error.message,
      partialLessons: lessons
    };
  }
};

/**
 * Save AI-generated learning path to Firestore
 * Paths are stored separately from individual lessons
 */
export const saveAIPathToLibrary = async (path, currentUser = null) => {
  try {
    // Save to Firestore if user is logged in
    if (currentUser?.uid) {
      const { saveAIPathToFirestore } = await import('../firebase/progressService');
      await saveAIPathToFirestore(currentUser.uid, path);
      return { success: true, path };
    } else {
      console.warn('Cannot save AI path - user not logged in');
      return { success: false, error: 'User not logged in' };
    }
  } catch (error) {
    console.error('Error saving AI path:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Get all saved AI paths from Firestore
 */
export const getSavedAIPaths = async (currentUser = null) => {
  try {
    // If user is logged in, load from Firestore
    if (currentUser?.uid) {
      const { getAIPathsFromFirestore, getAIPathProgressFromFirestore } = await import('../firebase/progressService');
      const result = await getAIPathsFromFirestore(currentUser.uid);
      if (result.success) {
        // Load progress for each AI path and merge it in
        const pathsWithProgress = await Promise.all(
          (result.paths || []).map(async (path) => {
            const progressResult = await getAIPathProgressFromFirestore(currentUser.uid, path.id);
            if (progressResult.success && progressResult.progress) {
              return {
                ...path,
                completedLessons: progressResult.progress.completedLessons || [],
                // Calculate if path is completed (all lessons done)
                completed: path.lessons && progressResult.progress.completedLessons 
                  ? progressResult.progress.completedLessons.length >= path.lessons.length
                  : false
              };
            }
            return {
              ...path,
              completedLessons: [],
              completed: false
            };
          })
        );
        return pathsWithProgress;
      }
    }
    
    // No paths if not logged in
    return [];
  } catch (error) {
    console.error('Error loading AI paths:', error);
    return [];
  }
};

/**
 * Delete an AI path from the library
 */
export const deleteAIPath = async (pathId, currentUser = null) => {
  try {
    // Delete from Firestore if user is logged in
    if (currentUser?.uid) {
      const { deleteAIPathFromFirestore } = await import('../firebase/progressService');
      await deleteAIPathFromFirestore(currentUser.uid, pathId);
      console.log('✅ AI path deleted from Firestore');
    } else {
      console.warn('⚠️ User not authenticated - cannot delete path');
    }
    
    return { success: true };
  } catch (error) {
    console.error('Error deleting AI path:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Save AI-generated lesson for potential sharing with other users
 */
export const saveAILessonForReview = async (lesson, userRating, userFeedback) => {
  // This would integrate with your Firestore to save highly-rated AI lessons
  // for potential inclusion in the main curriculum
  try {
    // Implementation would save to a collection like 'ai_lessons_for_review'
    return {
      success: true,
      message: 'Lesson saved for review. Thank you for your feedback!'
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
};

const aiLessonService = {
  generateAILesson,
  generateTopicSuggestions,
  generateLearningPathOutline,
  generatePathLesson,
  generateCompleteLearningPath,
  saveAILessonForReview,
  saveAIPathToLibrary,
  getSavedAIPaths,
  deleteAIPath
};

export default aiLessonService;