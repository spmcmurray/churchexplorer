import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
// NOTE: Firebase API keys are safe to expose in client-side code (they're restricted by domain)
// See: https://firebase.google.com/docs/projects/api-keys
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyDvYAi4EMGSfBTysKVsgIvw-dk26kpa4Us",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "church-explorer-20e5a.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "church-explorer-20e5a",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "church-explorer-20e5a.firebasestorage.app",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "359510802923",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "1:359510802923:web:1c9e7c335f63d8ef3659ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
