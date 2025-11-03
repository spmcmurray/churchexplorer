import React, { useMemo, useState, useEffect } from 'react';
import { Flame, PlayCircle, Sparkles, BookOpen, Calendar, UserPlus } from 'lucide-react';
import { getOverallProgress, getContinueRecommendation, getPathMeta, getProfile, saveProfile } from './services/progressService';
import DailyChallenge from './DailyChallenge';
import { getDueReviews, getMasteryInfo } from './services/reviewService';

const Home = ({ onNavigate, onStartOnboarding, userProgress, onShowAuth, currentUser, onProgressUpdate }) => {
  const overall = getOverallProgress();
  const existingProfile = getProfile();
  const rec = getContinueRecommendation();
  const meta = getPathMeta(rec.pathId);

  const firstTime = useMemo(() => !existingProfile && overall.percentage === 0, [existingProfile, overall.percentage]);
  const [startingPoint, setStartingPoint] = useState('');
  const canCreate = !!startingPoint;

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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
    return paths
      .filter(p => !p.isCompleted) // Hide completed paths
      .sort((a, b) => {
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
  const profile = saveProfile({ startingPoint });
    const startId = profile.startingPoint || 'bible';
    const startView = getPathMeta(startId).view;
    onNavigate(startView);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          {!firstTime ? (
            <>
              <h1 className="text-4xl md:text-5xl font-black mb-4">Understand the Roots of Your Faith</h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-3xl">
                Explore where Christianity came from, how the Bible was formed, and why it matters—all in one guided journey.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate(getPathMeta(rec.pathId).view)}
                  className="flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-xl font-bold shadow hover:shadow-md"
                >
                  <PlayCircle className="w-5 h-5" /> Continue • {meta.title} L{rec.nextLesson}
                </button>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-4xl md:text-5xl font-black mb-4">Welcome! Let's tailor your start</h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-3xl">
                Choose a topic below to begin your learning journey.
              </p>

              {/* Quick prompts */}
              <div className="mt-8 grid md:grid-cols-1 gap-4">
                <div className="bg-white/10 backdrop-blur rounded-2xl p-4 border border-white/20">
                  <h2 className="font-bold mb-3">What’s your starting point?</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <Pick
                      label="Bible"
                      active={startingPoint === 'bible'}
                      onClick={() => setStartingPoint('bible')}
                    />
                    <Pick
                      label="Church History"
                      active={startingPoint === 'church'}
                      onClick={() => setStartingPoint('church')}
                    />
                    <Pick
                      label="Apologetics"
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
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold shadow ${
                    canCreate ? 'bg-white text-blue-700 hover:shadow-md' : 'bg-white/30 text-white/60 cursor-not-allowed'
                  }`}
                >
                  <Sparkles className="w-5 h-5" /> Start with my recommendation
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
        {/* Stats Overview */}
        {!firstTime && userProgress && (
          <div className="bg-white rounded-2xl border-2 border-slate-200 shadow p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-slate-700 font-bold">
                <Flame className="w-5 h-5" /> Your Progress
              </div>
              <div className="flex flex-col sm:flex-row items-end sm:items-center gap-4 sm:gap-6">
                {getStreak() > 0 && (
                  <div className="text-right">
                    <div className="text-xs text-slate-500 font-medium">Streak</div>
                    <div className="text-xl font-black text-orange-600 flex items-center justify-end gap-1">
                      <Flame className="w-5 h-5 fill-orange-500" />
                      {getStreak()}
                    </div>
                  </div>
                )}
                <div className="text-right">
                  <div className="text-xs text-slate-500 font-medium">Total XP</div>
                  <div className="text-xl font-black text-amber-600">{getTotalXP()}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-500 font-medium">Complete</div>
                  <div className="text-xl font-black text-blue-700">{overall.percentage}%</div>
                </div>
              </div>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-3">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full" style={{ width: `${overall.percentage}%` }}></div>
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
          <DailyChallenge onNavigate={onNavigate} currentUser={currentUser} onProgressUpdate={onProgressUpdate} />
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

  useEffect(() => {
    const reviews = getDueReviews();
    setDueReviews(reviews);
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
          const mastery = getMasteryInfo(review.path, review.lessonNumber);
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
