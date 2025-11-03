import React, { useEffect } from 'react';
import { BookOpen, Scroll, Shield, CheckCircle2, ArrowLeft, Sparkles, Play } from 'lucide-react';

const Paths = ({ onNavigate, onGoBack, userProgress }) => {
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
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => {
            const progressPercent = card.progress.total > 0 
              ? Math.round((card.progress.completedCount / card.progress.total) * 100) 
              : 0;
            const isCompleted = card.progress.completedCount === card.progress.total;
            
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
                    {isCompleted && (
                      <div className="text-green-600">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-slate-600 font-medium">Progress</span>
                    <span className={`font-bold ${isCompleted ? 'text-green-600' : 'text-blue-600'}`}>
                      {progressPercent}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all ${
                        isCompleted 
                          ? 'bg-gradient-to-r from-green-500 to-emerald-600' 
                          : 'bg-gradient-to-r ' + card.color
                      }`}
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
                  className={`w-full py-2.5 px-4 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
                    isCompleted
                      ? 'bg-green-50 text-green-700 hover:bg-green-100 border border-green-200'
                      : 'bg-gradient-to-r ' + card.color + ' text-white hover:shadow-md'
                  }`}
                >
                  {isCompleted ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      Review Path
                    </>
                  ) : card.progress.completedCount > 0 ? (
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
      </div>
    </div>
  );
};

export default Paths;