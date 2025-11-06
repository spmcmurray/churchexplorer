/**
 * Background Lesson Generation Service
 * Allows AI lessons to generate in the background while user navigates away
 */

import { db } from '../firebase/config';
import { collection, addDoc, updateDoc, doc, onSnapshot, serverTimestamp, query, where, orderBy, limit, setDoc, getDocs } from 'firebase/firestore';
import { generateAILesson, generateCompleteLearningPath } from './aiLessonService';

/**
 * Start a background lesson generation job
 * Returns job ID that can be used to track progress
 */
export const startBackgroundLessonGeneration = async (userId, topic, additionalContext, pathType = 'quick') => {
  try {
    // Create job document in Firestore
    const jobRef = await addDoc(collection(db, 'users', userId, 'lessonJobs'), {
      topic,
      additionalContext,
      pathType,
      status: 'pending', // pending, generating, completed, failed
      progress: 0,
      createdAt: serverTimestamp(),
      startedAt: null,
      completedAt: null,
      lessonId: null,
      error: null
    });

    // Start generation in background (don't await)
    processLessonJob(userId, jobRef.id, topic, additionalContext, pathType);

    return {
      success: true,
      jobId: jobRef.id,
      message: 'Your lesson is being generated in the background. You can navigate away and we\'ll notify you when it\'s ready!'
    };
  } catch (error) {
    console.error('Error starting background job:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

/**
 * Process a lesson generation job in the background
 * This runs independently of the UI
 */
const processLessonJob = async (userId, jobId, topic, additionalContext, pathType) => {
  const jobRef = doc(db, 'users', userId, 'lessonJobs', jobId);

  try {
    // Update status to generating
    await updateDoc(jobRef, {
      status: 'generating',
      startedAt: serverTimestamp(),
      progress: 10
    });

    let result;
    
    if (pathType === 'quick') {
      // Generate single lesson
      result = await generateAILesson(topic, additionalContext, userId);
      
      if (result.success) {
        // Save lesson to user's library in Firestore
        const lessonId = result.lesson.id || `ai_lesson_${Date.now()}`;
        const lessonsRef = collection(db, 'users', userId, 'lessons');
        await setDoc(doc(lessonsRef, lessonId), {
          ...result.lesson,
          id: lessonId,
          createdAt: serverTimestamp()
        });
        
        // Update job as completed
        await updateDoc(jobRef, {
          status: 'completed',
          progress: 100,
          completedAt: serverTimestamp(),
          lessonId: lessonId,
          lessonTitle: result.lesson.title
        });
      } else {
        throw new Error(result.error || 'Failed to generate lesson');
      }
    } else {
      // For multi-lesson paths, this would need path outline logic
      // For now, just do single lesson
      throw new Error('Multi-lesson paths not yet supported in background mode');
    }

  } catch (error) {
    console.error('Error processing lesson job:', error);
    
    // Update job as failed
    await updateDoc(jobRef, {
      status: 'failed',
      completedAt: serverTimestamp(),
      error: error.message
    });
  }
};

/**
 * Listen to job status updates in real-time
 * Callback receives job data: { status, progress, lessonId, error }
 */
export const subscribeToJobStatus = (userId, jobId, callback) => {
  const jobRef = doc(db, 'users', userId, 'lessonJobs', jobId);
  
  return onSnapshot(jobRef, (snapshot) => {
    if (snapshot.exists()) {
      const jobData = snapshot.data();
      callback({
        status: jobData.status,
        progress: jobData.progress || 0,
        lessonId: jobData.lessonId,
        lessonTitle: jobData.lessonTitle,
        error: jobData.error,
        completedAt: jobData.completedAt
      });
    }
  });
};

/**
 * Get all background jobs for a user (for showing in UI)
 */
export const getUserBackgroundJobs = async (userId) => {
  try {
    const jobsQuery = query(
      collection(db, 'users', userId, 'lessonJobs'),
      orderBy('createdAt', 'desc'),
      limit(10)
    );

    const snapshot = await getDocs(jobsQuery);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error getting background jobs:', error);
    return [];
  }
};

/**
 * Subscribe to all background jobs for a user (real-time)
 * Calls callback with all pending/generating jobs and recently completed jobs
 */
export const subscribeToBackgroundJobs = (userId, callback) => {
  const jobsQuery = query(
    collection(db, 'users', userId, 'lessonJobs'),
    orderBy('createdAt', 'desc'),
    limit(20)
  );

  // Track which completed jobs we've already notified about
  const notifiedJobs = new Set();

  return onSnapshot(jobsQuery, (snapshot) => {
    const recentlyCompletedJobs = [];
    
    snapshot.docChanges().forEach((change) => {
      const jobData = { id: change.doc.id, ...change.doc.data() };
      
      // Only notify about jobs that just completed (modified to 'completed' status)
      if (change.type === 'modified' && jobData.status === 'completed' && !notifiedJobs.has(jobData.id)) {
        recentlyCompletedJobs.push(jobData);
        notifiedJobs.add(jobData.id);
      }
      // Also catch newly added completed jobs (in case of page refresh)
      else if (change.type === 'added' && jobData.status === 'completed' && !notifiedJobs.has(jobData.id)) {
        // Only notify if completed very recently (within last 2 minutes)
        const completedAt = jobData.completedAt?.toDate?.() || new Date(0);
        const twoMinutesAgo = new Date(Date.now() - 2 * 60 * 1000);
        if (completedAt > twoMinutesAgo) {
          recentlyCompletedJobs.push(jobData);
          notifiedJobs.add(jobData.id);
        }
      }
    });
    
    // Call callback with recently completed jobs
    if (recentlyCompletedJobs.length > 0) {
      callback(recentlyCompletedJobs);
    }
  });
};
