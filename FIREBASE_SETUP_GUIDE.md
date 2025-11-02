# Firebase Setup Guide for Church Explorer

This guide will help you set up Firebase Authentication and Firestore for the global leaderboard feature.

## Prerequisites
- A Google account
- Firebase SDK already installed via npm (check `package.json`)

## Step 1: Create a Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Click **"Add project"** or select an existing project
3. Enter a project name (e.g., "Church Explorer")
4. (Optional) Enable Google Analytics if desired
5. Click **"Create project"**

## Step 2: Register Your Web App

1. In the Firebase Console, click the **Web icon** (`</>`) to add a web app
2. Enter an app nickname (e.g., "Church Explorer Web")
3. Check **"Also set up Firebase Hosting"** if you plan to use Firebase Hosting
4. Click **"Register app"**
5. You'll see a Firebase configuration object - **keep this page open**, you'll need these values

## Step 3: Enable Authentication

1. In the left sidebar, click **"Authentication"**
2. Click **"Get started"**
3. Go to the **"Sign-in method"** tab
4. Click **"Email/Password"**
5. Toggle **"Enable"** to ON
6. Click **"Save"**

## Step 4: Create Firestore Database

1. In the left sidebar, click **"Firestore Database"**
2. Click **"Create database"**
3. Select **"Start in production mode"** (we'll add security rules next)
4. Choose a Cloud Firestore location (choose one closest to your users)
5. Click **"Enable"**

## Step 5: Configure Firestore Security Rules

1. In Firestore Database, click the **"Rules"** tab
2. Replace the default rules with the following:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read all user profiles (for leaderboard)
    match /users/{userId} {
      allow read: if true;
      allow create: if request.auth != null && request.auth.uid == userId;
      allow update: if request.auth != null && request.auth.uid == userId;
      allow delete: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

3. Click **"Publish"**

### Security Rules Explanation:
- **`allow read: if true;`** - Anyone can read user profiles (needed for public leaderboard)
- **`allow create: if request.auth != null && request.auth.uid == userId;`** - Only authenticated users can create their own profile
- **`allow update: if request.auth != null && request.auth.uid == userId;`** - Only users can update their own profile
- **`allow delete: if request.auth != null && request.auth.uid == userId;`** - Users can delete their own profile (for account deletion)

## Step 6: Get Your Configuration Values

1. Go back to **Project settings** (gear icon in the left sidebar)
2. Scroll down to **"Your apps"**
3. Find the **"SDK setup and configuration"** section
4. Select **"Config"** (not npm)
5. You'll see a config object like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};
```

## Step 7: Add Configuration to Your App

1. Copy the `.env.example` file to create a `.env` file:
   ```bash
   cp .env.example .env
   ```

2. Open `.env` and replace the Firebase placeholder values with your actual values:
   ```
   REACT_APP_FIREBASE_API_KEY=AIzaSy...
   REACT_APP_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   REACT_APP_FIREBASE_PROJECT_ID=your-project
   REACT_APP_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=123456789
   REACT_APP_FIREBASE_APP_ID=1:123456789:web:abcdef
   ```

3. **Important**: Never commit the `.env` file to version control! It should already be in `.gitignore`.

## Step 8: Test Your Setup

1. Restart your development server to load the new environment variables:
   ```bash
   npm start
   ```

2. Try these features:
   - **Sign up**: Create a new account with name, email, country
   - **View Leaderboard**: Navigate to the leaderboard (should show empty initially)
   - **Earn XP**: Complete a lesson and verify XP is awarded
   - **Check Firestore**: Go to Firebase Console > Firestore Database and verify:
     - Your user document was created in the `users` collection
     - Fields include: uid, email, name, country, totalXP, createdAt, lastUpdated
   - **View Leaderboard**: Return to leaderboard and verify you appear in the rankings

3. Create a second test account to verify leaderboard sorting works correctly

## Step 9: Production Deployment

When deploying to production:

1. **Build your app**:
   ```bash
   npm run build
   ```

2. **Set environment variables** on your hosting platform:
   - If using GitHub Pages: Add secrets in repository settings
   - If using Netlify/Vercel: Add environment variables in dashboard
   - If using Firebase Hosting: Use `.env.production` file

3. **Deploy**:
   ```bash
   npm run deploy
   ```

## Troubleshooting

### "Firebase: Error (auth/configuration-not-found)"
- Make sure `.env` file exists and contains valid Firebase config
- Restart your development server after creating/modifying `.env`

### "Missing or insufficient permissions"
- Check Firestore Security Rules are properly configured
- Verify user is authenticated before trying to update XP

### XP not syncing to leaderboard
- Open browser console and check for errors
- Verify Firebase config is loaded (check Network tab for Firebase API calls)
- Ensure user is signed in (currentUser should not be null)

### Leaderboard shows no data
- Check Firestore Database in Firebase Console
- Verify users collection exists and contains documents
- Try completing a lesson while signed in to trigger XP sync

## Cost Considerations

Firebase has a generous **free tier** (Spark Plan):
- **Authentication**: 50,000 MAU (Monthly Active Users)
- **Firestore**: 50,000 reads/day, 20,000 writes/day, 1 GB storage
- **Hosting**: 10 GB storage, 360 MB/day transfer

For a small to medium-sized app, you should stay within the free tier. Monitor usage in Firebase Console > Usage and billing.

## Need Help?

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firestore Security Rules Guide](https://firebase.google.com/docs/firestore/security/get-started)
- [Firebase Authentication Docs](https://firebase.google.com/docs/auth)
