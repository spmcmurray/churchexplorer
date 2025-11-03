// Spaced Repetition Review Service - Firestore Edition
import { getCurrentUser } from '../firebase/authService';
import { db } from '../firebase/config';
import { doc, setDoc, getDoc, getDocs, collection, query } from 'firebase/firestore';

// Review intervals in days
const REVIEW_INTERVALS = [1, 3, 7, 14];

// Mastery levels based on reviews completed
const MASTERY_LEVELS = {
  0: { icon: '🌱', label: 'Learning', color: 'text-yellow-600' },
  1: { icon: '🌿', label: 'Practicing', color: 'text-green-500' },
  2: { icon: '🌳', label: 'Growing', color: 'text-green-600' },
  3: { icon: '🏆', label: 'Proficient', color: 'text-blue-600' },
  4: { icon: '⭐', label: 'Mastered', color: 'text-purple-600' }
};

/**
 * Get the review schedule key for a lesson
 */
export const getLessonKey = (path, lessonNumber) => {
  return `${path}-${lessonNumber}`;
};

/**
 * Schedule reviews when a lesson is completed - saves to Firestore
 */
export const scheduleReviews = async (path, lessonNumber) => {
  const user = getCurrentUser();
  if (!user) {
    console.warn('Cannot schedule reviews - user not logged in');
    return;
  }

  const lessonKey = getLessonKey(path, lessonNumber);
  const completedDate = new Date().toISOString();
  
  try {
    // Check if review schedule already exists
    const reviewRef = doc(db, 'users', user.uid, 'reviewSchedule', lessonKey);
    const existingDoc = await getDoc(reviewRef);
    
    if (existingDoc.exists()) {
      console.log('Review schedule already exists for', lessonKey);
      return;
    }
    
    // Create review schedule
    const reviews = REVIEW_INTERVALS.map((interval, index) => {
      const dueDate = new Date();
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
      path,
      lessonNumber,
      completedDate,
      reviews,
      masteryLevel: 0
    };
    
    await setDoc(reviewRef, scheduleData);
    console.log('✅ Review schedule created in Firestore:', lessonKey);
  } catch (error) {
    console.error('Error scheduling reviews:', error);
  }
};

/**
 * Get all review schedule data from Firestore
 */
export const getReviewSchedule = async () => {
  const user = getCurrentUser();
  if (!user) {
    return {};
  }

  try {
    const reviewsRef = collection(db, 'users', user.uid, 'reviewSchedule');
    const q = query(reviewsRef);
    const snapshot = await getDocs(q);
    
    const scheduleData = {};
    snapshot.forEach((doc) => {
      scheduleData[doc.id] = doc.data();
    });
    
    return scheduleData;
  } catch (error) {
    console.error('Error loading review schedule:', error);
    return {};
  }
};

/**
 * Get reviews that are due today or overdue from Firestore
 */
export const getDueReviews = async () => {
  const scheduleData = await getReviewSchedule();
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const dueReviews = [];
  
  Object.entries(scheduleData).forEach(([lessonKey, data]) => {
    const nextReview = data.reviews.find(r => !r.completed);
    
    if (nextReview) {
      const dueDate = new Date(nextReview.dueDate);
      dueDate.setHours(0, 0, 0, 0);
      
      if (dueDate <= today) {
        dueReviews.push({
          lessonKey,
          path: data.path,
          lessonNumber: data.lessonNumber,
          reviewNumber: nextReview.reviewNumber,
          dueDate: nextReview.dueDate,
          masteryLevel: data.masteryLevel,
          isOverdue: dueDate < today
        });
      }
    }
  });
  
  // Sort by due date (oldest first)
  return dueReviews.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
};

/**
 * Mark a review as completed - saves to Firestore
 */
export const markReviewComplete = async (path, lessonNumber, score) => {
  const user = getCurrentUser();
  if (!user) {
    console.warn('Cannot mark review complete - user not logged in');
    return;
  }

  const lessonKey = getLessonKey(path, lessonNumber);
  
  try {
    const reviewRef = doc(db, 'users', user.uid, 'reviewSchedule', lessonKey);
    const docSnap = await getDoc(reviewRef);
    
    if (!docSnap.exists()) {
      console.warn('Review schedule not found for', lessonKey);
      return;
    }
    
    const lessonData = docSnap.data();
    const nextReview = lessonData.reviews.find(r => !r.completed);
    
    if (nextReview) {
      nextReview.completed = true;
      nextReview.completedDate = new Date().toISOString();
      nextReview.score = score;
      
      // Update mastery level
      const completedReviews = lessonData.reviews.filter(r => r.completed).length;
      lessonData.masteryLevel = completedReviews;
      
      await setDoc(reviewRef, lessonData);
      console.log('✅ Review marked complete in Firestore:', lessonKey);
    }
  } catch (error) {
    console.error('Error marking review complete:', error);
  }
};

/**
 * Get mastery info for a lesson from Firestore
 */
export const getMasteryInfo = async (path, lessonNumber) => {
  const lessonKey = getLessonKey(path, lessonNumber);
  const scheduleData = await getReviewSchedule();
  
  if (!scheduleData[lessonKey]) {
    return MASTERY_LEVELS[0];
  }
  
  const masteryLevel = scheduleData[lessonKey].masteryLevel;
  return MASTERY_LEVELS[masteryLevel] || MASTERY_LEVELS[0];
};

/**
 * Get next review date for a lesson from Firestore
 */
export const getNextReviewDate = async (path, lessonNumber) => {
  const lessonKey = getLessonKey(path, lessonNumber);
  const scheduleData = await getReviewSchedule();
  
  if (!scheduleData[lessonKey]) {
    return null;
  }
  
  const nextReview = scheduleData[lessonKey].reviews.find(r => !r.completed);
  return nextReview ? new Date(nextReview.dueDate) : null;
};

/**
 * Get review statistics from Firestore
 */
export const getReviewStats = async () => {
  const scheduleData = await getReviewSchedule();
  const dueReviews = await getDueReviews();
  
  let totalLessons = Object.keys(scheduleData).length;
  let masteredCount = 0;
  let totalReviewsCompleted = 0;
  
  Object.values(scheduleData).forEach(data => {
    if (data.masteryLevel >= 4) {
      masteredCount++;
    }
    totalReviewsCompleted += data.reviews.filter(r => r.completed).length;
  });
  
  return {
    totalLessons,
    dueCount: dueReviews.length,
    masteredCount,
    totalReviewsCompleted
  };
};
