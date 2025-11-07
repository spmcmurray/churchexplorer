import { 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc, 
  increment,
  arrayUnion,
  serverTimestamp 
} from 'firebase/firestore';
import { db } from './config';

/**
 * Firestore Progress Tracking Service
 * 
 * Schema:
 * users/{uid}/progress - Main progress document
 * {
 *   totalXP: number,
 *   courses: {
 *     bible: { completedLessons: [1,2,3], totalXP: 150, lastCompleted: timestamp },
 *     church: { completedLessons: [1,2], totalXP: 100, lastCompleted: timestamp },
 *     apologetics: { completedLessons: [1], totalXP: 50, lastCompleted: timestamp },
 *     biblicalCanon: { completedLessons: [], totalXP: 0, lastCompleted: null },
 *     earlyChristianity: { completedLessons: [], totalXP: 0, lastCompleted: null },
 *     interpretation: { completedLessons: [], totalXP: 0, lastCompleted: null },
 *     councilsWorship: { completedLessons: [], totalXP: 0, lastCompleted: null },
 *     translations: { completedLessons: [], totalXP: 0, lastCompleted: null },
 *     gospelMessage: { completedLessons: [], totalXP: 0, lastCompleted: null },
 *     discerningTruth: { completedLessons: [], totalXP: 0, lastCompleted: null }
 *   },
 *   dailyChallenges: {
 *     totalCompleted: number,
 *     totalXP: number,
 *     streak: number,
 *     lastCompletedDate: string, // YYYY-MM-DD format
 *     completedDates: [string], // Array of YYYY-MM-DD dates
 *   },
 *   reviews: {
 *     totalCompleted: number,
 *     totalXP: number,
 *     sessions: [{ date: timestamp, xpEarned: number, questionsCorrect: number, totalQuestions: number }]
 *   },
 *   lastUpdated: timestamp
 * }
 */

/**
 * Initialize user progress document
 */
