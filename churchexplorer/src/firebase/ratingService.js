import { 
  doc, 
  setDoc, 
  getDoc,
  collection,
  query,
  where,
  getDocs,
  orderBy,
  limit,
  updateDoc,
  increment,
  serverTimestamp,
  runTransaction
} from 'firebase/firestore';
import { db } from './config';

/**
 * Firestore Rating Service
 * 
 * Schema:
 * pathRatings/{ratingId} - Individual ratings
 * {
 *   pathId: string,
 *   userId: string,
 *   rating: number (1-5),
 *   comment: string,
 *   createdAt: timestamp,
 *   updatedAt: timestamp
 * }
 * 
 * aiPaths/{pathId} - Updated with aggregate rating data
 * {
 *   ...existing fields,
 *   averageRating: number,
 *   ratingCount: number,
 *   ratingDistribution: { 1: count, 2: count, 3: count, 4: count, 5: count }
 * }
 */

/**
 * Submit or update a path rating
 */
export const submitPathRating = async (userId, pathId, rating, comment = '') => {
  try {
    if (!userId || !pathId) {
      return { success: false, error: 'Missing required parameters' };
    }

    if (rating < 1 || rating > 5) {
      return { success: false, error: 'Rating must be between 1 and 5' };
    }

    // First, check if path exists in new location, if not migrate it
    const globalPathRef = doc(db, 'aiPaths', pathId);
    const globalPathDoc = await getDoc(globalPathRef);
    
    if (!globalPathDoc.exists()) {
      console.log('⚠️ Path not in new location, attempting migration...');
      // Try to migrate from old location
      const { migratePathToNewLocation } = await import('./progressService');
      const migrateResult = await migratePathToNewLocation(userId, pathId);
      
      if (!migrateResult.success) {
        return { 
          success: false, 
          error: 'Could not find or migrate this path. Please try creating it again.' 
        };
      }
      console.log('✅ Path migrated successfully, proceeding with rating...');
    }

    // Use transaction to ensure atomic updates
    const result = await runTransaction(db, async (transaction) => {
      // Create composite rating ID: userId_pathId
      const ratingId = `${userId}_${pathId}`;
      const ratingRef = doc(db, 'pathRatings', ratingId);
      const pathRef = doc(db, 'aiPaths', pathId);

      // Get existing rating and path
      const [ratingDoc, pathDoc] = await Promise.all([
        transaction.get(ratingRef),
        transaction.get(pathRef)
      ]);

      if (!pathDoc.exists()) {
        throw new Error('Path not found after migration attempt');
      }

      const pathData = pathDoc.data();
      const existingRating = ratingDoc.exists() ? ratingDoc.data() : null;
      const isUpdate = !!existingRating;

      // Prepare rating data
      const ratingData = {
        pathId,
        userId,
        rating,
        comment: comment.trim(),
        updatedAt: serverTimestamp()
      };

      if (!isUpdate) {
        ratingData.createdAt = serverTimestamp();
      }

      // Save/update rating
      transaction.set(ratingRef, ratingData, { merge: true });

      // Update path aggregate data
      const currentRatingCount = pathData.ratingCount || 0;
      const currentAverageRating = pathData.averageRating || 0;
      const currentDistribution = pathData.ratingDistribution || { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

      let newRatingCount, newAverageRating, newDistribution;

      if (isUpdate) {
        // Remove old rating from calculation
        const oldRating = existingRating.rating;
        const totalRatingPoints = currentAverageRating * currentRatingCount;
        const newTotalRatingPoints = totalRatingPoints - oldRating + rating;
        
        newRatingCount = currentRatingCount;
        newAverageRating = newTotalRatingPoints / newRatingCount;
        
        // Update distribution
        newDistribution = { ...currentDistribution };
        newDistribution[oldRating] = Math.max(0, newDistribution[oldRating] - 1);
        newDistribution[rating] = (newDistribution[rating] || 0) + 1;
      } else {
        // Add new rating
        const totalRatingPoints = currentAverageRating * currentRatingCount;
        const newTotalRatingPoints = totalRatingPoints + rating;
        
        newRatingCount = currentRatingCount + 1;
        newAverageRating = newTotalRatingPoints / newRatingCount;
        
        // Update distribution
        newDistribution = { ...currentDistribution };
        newDistribution[rating] = (newDistribution[rating] || 0) + 1;
      }

      // Round average to 2 decimal places
      newAverageRating = Math.round(newAverageRating * 100) / 100;

      // Update path document
      transaction.update(pathRef, {
        averageRating: newAverageRating,
        ratingCount: newRatingCount,
        ratingDistribution: newDistribution,
        lastRatedAt: serverTimestamp()
      });

      return {
        success: true,
        rating: ratingData,
        isUpdate,
        pathStats: {
          averageRating: newAverageRating,
          ratingCount: newRatingCount
        }
      };
    });

    return result;
  } catch (error) {
    console.error('Submit rating error:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Get a user's rating for a specific path
 */
export const getUserRatingForPath = async (userId, pathId) => {
  try {
    const ratingId = `${userId}_${pathId}`;
    const ratingRef = doc(db, 'pathRatings', ratingId);
    const ratingDoc = await getDoc(ratingRef);

    if (ratingDoc.exists()) {
      return { success: true, rating: ratingDoc.data() };
    }

    return { success: true, rating: null };
  } catch (error) {
    console.error('Get user rating error:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Get all ratings for a specific path
 */
export const getPathRatings = async (pathId, limitCount = 50) => {
  try {
    const ratingsQuery = query(
      collection(db, 'pathRatings'),
      where('pathId', '==', pathId),
      orderBy('updatedAt', 'desc'),
      limit(limitCount)
    );

    const querySnapshot = await getDocs(ratingsQuery);
    const ratings = [];

    querySnapshot.forEach((doc) => {
      ratings.push({
        id: doc.id,
        ...doc.data()
      });
    });

    return { success: true, ratings };
  } catch (error) {
    console.error('Get path ratings error:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Get high-rated public paths for community browsing
 * Filters: minRating (default 4.0), minRatingCount (default 3)
 */
export const getHighRatedPublicPaths = async (minRating = 4.0, minRatingCount = 3, limitCount = 50) => {
  try {
    const pathsQuery = query(
      collection(db, 'aiPaths'),
      where('isPublic', '==', true),
      where('averageRating', '>=', minRating),
      orderBy('averageRating', 'desc'),
      orderBy('ratingCount', 'desc'),
      limit(limitCount)
    );

    const querySnapshot = await getDocs(pathsQuery);
    const paths = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      
      // Additional filtering for minimum rating count
      if (data.ratingCount >= minRatingCount) {
        paths.push({
          id: doc.id,
          ...data,
          // Anonymize creator for privacy
          creatorDisplayName: data.creatorDisplayName || 'Anonymous',
          creatorId: null // Don't expose actual user ID
        });
      }
    });

    return { success: true, paths };
  } catch (error) {
    console.error('Get high-rated paths error:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Get community paths with filtering options
 */
export const getCommunityPaths = async (filters = {}) => {
  try {
    const {
      minRating = 4.0,
      minRatingCount = 3,
      maxRatingCount = null,
      category = null,
      limitCount = 50
    } = filters;

    let pathsQuery = query(
      collection(db, 'aiPaths'),
      where('isPublic', '==', true),
      where('averageRating', '>=', minRating)
    );

    // Add category filter if specified
    if (category) {
      pathsQuery = query(pathsQuery, where('category', '==', category));
    }

    pathsQuery = query(
      pathsQuery,
      orderBy('averageRating', 'desc'),
      orderBy('ratingCount', 'desc'),
      limit(limitCount)
    );

    const querySnapshot = await getDocs(pathsQuery);
    const paths = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      
      // Filter by rating count range
      const meetsMinCount = data.ratingCount >= minRatingCount;
      const meetsMaxCount = maxRatingCount === null || data.ratingCount <= maxRatingCount;
      
      if (meetsMinCount && meetsMaxCount) {
        paths.push({
          id: doc.id,
          ...data,
          // Anonymize creator
          creatorDisplayName: data.creatorDisplayName || 'Anonymous',
          creatorId: null
        });
      }
    });

    return { success: true, paths };
  } catch (error) {
    console.error('Get community paths error:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Toggle path public/private status
 */
export const togglePathPublicStatus = async (userId, pathId, isPublic) => {
  try {
    const pathRef = doc(db, 'aiPaths', pathId);
    const pathDoc = await getDoc(pathRef);

    if (!pathDoc.exists()) {
      return { success: false, error: 'Path not found' };
    }

    const pathData = pathDoc.data();

    // Verify ownership
    if (pathData.userId !== userId) {
      return { success: false, error: 'Unauthorized: You do not own this path' };
    }

    await updateDoc(pathRef, {
      isPublic,
      updatedAt: serverTimestamp()
    });

    return { success: true, isPublic };
  } catch (error) {
    console.error('Toggle public status error:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Clone a community path to user's library (REFERENCE MODEL)
 * Creates a lightweight reference instead of copying the entire path
 */
export const cloneCommunityPath = async (userId, pathId) => {
  try {
    const sourcePathRef = doc(db, 'aiPaths', pathId);
    const sourcePathDoc = await getDoc(sourcePathRef);

    if (!sourcePathDoc.exists()) {
      return { success: false, error: 'Path not found' };
    }

    const sourceData = sourcePathDoc.data();

    // Verify path is public
    if (!sourceData.isPublic) {
      return { success: false, error: 'This path is not publicly available' };
    }

    // Create lightweight reference instead of copying entire path
    const referenceRef = doc(db, 'users', userId, 'pathReferences', pathId);
    const referenceData = {
      pathId: pathId, // Points to the original path
      originalCreator: sourceData.creatorDisplayName || 'Anonymous',
      clonedAt: serverTimestamp(),
      isReference: true, // Flag to indicate this is a reference, not an owned path
      // Store minimal metadata for quick display
      title: sourceData.title,
      description: sourceData.description,
      lessonCount: sourceData.lessons?.length || 0
    };

    await setDoc(referenceRef, referenceData);

    // Increment clone count on original path
    await updateDoc(sourcePathRef, {
      cloneCount: increment(1)
    });

    return { 
      success: true, 
      pathId: pathId,
      isReference: true,
      message: 'Path successfully added to your library'
    };
  } catch (error) {
    console.error('Clone path error:', error);
    return { success: false, error: error.message };
  }
};

export default {
  submitPathRating,
  getUserRatingForPath,
  getPathRatings,
  getHighRatedPublicPaths,
  getCommunityPaths,
  togglePathPublicStatus,
  cloneCommunityPath
};
