import React, { useMemo, useState, useEffect } from 'react';
import { Flame, PlayCircle, Sparkles, BookOpen, Calendar, UserPlus, Award, Trophy } from 'lucide-react';
import DailyChallenge from './DailyChallenge';
import { getDueReviews } from './services/reviewService';

const Home = ({ onNavigate, onStartOnboarding, userProgress, onShowAuth, currentUser, onProgressUpdate }) => {
  const firstTime = useMemo(() => !userProgress || !userProgress.totalXP || userProgress.totalXP === 0, [userProgress]);
  const [startingPoint, setStartingPoint] = useState('');
  const canCreate = !!startingPoint;

  // Calculate overall progress from userProgress
  const overall = useMemo(() => {
    if (!userProgress) {
      return {
        percentage: 0,
        paths: {
          bible: { completedCount: 0, total: 8 },
          church: { completedCount: 0, total: 8 },
          apologetics: { completedCount: 0, total: 8 }
        }
      };
    }

    const bibleLessons = userProgress.courses?.bible?.completedLessons?.length || 0;
    const churchLessons = userProgress.courses?.church?.completedLessons?.length || 0;
    const apologeticsLessons = userProgress.courses?.apologetics?.completedLessons?.length || 0;

    const totalCompleted = bibleLessons + churchLessons + apologeticsLessons;
    const totalLessons = 8 + 8 + 8; // bible + church + apologetics (all have 8 lessons)
    const percentage = totalLessons > 0 ? Math.round((totalCompleted / totalLessons) * 100) : 0;

    return {
      percentage,
      paths: {
        bible: { completedCount: bibleLessons, total: 8 },
        church: { completedCount: churchLessons, total: 8 },
        apologetics: { completedCount: apologeticsLessons, total: 8 }
      }
    };
  }, [userProgress]);

  // Get continue recommendation from userProgress
  const rec = useMemo(() => {
    if (!userProgress) return { pathId: 'bible', nextLesson: 1 };

    const bibleLessons = userProgress.courses?.bible?.completedLessons?.length || 0;
    const churchLessons = userProgress.courses?.church?.completedLessons?.length || 0;
    const apologeticsLessons = userProgress.courses?.apologetics?.completedLessons?.length || 0;

    // Find path with partial progress (started but not finished)
    if (bibleLessons > 0 && bibleLessons < 8) {
      return { pathId: 'bible', nextLesson: bibleLessons + 1 };
    }
    if (churchLessons > 0 && churchLessons < 8) {
      return { pathId: 'church', nextLesson: churchLessons + 1 };
    }
    if (apologeticsLessons > 0 && apologeticsLessons < 8) {
      return { pathId: 'apologetics', nextLesson: apologeticsLessons + 1 };
    }

    // Default to first incomplete path
    if (bibleLessons < 8) return { pathId: 'bible', nextLesson: bibleLessons + 1 };
    if (churchLessons < 8) return { pathId: 'church', nextLesson: churchLessons + 1 };
    if (apologeticsLessons < 8) return { pathId: 'apologetics', nextLesson: apologeticsLessons + 1 };

    // All complete, default to bible
    return { pathId: 'bible', nextLesson: 1 };
  }, [userProgress]);

  // Get path metadata
  const getPathMeta = (pathId) => {
    const paths = {
      bible: { title: 'Bible History', view: 'bible-history' },
      church: { title: 'Church History', view: 'study-guide' },
      apologetics: { title: 'Apologetics', view: 'apologetics' }
    };
    return paths[pathId] || paths.bible;
  };

  const meta = getPathMeta(rec.pathId);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Refresh progress when returning to Home page
  useEffect(() => {
    if (onProgressUpdate && currentUser) {
      onProgressUpdate();
    }
  }, [onProgressUpdate, currentUser]);

  const getTimeBasedGreeting = () => {
    const hour = new Date().getHours();
    const firstName = currentUser?.displayName ? currentUser.displayName.split(' ')[0] : '';
    
    if (hour < 12) {
      return `Good morning${firstName ? `, ${firstName}` : ''}`;
    } else if (hour < 17) {
      return `Good afternoon${firstName ? `, ${firstName}` : ''}`;
    } else {
      return `Good evening${firstName ? `, ${firstName}` : ''}`;
    }
  };

  const getTotalXP = () => {
    // Use Firestore progress from props as single source of truth
    if (userProgress) {
      return userProgress.totalXP || 0;
    }
    // No localStorage fallback - require authentication for progress tracking
    return 0;
  };

  const getAIPathsProgress = () => {
    // Get AI paths from Firestore via userProgress prop
    if (userProgress?.aiPaths && Array.isArray(userProgress.aiPaths)) {
      return userProgress.aiPaths.map(path => ({
        id: path.id,
        title: path.title,
        completed: path.completedLessons?.length || 0,
        total: path.lessons?.length || 0,
        isCompleted: path.completed === true
      }));
    }
    return [];
  };

  const getCuratedPathsProgress = () => {
    // Get curated paths with their progress
    const paths = [
      {
        id: 'bible',
        title: 'Bible History',
        color: 'blue',
        route: 'bible-history',
        completed: overall.paths.bible.completedCount,
        total: overall.paths.bible.total,
        isCompleted: overall.paths.bible.completedCount === overall.paths.bible.total
      },
      {
        id: 'church',
        title: 'Church History',
        color: 'amber',
        route: 'study-guide',
        completed: overall.paths.church.completedCount,
        total: overall.paths.church.total,
        isCompleted: overall.paths.church.completedCount === overall.paths.church.total
      },
      {
        id: 'apologetics',
        title: 'Apologetics',
        color: 'indigo',
        route: 'apologetics',
        completed: overall.paths.apologetics.completedCount,
        total: overall.paths.apologetics.total,
        isCompleted: overall.paths.apologetics.completedCount === overall.paths.apologetics.total
      }
    ];
    return paths;
  };

  // Sort and filter paths: started-incomplete first, then not-started, hide completed
  const sortPaths = (paths) => {
    // Separate completed and non-completed paths
    const nonCompleted = paths.filter(p => !p.isCompleted);
    const completed = paths.filter(p => p.isCompleted);
    
    // Sort non-completed paths (started first, then by completion percentage)
    const sortedNonCompleted = nonCompleted.sort((a, b) => {
      const aStarted = a.completed > 0;
      const bStarted = b.completed > 0;
      
      // Started paths come first
      if (aStarted && !bStarted) return -1;
      if (!aStarted && bStarted) return 1;
      
      // Within same category, sort by completion percentage
      const aPct = a.total > 0 ? a.completed / a.total : 0;
      const bPct = b.total > 0 ? b.completed / b.total : 0;
      return bPct - aPct;
    });
    
    // If we have fewer than 3 non-completed paths, add some completed ones
    if (sortedNonCompleted.length < 3) {
      const needed = 3 - sortedNonCompleted.length;
      const completedToShow = completed.slice(0, needed);
      return [...sortedNonCompleted, ...completedToShow];
    }
    
    return sortedNonCompleted;
  };

  const getStreak = () => {
    // Use Firestore progress from props
    if (userProgress?.dailyChallenges) {
      return userProgress.dailyChallenges.streak || 0;
    }
    return 0;
  };

  const handleQuickStart = () => {
    if (!canCreate) return;
    const startId = startingPoint || 'bible';
    const startView = getPathMeta(startId).view;
    onNavigate(startView);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero */}
      <div className="relative overflow-hidden text-white py-12 px-4">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-700 animate-gradient-shift"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-indigo-500 via-blue-500 to-purple-700 opacity-60 animate-gradient-shift-reverse"></div>
        
        {/* Content */}
        <div className="relative max-w-5xl mx-auto z-10">
          {!firstTime ? (
            <>
              {/* Personalized greeting for returning users */}
              <h1 className="text-3xl md:text-4xl font-black mb-3">{getTimeBasedGreeting()}</h1>
              <p className="text-base md:text-lg text-blue-100 max-w-3xl">
                Ready to continue your journey? Pick up where you left off or explore something new.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate(getPathMeta(rec.pathId).view)}
                  className="flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-xl font-bold shadow hover:shadow-md transition-all hover:scale-105"
                >
                  <PlayCircle className="w-5 h-5" /> Continue Learning • {meta.title} L{rec.nextLesson}
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white/20 backdrop-blur rounded-full px-4 py-2 border border-white/30">
                  <span className="text-sm font-semibold">✨ New here?</span>
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-black mb-3">Let's build your learning path</h1>
                            <p className="text-base md:text-lg text-blue-100 max-w-3xl">
                Choose a topic that interests you, and we'll guide you through it step by step.
              </p>

              {/* Quick prompts */}
              <div className="mt-6 grid md:grid-cols-1 gap-4">
                <div className="bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/20">
                  <h2 className="font-bold mb-4 text-lg">🎯 What interests you most?</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <Pick
                      label="📖 Bible"
                      active={startingPoint === 'bible'}
                      onClick={() => setStartingPoint('bible')}
                    />
                    <Pick
                      label="⛪ Church History"
                      active={startingPoint === 'church'}
                      onClick={() => setStartingPoint('church')}
                    />
                    <Pick
                      label="💡 Apologetics"
                      active={startingPoint === 'apologetics'}
                      onClick={() => setStartingPoint('apologetics')}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  disabled={!canCreate}
                  onClick={handleQuickStart}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold shadow transition-all ${
                    canCreate ? 'bg-white text-blue-700 hover:shadow-md hover:scale-105' : 'bg-white/30 text-white/60 cursor-not-allowed'
                  }`}
                >
                  <Sparkles className="w-5 h-5" /> {canCreate ? 'Start My Journey' : 'Choose a topic to begin'}
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Authentication prompt for unauthenticated users */}
      {!userProgress && (
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6 shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 rounded-full p-3">
                  <UserPlus className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">Sign up to track your progress</h3>
                  <p className="text-sm text-slate-600">Create a free account to earn XP, save your progress, and compete on the leaderboard!</p>
                </div>
              </div>
              <button
                onClick={onShowAuth}
                className="whitespace-nowrap bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold shadow-sm transition"
              >
                Sign Up Free
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Progress Sections */}
      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Stats Pills for returning users */}
        {!firstTime && userProgress && (
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {getStreak() > 0 && (
              <div className="bg-orange-500/10 backdrop-blur rounded-full px-5 py-2.5 border-2 border-orange-400/30 flex items-center gap-2 shadow-sm">
                <Flame className="w-5 h-5 fill-orange-500 text-orange-600" />
                <span className="text-sm font-bold text-orange-700">{getStreak()} day streak</span>
              </div>
            )}
            {getTotalXP() > 0 && (
              <div className="bg-amber-500/10 backdrop-blur rounded-full px-5 py-2.5 border-2 border-amber-400/30 flex items-center gap-2 shadow-sm">
                <Award className="w-5 h-5 text-amber-600" />
                <span className="text-sm font-bold text-amber-700">{getTotalXP()} XP</span>
              </div>
            )}
          </div>
        )}

        {/* Stats Overview */}
        {!firstTime && userProgress && (
          <div className="bg-white rounded-2xl border-2 border-slate-200 shadow p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-slate-700 font-bold text-lg">
                <BookOpen className="w-5 h-5" /> Learning Progress
              </div>
              <div className="text-right">
                <div className="text-2xl font-black text-blue-700">{overall.percentage}%</div>
                <div className="text-xs text-slate-500 font-medium">Complete</div>
              </div>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-3">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full transition-all" style={{ width: `${overall.percentage}%` }}></div>
            </div>
          </div>
        )}

        {/* Curated Learning Paths Section */}
        <CuratedPathsSection
          paths={sortPaths(getCuratedPathsProgress())}
          onNavigate={onNavigate}
          firstTime={firstTime}
          startingPoint={startingPoint}
        />

        {/* AI Learning Paths Section */}
        {userProgress && (
          <AIPathsSection
            paths={sortPaths(getAIPathsProgress())}
            onNavigate={onNavigate}
          />
        )}

        {/* Reviews Section */}
        {!firstTime && <ReviewsAlert onNavigate={onNavigate} />}

        {/* Daily Challenge */}
        <div className="mt-6">
          <DailyChallenge onNavigate={onNavigate} currentUser={currentUser} onProgressUpdate={onProgressUpdate} userProgress={userProgress} />
        </div>
      </div>

      {/* Bottom CTA removed per request */}
    </div>
  );
};

// Curated Learning Paths Section Component
const CuratedPathsSection = ({ paths, onNavigate, firstTime, startingPoint }) => {
  const [showAll, setShowAll] = useState(false);
  const visiblePaths = showAll ? paths : paths.slice(0, 3);
  const hiddenCount = paths.length - 3;

  return (
    <div className="bg-white rounded-2xl border-2 border-slate-200 shadow p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-blue-600" />
          Curated Learning Paths
        </h2>
        {hiddenCount > 0 && !showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition"
          >
            {hiddenCount} more →
          </button>
        )}
        {showAll && paths.length > 3 && (
          <button
            onClick={() => setShowAll(false)}
            className="text-sm font-semibold text-slate-600 hover:text-slate-700 transition"
          >
            Show less ↑
          </button>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {visiblePaths.map((path) => (
          <PathProgressCard
            key={path.id}
            title={path.title}
            color={path.color}
            completed={path.completed}
            total={path.total}
            onClick={() => onNavigate(path.route)}
            recommended={firstTime && startingPoint === path.id}
          />
        ))}
      </div>
      
      {visiblePaths.length === 0 && (
        <div className="text-center py-8 text-slate-500">
          <p className="text-sm">🎉 All curated paths completed! Great work!</p>
        </div>
      )}
    </div>
  );
};

// AI Learning Paths Section Component
const AIPathsSection = ({ paths, onNavigate }) => {
  const [showAll, setShowAll] = useState(false);
  const visiblePaths = showAll ? paths : paths.slice(0, 3);
  const hiddenCount = paths.length - 3;

  return (
    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border-2 border-emerald-200 shadow p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-emerald-600" />
          AI Learning Paths
        </h2>
        {hiddenCount > 0 && !showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition"
          >
            {hiddenCount} more →
          </button>
        )}
        {showAll && paths.length > 3 && (
          <button
            onClick={() => setShowAll(false)}
            className="text-sm font-semibold text-slate-600 hover:text-slate-700 transition"
          >
            Show less ↑
          </button>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {visiblePaths.map((path) => (
          <AIPathCard
            key={path.id}
            title={path.title}
            completed={path.completed}
            total={path.total}
            onClick={() => onNavigate(`ai-path/${path.id}`)}
          />
        ))}
      </div>
      
      {paths.length === 0 && (
        <div className="text-center py-8">
          <p className="text-sm text-slate-600 mb-3">No AI paths created yet</p>
          <button
            onClick={() => onNavigate('ai-paths')}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-xl font-semibold shadow-sm transition"
          >
            Create Your First AI Path
          </button>
        </div>
      )}
    </div>
  );
};

// AI Path Card Component
const AIPathCard = ({ title, completed, total, onClick }) => {
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
  
  return (
    <button
      onClick={onClick}
      className="text-left bg-white rounded-xl border-2 border-emerald-200 p-5 hover:shadow-lg hover:border-emerald-300 transition"
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-bold text-slate-800 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-emerald-600" />
          {title}
        </h3>
        <span className="text-sm font-bold text-slate-700">{total > 0 ? `${pct}%` : 'New'}</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-2">
        <div className="h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" style={{ width: `${pct}%` }}></div>
      </div>
      <p className="mt-2 text-sm text-slate-600">{completed}/{total} lessons</p>
    </button>
  );
};

const PathProgressCard = ({ title, color, completed, total, onClick, recommended }) => {
  const pct = total ? Math.round((completed / total) * 100) : 0;
  const colorMap = {
    blue: 'from-blue-500 to-indigo-500',
    amber: 'from-amber-500 to-orange-500',
    indigo: 'from-indigo-500 to-purple-500',
  };
  return (
    <button onClick={onClick} className={`text-left bg-white rounded-xl border-2 p-5 hover:shadow transition ${recommended ? 'border-blue-400 ring-2 ring-blue-200' : 'border-slate-200'}`}>
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-bold text-slate-800 flex items-center gap-2">
          {title}
          {recommended && (
            <span className="text-xs font-bold text-blue-700 bg-blue-100 px-2 py-1 rounded-full">Recommended</span>
          )}
        </h3>
        <span className="text-sm font-bold text-slate-700">{total > 0 ? `${pct}%` : 'New'}</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-2">
        <div className={`h-2 rounded-full bg-gradient-to-r ${colorMap[color]}`} style={{ width: `${pct}%` }}></div>
      </div>
      <p className="mt-2 text-sm text-slate-600">{completed}/{total} lessons</p>
    </button>
  );
};

export default Home;

// Small selectable pill/button used in first-time starting point prompt
const Pick = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`text-left rounded-xl border-2 px-4 py-3 transition ${
      active ? 'border-white bg-white/20 text-white' : 'border-white/40 bg-white/5 text-white hover:border-white/70'
    }`}
  >
    {label}
  </button>
);

// Reviews Alert Component
const ReviewsAlert = ({ onNavigate }) => {
  const [dueReviews, setDueReviews] = useState([]);

  // Mastery levels mapping
  const MASTERY_LEVELS = {
    0: { icon: '🌱', label: 'Learning', color: 'text-yellow-600' },
    1: { icon: '🌿', label: 'Practicing', color: 'text-green-500' },
    2: { icon: '🌳', label: 'Growing', color: 'text-green-600' },
    3: { icon: '🏆', label: 'Proficient', color: 'text-blue-600' },
    4: { icon: '⭐', label: 'Mastered', color: 'text-purple-600' }
  };

  useEffect(() => {
    const loadDueReviews = async () => {
      const reviews = await getDueReviews();
      setDueReviews(reviews || []);
    };
    loadDueReviews();
  }, []);

  if (dueReviews.length === 0) {
    return null; // Don't show anything if no reviews due
  }

  const getLessonTitle = (path, lessonNumber) => {
    // This is a simplified mapping - could be enhanced
    const titles = {
      bible: {
        1: 'From Mouth to Manuscript',
        2: 'The Manuscript Detective Story',
        3: 'Lost in Translation?',
        4: 'The English Bible\'s Dramatic History',
        5: 'The Books That Almost Made It',
        6: 'How Christians Read the Bible Over Time',
        7: 'Archaeology & the Bible',
        8: 'Your Bible\'s Backstory'
      },
      church: {
        1: 'Early Christianity',
        2: 'The Great Divide',
        3: 'The Reformation',
        4: 'Anglicans & Methodists',
        5: 'Baptists & Anabaptists',
        6: 'Pentecostals & Holiness',
        7: 'Restorationists',
        8: 'Finding Your Church Home'
      },
      apologetics: {
        1: 'God\'s Existence',
        2: 'Evil & Suffering',
        3: 'The Resurrection',
        4: 'Science & Faith',
        5: 'Scripture Reliability',
        6: 'The Moral Argument',
        7: 'Jesus: The Only Way?',
        8: 'Engaging Skeptics'
      }
    };
    return titles[path]?.[lessonNumber] || `Lesson ${lessonNumber}`;
  };

  const getPathName = (path) => {
    const names = {
      bible: 'Bible History',
      church: 'Church History',
      apologetics: 'Apologetics'
    };
    return names[path] || path;
  };

  const handleStartReview = (review) => {
    // Navigate to the appropriate path with review mode passed via state
    // No localStorage - review data passed directly via navigation
    if (review.path === 'bible') onNavigate('bible-history', { state: { reviewMode: review } });
    else if (review.path === 'church') onNavigate('study-guide', { state: { reviewMode: review } });
    else if (review.path === 'apologetics') onNavigate('apologetics', { state: { reviewMode: review } });
  };

  return (
    <div className="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <BookOpen className="w-6 h-6" />
          <span className="font-bold text-lg">
            {dueReviews.length === 1 ? '1 Review Due' : `${dueReviews.length} Reviews Due`}
          </span>
        </div>
        <div className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-full">
          <Calendar className="w-4 h-4" />
          <span className="text-sm font-bold">Today</span>
        </div>
      </div>

      <p className="text-white/90 mb-4">
        Keep your knowledge fresh! Review these lessons to strengthen your long-term retention.
      </p>

      <div className="space-y-2 mb-4">
        {dueReviews.slice(0, 3).map((review) => {
          const mastery = MASTERY_LEVELS[review.masteryLevel] || MASTERY_LEVELS[0];
          return (
            <button
              key={review.lessonKey}
              onClick={() => handleStartReview(review)}
              className="w-full text-left bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4 hover:bg-white/20 transition"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-white flex items-center gap-2">
                    <span>{mastery.icon}</span>
                    {getPathName(review.path)}: {getLessonTitle(review.path, review.lessonNumber)}
                  </div>
                  <div className="text-sm text-white/80 mt-1">
                    Review #{review.reviewNumber} • {mastery.label}
                    {review.isOverdue && <span className="ml-2 text-yellow-300">⚠️ Overdue</span>}
                  </div>
                </div>
                <div className="text-white/60">→</div>
              </div>
            </button>
          );
        })}
      </div>

      {dueReviews.length > 3 && (
        <p className="text-white/70 text-sm text-center">
          +{dueReviews.length - 3} more {dueReviews.length - 3 === 1 ? 'review' : 'reviews'} available
        </p>
      )}
    </div>
  );
};