export const initializeUserProgress = async (uid) => {
  try {
    const progressRef = doc(db, 'users', uid, 'progress', 'main');
    const progressDoc = await getDoc(progressRef);
    
    if (!progressDoc.exists()) {
      const initialProgress = {
        totalXP: 0,
        courses: {
          bible: { completedLessons: [], totalXP: 0, lastCompleted: null },
          church: { completedLessons: [], totalXP: 0, lastCompleted: null },
          apologetics: { completedLessons: [], totalXP: 0, lastCompleted: null },
          biblicalCanon: { completedLessons: [], totalXP: 0, lastCompleted: null },
          earlyChristianity: { completedLessons: [], totalXP: 0, lastCompleted: null },
          interpretation: { completedLessons: [], totalXP: 0, lastCompleted: null },
          councilsWorship: { completedLessons: [], totalXP: 0, lastCompleted: null },
          translations: { completedLessons: [], totalXP: 0, lastCompleted: null },
          gospelMessage: { completedLessons: [], totalXP: 0, lastCompleted: null },
          discerningTruth: { completedLessons: [], totalXP: 0, lastCompleted: null }
        },
        dailyChallenges: {
          totalCompleted: 0,
          totalXP: 0,
          streak: 0,
          lastCompletedDate: null,
          completedDates: []
        },
        studyGuide: {
          completedWeeks: [],
          quizScores: {},
          lastUpdated: null
        },
        reviews: {
          totalCompleted: 0,
          totalXP: 0,
          sessions: []
        },
        lastUpdated: serverTimestamp()
      };
      
      await setDoc(progressRef, initialProgress);
      return { success: true, progress: initialProgress };
    }
    
    return { success: true, progress: progressDoc.data() };
  } catch (error) {
    console.error('Initialize progress error:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Get user's complete progress
 */
export const getUserProgress = async (uid) => {
  try {
    const progressRef = doc(db, 'users', uid, 'progress', 'main');
    const progressDoc = await getDoc(progressRef);
    
    if (progressDoc.exists()) {
      return { success: true, progress: progressDoc.data() };
    }
    
    // Initialize if doesn't exist
    return await initializeUserProgress(uid);
  } catch (error) {
    console.error('Get progress error:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Complete a course lesson and award XP
 * Supports standard courses (bible, church, apologetics) and AI-generated lessons
 */
export const completeCourseLesson = async (uid, courseId, lessonNumber, xpAwarded) => {
  try {
    const progressRef = doc(db, 'users', uid, 'progress', 'main');
    
    // Get current progress to check if lesson already completed
    const progressDoc = await getDoc(progressRef);
    if (!progressDoc.exists()) {
      await initializeUserProgress(uid);
    }
    
    const currentProgress = progressDoc.data() || {};
    
    // Handle AI-generated lessons differently (just award XP, no lesson tracking by number)
    if (courseId === 'ai_generated') {
      // For AI lessons, we track completion separately in aiPathProgress
      // Just award the XP to totalXP
      await updateDoc(progressRef, {
        totalXP: increment(xpAwarded),
        lastUpdated: serverTimestamp()
      });
      
      return { success: true, xpAwarded, message: 'AI lesson XP awarded successfully' };
    }
    
    // Standard course logic
    const courseProgress = currentProgress.courses?.[courseId] || { completedLessons: [], totalXP: 0 };
    
    // Check if lesson already completed
    if (courseProgress.completedLessons.includes(lessonNumber)) {
      return { success: true, message: 'Lesson already completed', xpAwarded: 0 };
    }
    
    // Update progress - progress.totalXP is the single source of truth
    await updateDoc(progressRef, {
      [`courses.${courseId}.completedLessons`]: arrayUnion(lessonNumber),
      [`courses.${courseId}.totalXP`]: increment(xpAwarded),
      [`courses.${courseId}.lastCompleted`]: serverTimestamp(),
      totalXP: increment(xpAwarded),
      lastUpdated: serverTimestamp()
    });
    
    return { success: true, xpAwarded, message: 'Lesson completed successfully' };
  } catch (error) {
    console.error('Complete lesson error:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Complete daily challenge and award XP
 */
export const completeDailyChallenge = async (uid, date, xpAwarded) => {
  try {
    const progressRef = doc(db, 'users', uid, 'progress', 'main');
    
    // Ensure progress document exists
    const progressDoc = await getDoc(progressRef);
    if (!progressDoc.exists()) {
      await initializeUserProgress(uid);
    }
    
    const currentProgress = progressDoc.data() || {};
    const dailyProgress = currentProgress.dailyChallenges || {};
    
    // Check if already completed today
    if (dailyProgress.completedDates?.includes(date)) {
      return { success: true, message: 'Daily challenge already completed today', xpAwarded: 0 };
    }
    
    // Calculate new streak
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];
    
    let newStreak = 1;
    if (dailyProgress.lastCompletedDate === yesterdayStr) {
      newStreak = (dailyProgress.streak || 0) + 1;
    }
    
    // Update progress
    await updateDoc(progressRef, {
      'dailyChallenges.totalCompleted': increment(1),
      'dailyChallenges.totalXP': increment(xpAwarded),
      'dailyChallenges.streak': newStreak,
      'dailyChallenges.lastCompletedDate': date,
      'dailyChallenges.completedDates': arrayUnion(date),
      totalXP: increment(xpAwarded),
      lastUpdated: serverTimestamp()
    });
    
    return { success: true, xpAwarded, streak: newStreak, message: 'Daily challenge completed' };
  } catch (error) {
    console.error('Complete daily challenge error:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Complete review session and award XP
 */
export const completeReviewSession = async (uid, questionsCorrect, totalQuestions, xpAwarded) => {
  try {
    const progressRef = doc(db, 'users', uid, 'progress', 'main');
    
    // Ensure progress document exists
    const progressDoc = await getDoc(progressRef);
    if (!progressDoc.exists()) {
      await initializeUserProgress(uid);
    }
    
    const reviewSession = {
      date: serverTimestamp(),
      xpEarned: xpAwarded,
      questionsCorrect,
      totalQuestions,
      accuracy: Math.round((questionsCorrect / totalQuestions) * 100)
    };
    
    // Update progress
    await updateDoc(progressRef, {
      'reviews.totalCompleted': increment(1),
      'reviews.totalXP': increment(xpAwarded),
      'reviews.sessions': arrayUnion(reviewSession),
      totalXP: increment(xpAwarded),
      lastUpdated: serverTimestamp()
    });
    
    return { success: true, xpAwarded, accuracy: reviewSession.accuracy, message: 'Review session completed' };
  } catch (error) {
    console.error('Complete review session error:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Get course progress for a specific course
 */
export const getCourseProgress = async (uid, courseId) => {
  try {
    const result = await getUserProgress(uid);
    if (!result.success) return result;
    
    const courseProgress = result.progress.courses?.[courseId] || {
      completedLessons: [],
      totalXP: 0,
      lastCompleted: null
    };
    
    return { success: true, progress: courseProgress };
  } catch (error) {
    console.error('Get course progress error:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Get daily challenge progress
 */
export const getDailyChallengeProgress = async (uid) => {
  try {
    const result = await getUserProgress(uid);
    if (!result.success) return result;
    
    const dailyProgress = result.progress.dailyChallenges || {
      totalCompleted: 0,
      totalXP: 0,
      streak: 0,
      lastCompletedDate: null,
      completedDates: []
    };
    
    return { success: true, progress: dailyProgress };
  } catch (error) {
    console.error('Get daily challenge progress error:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Get review session history
 */
export const getReviewProgress = async (uid) => {
  try {
    const result = await getUserProgress(uid);
    if (!result.success) return result;
    
    const reviewProgress = result.progress.reviews || {
      totalCompleted: 0,
      totalXP: 0,
      sessions: []
    };
    
    return { success: true, progress: reviewProgress };
  } catch (error) {
    console.error('Get review progress error:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Migrate local storage progress to Firestore
 * This helps users transition from local storage to Firestore
 */
export const migrateLocalProgressToFirestore = async (uid, localProgress) => {
  try {
    const progressRef = doc(db, 'users', uid, 'progress', 'main');
    
    // Get existing Firestore progress
    const existingDoc = await getDoc(progressRef);
    if (existingDoc.exists()) {
      const existing = existingDoc.data();
      // Only migrate if Firestore has less progress than local
      if (existing.totalXP >= localProgress.totalXP) {
        return { success: true, message: 'Firestore already has more recent data' };
      }
    }
    
    // Migrate local data to Firestore format
    const migratedProgress = {
      totalXP: localProgress.totalXP || 0,
      courses: {
        bible: {
          completedLessons: localProgress.bibleProgress || [],
          totalXP: localProgress.bibleXP || 0,
          lastCompleted: localProgress.bibleProgress?.length > 0 ? serverTimestamp() : null
        },
        church: {
          completedLessons: localProgress.churchProgress || [],
          totalXP: localProgress.churchXP || 0,
          lastCompleted: localProgress.churchProgress?.length > 0 ? serverTimestamp() : null
        },
        apologetics: {
          completedLessons: localProgress.apologeticsProgress || [],
          totalXP: localProgress.apologeticsXP || 0,
          lastCompleted: localProgress.apologeticsProgress?.length > 0 ? serverTimestamp() : null
        }
      },
      dailyChallenges: {
        totalCompleted: localProgress.dailyChallengeCompleted || 0,
        totalXP: localProgress.dailyChallengeXP || 0,
        streak: localProgress.dailyChallengeStreak || 0,
        lastCompletedDate: localProgress.lastDailyChallengeDate || null,
        completedDates: localProgress.dailyChallengeDates || []
      },
      reviews: {
        totalCompleted: localProgress.reviewSessionsCompleted || 0,
        totalXP: localProgress.reviewXP || 0,
        sessions: localProgress.reviewSessions || []
      },
      lastUpdated: serverTimestamp(),
      migratedFrom: 'localStorage',
      migrationDate: serverTimestamp()
    };
    
    // Save migrated progress
    await setDoc(progressRef, migratedProgress);
    
    // Update user's total XP in main profile
    const userRef = doc(db, 'users', uid);
    await updateDoc(userRef, {
      totalXP: migratedProgress.totalXP,
      lastUpdated: serverTimestamp()
    });
    
    return { success: true, message: 'Local progress migrated to Firestore successfully' };
  } catch (error) {
    console.error('Migration error:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Save AI-generated path to Firestore for a user
 */
export const saveAIPathToFirestore = async (uid, path) => {
  try {
    // Save to global aiPaths collection (not user subcollection)
    const pathRef = doc(db, 'aiPaths', path.id);
    await setDoc(pathRef, {
      ...path,
      userId: uid,
      isPublic: path.isPublic !== undefined ? path.isPublic : false, // Preserve if already set
      averageRating: path.averageRating || 0,
      ratingCount: path.ratingCount || 0,
      ratingDistribution: path.ratingDistribution || { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
      cloneCount: path.cloneCount || 0,
      savedAt: path.savedAt || serverTimestamp(),
      createdAt: path.createdAt || serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    return { success: true };
  } catch (error) {
    console.error('Error saving AI path to Firestore:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Migrate a path from old location to new location
 */
export const migratePathToNewLocation = async (uid, pathId) => {
  try {
    console.log('🔄 Migrating path', pathId, 'from old to new location...');
    
    // Read from old location
    const { getDoc: getDocFn } = await import('firebase/firestore');
    const oldPathRef = doc(db, 'users', uid, 'aiPaths', pathId);
    const oldPathDoc = await getDocFn(oldPathRef);
    
    if (!oldPathDoc.exists()) {
      return { success: false, error: 'Path not found in old location' };
    }
    
    const pathData = oldPathDoc.data();
    
    // Save to new location with rating fields initialized
    const result = await saveAIPathToFirestore(uid, {
      ...pathData,
      id: pathId
    });
    
    if (result.success) {
      console.log('✅ Path migrated successfully');
      // Optionally delete from old location after successful migration
      // For now, we'll keep it in both places for safety
    }
    
    return result;
  } catch (error) {
    console.error('Error migrating path:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Get all AI paths for a user from Firestore (REFERENCE MODEL)
 * Fetches both owned paths and referenced community paths
 */
export const getAIPathsFromFirestore = async (uid) => {
  try {
    console.log('🔍 Loading AI paths for user:', uid);
    const { collection, getDocs, query, where, orderBy, getDoc: getDocFn } = await import('firebase/firestore');
    
    let paths = [];
    
    // 1. Get user's OWNED paths from OLD location (user subcollection) - backward compatibility
    try {
      console.log('📂 Checking OLD location: users/' + uid + '/aiPaths');
      const oldPathsRef = collection(db, 'users', uid, 'aiPaths');
      const oldQuery = query(oldPathsRef, orderBy('savedAt', 'desc'));
      const oldSnapshot = await getDocs(oldQuery);
      
      console.log('📊 Found', oldSnapshot.size, 'paths in OLD location');
      
      oldSnapshot.forEach((doc) => {
        const data = doc.data();
        console.log('  ✓ Owned path (old):', doc.id, data.title);
        paths.push({
          ...data,
          id: doc.id,
          isOwned: true,
          _fromOldLocation: true
        });
      });
    } catch (oldError) {
      console.error('❌ Error reading OLD location:', oldError);
    }
    
    // 2. Get user's OWNED paths from NEW location (global collection with userId)
    // Also use this to update rating data for paths from old location
    const newLocationPaths = new Map();
    try {
      console.log('📂 Checking NEW location: aiPaths where userId ==', uid);
      const globalPathsRef = collection(db, 'aiPaths');
      const globalQuery = query(globalPathsRef, where('userId', '==', uid), orderBy('savedAt', 'desc'));
      const globalSnapshot = await getDocs(globalQuery);
      
      console.log('📊 Found', globalSnapshot.size, 'owned paths in NEW location');
      
      globalSnapshot.forEach((doc) => {
        const data = doc.data();
        newLocationPaths.set(doc.id, data);
        
        // Only add if not already in paths (avoid duplicates)
        if (!paths.find(p => p.id === doc.id)) {
          console.log('  ✓ Owned path (new):', doc.id, data.title);
          paths.push({
            ...data,
            id: doc.id,
            isOwned: true
          });
        }
      });
      
      // Merge rating data from NEW location into OLD location paths
      paths = paths.map(path => {
        if (path._fromOldLocation && newLocationPaths.has(path.id)) {
          const newData = newLocationPaths.get(path.id);
          console.log('  🔄 Merging rating data for:', path.id, {
            ratingCount: newData.ratingCount,
            averageRating: newData.averageRating,
            isPublic: newData.isPublic
          });
          return {
            ...path,
            averageRating: newData.averageRating || 0,
            ratingCount: newData.ratingCount || 0,
            ratingDistribution: newData.ratingDistribution || { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
            isPublic: newData.isPublic || false,
            cloneCount: newData.cloneCount || 0
          };
        }
        return path;
      });
    } catch (globalError) {
      console.error('❌ Error reading NEW location:', globalError);
    }
    
    // 3. Get user's REFERENCED paths (community paths they've cloned)
    try {
      console.log('📂 Checking REFERENCES: users/' + uid + '/pathReferences');
      const referencesRef = collection(db, 'users', uid, 'pathReferences');
      const referencesSnapshot = await getDocs(referencesRef);
      
      console.log('📊 Found', referencesSnapshot.size, 'referenced paths');
      
      // Fetch the actual path data for each reference
      for (const refDoc of referencesSnapshot.docs) {
        const refData = refDoc.data();
        const pathId = refData.pathId;
        
        // Fetch the actual path from aiPaths collection
        const pathRef = doc(db, 'aiPaths', pathId);
        const pathDoc = await getDocFn(pathRef);
        
        if (pathDoc.exists()) {
          const pathData = pathDoc.data();
          console.log('  ✓ Referenced path:', pathId, pathData.title);
          paths.push({
            ...pathData,
            id: pathId,
            isOwned: false,
            isReference: true,
            clonedAt: refData.clonedAt,
            originalCreator: refData.originalCreator
          });
        } else {
          console.warn('  ⚠️ Referenced path not found:', pathId);
        }
      }
    } catch (refError) {
      console.error('❌ Error reading REFERENCES:', refError);
    }
    
    // Sort all paths by savedAt or clonedAt
    paths.sort((a, b) => {
      const aTime = a.clonedAt?.toMillis?.() || a.savedAt?.toMillis?.() || 0;
      const bTime = b.clonedAt?.toMillis?.() || b.savedAt?.toMillis?.() || 0;
      return bTime - aTime;
    });
    
    console.log('✅ Total paths loaded:', paths.length);
    console.log('   - Owned:', paths.filter(p => p.isOwned).length);
    console.log('   - Referenced:', paths.filter(p => p.isReference).length);
    
    return { success: true, paths };
  } catch (error) {
    console.error('❌ Error loading AI paths from Firestore:', error);
    return { success: false, error: error.message, paths: [] };
  }
};

/**
 * Delete AI path from Firestore (REFERENCE MODEL)
 * Handles owned paths and referenced paths differently
 */
export const deleteAIPathFromFirestore = async (uid, pathId) => {
  try {
    const { deleteDoc, getDoc: getDocFn } = await import('firebase/firestore');
    
    // Check if this is a reference first
    const referenceRef = doc(db, 'users', uid, 'pathReferences', pathId);
    const referenceDoc = await getDocFn(referenceRef);
    
    if (referenceDoc.exists()) {
      // This is a referenced path - just delete the reference
      console.log('🗑️ Deleting path reference:', pathId);
      await deleteDoc(referenceRef);
      
      // Delete progress for this reference
      const progressRef = doc(db, 'users', uid, 'aiPathProgress', pathId);
      await deleteDoc(progressRef);
      
      // Decrement clone count on original path
      try {
        const originalPathRef = doc(db, 'aiPaths', pathId);
        await updateDoc(originalPathRef, {
          cloneCount: increment(-1)
        });
      } catch (err) {
        console.warn('Could not decrement clone count:', err);
      }
      
      return { success: true };
    }
    
    // Not a reference, so it's an owned path - delete the actual path
    console.log('🗑️ Deleting owned path:', pathId);
    
    // Try to delete from global aiPaths collection (new location)
    try {
      const globalPathRef = doc(db, 'aiPaths', pathId);
      await deleteDoc(globalPathRef);
    } catch (err) {
      console.log('Path not in global collection (might be in old location)');
    }
    
    // Also try to delete from old location (user subcollection)
    try {
      const oldPathRef = doc(db, 'users', uid, 'aiPaths', pathId);
      await deleteDoc(oldPathRef);
    } catch (err) {
      console.log('Path not in user subcollection (might be in new location)');
    }
    
    // Delete progress (always in user subcollection)
    const progressRef = doc(db, 'users', uid, 'aiPathProgress', pathId);
    await deleteDoc(progressRef);
    
    return { success: true };
  } catch (error) {
    console.error('Error deleting AI path from Firestore:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Save AI path progress to Firestore
 */
export const saveAIPathProgressToFirestore = async (uid, pathId, completedLessons) => {
  try {
    const progressRef = doc(db, 'users', uid, 'aiPathProgress', pathId);
    await setDoc(progressRef, {
      completedLessons,
      lastUpdated: serverTimestamp()
    });
    return { success: true };
  } catch (error) {
    console.error('Error saving AI path progress:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Get AI path progress from Firestore
 */
export const getAIPathProgressFromFirestore = async (uid, pathId) => {
  try {
    const progressRef = doc(db, 'users', uid, 'aiPathProgress', pathId);
    const progressDoc = await getDoc(progressRef);
    
    if (progressDoc.exists()) {
      return { success: true, progress: progressDoc.data() };
    }
    return { success: true, progress: { completedLessons: [] } };
  } catch (error) {
    console.error('Error loading AI path progress:', error);
    return { success: false, error: error.message, progress: { completedLessons: [] } };
  }
};

/**
 * Update study guide progress (completedWeeks and quizScores)
 */
export const updateStudyGuideProgress = async (uid, completedWeeks, quizScores) => {
  try {
    const progressRef = doc(db, 'users', uid, 'progress', 'main');
    
    await updateDoc(progressRef, {
      studyGuide: {
        completedWeeks: completedWeeks || [],
        quizScores: quizScores || {},
        lastUpdated: serverTimestamp()
      },
      lastUpdated: serverTimestamp()
    });
    
    return { success: true };
  } catch (error) {
    console.error('Error updating study guide progress:', error);
    return { success: false, error: error.message };
  }
};
