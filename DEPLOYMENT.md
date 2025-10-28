# Deployment Instructions

## Quick Deploy to GitHub Pages

Your app is ready to deploy! Follow these steps:

### Step 1: Merge to Main Branch

Since we're currently on a feature branch (`claude/session-011CUZEhp9s87w5wCcZez7eU`), you'll need to merge to your main branch first:

**Option A: Via GitHub (Recommended)**
1. Go to GitHub: https://github.com/spmcmurray/churchexplorer
2. You should see a prompt to create a Pull Request for this branch
3. Click "Create Pull Request"
4. Review the changes
5. Click "Merge Pull Request"

**Option B: Via Command Line**
```bash
# Switch to main branch (or master, depending on your setup)
git checkout main

# Pull latest changes
git pull origin main

# Merge the feature branch
git merge claude/session-011CUZEhp9s87w5wCcZez7eU

# Push to main
git push origin main
```

### Step 2: Deploy to GitHub Pages

Once merged to main:

```bash
# Make sure you're on the main branch
git checkout main

# Navigate to the app directory
cd churchexplorer

# Install dependencies (if not already done)
npm install

# Deploy to GitHub Pages
npm run deploy
```

This will:
1. Build your app (`npm run build`)
2. Push the build to the `gh-pages` branch
3. GitHub Pages will automatically serve it

### Step 3: Verify Deployment

1. Go to your repository settings: https://github.com/spmcmurray/churchexplorer/settings/pages
2. Under "Source", make sure it's set to deploy from the `gh-pages` branch
3. Your site should be live at: **https://www.churchexplorer.org**

Give it a few minutes for changes to propagate. Then visit your site!

---

## What's Included in This Deployment

✅ **Interactive Denomination Explorer**
- 12 major Christian denominations
- Historical timeline visualization
- Bible canonization history
- Worship experience guides

✅ **8-Week Study Guide (NEW!)**
- Complete curriculum for beginners
- Email subscription form
- Expandable weekly lessons
- Reflection questions and practical applications

✅ **Email Integration**
- Currently in demo mode (logs to console)
- Ready for EmailJS setup (see below)

---

## Setting Up Email Functionality

The study guide works without email (users can browse all content), but to enable email notifications:

### Quick Setup (5 minutes)

1. **Create EmailJS Account**
   - Sign up at https://www.emailjs.com/ (free tier: 200 emails/month)

2. **Configure EmailJS**
   - Add email service (Gmail, Outlook, etc.)
   - Create email template (see `email-templates/welcome-email.txt`)
   - Get your Service ID, Template ID, and Public Key

3. **Add Environment Variables**
   ```bash
   cd churchexplorer
   cp .env.example .env
   ```

4. **Edit `.env` file:**
   ```env
   REACT_APP_EMAILJS_SERVICE_ID=service_your_id
   REACT_APP_EMAILJS_TEMPLATE_ID=template_your_id
   REACT_APP_EMAILJS_PUBLIC_KEY=user_your_key
   REACT_APP_EMAIL_MODE=production
   ```

5. **Rebuild and Redeploy**
   ```bash
   npm run build
   npm run deploy
   ```

**Note:** `.env` files are not committed to git (they're in `.gitignore`), so your credentials stay private.

For detailed email setup instructions, see **EMAIL_SETUP_GUIDE.md**.

---

## Testing Locally

Before deploying, you can test locally:

```bash
cd churchexplorer
npm install
npm start
```

This will open http://localhost:3000 where you can:
- Navigate between Explorer and Study Guide tabs
- Test the subscription form (demo mode)
- Preview all 8 weeks of content

---

## Updating Your Site

To make future updates:

1. Make your changes to the code
2. Test locally with `npm start`
3. Commit and push to main:
   ```bash
   git add .
   git commit -m "Your update message"
   git push origin main
   ```
4. Deploy:
   ```bash
   cd churchexplorer
   npm run deploy
   ```

---

## Troubleshooting

### Build Errors

If you get errors during build:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Deploy Fails with 403 Error

This usually means you're not on the main branch. Make sure to:
1. Merge your changes to main first
2. Deploy from the main branch

### Site Not Updating

- GitHub Pages can take 5-10 minutes to update
- Try clearing your browser cache
- Check the gh-pages branch was updated: https://github.com/spmcmurray/churchexplorer/tree/gh-pages

### Custom Domain Issues

Your CNAME file is set to `www.churchexplorer.org`. Make sure:
1. Your domain's DNS is pointing to GitHub Pages
2. CNAME file is in the `public` folder
3. GitHub Pages settings show your custom domain

---

## File Structure

```
churchexplorer/
├── churchexplorer/              # Main app directory
│   ├── public/
│   │   ├── index.html
│   │   └── ...
│   ├── src/
│   │   ├── App.js               # Navigation between views
│   │   ├── DenominationVisualizer.jsx  # Main explorer
│   │   ├── StudyGuide.jsx       # Study guide component
│   │   ├── emailService.js      # Email integration
│   │   └── ...
│   ├── .env.example             # Environment variables template
│   └── package.json
├── email-templates/             # Email templates for reference
├── EMAIL_SETUP_GUIDE.md         # Detailed email setup
├── DEPLOYMENT.md               # This file
└── README.md                    # Project overview
```

---

## Need Help?

- **EmailJS Issues**: See EMAIL_SETUP_GUIDE.md
- **GitHub Pages**: https://docs.github.com/en/pages
- **React Issues**: Check the console for error messages

---

## Next Steps

After deploying:

1. ✅ Test the live site
2. ✅ Set up email (optional but recommended)
3. ✅ Share your site!
4. 📊 Consider adding analytics (Google Analytics, Plausible, etc.)
5. 📧 Set up a real email backend for weekly automation (see EMAIL_SETUP_GUIDE.md)

Congratulations on your deployment! 🎉
