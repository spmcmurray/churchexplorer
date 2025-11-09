const admin = require('firebase-admin');
require('dotenv').config({ path: '.env.production' });

if (!admin.apps.length) {
  if (process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON) {
    const serviceAccount = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON);
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      projectId: process.env.FIREBASE_PROJECT_ID || 'churchexplorer-e5b4f',
    });
  } else {
    console.error('No Firebase credentials found');
    process.exit(1);
  }
}

const db = admin.firestore();

async function checkReviews() {
  try {
    // Get first AI path
    const pathsSnapshot = await db.collection('aiPaths').limit(1).get();
    
    if (pathsSnapshot.empty) {
      console.log('No AI paths found');
      return;
    }
    
    const firstPath = pathsSnapshot.docs[0];
    const userId = firstPath.data().userId;
    
    console.log('User ID:', userId);
    console.log('Path ID:', firstPath.id);
    console.log('Path completed lessons:', firstPath.data().progress?.completedLessons);
    
    // Check review schedules for this user
    const reviewsSnapshot = await db
      .collection('users')
      .doc(userId)
      .collection('reviewSchedule')
      .get();
    
    console.log('\nTotal review schedules:', reviewsSnapshot.size);
    
    reviewsSnapshot.docs.forEach(doc => {
      const data = doc.data();
      console.log('\n---');
      console.log('Review key:', doc.id);
      console.log('Path:', data.path);
      console.log('Lesson title:', data.lessonTitle);
      console.log('First review due:', data.reviews?.[0]?.dueDate);
      console.log('First review completed:', data.reviews?.[0]?.completed);
    });
    
    // Check what getDueReviews would return
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    console.log('\n\nToday (for comparison):', today.toISOString());
    
    const dueReviews = [];
    reviewsSnapshot.docs.forEach(doc => {
      const data = doc.data();
      const nextReview = data.reviews?.find(r => !r.completed);
      if (nextReview) {
        const dueDate = new Date(nextReview.dueDate);
        dueDate.setHours(0, 0, 0, 0);
        
        console.log(`\nLesson ${data.lessonTitle}:`);
        console.log('  Next review due:', dueDate.toISOString());
        console.log('  Is due today or earlier?', dueDate <= today);
        
        if (dueDate <= today) {
          dueReviews.push(data.lessonTitle);
        }
      }
    });
    
    console.log('\n\nReviews that should appear on home page:', dueReviews);
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    process.exit(0);
  }
}

checkReviews();
