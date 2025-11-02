import { doc, getDoc, updateDoc, collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from './config';

/**
 * Update user's XP in Firestore
 */
export const updateUserXP = async (uid, totalXP) => {
  try {
    const userRef = doc(db, 'users', uid);
    await updateDoc(userRef, {
      totalXP: totalXP,
      lastUpdated: new Date().toISOString()
    });
    return { success: true };
  } catch (error) {
    console.error('Update XP error:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Get top users by XP for leaderboard
 * @param {number} topN - Number of top users to fetch (default 100)
 */
export const getLeaderboard = async (topN = 100) => {
  try {
    // Get all users first
    const usersRef = collection(db, 'users');
    const usersSnapshot = await getDocs(usersRef);
    
    const leaderboard = [];
    
    // For each user, get their progress document
    for (const userDoc of usersSnapshot.docs) {
      const userData = userDoc.data();
      const uid = userDoc.id;
      
      // Get user's progress document
      const progressRef = doc(db, 'users', uid, 'progress', 'main');
      const progressDoc = await getDoc(progressRef);
      
      const totalXP = progressDoc.exists() ? (progressDoc.data().totalXP || 0) : 0;
      
      leaderboard.push({
        uid: userData.uid || uid,
        firstName: userData.firstName,
        lastName: userData.lastName,
        name: userData.name, // Keep for backward compatibility
        country: userData.country,
        totalXP: totalXP
      });
    }
    
    // Sort by totalXP descending and limit
    leaderboard.sort((a, b) => b.totalXP - a.totalXP);
    const topLeaderboard = leaderboard.slice(0, topN);

    return { success: true, leaderboard: topLeaderboard };
  } catch (error) {
    console.error('Get leaderboard error:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Get user's rank on the leaderboard
 */
export const getUserRank = async (uid, userXP) => {
  try {
    const usersRef = collection(db, 'users');
    const q = query(usersRef, orderBy('totalXP', 'desc'));
    const querySnapshot = await getDocs(q);
    
    let rank = 1;
    let found = false;
    
    querySnapshot.forEach((doc) => {
      if (doc.data().uid === uid) {
        found = true;
        return;
      }
      if (!found) {
        rank++;
      }
    });

    return { success: true, rank: found ? rank : null };
  } catch (error) {
    console.error('Get user rank error:', error);
    return { success: false, error: error.message };
  }
};
