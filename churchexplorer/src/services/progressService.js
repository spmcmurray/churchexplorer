// Unified progress and profile utilities across modules

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
