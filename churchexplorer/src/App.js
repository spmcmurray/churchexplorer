import React, { useState, useEffect } from "react";
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
import { onAuthChange, logOut, deleteAccount } from './firebase/authService';
import { clearAllProgress } from './services/progressService';

function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home','learn','explorer','study-guide','bible-history','apologetics','onboarding','leaderboard'
  const [navigationHistory, setNavigationHistory] = useState(['home']); // Track navigation history
  const [currentUser, setCurrentUser] = useState(null);
  const [showAuth, setShowAuth] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deletePassword, setDeletePassword] = useState('');
  const [deleteError, setDeleteError] = useState('');
  const [appKey, setAppKey] = useState(0); // Key to force rerender when data is cleared

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

  const navigate = (view /*, optional payload */) => {
    setCurrentView(view);
    setNavigationHistory(prev => [...prev, view]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    if (navigationHistory.length > 1) {
      // Remove current view and go to previous
      const newHistory = [...navigationHistory];
      newHistory.pop(); // Remove current
      const previousView = newHistory[newHistory.length - 1];
      setNavigationHistory(newHistory);
      setCurrentView(previousView);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Default to home if no history
      navigate('home');
    }
  };

  const handleSignOut = async () => {
    await logOut();
    clearAllProgress(); // Clear all localStorage data
    setCurrentUser(null);
    setShowProfileMenu(false);
    setAppKey(prev => prev + 1); // Force rerender to show fresh state
    navigate('home');
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
      navigate('home');
      // Optionally show a success message
    } else {
      setDeleteError(result.error);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <h1 className="text-xl font-bold">Church Explorer</h1>
              
              {/* Navigation Buttons */}
              <div className="flex space-x-2">
                <button
                  onClick={() => navigate('home')}
                  className={`flex items-center px-3 sm:px-4 py-2 rounded-lg transition ${
                    currentView === 'home'
                      ? 'bg-white text-blue-600 shadow-md'
                      : 'bg-blue-700 hover:bg-blue-800'
                  }`}
                >
                  <HomeIcon className="w-4 h-4 sm:mr-2" />
                  <span className="hidden sm:inline">Home</span>
                </button>
                <button
                  onClick={() => navigate('learn')}
                  className={`flex items-center px-3 sm:px-4 py-2 rounded-lg transition ${
                    currentView === 'learn'
                      ? 'bg-white text-blue-600 shadow-md'
                      : 'bg-blue-700 hover:bg-blue-800'
                  }`}
                >
                  <Scroll className="w-4 h-4 sm:mr-2" />
                  <span className="hidden sm:inline">Learn</span>
                </button>
                <button
                  onClick={() => navigate('explorer')}
                  className={`flex items-center px-3 sm:px-4 py-2 rounded-lg transition ${
                    currentView === 'explorer'
                      ? 'bg-white text-blue-600 shadow-md'
                      : 'bg-blue-700 hover:bg-blue-800'
                  }`}
                >
                  <Globe className="w-4 h-4 sm:mr-2" />
                  <span className="hidden sm:inline">Explore</span>
                </button>
                <button
                  onClick={() => navigate('leaderboard')}
                  className={`flex items-center px-3 sm:px-4 py-2 rounded-lg transition ${
                    currentView === 'leaderboard'
                      ? 'bg-white text-blue-600 shadow-md'
                      : 'bg-blue-700 hover:bg-blue-800'
                  }`}
                >
                  <Trophy className="w-4 h-4 sm:mr-2" />
                  <span className="hidden sm:inline">Leaderboard</span>
                </button>
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

      {/* Main Content */}
      <div key={appKey}>
        {currentView === 'home' && (
          <Home onNavigate={navigate} onStartOnboarding={() => navigate('onboarding')} />
        )}
        {currentView === 'learn' && (
          <Paths onNavigate={navigate} onGoBack={goBack} />
        )}
        {currentView === 'explorer' && (
          <ExploreLanding onNavigate={navigate} onGoBack={goBack} />
        )}
        {currentView === 'study-guide' && (
          <ChurchHistoryGuide onNavigate={navigate} onGoBack={goBack} />
        )}
        {currentView === 'bible-history' && (
          <BibleHistoryGuide onNavigate={navigate} onGoBack={goBack} />
        )}
        {currentView === 'apologetics' && (
          <ApologeticsGuide onNavigate={navigate} onGoBack={goBack} />
        )}
        {currentView === 'explore-church' && (
          <DenominationVisualizer initialView="church" onNavigate={navigate} />
        )}
        {currentView === 'explore-bible' && (
          <DenominationVisualizer initialView="bible" onNavigate={navigate} />
        )}
        {currentView === 'explore-denominations' && (
          <DenominationExplorer onNavigate={navigate} />
        )}
        {currentView === 'onboarding' && (
          <Onboarding onComplete={({ view }) => navigate(view)} />
        )}
        {currentView === 'leaderboard' && (
          <Leaderboard currentUser={currentUser} />
        )}
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

export default App;
