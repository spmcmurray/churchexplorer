import React, { useState } from 'react';
import { Shield, FileText, Cookie, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

export default function Legal() {
  const [activeSection, setActiveSection] = useState('terms');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Legal Information</h1>
          <p className="text-slate-600">Our commitment to transparency and user protection</p>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 mb-6 overflow-hidden">
          <div className="flex border-b border-slate-200">
            <button
              onClick={() => setActiveSection('terms')}
              className={`flex-1 px-6 py-4 font-medium transition ${
                activeSection === 'terms'
                  ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <FileText className="w-4 h-4" />
                <span>Terms of Service</span>
              </div>
            </button>
            <button
              onClick={() => setActiveSection('privacy')}
              className={`flex-1 px-6 py-4 font-medium transition ${
                activeSection === 'privacy'
                  ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>Privacy Policy</span>
              </div>
            </button>
            <button
              onClick={() => setActiveSection('cookies')}
              className={`flex-1 px-6 py-4 font-medium transition ${
                activeSection === 'cookies'
                  ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <Cookie className="w-4 h-4" />
                <span>Cookie Policy</span>
              </div>
            </button>
          </div>

          {/* Terms of Service */}
          {activeSection === 'terms' && <TermsOfService />}

          {/* Privacy Policy */}
          {activeSection === 'privacy' && <PrivacyPolicy />}

          {/* Cookie Policy */}
          {activeSection === 'cookies' && <CookiePolicy />}
        </div>
      </div>
    </div>
  );
}

function TermsOfService() {
  return (
    <div className="p-8 prose prose-slate max-w-none">
      <div className="text-sm text-slate-500 mb-6">Last Updated: November 3, 2025</div>
      
      <h2 className="text-2xl font-bold text-slate-900 mb-4">Terms of Service</h2>
      
      <p className="text-slate-700 mb-4">
        Welcome to Church Explorer. By accessing or using our service, you agree to be bound by these Terms of Service ("Terms"). 
        Please read them carefully.
      </p>

      <Section title="1. Acceptance of Terms">
        <p>
          By creating an account or using Church Explorer, you accept and agree to be bound by these Terms and our Privacy Policy. 
          If you do not agree to these Terms, you may not use our services.
        </p>
      </Section>

      <Section title="2. Description of Service">
        <p>
          Church Explorer is an educational platform providing:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Curated lessons on Bible History, Church History, and Christian Apologetics</li>
          <li>AI-generated personalized learning paths (for paid subscribers)</li>
          <li>Progress tracking and gamification features</li>
          <li>Denomination exploration tools</li>
          <li>Community leaderboards</li>
        </ul>
      </Section>

      <Section title="3. User Accounts">
        <h4 className="font-semibold mb-2">3.1 Account Creation</h4>
        <p className="mb-3">
          You must provide accurate, complete, and current information during registration. You are responsible for 
          maintaining the confidentiality of your account credentials.
        </p>
        
        <h4 className="font-semibold mb-2">3.2 Age Requirements</h4>
        <p className="mb-3">
          You must be at least 13 years old to use Church Explorer. Users under 18 should obtain parental consent 
          before creating an account.
        </p>
        
        <h4 className="font-semibold mb-2">3.3 Account Security</h4>
        <p>
          You are responsible for all activities that occur under your account. Notify us immediately of any 
          unauthorized use of your account.
        </p>
      </Section>

      <Section title="4. Subscription and Payment">
        <h4 className="font-semibold mb-2">4.1 Subscription Tiers</h4>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Free:</strong> Access to all curated lessons</li>
          <li><strong>Basic ($4.99/month):</strong> 1 AI-generated lesson per month + curated content</li>
          <li><strong>Premium ($9.99/month):</strong> Unlimited AI lessons + all features</li>
        </ul>

        <h4 className="font-semibold mb-2">4.2 Billing</h4>
        <p className="mb-3">
          Subscriptions are billed monthly or annually in advance. Payments are processed securely through Stripe. 
          You authorize us to charge your payment method on a recurring basis.
        </p>

        <h4 className="font-semibold mb-2">4.3 Cancellation</h4>
        <p className="mb-3">
          You may cancel your subscription at any time through your profile settings. Cancellations take effect at 
          the end of the current billing period. No refunds for partial months.
        </p>

        <h4 className="font-semibold mb-2">4.4 Price Changes</h4>
        <p>
          We reserve the right to change subscription prices with 30 days' notice. Continued use after price changes 
          constitutes acceptance of new pricing.
        </p>
      </Section>

      <Section title="5. User Content and AI-Generated Content">
        <h4 className="font-semibold mb-2">5.1 AI-Generated Lessons</h4>
        <p className="mb-3">
          AI-generated content is provided for educational purposes. While we strive for theological accuracy, 
          AI-generated content should not replace formal theological study or pastoral guidance.
        </p>

        <h4 className="font-semibold mb-2">5.2 Content Accuracy</h4>
        <p className="mb-3">
          We make reasonable efforts to ensure content accuracy but do not guarantee that all content is error-free 
          or theologically complete. Users should verify important theological questions with qualified sources.
        </p>

        <h4 className="font-semibold mb-2">5.3 Prohibited Use</h4>
        <p>You may not use Church Explorer to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Generate content promoting heresy or false doctrine</li>
          <li>Harass, abuse, or harm others</li>
          <li>Violate any laws or regulations</li>
          <li>Infringe on intellectual property rights</li>
          <li>Attempt to circumvent usage limits or security measures</li>
        </ul>
      </Section>

      <Section title="6. Intellectual Property">
        <h4 className="font-semibold mb-2">6.1 Our Content</h4>
        <p className="mb-3">
          All curated lessons, design elements, and platform features are owned by Church Explorer or our licensors. 
          You may not copy, modify, or distribute our content without permission.
        </p>

        <h4 className="font-semibold mb-2">6.2 User Rights to AI Content</h4>
        <p>
          You retain rights to AI-generated lessons created with your account for personal, non-commercial use. 
          You may not resell or redistribute AI-generated content.
        </p>
      </Section>

      <Section title="7. Disclaimers">
        <p className="mb-3">
          <strong>THEOLOGICAL DISCLAIMER:</strong> Church Explorer provides educational content from various Christian 
          traditions. Content does not constitute pastoral advice, theological counseling, or official church doctrine. 
          Consult qualified religious leaders for spiritual guidance.
        </p>
        
        <p className="mb-3">
          <strong>SERVICE PROVIDED "AS IS":</strong> We provide Church Explorer "as is" without warranties of any kind, 
          express or implied, including but not limited to merchantability, fitness for a particular purpose, or 
          non-infringement.
        </p>

        <p>
          <strong>NO GUARANTEE OF AVAILABILITY:</strong> We do not guarantee uninterrupted or error-free service. 
          We may modify, suspend, or discontinue features at any time.
        </p>
      </Section>

      <Section title="8. Limitation of Liability">
        <p>
          To the maximum extent permitted by law, Church Explorer and its operators shall not be liable for any 
          indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, 
          whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
        </p>
      </Section>

      <Section title="9. Indemnification">
        <p>
          You agree to indemnify and hold harmless Church Explorer from any claims, damages, losses, liabilities, 
          and expenses arising from your use of the service or violation of these Terms.
        </p>
      </Section>

      <Section title="10. Termination">
        <p>
          We reserve the right to suspend or terminate your account at any time for violation of these Terms, 
          fraudulent activity, or other harmful conduct. Upon termination, your right to use the service ceases immediately.
        </p>
      </Section>

      <Section title="11. Governing Law">
        <p>
          These Terms are governed by the laws of [Your Jurisdiction], without regard to conflict of law principles. 
          Any disputes shall be resolved in the courts of [Your Jurisdiction].
        </p>
      </Section>

      <Section title="12. Changes to Terms">
        <p>
          We may update these Terms from time to time. We will notify users of material changes via email or 
          in-app notification. Continued use after changes constitutes acceptance of modified Terms.
        </p>
      </Section>

      <Section title="13. Contact Information">
        <p>
          For questions about these Terms, contact us at:
        </p>
        <ul className="list-none pl-0 mb-4">
          <li>Email: scottymcmurray@gmail.com</li>
          <li>Website: www.churchexplorer.org</li>
        </ul>
      </Section>

      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-900">
          <strong>By using Church Explorer, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</strong>
        </p>
      </div>
    </div>
  );
}

function PrivacyPolicy() {
  return (
    <div className="p-8 prose prose-slate max-w-none">
      <div className="text-sm text-slate-500 mb-6">Last Updated: November 3, 2025</div>
      
      <h2 className="text-2xl font-bold text-slate-900 mb-4">Privacy Policy</h2>
      
      <p className="text-slate-700 mb-4">
        Church Explorer ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains 
        how we collect, use, disclose, and safeguard your information when you use our service.
      </p>

      <Section title="1. Information We Collect">
        <h4 className="font-semibold mb-2">1.1 Information You Provide</h4>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Account Information:</strong> Name, email address, password, country</li>
          <li><strong>Payment Information:</strong> Processed securely by Stripe (we do not store credit card numbers)</li>
          <li><strong>Profile Information:</strong> Display name, preferences, email notification settings</li>
        </ul>

        <h4 className="font-semibold mb-2">1.2 Information Automatically Collected</h4>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Usage Data:</strong> Lessons completed, XP earned, streaks, time spent on lessons</li>
          <li><strong>AI Lesson Data:</strong> Topics requested, lessons generated, completion status</li>
          <li><strong>Device Information:</strong> Browser type, operating system, IP address (via Firebase)</li>
          <li><strong>Authentication Data:</strong> Login times, authentication method (via Firebase Auth)</li>
        </ul>

        <h4 className="font-semibold mb-2">1.3 Information from Third Parties</h4>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Firebase/Google:</strong> Authentication and hosting services</li>
          <li><strong>Stripe:</strong> Payment processing (they have their own privacy policy)</li>
          <li><strong>OpenAI:</strong> AI lesson generation (anonymized requests)</li>
        </ul>
      </Section>

      <Section title="2. How We Use Your Information">
        <p>We use collected information for:</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Service Delivery:</strong> Provide and maintain Church Explorer features</li>
          <li><strong>Personalization:</strong> Track progress, maintain streaks, generate AI lessons tailored to your interests</li>
          <li><strong>Communication:</strong> Send lesson reminders, achievement notifications, product updates (with your consent)</li>
          <li><strong>Payment Processing:</strong> Manage subscriptions and billing</li>
          <li><strong>Analytics:</strong> Understand usage patterns to improve the service</li>
          <li><strong>Security:</strong> Detect fraud, prevent abuse, protect user accounts</li>
          <li><strong>Legal Compliance:</strong> Comply with applicable laws and regulations</li>
        </ul>
      </Section>

      <Section title="3. How We Share Your Information">
        <p className="mb-3">We do not sell your personal information. We may share information with:</p>

        <h4 className="font-semibold mb-2">3.1 Service Providers</h4>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Firebase/Google Cloud:</strong> Database, authentication, hosting</li>
          <li><strong>Stripe:</strong> Payment processing</li>
          <li><strong>OpenAI:</strong> AI lesson generation (requests are anonymized)</li>
        </ul>

        <h4 className="font-semibold mb-2">3.2 Legal Requirements</h4>
        <p className="mb-3">
          We may disclose information if required by law, court order, or to protect our rights or safety of users.
        </p>

        <h4 className="font-semibold mb-2">3.3 Business Transfers</h4>
        <p>
          In the event of a merger, acquisition, or sale of assets, user information may be transferred to the 
          acquiring entity.
        </p>
      </Section>

      <Section title="4. Data Storage and Security">
        <h4 className="font-semibold mb-2">4.1 Where We Store Data</h4>
        <p className="mb-3">
          Your data is stored on Firebase/Google Cloud servers, which may be located in various countries. 
          By using our service, you consent to this transfer.
        </p>

        <h4 className="font-semibold mb-2">4.2 Security Measures</h4>
        <ul className="list-disc pl-6 mb-4">
          <li>Encryption in transit (HTTPS/TLS)</li>
          <li>Encryption at rest (Firebase encryption)</li>
          <li>Secure authentication (Firebase Auth with password hashing)</li>
          <li>Regular security audits and updates</li>
        </ul>

        <h4 className="font-semibold mb-2">4.3 Data Retention</h4>
        <p>
          We retain your information for as long as your account is active or as needed to provide services. 
          Upon account deletion, we delete your data within 30 days, except where retention is required by law.
        </p>
      </Section>

      <Section title="5. Your Privacy Rights">
        <h4 className="font-semibold mb-2">5.1 GDPR Rights (EU Users)</h4>
        <p>If you are in the European Union, you have the right to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Access:</strong> Request a copy of your personal data</li>
          <li><strong>Rectification:</strong> Correct inaccurate information</li>
          <li><strong>Erasure:</strong> Request deletion of your data ("right to be forgotten")</li>
          <li><strong>Data Portability:</strong> Receive your data in a structured format</li>
          <li><strong>Restriction:</strong> Limit how we process your data</li>
          <li><strong>Objection:</strong> Object to certain types of processing</li>
          <li><strong>Withdraw Consent:</strong> Withdraw consent for email communications</li>
        </ul>

        <h4 className="font-semibold mb-2">5.2 CCPA Rights (California Users)</h4>
        <p>If you are a California resident, you have the right to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Know what personal information we collect and how it's used</li>
          <li>Request deletion of your personal information</li>
          <li>Opt-out of the sale of personal information (we don't sell data)</li>
          <li>Non-discrimination for exercising your rights</li>
        </ul>

        <h4 className="font-semibold mb-2">5.3 How to Exercise Your Rights</h4>
        <p>To exercise these rights:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Visit your Profile page to update information or delete your account</li>
          <li>Contact us at privacy@churchexplorer.org for data access or portability requests</li>
          <li>Use preference toggles in your profile to manage email communications</li>
        </ul>
      </Section>

      <Section title="6. Cookies and Tracking">
        <p>
          We use Firebase Authentication, which uses cookies for session management. See our Cookie Policy for 
          full details. We do not use third-party advertising cookies or tracking pixels.
        </p>
      </Section>

      <Section title="7. Children's Privacy">
        <p className="mb-3">
          Church Explorer is not directed to children under 13. We do not knowingly collect information from 
          children under 13. If you believe a child has provided us with information, contact us immediately.
        </p>
        <p>
          Users aged 13-17 should obtain parental consent before using our service.
        </p>
      </Section>

      <Section title="8. International Users">
        <p>
          Church Explorer is operated from the United States. If you are located outside the US, your information 
          will be transferred to and processed in the US. By using our service, you consent to this transfer.
        </p>
      </Section>

      <Section title="9. Third-Party Links">
        <p>
          Our service may contain links to third-party websites or resources. We are not responsible for the 
          privacy practices of these third parties. Please review their privacy policies.
        </p>
      </Section>

      <Section title="10. Changes to Privacy Policy">
        <p>
          We may update this Privacy Policy periodically. We will notify you of material changes via email or 
          in-app notification. Your continued use after changes constitutes acceptance.
        </p>
      </Section>

      <Section title="11. Contact Us">
        <p>For privacy-related questions or to exercise your rights:</p>
        <ul className="list-none pl-0 mb-4">
          <li>Email: scottymcmurray@gmail.com</li>
          <li>Website: www.churchexplorer.org/legal</li>
        </ul>
      </Section>

      <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
        <p className="text-sm text-green-900">
          <strong>Your privacy matters to us.</strong> We are committed to protecting your personal information and being 
          transparent about our data practices. If you have any concerns, please don't hesitate to contact us.
        </p>
      </div>
    </div>
  );
}

function CookiePolicy() {
  return (
    <div className="p-8 prose prose-slate max-w-none">
      <div className="text-sm text-slate-500 mb-6">Last Updated: November 3, 2025</div>
      
      <h2 className="text-2xl font-bold text-slate-900 mb-4">Cookie Policy</h2>
      
      <p className="text-slate-700 mb-4">
        This Cookie Policy explains how Church Explorer uses cookies and similar technologies to recognize you when 
        you visit our service.
      </p>

      <Section title="1. What Are Cookies?">
        <p>
          Cookies are small text files stored on your device when you visit a website. They help websites remember 
          information about your visit, such as your preferences and login status.
        </p>
      </Section>

      <Section title="2. How We Use Cookies">
        <h4 className="font-semibold mb-2">2.1 Essential Cookies</h4>
        <p className="mb-3">These cookies are necessary for the service to function:</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Authentication Cookies (Firebase Auth):</strong> Keep you logged in between sessions</li>
          <li><strong>Session Cookies:</strong> Maintain your session state while using the app</li>
          <li><strong>Security Cookies:</strong> Protect against cross-site request forgery (CSRF)</li>
        </ul>
        <p className="mb-3 text-sm text-slate-600">
          <em>These cookies are essential and cannot be disabled without affecting functionality.</em>
        </p>

        <h4 className="font-semibold mb-2">2.2 Functional Cookies</h4>
        <p className="mb-3">These cookies enhance functionality:</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
          <li><strong>Progress Cookies:</strong> Temporarily store lesson progress before syncing to database</li>
        </ul>

        <h4 className="font-semibold mb-2">2.3 Analytics Cookies</h4>
        <p className="mb-3">We use analytics cookies to improve our service:</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Firebase Analytics:</strong> Used to understand which pages and features users find most helpful</li>
          <li><strong>Usage Tracking:</strong> Help us identify popular content and improve user experience</li>
        </ul>

        <h4 className="font-semibold mb-2">2.4 Cookies We Do NOT Use</h4>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>❌ Advertising Cookies:</strong> We do not serve ads or use advertising cookies</li>
          <li><strong>❌ Third-Party Tracking:</strong> We do not share data with advertising networks</li>
          <li><strong>❌ Social Media Cookies:</strong> We do not embed social media trackers</li>
        </ul>
      </Section>

      <Section title="3. Third-Party Cookies">
        <p className="mb-3">We use the following third-party services that may set cookies:</p>

        <h4 className="font-semibold mb-2">3.1 Firebase (Google)</h4>
        <p className="mb-3">
          Firebase Authentication sets cookies to manage your login session. These are essential for authentication.
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Cookie names: __session, firebase-auth-token</li>
          <li>Purpose: Authentication and session management</li>
          <li>Duration: Session or persistent (up to 30 days)</li>
          <li><a href="https://firebase.google.com/support/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Firebase Privacy Policy</a></li>
        </ul>

        <p className="mb-3">
          <strong>Firebase Analytics:</strong> We use Firebase Analytics to understand user behavior and improve the service.
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Cookie names: _ga, _gid, _gat (Google Analytics via Firebase)</li>
          <li>Purpose: Analyze page views, user engagement, and feature usage</li>
          <li>Duration: 2 years (_ga), 24 hours (_gid), 1 minute (_gat)</li>
          <li>You can opt-out through browser settings or Google Analytics opt-out tools</li>
        </ul>

        <h4 className="font-semibold mb-2">3.2 Stripe</h4>
        <p className="mb-3">
          Stripe may set cookies during payment processing to prevent fraud.
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Cookie names: __stripe_mid, __stripe_sid</li>
          <li>Purpose: Fraud prevention and payment processing</li>
          <li>Duration: Session or 1 year</li>
          <li><a href="https://stripe.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Stripe Privacy Policy</a></li>
        </ul>
      </Section>

      <Section title="4. Local Storage">
        <p className="mb-3">
          In addition to cookies, we may use browser local storage for:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Caching lesson content for offline access</li>
          <li>Storing user preferences (theme, notification settings)</li>
          <li>Temporarily storing draft AI lesson requests</li>
        </ul>
        <p className="text-sm text-slate-600">
          <em>Note: Based on our code audit, we currently do NOT use localStorage for persistent data. All user data 
          is stored in Firestore.</em>
        </p>
      </Section>

      <Section title="5. Managing Cookies">
        <h4 className="font-semibold mb-2">5.1 Browser Settings</h4>
        <p className="mb-3">
          You can control cookies through your browser settings:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
          <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
          <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
          <li><strong>Edge:</strong> Settings → Cookies and site permissions</li>
        </ul>

        <h4 className="font-semibold mb-2">5.2 Impact of Disabling Cookies</h4>
        <p>
          If you disable essential cookies, you will not be able to:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Stay logged in between sessions</li>
          <li>Save your progress</li>
          <li>Use subscription features</li>
          <li>Access personalized content</li>
        </ul>
      </Section>

      <Section title="6. Do Not Track">
        <p>
          Some browsers include a "Do Not Track" (DNT) feature. We respect user privacy preferences. 
          You can disable analytics cookies through your browser settings or use Google's opt-out tools.
        </p>
      </Section>

      <Section title="7. Updates to Cookie Policy">
        <p>
          We may update this Cookie Policy to reflect changes in technology or regulations. Check this page 
          periodically for updates.
        </p>
      </Section>

      <Section title="8. Contact Us">
        <p>
          If you have questions about our use of cookies:
        </p>
        <ul className="list-none pl-0 mb-4">
          <li>Email: scottymcmurray@gmail.com</li>
          <li>Website: www.churchexplorer.org/legal</li>
        </ul>
      </Section>

      <div className="mt-8 p-4 bg-purple-50 border border-purple-200 rounded-lg">
        <p className="text-sm text-purple-900">
          <strong>Privacy-First Approach:</strong> We use Firebase Analytics to improve our service based on how users 
          interact with content. We do not use advertising cookies or share data with advertising networks. 
          You can opt-out of analytics through your browser settings.
        </p>
      </div>
    </div>
  );
}

// Collapsible Section Component
function Section({ title, children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-6 border-b border-slate-200 pb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left mb-3 hover:text-blue-600 transition"
      >
        <h3 className="text-lg font-bold text-slate-900">{title}</h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-slate-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-400" />
        )}
      </button>
      {isOpen && <div className="text-slate-700">{children}</div>}
    </div>
  );
}
