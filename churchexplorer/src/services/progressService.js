// Achievement event listeners for cross-component notifications
// Note: All progress data now stored in Firestore - no localStorage

let achievementListeners = [];

export function onAchievement(callback) {
  achievementListeners.push(callback);
  return () => {
    achievementListeners = achievementListeners.filter(cb => cb !== callback);
  };
}

export function notifyAchievement() {
  achievementListeners.forEach(callback => callback());
}

