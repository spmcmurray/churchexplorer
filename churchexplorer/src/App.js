import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import DenominationVisualizer from "./DenominationVisualizer";
import ChurchHistoryGuide from "./ChurchHistoryGuide";
import BibleHistoryGuide from "./BibleHistoryGuide";
import ApologeticsGuide from "./ApologeticsGuide";
import { Home as HomeIcon, Scroll, Globe, Trophy, User, LogOut, ChevronDown, Trash2, Menu, X, Sparkles } from 'lucide-react';
import Home from './Home';
import Paths from './Paths';
import Onboarding from './Onboarding';
import ExploreLanding from './ExploreLanding';
import DenominationExplorer from './DenominationExplorer';
import Leaderboard from './Leaderboard';
import Auth from './Auth';
import SignUpPrompt from './SignUpPrompt';
import AIPathsView from './AIPathsView';
import AIPathViewer from './AIPathViewer';
import AILessonViewerPage from './AILessonViewerPage';
import { onAuthChange, logOut, deleteAccount, getUserProfile } from './firebase/authService';
import { getUserProgress, migrateLocalProgressToFirestore } from './firebase/progressService';
import { clearAllProgress, getTotalXP, shouldShowSignUpPrompt, markSignUpPromptSeen, trackFirstAchievement, onAchievement, saveProfile } from './services/progressService';

