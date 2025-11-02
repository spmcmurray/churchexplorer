# Vercel Deployment Guide for Church Explorer API

## Overview

This guide will help you deploy the API proxy server to Vercel to securely handle OpenAI API calls without exposing your API key in the client.

## Prerequisites

- Vercel account (free tier is fine)
- OpenAI API key
- GitHub repository access

## Step-by-Step Deployment

### 1. Install Vercel CLI (if not already installed)

```bash
npm install -g vercel
```

### 2. Login to Vercel

```bash
vercel login
```

### 3. Deploy from the Root Directory

```bash
cd /workspaces/churchexplorer
vercel
```

When prompted:
- **Set up and deploy?** → Yes
- **Which scope?** → Select your account
- **Link to existing project?** → No
- **Project name?** → `churchexplorer-api` (or your preferred name)
- **In which directory is your code located?** → `./`
- **Want to modify settings?** → Yes
  - **Build Command:** Leave empty (press Enter)
  - **Output Directory:** Leave empty (press Enter)
  - **Development Command:** Leave empty (press Enter)

### 4. Set Environment Variables

After deployment, you need to add the OpenAI API key:

**Option A: Via Vercel Dashboard (Recommended)**

1. Go to your project dashboard: https://vercel.com/dashboard
2. Select your `churchexplorer-api` project
3. Go to **Settings** → **Environment Variables**
4. Add the following variable:
   - **Name:** `REACT_APP_OPENAI_API_KEY`
   - **Value:** Your OpenAI API key (starts with `sk-`)
   - **Environment:** Production (and Preview if you want)
5. Click **Save**

**Option B: Via CLI**

```bash
vercel env add REACT_APP_OPENAI_API_KEY production
# Paste your OpenAI API key when prompted
```

### 5. Redeploy to Apply Environment Variables

```bash
vercel --prod
```

### 6. Get Your Production URL

After deployment completes, Vercel will give you a URL like:
```
https://churchexplorer-api.vercel.app
```

**Save this URL!** You'll need it in the next step.

### 7. Update Your Frontend Code

Update the `REACT_APP_AI_API_ENDPOINT` environment variable in your frontend:

**Create `.env` file in `/workspaces/churchexplorer/churchexplorer/` if it doesn't exist:**

```bash
cd /workspaces/churchexplorer/churchexplorer
cat > .env << 'EOF'
# Firebase Configuration (from Firebase Console)
REACT_APP_FIREBASE_API_KEY=AIzaSyDvYAi4EMGSfBTysKVsgIvw-dk26kpa4Us
REACT_APP_FIREBASE_AUTH_DOMAIN=church-explorer-20e5a.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=church-explorer-20e5a
REACT_APP_FIREBASE_STORAGE_BUCKET=church-explorer-20e5a.firebasestorage.app
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=359510802923
REACT_APP_FIREBASE_APP_ID=1:359510802923:web:1c9e7c335f63d8ef3659ae

# API Endpoint (Vercel deployment URL)
REACT_APP_AI_API_ENDPOINT=https://churchexplorer-api.vercel.app/api/ai
EOF
```

**IMPORTANT:** Replace `https://churchexplorer-api.vercel.app` with your actual Vercel URL from step 6!

### 8. Update the Frontend Code

The aiLessonService needs to be updated to use the proxy properly. Currently it tries to call OpenAI directly. We need to modify it to call the Vercel proxy instead.

I'll do this in the next step after you confirm your Vercel deployment URL.

## Testing the API

### Test Locally First

1. Start the server locally:
```bash
cd /workspaces/churchexplorer/server
npm install
npm start
```

2. Test the endpoint with curl:
```bash
curl -X POST http://localhost:3001/api/ai/generate-lesson \
  -H "Content-Type: application/json" \
  -d '{"topic": "The Trinity", "additionalContext": "Focus on explaining the doctrine clearly"}'
```

### Test Production Deployment

```bash
curl -X POST https://your-vercel-url.vercel.app/api/ai/generate-lesson \
  -H "Content-Type: application/json" \
  -d '{"topic": "The Trinity", "additionalContext": "Focus on explaining the doctrine clearly"}'
```

## Troubleshooting

### Error: "OpenAI API key not configured on server"

- Make sure you added the `REACT_APP_OPENAI_API_KEY` environment variable in Vercel
- Redeploy after adding the variable: `vercel --prod`

### Error: 404 Not Found

- Check that the `vercel.json` file exists in the root directory
- Verify the routes in `vercel.json` match your endpoint paths

### CORS Errors

- The server already has CORS enabled (`app.use(cors())`)
- If you still get CORS errors, you may need to configure specific origins

### Firebase Not Working in Production

If Firestore data isn't syncing:
1. Check browser console for Firebase errors
2. Verify Firebase config in `.env` matches your Firebase project
3. Make sure the user is logged in before trying to sync XP
4. Check Firestore security rules allow authenticated users to write

## Next Steps

After deploying to Vercel:

1. ✅ Update the frontend `.env` file with your Vercel URL
2. ✅ Rebuild and redeploy your GitHub Pages site
3. ✅ Test the AI lesson generation in production
4. ✅ Monitor Vercel logs for any errors: https://vercel.com/dashboard

## Security Notes

- ✅ OpenAI API key is never exposed in the client bundle
- ✅ All AI requests go through your Vercel proxy
- ✅ Firebase API keys are safe to expose (domain-restricted)
- ⚠️ Consider adding rate limiting to prevent abuse
- ⚠️ Consider adding authentication to the API endpoints

## Cost Considerations

- **Vercel:** Free tier includes 100GB bandwidth and 100 serverless function invocations per day
- **OpenAI:** Check your usage at https://platform.openai.com/usage
  - GPT-4 costs approximately $0.03 per 1K input tokens and $0.06 per 1K output tokens
  - Each lesson generation uses ~1-2K tokens, so roughly $0.06-$0.12 per lesson

## Monitoring

- **Vercel Logs:** https://vercel.com/dashboard → Select project → Logs
- **OpenAI Usage:** https://platform.openai.com/usage
- **Firebase Usage:** https://console.firebase.google.com → Select project → Usage

---

**Need help?** Check the Vercel documentation: https://vercel.com/docs
