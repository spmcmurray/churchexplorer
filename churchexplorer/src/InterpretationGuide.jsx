import React, { useState, useEffect } from 'react';
import { CheckCircle, ChevronDown, ChevronRight, Scale, Lock, ArrowLeft } from 'lucide-react';

const InterpretationGuide = ({ userProgress, onNavigate, onGoBack }) => {
  const [completedLessons, setCompletedLessons] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (userProgress?.courses?.interpretation?.completedLessons) {
      setCompletedLessons(userProgress.courses.interpretation.completedLessons);
    }
  }, [userProgress]);

  const lessons = [
    { number: 25, title: 'Introduction to Hermeneutics', duration: '7 min' },
    { number: 26, title: 'Why Denominations Interpret Differently', duration: '8 min' },
    { number: 27, title: 'Literal vs Allegorical Reading', duration: '7 min' },
    { number: 28, title: 'Context is King', duration: '7 min' },
    { number: 29, title: 'Genre Matters', duration: '6 min' },
    { number: 30, title: 'Orthodox Interpretation Principles', duration: '7 min' },
    { number: 31, title: 'Spotting Fringe Interpretations', duration: '7 min' },
    { number: 32, title: 'Becoming a Better Interpreter', duration: '6 min' },
  ];

  const progressPercent = Math.round((completedLessons.length / lessons.length) * 100);
  const getTotalXP = () => userProgress?.courses?.interpretation?.totalXP || 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="relative overflow-hidden text-white py-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600"></div>
        <div className="relative max-w-4xl mx-auto z-10">
          <div className="flex items-center gap-3 mb-4">
            <Scale className="w-12 h-12" />
            <div>
              <h1 className="text-4xl md:text-5xl font-black">Biblical Interpretation</h1>
              <p className="text-cyan-100">Why Christians read Scripture differently</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <button onClick={() => onGoBack ? onGoBack() : onNavigate('learn')} className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-xl border-2 border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition font-semibold">
          <ArrowLeft className="w-4 h-4" /><span>Back to Paths</span>
        </button>
        
        <div className="bg-white rounded-2xl border-2 border-slate-200 p-6 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Progress</h2>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium text-slate-700">Lessons Completed</span>
                <span className="font-bold text-cyan-600">{completedLessons.length}/{lessons.length}</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full transition-all" style={{ width: `${progressPercent}%` }} />
              </div>
            </div>
            <div className="text-center"><div className="text-3xl font-black text-cyan-600">{getTotalXP()}</div><div className="text-xs text-slate-600">Total XP</div></div>
          </div>
        </div>

        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 mb-8">
          <p className="text-yellow-800 font-semibold">🚧 Lesson content coming soon!</p>
        </div>

        <div className="space-y-4">
          {lessons.map(lesson => (
            <div key={lesson.number} className="bg-white rounded-2xl border-2 border-slate-200 opacity-60 p-6">
              <div className="flex items-center gap-4">
                <Lock className="w-6 h-6 text-slate-400" />
                <div><h3 className="font-bold text-lg text-slate-900">{lesson.title}</h3><p className="text-sm text-slate-600">{lesson.duration}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InterpretationGuide;
