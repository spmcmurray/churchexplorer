import React, { useState } from "react";
import DenominationVisualizer from "./DenominationVisualizer";
import ChurchHistoryGuide from "./ChurchHistoryGuide";
import BibleHistoryGuide from "./BibleHistoryGuide";
import ApologeticsGuide from "./ApologeticsGuide";
import { Home as HomeIcon, Scroll, LayoutGrid, Menu, X } from 'lucide-react';
import Home from './Home';
import Paths from './Paths';
import Onboarding from './Onboarding';
import ExploreLanding from './ExploreLanding';
import DenominationExplorer from './DenominationExplorer';

function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home','learn','explorer','study-guide','bible-history','apologetics','onboarding'
  const [navigationHistory, setNavigationHistory] = useState(['home']); // Track navigation history
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = (view /*, optional payload */) => {
    setCurrentView(view);
    setNavigationHistory(prev => [...prev, view]);
    setMobileMenuOpen(false); // Close mobile menu on navigation
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

  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <h1 className="text-xl font-bold">Church Explorer</h1>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-2">
                <button
                  onClick={() => navigate('home')}
                  className={`flex items-center px-4 py-2 rounded-lg transition ${
                    currentView === 'home'
                      ? 'bg-white text-blue-600 shadow-md'
                      : 'bg-blue-700 hover:bg-blue-800'
                  }`}
                >
                  <HomeIcon className="w-4 h-4 mr-2" />
                  <span>Home</span>
                </button>
                <button
                  onClick={() => navigate('learn')}
                  className={`flex items-center px-4 py-2 rounded-lg transition ${
                    currentView === 'learn'
                      ? 'bg-white text-blue-600 shadow-md'
                      : 'bg-blue-700 hover:bg-blue-800'
                  }`}
                >
                  <LayoutGrid className="w-4 h-4 mr-2" />
                  <span>Learn</span>
                </button>
                <button
                  onClick={() => navigate('explorer')}
                  className={`flex items-center px-4 py-2 rounded-lg transition ${
                    currentView === 'explorer'
                      ? 'bg-white text-blue-600 shadow-md'
                      : 'bg-blue-700 hover:bg-blue-800'
                  }`}
                >
                  <Scroll className="w-4 h-4 mr-2" />
                  <span>Explore</span>
                </button>
              </div>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-blue-700 hover:bg-blue-800 transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white/10 backdrop-blur-xl shadow-2xl border-l border-white/20 transform transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/20">
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
            <div className="flex flex-col p-4 space-y-2">
              <button
                onClick={() => navigate('home')}
                className={`flex items-center px-4 py-3 rounded-lg transition text-left ${
                  currentView === 'home'
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm'
                }`}
              >
                <HomeIcon className="w-5 h-5 mr-3" />
                <span className="font-semibold">Home</span>
              </button>
              <button
                onClick={() => navigate('learn')}
                className={`flex items-center px-4 py-3 rounded-lg transition text-left ${
                  currentView === 'learn'
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm'
                }`}
              >
                <LayoutGrid className="w-5 h-5 mr-3" />
                <span className="font-semibold">Learn</span>
              </button>
              <button
                onClick={() => navigate('explorer')}
                className={`flex items-center px-4 py-3 rounded-lg transition text-left ${
                  currentView === 'explorer'
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm'
                }`}
              >
                <Scroll className="w-5 h-5 mr-3" />
                <span className="font-semibold">Explore</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div>
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
      </div>
    </div>
  );
}

export default App;
