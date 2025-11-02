import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import DenominationVisualizer from "./DenominationVisualizer";
import ChurchHistoryGuide from "./ChurchHistoryGuide";
import BibleHistoryGuide from "./BibleHistoryGuide";
import ApologeticsGuide from "./ApologeticsGuide";
import { Home as HomeIcon, Scroll, Globe, Trophy, User, LogOut, ChevronDown, Trash2 } from 'lucide-react';
import Home from './Home';
import Paths from './Paths';
import Onboarding from './Onboarding';
import ExploreLanding from './ExploreLanding';
import DenominationExplorer from './DenominationExplorer';
import Leaderboard from './Leaderboard';
import Auth from './Auth';
import SignUpPrompt from './SignUpPrompt';
import { onAuthChange, logOut, deleteAccount } from './firebase/authService';
import { clearAllProgress, getTotalXP, shouldShowSignUpPrompt, markSignUpPromptSeen, trackFirstAchievement, onAchievement } from './services/progressService';

function Navigation({ currentUser, showProfileMenu, setShowProfileMenu, setShowAuth, handleSignOut, setShowDeleteConfirm, setDeletePassword, setDeleteError }) {
  const navigate = useNavigate();

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <h1 className="text-xl font-bold">Church Explorer</h1>
            
            {/* Navigation Buttons */}
            <div className="flex space-x-2">
              <Link
                to="/"
                className="flex items-center px-3 sm:px-4 py-2 rounded-lg transition bg-blue-700 hover:bg-blue-800"
              >
                <HomeIcon className="w-4 h-4 sm:mr-2" />
                <span className="hidden sm:inline">Home</span>
              </Link>
              <Link
                to="/learn"
                className="flex items-center px-3 sm:px-4 py-2 rounded-lg transition bg-blue-700 hover:bg-blue-800"
              >
                <Scroll className="w-4 h-4 sm:mr-2" />
                <span className="hidden sm:inline">Learn</span>
              </Link>
              <Link
                to="/explorer"
                className="flex items-center px-3 sm:px-4 py-2 rounded-lg transition bg-blue-700 hover:bg-blue-800"
              >
                <Globe className="w-4 h-4 sm:mr-2" />
                <span className="hidden sm:inline">Explore</span>
              </Link>
              <Link
                to="/leaderboard"
                className="flex items-center px-3 sm:px-4 py-2 rounded-lg transition bg-blue-700 hover:bg-blue-800"
              >
                <Trophy className="w-4 h-4 sm:mr-2" />
                <span className="hidden sm:inline">Leaderboard</span>
              </Link>
            </div>
          </div>

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
    </nav>
  );
}

// Wrapper components to convert Router navigation to onNavigate props
function HomeWrapper() {
  const navigate = useNavigate();
  return <Home onNavigate={(view) => navigate(`/${view}`)} onStartOnboarding={() => navigate('/onboarding')} />;
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
          <Route path="/" element={<HomeWrapper />} />
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
