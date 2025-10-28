# Church Explorer

An interactive web application for exploring church history and denominational diversity.

## Features

### 🔍 Interactive Denomination Explorer
- Explore 12 major Christian denominations with detailed histories
- Interactive timeline showing denominational branching
- Comprehensive information on beliefs, key figures, and geographic distribution
- Bible canonization timeline
- Worship experience guides for first-time visitors

### 📚 8-Week Study Guide (NEW!)
An approachable learning path for people with little to no academic understanding of church history.

**What's Included:**
- 8 weeks of beginner-friendly lessons delivered via email
- Weekly content covering all major Christian traditions
- Simple explanations without academic jargon
- Reflection questions for deeper understanding
- Practical applications connecting history to modern life
- Interactive content linked to the main explorer

**Curriculum Overview:**
1. Week 1: The Beginning - Early Christianity
2. Week 2: The Great Divide - East vs. West (1054 Split)
3. Week 3: The Reformation - Martin Luther & Protestant Movement
4. Week 4: The Middle Way - Anglicans & Methodists
5. Week 5: Believer's Baptism - Baptists & Anabaptists
6. Week 6: The Spirit Moves - Pentecostals & Holiness Churches
7. Week 7: Back to Basics - Restorationists & Non-Denominational
8. Week 8: Your Journey - Understanding & Choosing

## Getting Started

### Prerequisites
- Node.js 14+
- npm or yarn

### Installation

```bash
cd churchexplorer
npm install
```

### Running Locally

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Building for Production

```bash
npm run build
```

### Deploying to GitHub Pages

```bash
npm run deploy
```

## Setting Up Email Functionality

The study guide currently runs in demo mode. To enable actual email delivery:

### Option 1: EmailJS (Easiest - No Backend Required)

1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with these parameters:
   - `{{to_email}}` - Recipient email
   - `{{to_name}}` - Recipient name
   - `{{from_name}}` - Sender name
   - `{{message}}` - Email body content
4. Get your Service ID, Template ID, and Public Key
5. Update `src/emailService.js` with your credentials
6. Uncomment the production code in `subscribeToStudyGuide()`

**Note:** EmailJS sends the welcome email but doesn't handle weekly scheduling. For automated weekly emails, see options below.

### Option 2: Full Backend Solution (Recommended for Production)

For automated weekly email delivery, you'll need:

1. **Backend Service** to store subscriptions and schedule emails:
   - Netlify Functions + Supabase
   - Vercel Functions + Firebase
   - AWS Lambda + DynamoDB
   - Custom Node.js server with cron jobs

2. **Email Service**:
   - SendGrid
   - Mailgun
   - AWS SES
   - Postmark

3. **Database** to track subscriptions and delivery status

See `src/emailService.js` for detailed setup instructions.

## Technology Stack

- **Frontend:** React 19.2.0
- **Styling:** Tailwind CSS 3.3.3
- **Icons:** lucide-react 0.548.0
- **Email:** @emailjs/browser (optional)
- **Hosting:** GitHub Pages

## Project Structure

```
churchexplorer/
├── public/
│   └── index.html
├── src/
│   ├── App.js                      # Main app with navigation
│   ├── DenominationVisualizer.jsx  # Main explorer component
│   ├── StudyGuide.jsx              # 8-week study guide
│   ├── emailService.js             # Email integration
│   └── index.js
└── package.json
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please open an issue on GitHub.