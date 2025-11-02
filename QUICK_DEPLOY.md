# Quick Deployment Guide - Church Explorer

## 🚨 Current Status

Your app has two components that need to be deployed:

1. **Frontend** (React app) → GitHub Pages → ✅ Already configured
2. **Backend API** (OpenAI proxy) → Vercel → ⚠️ Needs deployment

## 🎯 The Problem

- Your OpenAI API key was exposed in the client code (security risk)
- It was removed from production (correctly!)
- Now you need to deploy the proxy server to Vercel to handle AI requests securely

## ✅ Solution: 3-Step Deployment

### Step 1: Deploy Backend API to Vercel (5 minutes)

```bash
# Install Vercel CLI if needed
npm install -g vercel

# Login to Vercel
vercel login

# Deploy the backend
cd /workspaces/churchexplorer
vercel --prod
```

When prompted:
- **Project name:** `churchexplorer-api`
- **Continue?** Yes
- **Link to existing project?** No (first time) or Yes (if you created one before)

**Important:** Copy the deployment URL it gives you! It will look like:
```
https://churchexplorer-api.vercel.app
```

### Step 2: Add Environment Variable to Vercel

Go to: https://vercel.com/dashboard

1. Select your `churchexplorer-api` project
2. Go to **Settings** → **Environment Variables**
3. Add this variable:
   - **Name:** `REACT_APP_OPENAI_API_KEY`
   - **Value:** Your OpenAI API key (starts with `sk-`)
   - **Environments:** Production, Preview, Development

4. Click **Save**

### Step 3: Update Frontend and Redeploy

```bash
# Update the .env file with your Vercel URL
cd /workspaces/churchexplorer/churchexplorer
nano .env
```

Change this line:
```
REACT_APP_AI_API_ENDPOINT=/api/ai
```

To (using your actual Vercel URL):
```
REACT_APP_AI_API_ENDPOINT=https://churchexplorer-api.vercel.app/api/ai
```

Save the file, then deploy the frontend:

```bash
# Deploy to GitHub Pages
npm run deploy
```

## 🧪 Testing

### Test the Backend API

```bash
curl -X POST https://YOUR-VERCEL-URL.vercel.app/api/ai/generate-lesson \
  -H "Content-Type: application/json" \
  -d '{"topic": "The Trinity", "additionalContext": "Simple explanation"}'
```

You should get back a JSON response with a generated lesson.

### Test the Full App

1. Go to https://www.churchexplorer.org
2. Navigate to the AI Lesson Creator
3. Try generating a lesson
4. Check browser console for any errors

## 📊 About Firestore Sync

**Good news:** Firestore is already configured correctly!

Here's how data syncing works:
- **localStorage** = Progress tracking (works offline, fast)
- **Firestore** = User profiles & leaderboard (syncs when online)

When you earn XP:
1. It's saved to localStorage immediately
2. It's synced to Firestore (if you're logged in)
3. The leaderboard pulls from Firestore only

This is the correct architecture! Data isn't "pulling from localStorage instead of Firestore" - they serve different purposes.

## 🔍 Troubleshooting

### "OpenAI API key not configured on server"
- Make sure you added the environment variable in Vercel dashboard
- Redeploy after adding: `vercel --prod`

### "CORS error"
- The server already has CORS enabled
- Make sure you're using the correct Vercel URL in .env

### "AI lesson generation fails"
- Check Vercel logs: https://vercel.com/dashboard → Your Project → Logs
- Check browser console for detailed errors
- Verify your OpenAI API key is valid

### "Leaderboard shows 0 XP"
- Make sure you're logged in
- Check that Firebase config is correct
- Try signing out and signing back in

## 📁 Files Modified

✅ `vercel.json` - Vercel configuration
✅ `churchexplorer/src/services/aiLessonService.js` - Uses proxy in production
✅ `server/server.js` - Express proxy server (already created)
✅ `VERCEL_DEPLOYMENT_GUIDE.md` - Detailed guide
✅ `deploy.sh` - Automated deployment script

## 🎉 You're Done!

Once you complete the 3 steps above:
1. Backend API is secured on Vercel ✅
2. Frontend is on GitHub Pages ✅
3. Firestore is syncing correctly ✅
4. No API keys exposed in client ✅

Visit https://www.churchexplorer.org and test it out!

## 💰 Cost Estimate

- **GitHub Pages:** Free
- **Vercel:** Free tier (100GB bandwidth/month)
- **Firebase:** Free tier (generous limits)
- **OpenAI:** ~$0.06-0.12 per lesson generated

Total: Essentially free for moderate usage!
