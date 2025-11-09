require('dotenv').config();
const admin = require('firebase-admin');

if (process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON) {
  const serviceAccount = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON);
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    projectId: process.env.FIREBASE_PROJECT_ID || 'churchexplorer-e5b4f',
  });
}

const db = admin.firestore();

async function getUserId() {
  const snapshot = await db.collection('aiPaths').limit(1).get();
  if (!snapshot.empty) {
    const doc = snapshot.docs[0];
    console.log(doc.data().userId);
  }
  process.exit(0);
}

getUserId();
