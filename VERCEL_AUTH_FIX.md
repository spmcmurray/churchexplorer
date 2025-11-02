# Fix Vercel Deployment Protection

## Issue

Your Vercel deployment has "Deployment Protection" enabled, which requires authentication to access the API endpoints. This prevents your GitHub Pages frontend from calling the API.

## Solution: Disable Deployment Protection

### Option 1: Via Vercel Dashboard (Recommended)

1. Go to: https://vercel.com/scott-mcmurrays-projects/churchexplorer/settings/deployment-protection

2. Under "Deployment Protection", you'll see options like:
   - Standard Protection (SSO)
   - Password Protection
   - Trusted IPs
   
3. **Disable all protection** or set to "Only Preview Deployments"

4. Click **Save**

5. Redeploy:
   ```bash
   vercel --prod
   ```

### Option 2: Make Production Deployment Public

If you want to keep protection on preview deployments but make production public:

1. Go to Settings → Deployment Protection
2. Select "Only Preview Deployments" 
3. This will make your production URL publicly accessible
4. Save and redeploy

## Test After Fixing

Run this command to test the API:

```bash
curl -X POST https://churchexplorer-4w8hihwdx-scott-mcmurrays-projects.vercel.app/api/ai/generate-lesson \
  -H "Content-Type: application/json" \
  -d '{"topic": "The Trinity", "additionalContext": "Simple explanation"}'
```

You should get a JSON response with a generated lesson (not an authentication page).

## Alternative: Use a Different Vercel Project

If you can't disable protection on this project, you can create a new Vercel project specifically for the API:

```bash
# In the server directory
cd /workspaces/churchexplorer/server
vercel --prod
```

Then update the .env file with the new URL.

---

**Current Status:**
- ✅ Frontend deployed to GitHub Pages
- ✅ Backend deployed to Vercel
- ✅ Environment variables configured
- ⚠️ Deployment protection blocking API calls

**Next Step:** Disable deployment protection and test!
