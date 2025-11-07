import React, { useState, useEffect } from 'react';
import { Heart, Lock, ArrowLeft } from 'lucide-react';

const GospelMessageGuide = ({ userProgress, onNavigate, onGoBack }) => {
  const [completedLessons, setCompletedLessons] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (userProgress?.courses?.gospelMessage?.completedLessons) {
      setCompletedLessons(userProgress.courses.gospelMessage.completedLessons);
    }
  }, [userProgress]);

  const lessons = [
    { number: 49, title: 'The Gospel in First-Century Context', duration: '8 min' },
    { number: 50, title: 'What "Gospel" Meant to Ancient Ears', duration: '7 min' },
    { number: 51, title: 'The Kerygma: The Apostolic Proclamation', duration: '7 min' },
    { number: 52, title: 'Paul\'s Gospel: Grace and Faith', duration: '8 min' },
    { number: 53, title: 'The Gospel in the Four Gospels', duration: '7 min' },
    { number: 54, title: 'Essential Gospel Elements', duration: '7 min' },
    { number: 55, title: 'False Gospels and Galatians', duration: '7 min' },
    { number: 56, title: 'Proclaiming the Gospel Today', duration: '6 min' },
  ];

  const progressPercent = Math.round((completedLessons.length / lessons.length) * 100);
  const getTotalXP = () => userProgress?.courses?.gospelMessage?.totalXP || 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="relative overflow-hidden text-white py-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-orange-500 to-amber-600"></div>
        <div className="relative max-w-4xl mx-auto z-10">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="w-12 h-12" />
            <div>
              <h1 className="text-4xl md:text-5xl font-black">The Gospel Message</h1>
              <p className="text-red-100">Understanding the gospel in first-century context</p>
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
                <span className="font-bold text-red-600">{completedLessons.length}/{lessons.length}</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 h-3 rounded-full transition-all" style={{ width: `${progressPercent}%` }} />
              </div>
            </div>
            <div className="text-center"><div className="text-3xl font-black text-red-600">{getTotalXP()}</div><div className="text-xs text-slate-600">Total XP</div></div>
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

export default GospelMessageGuide;
