# Email Setup Guide for Study Guide Feature

This guide will help you set up automated weekly emails for the 8-Week Study Guide.

## Quick Start (5 minutes)

### Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" (free tier includes 200 emails/month)
3. Verify your email address

### Step 2: Add Email Service

1. In EmailJS dashboard, click "Email Services"
2. Click "Add New Service"
3. Choose your email provider:
   - **Gmail** (recommended for testing)
   - Outlook
   - Yahoo
   - Or use a custom SMTP server
4. Follow the connection wizard
5. **Save your Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template

1. Click "Email Templates" in dashboard
2. Click "Create New Template"
3. Copy and paste the template below:

```
Subject: {{subject}}

Hi {{to_name}},

{{message}}

---

Explore the interactive content:
{{app_link}}

Questions? Just reply to this email.

Best regards,
Church Explorer Team
```

4. **Template Settings:**
   - Template Name: `study_guide_weekly`
   - From Name: `Church Explorer`
   - From Email: Your verified email
   - Reply To: Your support email

5. **Save your Template ID** (e.g., `template_xyz789`)

### Step 4: Get Public Key

1. Go to "Account" > "General"
2. Find "Public Key" section
3. **Copy your Public Key** (e.g., `user_AbC123XyZ`)

### Step 5: Configure Your App

1. Open `churchexplorer/src/emailService.js`
2. Find the `EMAIL_CONFIG` object (around line 8)
3. Replace the placeholder values:

```javascript
const EMAIL_CONFIG = {
  serviceId: 'service_abc123',      // Your Service ID from Step 2
  templateId: 'template_xyz789',    // Your Template ID from Step 3
  publicKey: 'user_AbC123XyZ',      // Your Public Key from Step 4
};
```

4. Find the `subscribeToStudyGuide` function (around line 25)
5. **Uncomment the production code** (remove `/*` and `*/` around the emailjs.send block)
6. **Comment out or delete the demo code** (the setTimeout simulation)

### Step 6: Test It!

1. Run your app locally:
   ```bash
   cd churchexplorer
   npm start
   ```

2. Navigate to the Study Guide tab
3. Enter your own email and name
4. Click "Start My Free 8-Week Journey"
5. Check your inbox for the welcome email!

---

## ⚠️ Important Limitations of EmailJS

EmailJS is great for sending the **welcome email immediately**, but it **CANNOT automatically send weekly emails**.

For automated weekly delivery, you'll need one of the backend solutions below.

---

## Production Setup for Weekly Emails

### Option 1: Netlify + Supabase (Recommended)

**Why:** Free tier, easy setup, serverless functions

**Architecture:**
- Frontend: Your React app on Netlify
- Database: Supabase (stores subscriptions)
- Email Scheduler: Netlify scheduled functions
- Email Service: SendGrid or EmailJS

**Setup Steps:**

1. **Deploy to Netlify:**
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli

   # Login
   netlify login

   # Deploy
   netlify deploy --prod
   ```

2. **Create Supabase Project:**
   - Sign up at [https://supabase.com/](https://supabase.com/)
   - Create new project
   - Create `subscriptions` table:
   ```sql
   CREATE TABLE subscriptions (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     name TEXT NOT NULL,
     email TEXT NOT NULL UNIQUE,
     created_at TIMESTAMP DEFAULT NOW(),
     current_week INTEGER DEFAULT 1,
     last_email_sent TIMESTAMP,
     unsubscribed BOOLEAN DEFAULT FALSE
   );
   ```

3. **Create Netlify Function for Subscription:**

   Create `netlify/functions/subscribe.js`:
   ```javascript
   const { createClient } = require('@supabase/supabase-js');

   exports.handler = async (event) => {
     const { name, email } = JSON.parse(event.body);

     const supabase = createClient(
       process.env.SUPABASE_URL,
       process.env.SUPABASE_KEY
     );

     const { data, error } = await supabase
       .from('subscriptions')
       .insert([{ name, email }]);

     if (error) return { statusCode: 400, body: JSON.stringify(error) };
     return { statusCode: 200, body: JSON.stringify({ success: true }) };
   };
   ```

4. **Create Netlify Scheduled Function for Weekly Emails:**

   Create `netlify/functions/send-weekly-emails.js`:
   ```javascript
   // This runs weekly via Netlify scheduled functions
   const { schedule } = require('@netlify/functions');
   const { createClient } = require('@supabase/supabase-js');

   const handler = async () => {
     const supabase = createClient(
       process.env.SUPABASE_URL,
       process.env.SUPABASE_KEY
     );

     // Get all active subscriptions
     const { data: subscriptions } = await supabase
       .from('subscriptions')
       .select('*')
       .eq('unsubscribed', false)
       .lte('current_week', 8);

     // Send emails to each subscriber
     for (const sub of subscriptions) {
       await sendWeeklyEmail(sub);

       // Update subscriber
       await supabase
         .from('subscriptions')
         .update({
           current_week: sub.current_week + 1,
           last_email_sent: new Date()
         })
         .eq('id', sub.id);
     }

     return { statusCode: 200 };
   };

   // Schedule to run every Monday at 9am
   exports.handler = schedule('0 9 * * 1', handler);
   ```

5. **Add Environment Variables in Netlify:**
   - Go to Site Settings > Environment Variables
   - Add:
     - `SUPABASE_URL`
     - `SUPABASE_KEY`
     - `SENDGRID_API_KEY` (or EmailJS credentials)

### Option 2: Vercel + Firebase

**Setup Steps:**

1. Deploy to Vercel
2. Create Firebase project
3. Set up Firestore for subscriptions
4. Use Vercel Cron Jobs for scheduling
5. Use Firebase Functions or Vercel API routes

### Option 3: AWS Lambda + DynamoDB

**Best for:** High volume, full control

**Components:**
- Frontend: S3 + CloudFront
- Database: DynamoDB
- Scheduler: EventBridge (CloudWatch Events)
- Email: SES
- Functions: Lambda

### Option 4: Custom Node.js Backend

**Setup:**
1. Create Express.js server
2. Use PostgreSQL or MongoDB for database
3. Use node-cron for scheduling
4. Deploy to Heroku, DigitalOcean, or Railway

---

## Email Content for All 8 Weeks

The email content is already included in your app at `churchexplorer/src/StudyGuide.jsx` in the `curriculum` array. Each week includes:

- Title and subtitle
- Introduction
- Key topics
- Beginner explanation
- Reflection questions
- Practical application
- App links

When building your backend, you can either:
1. Copy this data to your backend
2. Import it from the frontend file
3. Store it in your database

---

## Email Templates

### Welcome Email (Sent Immediately)

**Subject:** Welcome to Your 8-Week Church History Journey!

**Body:**
```
Hi {{name}},

