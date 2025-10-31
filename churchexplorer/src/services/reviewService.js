// Spaced Repetition Review Service

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
 * Schedule reviews when a lesson is completed
 */
export const scheduleReviews = (path, lessonNumber) => {
  const lessonKey = getLessonKey(path, lessonNumber);
  const completedDate = new Date().toISOString();
  
  // Get existing schedule or create new
  const scheduleData = getReviewSchedule();
  
  // Don't reschedule if already exists
  if (scheduleData[lessonKey]) {
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
  
  scheduleData[lessonKey] = {
    path,
    lessonNumber,
    completedDate,
    reviews,
    masteryLevel: 0
  };
  
  localStorage.setItem('reviewSchedule', JSON.stringify(scheduleData));
};

/**
 * Get all review schedule data
 */
export const getReviewSchedule = () => {
  const data = localStorage.getItem('reviewSchedule');
  return data ? JSON.parse(data) : {};
};

/**
 * Get reviews that are due today or overdue
 */
export const getDueReviews = () => {
  const scheduleData = getReviewSchedule();
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
 * Mark a review as completed
 */
export const markReviewComplete = (path, lessonNumber, score) => {
  const lessonKey = getLessonKey(path, lessonNumber);
  const scheduleData = getReviewSchedule();
  
  if (!scheduleData[lessonKey]) {
    return;
  }
  
  const lessonData = scheduleData[lessonKey];
  const nextReview = lessonData.reviews.find(r => !r.completed);
  
  if (nextReview) {
    nextReview.completed = true;
    nextReview.completedDate = new Date().toISOString();
    nextReview.score = score;
    
    // Update mastery level
    const completedReviews = lessonData.reviews.filter(r => r.completed).length;
    lessonData.masteryLevel = completedReviews;
    
    localStorage.setItem('reviewSchedule', JSON.stringify(scheduleData));
  }
};

/**
 * Get mastery info for a lesson
 */
export const getMasteryInfo = (path, lessonNumber) => {
  const lessonKey = getLessonKey(path, lessonNumber);
  const scheduleData = getReviewSchedule();
  
  if (!scheduleData[lessonKey]) {
    return MASTERY_LEVELS[0];
  }
  
  const masteryLevel = scheduleData[lessonKey].masteryLevel;
  return MASTERY_LEVELS[masteryLevel] || MASTERY_LEVELS[0];
};

/**
 * Get next review date for a lesson
 */
export const getNextReviewDate = (path, lessonNumber) => {
  const lessonKey = getLessonKey(path, lessonNumber);
  const scheduleData = getReviewSchedule();
  
  if (!scheduleData[lessonKey]) {
    return null;
  }
  
  const nextReview = scheduleData[lessonKey].reviews.find(r => !r.completed);
  return nextReview ? new Date(nextReview.dueDate) : null;
};

/**
 * Get review statistics
 */
export const getReviewStats = () => {
  const scheduleData = getReviewSchedule();
  const dueReviews = getDueReviews();
  
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
