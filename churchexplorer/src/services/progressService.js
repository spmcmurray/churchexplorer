// Unified progress and profile utilities across modules
import { getCurrentUser } from '../firebase/authService';
import { updateUserXP } from '../firebase/leaderboardService';

// Achievement event listeners
let achievementListeners = [];

export function onAchievement(callback) {
  achievementListeners.push(callback);
  return () => {
    achievementListeners = achievementListeners.filter(cb => cb !== callback);
  };
}

function notifyAchievement() {
  achievementListeners.forEach(callback => callback());
}

const KEYS = {
  profile: 'userProfile',
  churchProgress: 'churchHistoryProgress',
  churchXP: 'churchHistoryTotalXP',
  bibleProgress: 'bibleHistoryProgress',
  bibleXP: 'bibleHistoryTotalXP',
  apologeticsProgress: 'apologeticsProgress',
  apologeticsXP: 'apologeticsTotalXP',
};

export function getProfile() {
  try {
    const raw = localStorage.getItem(KEYS.profile);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function saveProfile(profile) {
  const existing = getProfile() || {};
  const merged = { ...existing, ...profile, updatedAt: new Date().toISOString() };
  localStorage.setItem(KEYS.profile, JSON.stringify(merged));
  return merged;
}

function readArray(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function readInt(key) {
  const raw = localStorage.getItem(key);
  return raw ? parseInt(raw) : 0;
}

export function getPathProgress(pathId) {
  // pathId: 'bible' | 'church' | 'apologetics'
  if (pathId === 'bible') {
    const completed = readArray(KEYS.bibleProgress);
    return { completedCount: completed.length, total: 8, xp: readInt(KEYS.bibleXP) };
  }
  if (pathId === 'church') {
    const completed = readArray(KEYS.churchProgress);
    return { completedCount: completed.length, total: 8, xp: readInt(KEYS.churchXP) };
  }
  if (pathId === 'apologetics') {
    const completed = readArray(KEYS.apologeticsProgress);
    return { completedCount: completed.length, total: 8, xp: readInt(KEYS.apologeticsXP) };
  }
  return { completedCount: 0, total: 0, xp: 0 };
}

export function getOverallProgress() {
  const bible = getPathProgress('bible');
  const church = getPathProgress('church');
  const apologetics = getPathProgress('apologetics');
  const totalCompleted = bible.completedCount + church.completedCount + apologetics.completedCount;
  const totalLessons = bible.total + church.total + apologetics.total;
  const xp = bible.xp + church.xp + apologetics.xp;
  const percentage = totalLessons ? Math.round((totalCompleted / totalLessons) * 100) : 0;
  return { percentage, xp, paths: { bible, church, apologetics } };
}

/**
 * Get total XP across all paths
 */
export function getTotalXP() {
  const bible = readInt(KEYS.bibleXP);
  const church = readInt(KEYS.churchXP);
  const apologetics = readInt(KEYS.apologeticsXP);
  return bible + church + apologetics;
}

/**
 * Sync XP to Firebase if user is logged in
 */
async function syncXPToFirebase() {
  try {
    const user = getCurrentUser();
    if (user) {
      const totalXP = getTotalXP();
      await updateUserXP(user.uid, totalXP);
    }
  } catch (error) {
    console.error('Failed to sync XP to Firebase:', error);
    // Don't throw - allow local progress to continue even if sync fails
  }
}

/**
 * Update XP for a specific path and sync to Firebase
 */
export async function updatePathXP(pathId, xp) {
  const key = pathId === 'bible' ? KEYS.bibleXP : pathId === 'church' ? KEYS.churchXP : KEYS.apologeticsXP;
  localStorage.setItem(key, xp.toString());
  await syncXPToFirebase();
}

/**
 * Add XP to a specific path and sync to Firebase
 */
export async function addPathXP(pathId, xpToAdd) {
  const currentXP = readInt(pathId === 'bible' ? KEYS.bibleXP : pathId === 'church' ? KEYS.churchXP : KEYS.apologeticsXP);
  const newXP = currentXP + xpToAdd;
  await updatePathXP(pathId, newXP);
  
  // Notify achievement listeners (for sign-up prompt)
  notifyAchievement();
  
  return newXP;
}

export function getNextLesson(pathId) {
  // Completed lessons are stored as an array of lesson numbers; find the smallest missing in 1..8
  const set = new Set(readArray(
    pathId === 'bible' ? KEYS.bibleProgress : pathId === 'church' ? KEYS.churchProgress : KEYS.apologeticsProgress
  ));
  for (let i = 1; i <= 8; i++) {
    if (!set.has(i)) return i;
  }
  return null; // all done
}

export function getContinueRecommendation() {
  // Prefer a path with partial progress; else pick based on profile preference; else default to 'bible'
  const { paths } = getOverallProgress();
  const partial = [
    { id: 'bible', ...paths.bible },
    { id: 'church', ...paths.church },
    { id: 'apologetics', ...paths.apologetics },
  ].filter(p => p.completedCount > 0 && p.completedCount < p.total);
  if (partial.length) {
    // pick the one with highest completion percentage but not done
    partial.sort((a, b) => b.completedCount - a.completedCount);
    const id = partial[0].id;
    return { pathId: id, nextLesson: getNextLesson(id) };
  }
  const profile = getProfile();
  if (profile?.startingPoint === 'bible') return { pathId: 'bible', nextLesson: 1 };
  if (profile?.startingPoint === 'church') return { pathId: 'church', nextLesson: 1 };
  if (profile?.startingPoint === 'apologetics') return { pathId: 'apologetics', nextLesson: 1 };
  return { pathId: 'bible', nextLesson: 1 };
}

export function getPathMeta(pathId) {
  if (pathId === 'bible') return { title: 'Bible History', accent: 'blue', view: 'bible-history' };
  if (pathId === 'church') return { title: 'Church History', accent: 'amber', view: 'study-guide' };
  if (pathId === 'apologetics') return { title: 'Apologetics', accent: 'indigo', view: 'apologetics' };
  return { title: 'Learn', accent: 'gray', view: 'learn' };
}

export function recommendPathFromAnswers(answers) {
  // answers: { startingPoint: 'bible'|'church'|'apologetics', style?: 'read'|'interactive'|'mix' }
  const startingPoint = answers.startingPoint || 'bible';
  return { pathId: startingPoint, nextLesson: 1 };
}

/**
 * Clear all user progress data from localStorage
 * Used when signing out to reset to a fresh state
 */
export function clearAllProgress() {
  // Clear all app-related localStorage keys
  const allKeys = [
    // Progress tracking
    'userProfile',
    'churchHistoryProgress',
    'churchHistoryTotalXP',
    'churchHistoryQuizResults',
    'bibleHistoryProgress',
    'bibleHistoryTotalXP',
    'bibleHistoryQuizResults',
    'apologeticsProgress',
    'apologeticsTotalXP',
    // Daily challenge
    'dailyChallengeCompletion',
    'dailyChallengeStreak',
    // Review mode
    'reviewMode',
    // Spaced repetition (reviewService keys)
    'reviewSchedule',
    // Sign-up prompt tracking
    'hasSeenSignUpPrompt',
    'firstAchievementTime'
  ];

  allKeys.forEach(key => {
    localStorage.removeItem(key);
  });
}

/**
 * Track that user has completed their first achievement (lesson or quiz)
 * Returns true if this should trigger the sign-up prompt
 */
export function trackFirstAchievement() {
  const user = getCurrentUser();
  if (user) return false; // Already signed in, no prompt needed
  
  const hasSeenPrompt = localStorage.getItem('hasSeenSignUpPrompt');
  if (hasSeenPrompt) return false; // Already shown the prompt
  
  const firstAchievement = localStorage.getItem('firstAchievementTime');
  if (!firstAchievement) {
    // This is their first achievement!
    localStorage.setItem('firstAchievementTime', new Date().toISOString());
    return true; // Show prompt after first achievement
  }
  
  return false; // Had a previous achievement, don't prompt again
}

/**
 * Mark that user has seen the sign-up prompt
 */
export function markSignUpPromptSeen() {
  localStorage.setItem('hasSeenSignUpPrompt', 'true');
}

/**
 * Check if user should see sign-up prompt (has achievements but not signed in)
 */
export function shouldShowSignUpPrompt() {
  const user = getCurrentUser();
  if (user) return false; // Already signed in
  
  const hasSeenPrompt = localStorage.getItem('hasSeenSignUpPrompt');
  if (hasSeenPrompt) return false; // Already dismissed
  
  const totalXP = getTotalXP();
  return totalXP > 0; // Has earned XP but not signed in
}
