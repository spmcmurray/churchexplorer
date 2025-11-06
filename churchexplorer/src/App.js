import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import CookieConsent from "react-cookie-consent";
import DenominationVisualizer from "./DenominationVisualizer";
import ChurchHistoryGuide from "./ChurchHistoryGuide";
import BibleHistoryGuide from "./BibleHistoryGuide";
import ApologeticsGuide from "./ApologeticsGuide";
import { Home as HomeIcon, Scroll, Globe, Trophy, User, LogOut, ChevronDown, Trash2, Menu, X, Sparkles, Settings } from 'lucide-react';
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
import Profile from './Profile';
import Legal from './Legal';
import { onAuthChange, logOut, deleteAccount } from './firebase/authService';
import { getUserProgress } from './firebase/progressService';
import { notifyAchievement, onAchievement } from './services/progressService';

function Navigation({ currentUser, showProfileMenu, setShowProfileMenu, setShowAuth, handleSignOut, setShowDeleteConfirm, setDeletePassword, setDeleteError, authLoading }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold hover:text-blue-100 transition">
            Church Explorer
          </Link>

          {/* Right Side: Hamburger Menu + Profile */}
          <div className="flex items-center space-x-3">
            {/* Hamburger Menu Button - only show if authenticated */}
            {currentUser && (
              authLoading ? (
                <div className="w-8 h-8 bg-white/20 rounded-lg animate-pulse" aria-hidden="true" />
              ) : (
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition backdrop-blur-sm"
                  aria-label="Open menu"
                >
                  <Menu className="w-6 h-6 text-white" />
                </button>
              )
            )}

            {/* User Account Section */}
            <div className="relative">
              {authLoading ? (
                // While auth is initializing, show a neutral placeholder to avoid
                // a flash of unauthenticated UI (sign-in button) before we know state
                <div className="px-3 py-2">
                  <div className="w-24 h-8 bg-white/20 rounded-lg animate-pulse" />
                </div>
              ) : currentUser ? (
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
                      <Link
                        to="/profile"
                        onClick={() => setShowProfileMenu(false)}
                        className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition"
                      >
                        <Settings className="w-4 h-4" />
                        <span>Profile & Settings</span>
                      </Link>
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
                to="/learn"
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
function HomeWrapper({ userProgress, onShowAuth, currentUser, onProgressUpdate }) {
  const navigate = useNavigate();
  return <Home userProgress={userProgress} onNavigate={(view, options) => navigate(`/${view}`, options)} onStartOnboarding={() => navigate('/onboarding')} onShowAuth={onShowAuth} currentUser={currentUser} onProgressUpdate={onProgressUpdate} />;
}

function PathsWrapper({ userProgress }) {
  const navigate = useNavigate();
  return <Paths userProgress={userProgress} onNavigate={(view) => navigate(`/${view}`)} onGoBack={() => navigate(-1)} />;
}

function ProfileWrapper({ currentUser, onDeleteAccount, onSignOut }) {
  return <Profile currentUser={currentUser} onDeleteAccount={onDeleteAccount} onSignOut={onSignOut} />;
}

function ExplorerWrapper() {
  const navigate = useNavigate();
  return <ExploreLanding onNavigate={(view) => navigate(`/${view}`)} onGoBack={() => navigate(-1)} />;
}

function ChurchHistoryWrapper({ userProgress, onProgressUpdate }) {
  const navigate = useNavigate();
  return <ChurchHistoryGuide userProgress={userProgress} onNavigate={(view) => navigate(`/${view}`)} onGoBack={() => navigate(-1)} onProgressUpdate={onProgressUpdate} />;
}

function BibleHistoryWrapper({ userProgress, onProgressUpdate }) {
  const navigate = useNavigate();
  return <BibleHistoryGuide userProgress={userProgress} onNavigate={(view) => navigate(`/${view}`)} onGoBack={() => navigate(-1)} onProgressUpdate={onProgressUpdate} />;
}

function ApologeticsWrapper({ userProgress, onProgressUpdate }) {
  const navigate = useNavigate();
  return <ApologeticsGuide userProgress={userProgress} onNavigate={(view) => navigate(`/${view}`)} onGoBack={() => navigate(-1)} onProgressUpdate={onProgressUpdate} />;
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

function OnboardingWrapper({ setShowAuth }) {
  const navigate = useNavigate();
  return <Onboarding onComplete={({ view }) => navigate(`/${view}`)} setShowAuth={setShowAuth} />;
}

function AIPathViewerWrapper({ currentUser }) {
  const { pathId } = useParams();
  const navigate = useNavigate();
  const [path, setPath] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPath = async () => {
      if (!currentUser?.uid) {
        setLoading(false);
        return;
      }

      try {
        const { getAIPathsFromFirestore, getAIPathProgressFromFirestore } = await import('./firebase/progressService');
        const result = await getAIPathsFromFirestore(currentUser.uid);
        
        if (result.success && result.paths) {
          const foundPath = result.paths.find(p => p.id === pathId);
          if (foundPath) {
            // Load progress for this path
            const progressResult = await getAIPathProgressFromFirestore(currentUser.uid, pathId);
            const pathWithProgress = {
              ...foundPath,
              completedLessons: progressResult.success ? (progressResult.progress?.completedLessons || []) : [],
              completed: foundPath.lessons && progressResult.success && progressResult.progress?.completedLessons
                ? progressResult.progress.completedLessons.length >= foundPath.lessons.length
                : false
            };
            setPath(pathWithProgress);
          }
        }
      } catch (error) {
        console.error('Error loading AI path:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPath();
  }, [pathId, currentUser]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-purple-600 border-t-transparent mx-auto mb-4"></div>
          <p className="text-slate-600">Loading path...</p>
        </div>
      </div>
    );
  }

  if (!path) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-600 mb-4">Path not found</p>
          <button
            onClick={() => navigate('/ai-paths')}
            className="bg-purple-600 text-white px-6 py-2 rounded-xl font-semibold"
          >
            Back to AI Paths
          </button>
        </div>
      </div>
    );
  }

  return <AIPathViewer path={path} currentUser={currentUser} onGoBack={() => navigate('/ai-paths')} />;
}

function AppContent() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [userProgress, setUserProgress] = useState(null); // Store Firestore progress in state
  const [authLoading, setAuthLoading] = useState(true); // Track auth initialization
  const [showAuth, setShowAuth] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showSignUpPrompt, setShowSignUpPrompt] = useState(false);
  const [deletePassword, setDeletePassword] = useState('');
  const [deleteError, setDeleteError] = useState('');
  const [appKey, setAppKey] = useState(0); // Key to force rerender when data is cleared

  // Function to refresh user progress from Firestore
  const refreshUserProgress = async () => {
    if (!currentUser) return;
    
    try {
      const { getUserProgress, getAIPathsFromFirestore, getAIPathProgressFromFirestore } = await import('./firebase/progressService');
      
      // Fetch fresh progress from Firestore (totalXP is in progress document)
      const progressResult = await getUserProgress(currentUser.uid);
      
      if (progressResult.success && progressResult.progress) {
        const p = progressResult.progress;
        
        // Load AI paths
        const aiPathsResult = await getAIPathsFromFirestore(currentUser.uid);
        if (aiPathsResult.success) {
          // Load progress for each AI path
          const pathsWithProgress = await Promise.all(
            (aiPathsResult.paths || []).map(async (path) => {
              const progressResult = await getAIPathProgressFromFirestore(currentUser.uid, path.id);
              if (progressResult.success && progressResult.progress) {
                return {
                  ...path,
                  completedLessons: progressResult.progress.completedLessons || [],
                  // Calculate if path is completed (all lessons done)
                  completed: path.lessons && progressResult.progress.completedLessons 
                    ? progressResult.progress.completedLessons.length >= path.lessons.length
                    : false
                };
              }
              return {
                ...path,
                completedLessons: [],
                completed: false
              };
            })
          );
          p.aiPaths = pathsWithProgress;
        }
        
        setUserProgress(p);
        console.log('✅ User progress refreshed, totalXP:', p.totalXP, 'AI Paths:', p.aiPaths?.length);
      }
    } catch (error) {
      console.error('Error refreshing progress:', error);
    }
  };

  // Sign-up prompts removed - no longer using localStorage achievement tracking

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthChange((user) => {
      setCurrentUser(user);
      if (user && showAuth) {
        setShowAuth(false);
      }
      
      // Hide sign-up prompt when user signs in
      if (user) {
        setShowSignUpPrompt(false);
      }

      // When a user signs in, load their Firestore progress
      (async () => {
        try {
          if (user) {
            console.log('Auth state change - user logged in, fetching progress...');
            
            // Fetch Firestore progress
            const progressResult = await getUserProgress(user.uid);
            console.log('Progress result:', progressResult);
            
            if (progressResult && progressResult.success && progressResult.progress) {
              const p = progressResult.progress;
              
              // Load AI paths from Firestore with progress data
              const { getAIPathsFromFirestore, getAIPathProgressFromFirestore } = await import('./firebase/progressService');
              const aiPathsResult = await getAIPathsFromFirestore(user.uid);
              if (aiPathsResult.success) {
                // Load progress for each AI path
                const pathsWithProgress = await Promise.all(
                  (aiPathsResult.paths || []).map(async (path) => {
                    const progressResult = await getAIPathProgressFromFirestore(user.uid, path.id);
                    if (progressResult.success && progressResult.progress) {
                      return {
                        ...path,
                        completedLessons: progressResult.progress.completedLessons || [],
                        completed: path.lessons && progressResult.progress.completedLessons 
                          ? progressResult.progress.completedLessons.length >= path.lessons.length
                          : false
                      };
                    }
                    return {
                      ...path,
                      completedLessons: [],
                      completed: false
                    };
                  })
                );
                p.aiPaths = pathsWithProgress;
                console.log('✅ Loaded AI paths from Firestore:', p.aiPaths.length);
              } else {
                p.aiPaths = [];
                console.warn('Failed to load AI paths:', aiPathsResult.error);
              }
              
              // Update React state with Firestore progress (single source of truth)
              setUserProgress(p);
              console.log('✅ Progress loaded from Firestore (single source of truth)');
            }
          } else {
            // User signed out - clear userProgress state
            setUserProgress(null);
          }
        } catch (err) {
          console.error('Error loading user progress on auth change:', err);
        } finally {
          // Auth state is now determined, stop showing loading screen
          setAuthLoading(false);
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
    // Clear React state (Firestore is source of truth, no localStorage to clear)
    setCurrentUser(null);
    setUserProgress(null);
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
      // Clear React state (Firestore is source of truth, no localStorage to clear)
      setCurrentUser(null);
      setUserProgress(null);
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
    // No longer tracking prompt dismissals in localStorage
    setShowSignUpPrompt(false);
  };

  return (
    <div className="min-h-screen">
      <Navigation 
        currentUser={currentUser}
        showProfileMenu={showProfileMenu}
        setShowProfileMenu={setShowProfileMenu}
        setShowAuth={setShowAuth}
        authLoading={authLoading}
        handleSignOut={handleSignOut}
        setShowDeleteConfirm={setShowDeleteConfirm}
        setDeletePassword={setDeletePassword}
        setDeleteError={setDeleteError}
      />

      {/* Show loading screen while determining auth state */}
      {authLoading ? (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-slate-600 font-medium">Loading...</p>
          </div>
        </div>
      ) : (
        /* Main Content with Routes */
        <div key={appKey}>
          <Routes>
            <Route path="/" element={
              currentUser 
                ? <HomeWrapper userProgress={userProgress} onShowAuth={() => setShowAuth(true)} currentUser={currentUser} onProgressUpdate={refreshUserProgress} />
                : <OnboardingWrapper setShowAuth={setShowAuth} />
            } />
            <Route path="/learn" element={<PathsWrapper userProgress={userProgress} />} />
            <Route path="/explorer" element={<ExplorerWrapper />} />
            <Route path="/study-guide" element={<ChurchHistoryWrapper userProgress={userProgress} onProgressUpdate={refreshUserProgress} />} />
            <Route path="/bible-history" element={<BibleHistoryWrapper userProgress={userProgress} onProgressUpdate={refreshUserProgress} />} />
            <Route path="/apologetics" element={<ApologeticsWrapper userProgress={userProgress} onProgressUpdate={refreshUserProgress} />} />
            <Route path="/explore-church" element={<ExploreChurchWrapper />} />
            <Route path="/explore-bible" element={<ExploreBibleWrapper />} />
            <Route path="/explore-denominations" element={<ExploreDenominationsWrapper />} />
          <Route path="/onboarding" element={<OnboardingWrapper setShowAuth={setShowAuth} />} />
          <Route path="/leaderboard" element={<Leaderboard currentUser={currentUser} />} />
          <Route path="/profile" element={<ProfileWrapper currentUser={currentUser} onDeleteAccount={() => setShowDeleteConfirm(true)} onSignOut={handleSignOut} />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/ai-paths" element={<AIPathsView currentUser={currentUser} />} />
          <Route path="/ai-path/:pathId" element={<AIPathViewerWrapper currentUser={currentUser} />} />
          <Route path="/ai-lesson/:lessonId" element={<AILessonViewerPage currentUser={currentUser} onProgressUpdate={refreshUserProgress} />} />
        </Routes>

        {/* Footer with motto */}
        <footer className="bg-gradient-to-r from-slate-800 to-slate-900 text-slate-300 py-6 mt-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-sm italic mb-2">
              "In essentials, unity. In non-essentials, liberty. In all things, charity."
            </p>
            <div className="flex items-center justify-center gap-4 text-xs text-slate-400">
              <Link to="/legal" className="hover:text-white transition">Legal & Privacy</Link>
              <span>·</span>
              <span>© {new Date().getFullYear()} Church Explorer</span>
            </div>
          </div>
        </footer>

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
            xp={userProgress?.totalXP || 0}
          />
        )}
      </div>
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
      <CookieConsent
        location="bottom"
        buttonText="Accept All"
        declineButtonText="Decline"
        enableDeclineButton
        cookieName="churchExplorerCookieConsent"
        style={{ 
          background: "linear-gradient(to right, rgb(37, 99, 235), rgb(147, 51, 234))",
          alignItems: "center"
        }}
        buttonStyle={{ 
          background: "#fff",
          color: "#1e293b",
          fontSize: "14px",
          fontWeight: "600",
          borderRadius: "8px",
          padding: "10px 24px"
        }}
        declineButtonStyle={{
          background: "transparent",
          border: "2px solid #fff",
          color: "#fff",
          fontSize: "14px",
          fontWeight: "600",
          borderRadius: "8px",
          padding: "8px 24px"
        }}
        expires={365}
      >
        <span style={{ fontSize: "14px" }}>
          We use cookies to keep you logged in and improve your experience. 
          See our <Link to="/legal" style={{ color: "#fff", textDecoration: "underline" }}>Cookie Policy</Link> for details.
        </span>
      </CookieConsent>
    </Router>
  );
}

export default App;
