// eslint-disable-next-line no-unused-vars
import emailjs from '@emailjs/browser';

// EmailJS Configuration
// IMPORTANT: Replace these with your actual EmailJS credentials
// Sign up at https://www.emailjs.com/ to get your keys
// eslint-disable-next-line no-unused-vars
const EMAIL_CONFIG = {
  serviceId: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
  templateId: 'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
  publicKey: 'YOUR_PUBLIC_KEY', // Replace with your EmailJS public key
};

/**
 * Subscribe a user to the 8-week study guide
 * @param {string} name - User's name
 * @param {string} email - User's email address
 * @returns {Promise} - Resolves when subscription is successful
 */
export const subscribeToStudyGuide = async (name, email) => {
  try {
    // For development/demo purposes, we'll simulate the subscription
    // In production, uncomment the EmailJS code below

    // PRODUCTION CODE (uncomment when EmailJS is configured):
    /*
    const templateParams = {
      to_name: name,
      to_email: email,
      from_name: 'Church Explorer Study Guide',
      reply_to: 'noreply@churchexplorer.com',
      message: `Welcome to the 8-Week Church History Study Guide!

Your journey begins this week with Lesson 1: The Beginning - Early Christianity.

Each week for the next 8 weeks, you'll receive:
- Beginner-friendly explanations of church history
- Reflection questions to deepen your understanding
- Practical applications to connect history with your life today
- Links to explore denominations in detail

We're excited to have you on this journey!

Best regards,
The Church Explorer Team`,
    };

    const response = await emailjs.send(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.templateId,
      templateParams,
      EMAIL_CONFIG.publicKey
    );

    console.log('Email sent successfully:', response);
    return response;
    */

    // DEMO/DEVELOPMENT MODE
    console.log('Study Guide Subscription (Demo Mode):');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Status: Subscription successful (simulated)');
    console.log('\nIn production, this will:');
    console.log('1. Send a welcome email immediately');
    console.log('2. Schedule 8 weekly emails with lessons');
    console.log('3. Store the subscription in your database');

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          status: 200,
          text: 'OK (Demo Mode)',
          demo: true,
        });
      }, 1000);
    });
  } catch (error) {
    console.error('Subscription error:', error);
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