function Navigation({ currentUser, showProfileMenu, setShowProfileMenu, setShowAuth, handleSignOut, setShowDeleteConfirm, setDeletePassword, setDeleteError }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-xl font-bold">Church Explorer</h1>

          {/* Right Side: Hamburger Menu + Profile */}
          <div className="flex items-center space-x-3">
            {/* Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition backdrop-blur-sm"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6 text-white" />
            </button>

            {/* User Account Section */}
            <div className="relative">
              {currentUser ? (
                <div>
                  <button
                    onClick={() => setShowProfileMenu(!showProfileMenu)}
                    className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition"
                  >
                    <User className="w-5 h-5" />
                    <span className="hidden sm:inline">{currentUser.displayName || 'User'}</span>
                    <ChevronDown className="w-4 h-4 hidden sm:inline" />
                  </button>
                  
                  {/* Dropdown Menu */}
                  {showProfileMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <p className="text-sm font-semibold text-gray-900">{currentUser.displayName || 'User'}</p>
                        <p className="text-xs text-gray-500 truncate">{currentUser.email}</p>
                      </div>
                      <button
                        onClick={handleSignOut}
                        className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Sign Out</span>
                      </button>
                      <button
                        onClick={() => {
                          setShowDeleteConfirm(true);
                          setShowProfileMenu(false);
                          setDeletePassword('');
                          setDeleteError('');
                        }}
                        className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition border-t border-gray-100"
                      >
                        <Trash2 className="w-4 h-4" />
                        <span>Delete Account</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => setShowAuth(true)}
                  className="flex items-center px-3 sm:px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition whitespace-nowrap"
                  title="Sign in or create a new account"
                >
                  <User className="w-5 h-5 sm:mr-2" />
                  <span className="hidden sm:inline">Sign In / Sign Up</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Slide-out Glassmorphism Menu */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white/10 backdrop-blur-xl shadow-2xl border-l border-white/20 transform transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-white">Menu</h2>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition backdrop-blur-sm"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="space-y-3">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center px-4 py-3 rounded-lg transition text-left bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
              >
                <HomeIcon className="w-5 h-5 mr-3" />
                <span>Home</span>
              </Link>

              <Link
                to="/paths"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center px-4 py-3 rounded-lg transition text-left bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
              >
                <Scroll className="w-5 h-5 mr-3" />
                <span>Curated Learning</span>
              </Link>

              <Link
                to="/ai-paths"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center px-4 py-3 rounded-lg transition text-left bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
              >
                <Sparkles className="w-5 h-5 mr-3" />
                <span>AI Learning</span>
              </Link>

              <Link
                to="/explorer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center px-4 py-3 rounded-lg transition text-left bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
              >
                <Globe className="w-5 h-5 mr-3" />
                <span>Explore</span>
              </Link>

              <Link
                to="/leaderboard"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center px-4 py-3 rounded-lg transition text-left bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
              >
                <Trophy className="w-5 h-5 mr-3" />
                <span>Leaderboard</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Wrapper components to convert Router navigation to onNavigate props
function HomeWrapper({ userProgress }) {
  const navigate = useNavigate();
  return <Home userProgress={userProgress} onNavigate={(view) => navigate(`/${view}`)} onStartOnboarding={() => navigate('/onboarding')} />;
}

function PathsWrapper() {
  const navigate = useNavigate();
  return <Paths onNavigate={(view) => navigate(`/${view}`)} onGoBack={() => navigate(-1)} />;
}

function ExplorerWrapper() {
  const navigate = useNavigate();
  return <ExploreLanding onNavigate={(view) => navigate(`/${view}`)} onGoBack={() => navigate(-1)} />;
}

function StudyGuideWrapper() {
  const navigate = useNavigate();
  return <ChurchHistoryGuide onNavigate={(view) => navigate(`/${view}`)} onGoBack={() => navigate(-1)} />;
}

function BibleHistoryWrapper() {
  const navigate = useNavigate();
  return <BibleHistoryGuide onNavigate={(view) => navigate(`/${view}`)} onGoBack={() => navigate(-1)} />;
}

function ApologeticsWrapper() {
  const navigate = useNavigate();
  return <ApologeticsGuide onNavigate={(view) => navigate(`/${view}`)} onGoBack={() => navigate(-1)} />;
}

function ExploreChurchWrapper() {
  const navigate = useNavigate();
  return <DenominationVisualizer initialView="church" onNavigate={(view) => navigate(`/${view}`)} />;
}

function ExploreBibleWrapper() {
  const navigate = useNavigate();
  return <DenominationVisualizer initialView="bible" onNavigate={(view) => navigate(`/${view}`)} />;
}

function ExploreDenominationsWrapper() {
  const navigate = useNavigate();
  return <DenominationExplorer onNavigate={(view) => navigate(`/${view}`)} />;
}

function OnboardingWrapper() {
  const navigate = useNavigate();
  return <Onboarding onComplete={({ view }) => navigate(`/${view}`)} />;
}

function AppContent() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [userProgress, setUserProgress] = useState(null); // Store Firestore progress in state
  const [showAuth, setShowAuth] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showSignUpPrompt, setShowSignUpPrompt] = useState(false);
  const [deletePassword, setDeletePassword] = useState('');
  const [deleteError, setDeleteError] = useState('');
  const [appKey, setAppKey] = useState(0); // Key to force rerender when data is cleared

  // Listen for achievement events and check if we should show sign-up prompt
  useEffect(() => {
    const unsubscribe = onAchievement(() => {
      if (trackFirstAchievement()) {
        // Small delay to let user see their achievement first
        setTimeout(() => setShowSignUpPrompt(true), 1500);
      }
    });
    return unsubscribe;
  }, []);

  // Check if we should show sign-up prompt on mount and when route changes
  useEffect(() => {
    const checkSignUpPrompt = () => {
      if (shouldShowSignUpPrompt()) {
        setShowSignUpPrompt(true);
      }
    };
    
    // Small delay to let user see their achievement first
    const timer = setTimeout(checkSignUpPrompt, 1500);
    return () => clearTimeout(timer);
  }, [currentUser]);

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthChange((user) => {
      setCurrentUser(user);
      if (user && showAuth) {
        setShowAuth(false);
      }

      // When a user signs in, load their Firestore profile and progress
      (async () => {
        try {
          if (user) {
            // Fetch and persist profile locally so UI like Home reads it from localStorage
            const profileResult = await getUserProfile(user.uid);
            if (profileResult && profileResult.success && profileResult.profile) {
              // Merge profile into local storage profile used by front-end
              saveProfile(profileResult.profile);
              // If profile has a totalXP but per-course XP in localStorage is zero,
              // distribute the total across courses for display purposes until
              // detailed course progress is available in Firestore.
              try {
                const profileXP = profileResult.profile.totalXP || 0;
                const currentBibleXP = parseInt(localStorage.getItem('bibleHistoryTotalXP') || '0');
                const currentChurchXP = parseInt(localStorage.getItem('churchHistoryTotalXP') || '0');
                const currentApologeticsXP = parseInt(localStorage.getItem('apologeticsTotalXP') || '0');
                if (profileXP > 0 && currentBibleXP === 0 && currentChurchXP === 0 && currentApologeticsXP === 0) {
                  localStorage.setItem('bibleHistoryTotalXP', String(Math.floor(profileXP / 3)));
                  localStorage.setItem('churchHistoryTotalXP', String(Math.floor(profileXP / 3)));
                  localStorage.setItem('apologeticsTotalXP', String(profileXP - 2 * Math.floor(profileXP / 3)));
                  console.log('✅ Distributed profile totalXP to per-course localStorage for display:', profileXP);
                  // Force re-render of Home component to show updated XP
                  setAppKey(prev => prev + 1);
                }
              } catch (e) {
                console.warn('Failed to distribute profile totalXP to localStorage', e);
              }
            }

            // Fetch Firestore progress and persist it locally so Home shows the correct data
            const progressResult = await getUserProgress(user.uid);
            
            console.log('Auth state change - user logged in, fetching progress...');
            console.log('Progress result:', progressResult);
            
            // Check if Firestore has actual course data (not just totalXP)
            const hasFirestoreCourseData = progressResult?.success && 
              progressResult.progress && 
              (
                (progressResult.progress.courses?.bible?.completedLessons?.length > 0) ||
                (progressResult.progress.courses?.church?.completedLessons?.length > 0) ||
                (progressResult.progress.courses?.apologetics?.completedLessons?.length > 0)
              );
            
            console.log('Firestore course data check:', {
              hasData: hasFirestoreCourseData,
              bibleLessons: progressResult?.progress?.courses?.bible?.completedLessons?.length || 0,
              churchLessons: progressResult?.progress?.courses?.church?.completedLessons?.length || 0,
              apologeticsLessons: progressResult?.progress?.courses?.apologetics?.completedLessons?.length || 0,
              firestoreTotalXP: progressResult?.progress?.totalXP || 0
            });
            
            if (!hasFirestoreCourseData) {
              // Check if we have localStorage data to migrate
              const localBibleProgress = JSON.parse(localStorage.getItem('bibleHistoryProgress') || '[]');
              const localChurchProgress = JSON.parse(localStorage.getItem('churchHistoryProgress') || '[]');
              const localApologeticsProgress = JSON.parse(localStorage.getItem('apologeticsProgress') || '[]');
              const localBibleXP = parseInt(localStorage.getItem('bibleHistoryTotalXP') || '0');
              const localChurchXP = parseInt(localStorage.getItem('churchHistoryTotalXP') || '0');
              const localApologeticsXP = parseInt(localStorage.getItem('apologeticsTotalXP') || '0');
              const localTotalXP = localBibleXP + localChurchXP + localApologeticsXP;
              
              console.log('Local progress found:', {
                totalXP: localTotalXP,
                bible: localBibleProgress.length,
                church: localChurchProgress.length,
                apologetics: localApologeticsProgress.length
              });
              
              // If we have local progress, migrate it to Firestore
              if (localTotalXP > 0 || localBibleProgress.length > 0 || localChurchProgress.length > 0 || localApologeticsProgress.length > 0) {
                console.log('🔄 Migrating localStorage progress to Firestore...');
                const localProgress = {
                  totalXP: localTotalXP,
                  bibleProgress: localBibleProgress,
                  bibleXP: localBibleXP,
                  churchProgress: localChurchProgress,
                  churchXP: localChurchXP,
                  apologeticsProgress: localApologeticsProgress,
                  apologeticsXP: localApologeticsXP
                };
                
                const migrationResult = await migrateLocalProgressToFirestore(user.uid, localProgress);
                if (migrationResult.success) {
                  console.log('✅ Successfully migrated progress to Firestore');
                  // Fetch the newly migrated progress
                  const newProgressResult = await getUserProgress(user.uid);
                  if (newProgressResult.success && newProgressResult.progress) {
                    console.log('✅ Progress synced from Firestore after migration');
                    // Now sync it back to localStorage to ensure consistency
                    const p = newProgressResult.progress;
                    localStorage.setItem('bibleHistoryProgress', JSON.stringify(p.courses?.bible?.completedLessons || []));
                    localStorage.setItem('churchHistoryProgress', JSON.stringify(p.courses?.church?.completedLessons || []));
                    localStorage.setItem('apologeticsProgress', JSON.stringify(p.courses?.apologetics?.completedLessons || []));
                    localStorage.setItem('bibleHistoryTotalXP', String(p.courses?.bible?.totalXP || 0));
                    localStorage.setItem('churchHistoryTotalXP', String(p.courses?.church?.totalXP || 0));
                    localStorage.setItem('apologeticsTotalXP', String(p.courses?.apologetics?.totalXP || 0));
                  }
                } else {
                  console.error('❌ Migration failed:', migrationResult.error);
                }
              } else {
                console.log('No local progress to migrate');
              }
            } else if (progressResult && progressResult.success && progressResult.progress) {
              // Firestore has progress with course data, sync it to localStorage
              console.log('✅ Firestore has course data, syncing to localStorage');
              const p = progressResult.progress;
              
              // Update React state with Firestore progress
              setUserProgress(p);
              
              const localProgress = {
                totalXP: p.totalXP || 0,
                bibleProgress: p.courses?.bible?.completedLessons || [],
                bibleXP: p.courses?.bible?.totalXP || 0,
                churchProgress: p.courses?.church?.completedLessons || [],
                churchXP: p.courses?.church?.totalXP || 0,
                apologeticsProgress: p.courses?.apologetics?.completedLessons || [],
                apologeticsXP: p.courses?.apologetics?.totalXP || 0,
                dailyChallengeStreak: p.dailyChallenges?.streak || 0,
                dailyChallengeXP: p.dailyChallenges?.totalXP || 0
              };

              try {
                localStorage.setItem('bibleHistoryProgress', JSON.stringify(localProgress.bibleProgress || []));
                localStorage.setItem('churchHistoryProgress', JSON.stringify(localProgress.churchProgress || []));
                localStorage.setItem('apologeticsProgress', JSON.stringify(localProgress.apologeticsProgress || []));

                localStorage.setItem('bibleHistoryTotalXP', String(localProgress.bibleXP || 0));
                localStorage.setItem('churchHistoryTotalXP', String(localProgress.churchXP || 0));
                localStorage.setItem('apologeticsTotalXP', String(localProgress.apologeticsXP || 0));

                saveProfile({ syncedFrom: 'firestore', totalXP: localProgress.totalXP });
                console.log('Synced Firestore progress to localStorage');
              } catch (err) {
                console.warn('Failed to persist Firestore progress to localStorage', err);
              }
            }
          }
        } catch (err) {
          console.error('Error loading user profile/progress on auth change:', err);
        }
      })();
    });
    return () => unsubscribe();
  }, [showAuth]);

  // Close profile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showProfileMenu && !event.target.closest('.relative')) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showProfileMenu]);

  const handleSignOut = async () => {
    await logOut();
    clearAllProgress(); // Clear all localStorage data
    setCurrentUser(null);
    setShowProfileMenu(false);
    setAppKey(prev => prev + 1); // Force rerender to show fresh state
    navigate('/');
  };

  const handleDeleteAccount = async () => {
    setDeleteError('');
    
    if (!deletePassword.trim()) {
      setDeleteError('Please enter your password');
      return;
    }
    
    const result = await deleteAccount(deletePassword);
    if (result.success) {
      clearAllProgress(); // Clear all localStorage data
      setCurrentUser(null);
      setShowProfileMenu(false);
      setShowDeleteConfirm(false);
      setDeletePassword('');
      setDeleteError('');
      setAppKey(prev => prev + 1); // Force rerender to show fresh state
      navigate('/');
    } else {
      setDeleteError(result.error);
    }
  };

  const handleSignUpFromPrompt = () => {
    setShowSignUpPrompt(false);
    setShowAuth(true);
  };

  const handleDismissSignUpPrompt = () => {
    markSignUpPromptSeen();
    setShowSignUpPrompt(false);
  };

  return (
    <div className="min-h-screen">
      <Navigation 
        currentUser={currentUser}
        showProfileMenu={showProfileMenu}
        setShowProfileMenu={setShowProfileMenu}
        setShowAuth={setShowAuth}
        handleSignOut={handleSignOut}
        setShowDeleteConfirm={setShowDeleteConfirm}
        setDeletePassword={setDeletePassword}
        setDeleteError={setDeleteError}
      />

      {/* Main Content with Routes */}
      <div key={appKey}>
        <Routes>
          <Route path="/" element={<HomeWrapper userProgress={userProgress} />} />
          <Route path="/learn" element={<PathsWrapper />} />
          <Route path="/explorer" element={<ExplorerWrapper />} />
          <Route path="/study-guide" element={<StudyGuideWrapper />} />
          <Route path="/bible-history" element={<BibleHistoryWrapper />} />
          <Route path="/apologetics" element={<ApologeticsWrapper />} />
          <Route path="/explore-church" element={<ExploreChurchWrapper />} />
          <Route path="/explore-bible" element={<ExploreBibleWrapper />} />
          <Route path="/explore-denominations" element={<ExploreDenominationsWrapper />} />
          <Route path="/onboarding" element={<OnboardingWrapper />} />
          <Route path="/leaderboard" element={<Leaderboard currentUser={currentUser} />} />
          <Route path="/ai-paths" element={<AIPathsView currentUser={currentUser} />} />
          <Route path="/ai-path/:pathId" element={<AIPathViewer currentUser={currentUser} />} />
          <Route path="/ai-lesson/:lessonId" element={<AILessonViewerPage />} />
        </Routes>
      </div>

      {/* Auth Modal */}
      {showAuth && (
        <Auth
          onSuccess={(user) => {
            setCurrentUser(user);
            setShowAuth(false);
          }}
          onClose={() => setShowAuth(false)}
        />
      )}

      {/* Sign Up Prompt */}
      {showSignUpPrompt && (
        <SignUpPrompt
          onSignUp={handleSignUpFromPrompt}
          onDismiss={handleDismissSignUpPrompt}
          xp={getTotalXP()}
        />
      )}

      {/* Delete Account Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
            <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mx-auto mb-4">
              <Trash2 className="w-8 h-8 text-red-600" />
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
              Delete Account?
            </h2>
            
            <p className="text-gray-600 text-center mb-6">
              This action cannot be undone. All your progress, XP, and account data will be permanently deleted.
            </p>

            {/* Password Input for Reauthentication */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Enter your password to confirm
              </label>
              <input
                type="password"
                value={deletePassword}
                onChange={(e) => setDeletePassword(e.target.value)}
                placeholder="Password"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleDeleteAccount();
                  }
                }}
              />
              {deleteError && (
                <p className="mt-2 text-sm text-red-600">{deleteError}</p>
              )}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowDeleteConfirm(false);
                  setDeletePassword('');
                  setDeleteError('');
                }}
                className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteAccount}
                className="flex-1 px-4 py-3 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition"
              >
                Delete Forever
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
