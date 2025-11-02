import { doc, updateDoc, collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
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
    const usersRef = collection(db, 'users');
    const q = query(usersRef, orderBy('totalXP', 'desc'), limit(topN));
    const querySnapshot = await getDocs(q);
    
    const leaderboard = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      leaderboard.push({
        uid: data.uid,
        firstName: data.firstName,
        lastName: data.lastName,
        name: data.name, // Keep for backward compatibility
        country: data.country,
        totalXP: data.totalXP || 0
      });
    });

    return { success: true, leaderboard };
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
