/**
 * One-time script to backfill review schedules for completed AI lessons
 * Run this with: node backfill-ai-reviews.js YOUR_USER_ID
 */

require('dotenv').config();
const admin = require('firebase-admin');

// Initialize Firebase Admin (matches server.js initialization)
if (!admin.apps.length) {
  if (process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON) {
    const serviceAccount = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON);
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      projectId: process.env.FIREBASE_PROJECT_ID || 'churchexplorer-e5b4f',
    });
  } else {
    admin.initializeApp({
      projectId: process.env.FIREBASE_PROJECT_ID || 'churchexplorer-e5b4f',
    });
  }
}

const db = admin.firestore();

// Review intervals in days
const REVIEW_INTERVALS = [1, 3, 7, 14];

async function backfillReviews(userId) {
  console.log(`\n🔍 Checking AI paths for user: ${userId}`);
  
  try {
    // Get all AI paths for the user
    const pathsSnapshot = await db
      .collection('aiPaths')
      .where('userId', '==', userId)
      .get();
    
    if (pathsSnapshot.empty) {
      console.log('No AI paths found for this user');
      return;
    }
    
    console.log(`Found ${pathsSnapshot.size} AI learning paths`);
    
    let totalLessonsProcessed = 0;
    let reviewsCreated = 0;
    let reviewsSkipped = 0;
    
    // Process each path
    for (const pathDoc of pathsSnapshot.docs) {
      const pathData = pathDoc.data();
      const pathId = pathDoc.id;
      
      console.log(`\n📚 Processing path: ${pathData.title || 'Untitled'} (${pathId})`);
      
      if (!pathData.lessons || pathData.lessons.length === 0) {
        console.log('  ⚠️  No lessons in this path, skipping');
        continue;
      }
      
      // Check progress to see which lessons are completed
      const progress = pathData.progress || {};
      const completedLessons = progress.completedLessons || [];
      
      console.log(`  Total lessons: ${pathData.lessons.length}`);
      console.log(`  Completed lessons: ${completedLessons.length}`);
      
      // Process each completed lesson
      for (let lessonIndex = 0; lessonIndex < completedLessons.length; lessonIndex++) {
        if (!completedLessons[lessonIndex]) continue;
        
        totalLessonsProcessed++;
        const lesson = pathData.lessons[lessonIndex];
        const lessonKey = `ai_path_${pathId}_${lessonIndex}`;
        
        // Check if review schedule already exists
        const reviewRef = db
          .collection('users')
          .doc(userId)
          .collection('reviewSchedule')
          .doc(lessonKey);
        
        const existingReview = await reviewRef.get();
        
        if (existingReview.exists()) {
          console.log(`  ✓ Review already exists for lesson ${lessonIndex + 1}: ${lesson?.title || 'Untitled'}`);
          reviewsSkipped++;
          continue;
        }
        
        // Create review schedule
        const completedDate = progress.lastCompletedAt || new Date().toISOString();
        const completedTime = new Date(completedDate);
        
        const reviews = REVIEW_INTERVALS.map((interval, index) => {
          const dueDate = new Date(completedTime);
          dueDate.setDate(dueDate.getDate() + interval);
          
          return {
            dueDate: dueDate.toISOString(),
            completed: false,
            completedDate: null,
            interval: interval,
            reviewNumber: index + 1
          };
        });
        
        const scheduleData = {
          path: `ai_path_${pathId}`,
          lessonNumber: lessonIndex,
          completedDate: completedDate,
          reviews,
          masteryLevel: 0,
          lessonTitle: lesson?.title || 'AI Lesson',
          pathTitle: pathData.title || 'AI Learning Path'
        };
        
        await reviewRef.set(scheduleData);
        reviewsCreated++;
        console.log(`  ✅ Created review schedule for lesson ${lessonIndex + 1}: ${lesson?.title || 'Untitled'}`);
      }
    }
    
    console.log(`\n📊 Summary:`);
    console.log(`  Completed lessons processed: ${totalLessonsProcessed}`);
    console.log(`  New review schedules created: ${reviewsCreated}`);
    console.log(`  Reviews already existed: ${reviewsSkipped}`);
    
  } catch (error) {
    console.error('❌ Error backfilling reviews:', error);
  }
}

// Main execution
async function main() {
  // Get userId from command line argument or use default
  const userId = process.argv[2];
  
  if (!userId) {
    console.error('❌ Please provide a userId as an argument');
    console.log('Usage: node backfill-ai-reviews.js YOUR_USER_ID');
    process.exit(1);
  }
  
  console.log('🚀 Starting AI Review Backfill Script');
  console.log('=====================================');
  
  await backfillReviews(userId);
  
  console.log('\n✅ Backfill complete!');
  process.exit(0);
}

main();
