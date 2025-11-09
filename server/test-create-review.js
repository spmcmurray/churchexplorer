const admin = require('firebase-admin');
require('dotenv').config({ path: '.env.production' });

if (!admin.apps.length) {
  const serviceAccountString = process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON;
  if (!serviceAccountString) {
    console.error('No Firebase credentials found');
    process.exit(1);
  }
  
  // Parse the escaped JSON
  const serviceAccount = JSON.parse(serviceAccountString.replace(/\\n/g, '\n'));
  
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    projectId: process.env.FIREBASE_PROJECT_ID || 'church-explorer-20e5a',
  });
}

const db = admin.firestore();

async function testCreateReview() {
  try {
    // Get first user
    const usersSnapshot = await db.collection('users').limit(1).get();
    
    if (usersSnapshot.empty) {
      console.log('No users found');
      return;
    }
    
    const userId = usersSnapshot.docs[0].id;
    console.log('User ID:', userId);
    
    // Create a test review
    const reviewRef = db
      .collection('users')
      .doc(userId)
      .collection('reviewSchedule')
      .doc('test-lesson-1');
    
    const now = new Date();
    const scheduleData = {
      path: 'test',
      lessonNumber: 1,
      completedDate: now.toISOString(),
      reviews: [
        {
          dueDate: new Date(now.getTime()).toISOString(),
          completed: false,
          completedDate: null,
          interval: 1,
          reviewNumber: 1
        }
      ],
      masteryLevel: 0,
      lessonTitle: 'Test Lesson'
    };
    
    await reviewRef.set(scheduleData);
    console.log('✅ Test review created successfully');
    
    // Verify it was created
    const doc = await reviewRef.get();
    console.log('Review data:', doc.data());
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    process.exit(0);
  }
}

testCreateReview();
