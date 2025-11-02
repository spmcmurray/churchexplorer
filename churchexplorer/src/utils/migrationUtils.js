import { getCurrentUser } from '../firebase/authService';
import { migrateLocalProgressToFirestore, getUserProgress } from '../firebase/progressService';

/**
 * Extract current local storage progress data
 */
const extractLocalProgress = () => {
  const getLocalItem = (key) => {
    try {
      const value = localStorage.getItem(key);
      return value ? (key.includes('Progress') ? JSON.parse(value) : parseInt(value)) : null;
    } catch {
      return null;
    }
  };

  return {
    totalXP: 
      (getLocalItem('bibleHistoryTotalXP') || 0) +
      (getLocalItem('churchHistoryTotalXP') || 0) +
      (getLocalItem('apologeticsTotalXP') || 0),
    
    // Course progress
    bibleProgress: getLocalItem('bibleHistoryProgress') || [],
    bibleXP: getLocalItem('bibleHistoryTotalXP') || 0,
    
    churchProgress: getLocalItem('churchHistoryProgress') || [],
    churchXP: getLocalItem('churchHistoryTotalXP') || 0,
    
    apologeticsProgress: getLocalItem('apologeticsProgress') || [],
    apologeticsXP: getLocalItem('apologeticsTotalXP') || 0,
    
    // Daily challenges
    dailyChallengeCompleted: getLocalItem('dailyChallengeCompleted') || 0,
    dailyChallengeXP: getLocalItem('dailyChallengeXP') || 0,
    dailyChallengeStreak: getLocalItem('dailyChallengeStreak') || 0,
    lastDailyChallengeDate: getLocalItem('lastDailyChallengeDate'),
    dailyChallengeDates: getLocalItem('dailyChallengeDates') || [],
    
    // Reviews
    reviewSessionsCompleted: getLocalItem('reviewSessionsCompleted') || 0,
    reviewXP: getLocalItem('reviewXP') || 0,
    reviewSessions: getLocalItem('reviewSessions') || []
  };
};

/**
 * Check if user needs migration and perform it if necessary
 */
export const checkAndMigrateProgress = async () => {
  const user = getCurrentUser();
  if (!user) return { success: false, error: 'User not logged in' };

  try {
    // Get local storage progress
    const localProgress = extractLocalProgress();
    
    // Check if there's any local progress worth migrating
    if (localProgress.totalXP === 0) {
      return { success: true, message: 'No local progress to migrate' };
    }

    // Get current Firestore progress
    const firestoreResult = await getUserProgress(user.uid);
    if (!firestoreResult.success) {
      // If Firestore progress doesn't exist, definitely migrate
      console.log('No Firestore progress found, migrating local data...');
      return await migrateLocalProgressToFirestore(user.uid, localProgress);
    }

    const firestoreProgress = firestoreResult.progress;
    
    // Compare total XP to decide if migration is needed
    if (localProgress.totalXP > (firestoreProgress.totalXP || 0)) {
      console.log(`Local XP (${localProgress.totalXP}) > Firestore XP (${firestoreProgress.totalXP}), migrating...`);
      return await migrateLocalProgressToFirestore(user.uid, localProgress);
    }

    return { success: true, message: 'Firestore progress is up to date' };
  } catch (error) {
    console.error('Migration check error:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Force migration (for manual use)
 */
export const forceMigration = async () => {
  const user = getCurrentUser();
  if (!user) return { success: false, error: 'User not logged in' };

  const localProgress = extractLocalProgress();
  return await migrateLocalProgressToFirestore(user.uid, localProgress);
};

/**
 * Clear local storage after successful migration
 */
export const clearLocalStorageAfterMigration = () => {
  const keysToRemove = [
    'bibleHistoryProgress',
    'bibleHistoryTotalXP',
    'bibleHistoryQuizResults',
    'churchHistoryProgress', 
    'churchHistoryTotalXP',
    'churchHistoryQuizResults',
    'apologeticsProgress',
    'apologeticsTotalXP',
    'dailyChallengeCompleted',
    'dailyChallengeXP',
    'dailyChallengeStreak',
    'lastDailyChallengeDate',
    'dailyChallengeDates',
    'reviewSessionsCompleted',
    'reviewXP',
    'reviewSessions',
    'reviewSchedule'
  ];

  keysToRemove.forEach(key => {
    localStorage.removeItem(key);
  });

  console.log('Local storage cleared after migration');
};