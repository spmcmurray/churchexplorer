import emailjs from '@emailjs/browser';

// EmailJS Configuration
// Option 1: Use environment variables (recommended)
// Create a .env file based on .env.example and add your credentials
// Option 2: Replace the values below directly (not recommended for security)

const EMAIL_CONFIG = {
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
};

// Email mode: 'demo' or 'production'
// In demo mode, emails are simulated (logged to console)
// In production mode, emails are actually sent via EmailJS
const EMAIL_MODE = process.env.REACT_APP_EMAIL_MODE || 'demo';

// Check if EmailJS is properly configured
const isEmailConfigured = () => {
  return (
    EMAIL_CONFIG.serviceId !== 'YOUR_SERVICE_ID' &&
    EMAIL_CONFIG.templateId !== 'YOUR_TEMPLATE_ID' &&
    EMAIL_CONFIG.publicKey !== 'YOUR_PUBLIC_KEY' &&
    EMAIL_CONFIG.serviceId &&
    EMAIL_CONFIG.templateId &&
    EMAIL_CONFIG.publicKey
  );
};

/**
 * Subscribe a user to the 8-week study guide
 * @param {string} name - User's name
 * @param {string} email - User's email address
 * @returns {Promise} - Resolves when subscription is successful
 */
export const subscribeToStudyGuide = async (name, email) => {
  try {
    // Check if we should send real emails
    const shouldSendEmail = EMAIL_MODE === 'production' && isEmailConfigured();

    if (shouldSendEmail) {
      // PRODUCTION MODE - Send actual email via EmailJS
      const templateParams = {
        to_name: name,
        to_email: email,
        from_name: 'Church Explorer Study Guide',
        reply_to: 'noreply@churchexplorer.org',
        subject: 'Welcome to Your 8-Week Church History Journey!',
        message: `Welcome to the Church Explorer 8-Week Study Guide!

You're about to embark on an exciting journey through 2,000 years of church history. Don't worry if you're new to this - we've designed this course specifically for beginners with no prior knowledge required.

Your Week 1 lesson "The Beginning: Early Christianity" will arrive next Monday at 9am.

What to Expect Each Week:
✓ Simple, jargon-free explanations of church history
✓ Thought-provoking reflection questions
✓ Practical ways to apply what you learn
✓ Interactive content to explore in our web app

In the meantime, you can preview all the lessons and explore the interactive denomination explorer here:
👉 https://www.churchexplorer.org

Questions? Just reply to this email - we're here to help!

Best regards,
The Church Explorer Team

P.S. You can unsubscribe at any time. We respect your privacy and will never share your email address.`,
      };

      const response = await emailjs.send(
        EMAIL_CONFIG.serviceId,
        EMAIL_CONFIG.templateId,
        templateParams,
        EMAIL_CONFIG.publicKey
      );

      console.log('✅ Email sent successfully via EmailJS:', response);
      return response;
    } else {
      // DEMO MODE - Simulate email sending
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('📧 Study Guide Subscription (Demo Mode)');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Status: ✅ Subscription successful (simulated)');
      console.log('');
      console.log('ℹ️  Currently in DEMO mode.');
      console.log('');
      console.log('To enable real emails:');
      console.log('1. Sign up at https://www.emailjs.com/');
      console.log('2. Copy .env.example to .env');
      console.log('3. Add your EmailJS credentials to .env');
      console.log('4. Set REACT_APP_EMAIL_MODE=production');
      console.log('5. Restart the app');
      console.log('');
      console.log('See EMAIL_SETUP_GUIDE.md for detailed instructions.');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            status: 200,
            text: 'OK (Demo Mode)',
            demo: true,
          });
        }, 1000);
      });
    }
  } catch (error) {
    console.error('❌ Subscription error:', error);
    throw new Error('Failed to subscribe. Please try again later.');
  }
};

/**
 * Get the weekly lesson email content
 * @param {number} weekNumber - Week number (1-8)
 * @param {string} name - User's name for personalization
 * @returns {object} - Email subject and body
 */
export const getWeeklyLessonEmail = (weekNumber, name) => {
  const lessons = {
    1: {
      subject: 'Week 1: The Beginning - Early Christianity',
      intro: `Hi ${name}! Welcome to Week 1 of your Church History journey.`,
    },
    2: {
      subject: 'Week 2: The Great Divide - East vs. West',
      intro: `Hi ${name}! Welcome to Week 2. This week we explore the 1054 split.`,
    },
    3: {
      subject: 'Week 3: The Reformation - A Revolution in Faith',
      intro: `Hi ${name}! Welcome to Week 3. Get ready to meet Martin Luther!`,
    },
    4: {
      subject: 'Week 4: The Middle Way - Anglicans & Methodists',
      intro: `Hi ${name}! Welcome to Week 4. Finding balance between traditions.`,
    },
    5: {
      subject: 'Week 5: Believer\'s Baptism - Baptists & Anabaptists',
      intro: `Hi ${name}! Welcome to Week 5. Exploring radical reformation.`,
    },
    6: {
      subject: 'Week 6: The Spirit Moves - Pentecostals & Holiness',
      intro: `Hi ${name}! Welcome to Week 6. Revival and spiritual transformation.`,
    },
    7: {
      subject: 'Week 7: Back to Basics - Restorationists & Non-Denominational',
      intro: `Hi ${name}! Welcome to Week 7. Simplifying Christianity.`,
    },
    8: {
      subject: 'Week 8: Your Journey - Understanding & Choosing',
      intro: `Hi ${name}! Welcome to your final week. Putting it all together.`,
    },
  };

  return lessons[weekNumber] || lessons[1];
};

// Instructions for setting up EmailJS
export const SETUP_INSTRUCTIONS = `
=== EmailJS Setup Instructions ===

To enable email functionality for the Study Guide:

1. Sign up for a free account at https://www.emailjs.com/

2. Create an Email Service:
   - Go to Email Services
   - Add a new service (Gmail, Outlook, etc.)
   - Note your SERVICE_ID

3. Create an Email Template:
   - Go to Email Templates
   - Create a new template with these parameters:
     * to_email: {{to_email}}
     * to_name: {{to_name}}
     * from_name: {{from_name}}
     * message: {{message}}
   - Note your TEMPLATE_ID

4. Get your Public Key:
   - Go to Account > General
   - Copy your Public Key

5. Update emailService.js:
   - Replace 'YOUR_SERVICE_ID' with your actual Service ID
   - Replace 'YOUR_TEMPLATE_ID' with your actual Template ID
   - Replace 'YOUR_PUBLIC_KEY' with your actual Public Key

6. Uncomment the production code in subscribeToStudyGuide()

7. Set up automated weekly emails:
   - Use a service like Zapier, Make.com, or n8n to schedule weekly emails
   - Or implement a backend service to handle weekly email sending
   - Store subscriptions in a database for tracking

For a full backend solution, consider:
- Netlify Functions + Supabase
- Vercel Functions + Firebase
- AWS Lambda + DynamoDB
- Custom Node.js backend with cron jobs

========================================
`;

console.log(SETUP_INSTRUCTIONS);
