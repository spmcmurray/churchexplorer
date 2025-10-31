import React, { useState } from "react";
import DenominationVisualizer from "./DenominationVisualizer";
import ChurchHistoryGuide from "./ChurchHistoryGuide";
import BibleHistoryGuide from "./BibleHistoryGuide";
import ApologeticsGuide from "./ApologeticsGuide";
import { Home as HomeIcon, Scroll, Globe } from 'lucide-react';
import Home from './Home';
import Paths from './Paths';
import Onboarding from './Onboarding';
import ExploreLanding from './ExploreLanding';
import DenominationExplorer from './DenominationExplorer';

function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home','learn','explorer','study-guide','bible-history','apologetics','onboarding'
  const [navigationHistory, setNavigationHistory] = useState(['home']); // Track navigation history

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
              </div>
            </div>
          </div>
        </div>
      </nav>

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
