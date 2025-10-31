import React, { useState } from "react";
import DenominationVisualizer from "./DenominationVisualizer";
import ChurchHistoryGuide from "./ChurchHistoryGuide";
import BibleHistoryGuide from "./BibleHistoryGuide";
import ApologeticsGuide from "./ApologeticsGuide";
import { BookOpen, Home, Scroll, Shield } from 'lucide-react';

function App() {
  const [currentView, setCurrentView] = useState('explorer'); // 'explorer', 'study-guide', 'bible-history', or 'apologetics'

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
                  onClick={() => setCurrentView('explorer')}
                  className={`flex items-center px-3 md:px-4 py-2 rounded-lg transition ${
                    currentView === 'explorer'
                      ? 'bg-white text-blue-600 shadow-md'
                      : 'bg-blue-700 hover:bg-blue-800'
                  }`}
                >
                  <Home className="w-4 h-4 mr-0 md:mr-2" />
                  <span className="hidden md:inline">Explorer</span>
                </button>
                <button
                  onClick={() => setCurrentView('study-guide')}
                  className={`flex items-center px-3 md:px-4 py-2 rounded-lg transition ${
                    currentView === 'study-guide'
                      ? 'bg-white text-blue-600 shadow-md'
                      : 'bg-blue-700 hover:bg-blue-800'
                  }`}
                >
                  <BookOpen className="w-4 h-4 mr-0 md:mr-2" />
                  <span className="hidden md:inline">Church History</span>
                </button>
                <button
                  onClick={() => setCurrentView('bible-history')}
                  className={`flex items-center px-3 md:px-4 py-2 rounded-lg transition ${
                    currentView === 'bible-history'
                      ? 'bg-white text-blue-600 shadow-md'
                      : 'bg-blue-700 hover:bg-blue-800'
                  }`}
                >
                  <Scroll className="w-4 h-4 mr-0 md:mr-2" />
                  <span className="hidden md:inline">Bible History</span>
                </button>
                <button
                  onClick={() => setCurrentView('apologetics')}
                  className={`flex items-center px-3 md:px-4 py-2 rounded-lg transition ${
                    currentView === 'apologetics'
                      ? 'bg-white text-blue-600 shadow-md'
                      : 'bg-blue-700 hover:bg-blue-800'
                  }`}
                >
                  <Shield className="w-4 h-4 mr-0 md:mr-2" />
                  <span className="hidden md:inline">Apologetics</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div>
        {currentView === 'explorer' ? (
          <DenominationVisualizer />
        ) : currentView === 'study-guide' ? (
          <ChurchHistoryGuide onNavigate={setCurrentView} />
        ) : currentView === 'bible-history' ? (
          <BibleHistoryGuide onNavigate={setCurrentView} />
        ) : (
          <ApologeticsGuide onNavigate={setCurrentView} />
        )}
      </div>
    </div>
  );
}

export default App;