Welcome to the Church Explorer 8-Week Study Guide! 🎉

You're about to embark on an exciting journey through 2,000 years of church history. Don't worry if you're new to this - we've designed this course specifically for beginners with no prior knowledge required.

What to Expect:
✓ One email per week for the next 8 weeks
✓ Simple, jargon-free explanations
✓ Thought-provoking reflection questions
✓ Practical ways to apply what you learn
✓ Interactive content in our web app

Your Week 1 lesson "The Beginning: Early Christianity" will arrive this Monday at 9am.

In the meantime, explore the full curriculum here:
https://www.churchexplorer.org

Questions? Just reply to this email - we're here to help!

Best regards,
The Church Explorer Team

P.S. You can unsubscribe at any time using the link at the bottom of any email.
```

### Weekly Email Template

**Subject:** Week {{week_number}}: {{title}}

**Body:**
```
Hi {{name}},

Welcome to Week {{week_number}} of your Church History journey!

━━━━━━━━━━━━━━━━━━━━━━━━━━━

📖 This Week: {{title}}
{{subtitle}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━

{{introduction}}

KEY TOPICS THIS WEEK:
{{key_topics_list}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 SIMPLE EXPLANATION

{{beginner_explanation}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━

🤔 QUESTIONS TO CONSIDER

{{reflection_questions_list}}

Take a few minutes to think about these. You might even want to journal your thoughts!

━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ THIS WEEK'S PRACTICE

{{practical_application}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔍 EXPLORE IN THE APP

{{app_links_list}}

Visit: https://www.churchexplorer.org

━━━━━━━━━━━━━━━━━━━━━━━━━━━

See you next week for Week {{next_week_number}}!

Best regards,
The Church Explorer Team

━━━━━━━━━━━━━━━━━━━━━━━━━━━
Unsubscribe | Update Preferences
```

---

## Tracking & Analytics

Consider adding:

1. **Email Open Tracking:** Most email services provide this
2. **Click Tracking:** Track which links users click
3. **Completion Rate:** How many finish all 8 weeks
4. **Drop-off Analysis:** Which weeks have highest unsubscribe rates

---

## Legal Considerations

1. **CAN-SPAM Compliance:**
   - Include physical mailing address
   - Honor unsubscribe requests within 10 days
   - Don't use misleading subject lines

2. **GDPR Compliance (if serving EU users):**
   - Get explicit consent
   - Allow data export/deletion
   - Include privacy policy

3. **Privacy Policy:**
   - Explain what data you collect
   - How you use email addresses
   - How users can unsubscribe

---

## Testing Checklist

Before going live:

- [ ] Test welcome email sends immediately
- [ ] Verify all links work
- [ ] Check email formatting on mobile devices
- [ ] Test unsubscribe functionality
- [ ] Verify weekly emails send on schedule
- [ ] Check spam folder placement
- [ ] Test with multiple email providers (Gmail, Outlook, Yahoo)
- [ ] Confirm database is storing subscriptions
- [ ] Test error handling (invalid emails, duplicates)
- [ ] Verify email content renders properly

---

## Support

If you need help:
1. Check EmailJS documentation: https://www.emailjs.com/docs/
2. Review Netlify Functions docs: https://docs.netlify.com/functions/overview/
3. Consult Supabase guides: https://supabase.com/docs

---

## Quick Reference

**EmailJS Free Tier:** 200 emails/month
**SendGrid Free Tier:** 100 emails/day
**Mailgun Free Tier:** 5,000 emails/month (first 3 months)
**AWS SES:** $0.10 per 1,000 emails

**Recommended Stack for Small Scale (<1000 subscribers):**
- Frontend: GitHub Pages (free)
- Backend: Netlify Functions (free tier)
- Database: Supabase (free tier)
- Email: SendGrid (free tier)

**Total Cost:** $0/month for up to ~400 subscribers

---

Good luck with your study guide! 🎓
