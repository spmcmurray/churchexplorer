import React, { useEffect, useState } from 'react';
import { BookOpen, Scroll, Shield, CheckCircle2, ArrowLeft, Sparkles, Play, ChevronDown, ChevronUp } from 'lucide-react';

const Paths = ({ onNavigate, onGoBack, userProgress }) => {
  const [showCompletedPaths, setShowCompletedPaths] = useState(false);
  // Calculate progress from userProgress prop
  const bible = {
    completedCount: userProgress?.courses?.bible?.completedLessons?.length || 0,
    total: 8
  };
  const church = {
    completedCount: userProgress?.courses?.church?.completedLessons?.length || 0,
    total: 8
  };
  const apologetics = {
    completedCount: userProgress?.courses?.apologetics?.completedLessons?.length || 0,
    total: 8
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const cards = [
    {
      id: 'bible-history',
      title: 'Bible History',
      subtitle: 'From oral tradition to modern translations',
      icon: Scroll,
      color: 'from-blue-600 to-indigo-600',
      progress: bible,
    },
    {
      id: 'study-guide',
      title: 'Church History',
      subtitle: 'From Pentecost to modern denominations',
      icon: BookOpen,
      color: 'from-amber-600 to-orange-600',
      progress: church,
    },
    {
      id: 'apologetics',
      title: 'Apologetics',
      subtitle: 'Make a reasoned case with grace',
      icon: Shield,
      color: 'from-indigo-600 to-purple-600',
      progress: apologetics,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="relative overflow-hidden text-white py-16 px-4">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-700 animate-gradient-shift"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-indigo-500 via-blue-500 to-purple-700 opacity-60 animate-gradient-shift-reverse"></div>
        
        {/* Content */}
        <div className="relative max-w-6xl mx-auto z-10">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Curated Learning Paths</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl">
            Three guided journeys to understand the Bible, Church, and Christian faith.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Back button */}
        <button
          onClick={() => onGoBack ? onGoBack() : onNavigate('home')}
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-xl border-2 border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        {/* Active/In-Progress Paths */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {cards.filter(card => {
            const isCompleted = card.progress.completedCount === card.progress.total;
            return !isCompleted;
          }).map((card) => {
            const progressPercent = card.progress.total > 0 
              ? Math.round((card.progress.completedCount / card.progress.total) * 100) 
              : 0;
            
            return (
              <div
                key={card.id}
                className="bg-white rounded-2xl border-2 border-slate-200 p-6 hover:shadow-lg transition cursor-pointer"
                onClick={() => onNavigate(card.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3 flex-1">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${card.color} text-white flex items-center justify-center flex-shrink-0`}>
                      <card.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 text-lg mb-1">
                        {card.title}
                      </h3>
                      <p className="text-sm text-slate-600 mb-2">{card.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-slate-600 font-medium">Progress</span>
                    <span className="text-blue-600 font-bold">
                      {progressPercent}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all bg-gradient-to-r ${card.color}`}
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    {card.progress.completedCount} of {card.progress.total} lessons completed
                  </div>
                </div>

                {/* Start/Continue Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onNavigate(card.id);
                  }}
                  className={`w-full py-2.5 px-4 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 bg-gradient-to-r ${card.color} text-white hover:shadow-md`}
                >
                  {card.progress.completedCount > 0 ? (
                    <>
                      <Play className="w-4 h-4" />
                      Continue Learning
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      Start Learning
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* Completed Paths - Collapsible */}
        {cards.filter(card => card.progress.completedCount === card.progress.total).length > 0 && (
          <div className="mb-6">
            <button
              onClick={() => setShowCompletedPaths(!showCompletedPaths)}
              className="w-full bg-white rounded-xl border-2 border-slate-200 p-4 hover:bg-slate-50 transition flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-slate-900">Completed Paths</h3>
                  <p className="text-sm text-slate-600">
                    {cards.filter(card => card.progress.completedCount === card.progress.total).length} path{cards.filter(card => card.progress.completedCount === card.progress.total).length !== 1 ? 's' : ''}
                  </p>
                </div>
              </div>
              {showCompletedPaths ? (
                <ChevronUp className="w-5 h-5 text-slate-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-400" />
              )}
            </button>

            {showCompletedPaths && (
              <div className="mt-4 space-y-2">
                {cards.filter(card => card.progress.completedCount === card.progress.total).map((card) => (
                  <div
                    key={card.id}
                    className="bg-white rounded-lg border border-slate-200 p-4 hover:bg-slate-50 transition cursor-pointer flex items-center justify-between gap-3"
                    onClick={() => onNavigate(card.id)}
                  >
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-slate-900 break-words">{card.title}</h4>
                        <p className="text-sm text-green-600">Complete</p>
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onNavigate(card.id);
                      }}
                      className="text-green-600 hover:text-green-700 transition px-3 py-1 rounded-lg bg-green-50 hover:bg-green-100 text-sm font-medium flex-shrink-0"
                    >
                      Review
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Paths;