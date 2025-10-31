import React, { useState } from "react";
import DenominationVisualizer from "./DenominationVisualizer";
import ChurchHistoryGuide from "./ChurchHistoryGuide";
import BibleHistoryGuide from "./BibleHistoryGuide";
import ApologeticsGuide from "./ApologeticsGuide";
import { Home as HomeIcon, Scroll, LayoutGrid } from 'lucide-react';
import Home from './Home';
import Paths from './Paths';
import Onboarding from './Onboarding';
import ExploreLanding from './ExploreLanding';
import DenominationExplorer from './DenominationExplorer';

function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home','learn','explorer','study-guide','bible-history','apologetics','onboarding'

  const navigate = (view /*, optional payload */) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <h1 className="text-xl font-bold">Church Explorer</h1>
              <div className="flex space-x-2">
                <button
                  onClick={() => navigate('home')}
                  className={`flex items-center px-3 md:px-4 py-2 rounded-lg transition ${
                    currentView === 'home'
                      ? 'bg-white text-blue-600 shadow-md'
                      : 'bg-blue-700 hover:bg-blue-800'
                  }`}
                >
                  <HomeIcon className="w-4 h-4 mr-0 md:mr-2" />
                  <span className="hidden md:inline">Home</span>
                </button>
                <button
                  onClick={() => navigate('learn')}
                  className={`flex items-center px-3 md:px-4 py-2 rounded-lg transition ${
                    currentView === 'learn'
                      ? 'bg-white text-blue-600 shadow-md'
                      : 'bg-blue-700 hover:bg-blue-800'
                  }`}
                >
                  <LayoutGrid className="w-4 h-4 mr-0 md:mr-2" />
                  <span className="hidden md:inline">Learn</span>
                </button>
                <button
                  onClick={() => navigate('explorer')}
                  className={`flex items-center px-3 md:px-4 py-2 rounded-lg transition ${
                    currentView === 'explorer'
                      ? 'bg-white text-blue-600 shadow-md'
                      : 'bg-blue-700 hover:bg-blue-800'
                  }`}
                >
                  <Scroll className="w-4 h-4 mr-0 md:mr-2" />
                  <span className="hidden md:inline">Explore</span>
                </button>
                {/* Study guide direct links removed; users will access via Learn */}
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
          <Paths onNavigate={navigate} />
        )}
        {currentView === 'explorer' && (
          <ExploreLanding onNavigate={navigate} />
        )}
        {currentView === 'study-guide' && (
          <ChurchHistoryGuide onNavigate={navigate} />
        )}
        {currentView === 'bible-history' && (
          <BibleHistoryGuide onNavigate={navigate} />
        )}
        {currentView === 'apologetics' && (
          <ApologeticsGuide onNavigate={navigate} />
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
