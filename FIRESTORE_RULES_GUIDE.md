# Firestore Security Rules Deployment Guide

## Quick Deploy

You need to deploy these Firestore security rules to fix the "Missing or insufficient permissions" errors.

### Option 1: Firebase Console (Easiest)

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **church-explorer-20e5a**
3. Click **Firestore Database** in the left sidebar
4. Click the **Rules** tab
5. Copy the contents of `firestore.rules` in this repository
6. Paste into the Firebase Console editor
7. Click **Publish**

### Option 2: Firebase CLI

If you have Firebase CLI installed:

```bash
cd /workspaces/churchexplorer
firebase deploy --only firestore:rules
```

If you don't have Firebase CLI set up:

```bash
npm install -g firebase-tools
firebase login
firebase init firestore  # Select your project
firebase deploy --only firestore:rules
```

## What These Rules Do

The new security rules allow:

✅ **Users can read/write their own profile** (`/users/{uid}`)
✅ **Users can read/write their own progress** (`/users/{uid}/progress/*`)
✅ **Users can read/write their own AI paths** (`/users/{uid}/aiPaths/*`)
✅ **Users can read/write their AI path progress** (`/users/{uid}/aiPathProgress/*`)
✅ **All authenticated users can read the leaderboard** (`/leaderboard/*`)
✅ **Users can only update their own leaderboard entry**

## Current Rules Issues

The errors you're seeing:
- `progressService.js:97 Get progress error: Missing or insufficient permissions`
- `progressService.js:421 Error loading AI paths from Firestore: Missing or insufficient permissions`

These happen because the current Firestore rules are too restrictive and don't allow authenticated users to access their own subcollections.

## After Deployment

Once the rules are deployed, the app will:
- ✅ Load user progress from Firestore on login
- ✅ Save AI-generated learning paths to Firestore
- ✅ Track AI path progress in the cloud
- ✅ Sync XP and progress across devices
- ✅ Update the global leaderboard

## Testing

After deploying the rules, test by:
1. Logging in to the app
2. Generating a new AI learning path
3. Check the browser console - no more "Missing or insufficient permissions" errors
4. Verify your progress and paths are saved to Firestore
