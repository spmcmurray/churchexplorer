import React, { useState, useEffect } from 'react';
import { CheckCircle, ChevronDown, ChevronRight, Cross, Lock, ArrowLeft } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const EarlyChristianityGuide = ({ userProgress, onNavigate, onGoBack, onProgressUpdate }) => {
  const location = useLocation();
  const [expandedLesson, setExpandedLesson] = useState(null);
  const [completedLessons, setCompletedLessons] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (userProgress?.courses?.earlyChristianity?.completedLessons) {
      setCompletedLessons(userProgress.courses.earlyChristianity.completedLessons);
    }
  }, [userProgress]);

  const getTotalXP = () => {
    return userProgress?.courses?.earlyChristianity?.totalXP || 0;
  };

  const lessons = [
    { number: 17, title: 'Before Denominations Existed', duration: '7 min' },
    { number: 18, title: 'The Apostolic Fathers', duration: '7 min' },
    { number: 19, title: 'How the Trinity Doctrine Formed', duration: '8 min' },
    { number: 20, title: 'The Nicene Creed', duration: '7 min' },
    { number: 21, title: 'Early Heresies and Why They Matter', duration: '7 min' },
    { number: 22, title: 'The Church Fathers', duration: '7 min' },
    { number: 23, title: 'Worship in the Early Church', duration: '6 min' },
    { number: 24, title: 'Lessons from Early Christianity', duration: '6 min' },
  ];

  const progressPercent = Math.round((completedLessons.length / lessons.length) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="relative overflow-hidden text-white py-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500 via-pink-500 to-red-600"></div>
        <div className="relative max-w-4xl mx-auto z-10">
          <div className="flex items-center gap-3 mb-4">
            <Cross className="w-12 h-12" />
            <div>
              <h1 className="text-4xl md:text-5xl font-black">Early Christianity</h1>
              <p className="text-rose-100">What Christians believed before denominations</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <button
          onClick={() => onGoBack ? onGoBack() : onNavigate('learn')}
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-xl border-2 border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Paths</span>
        </button>

        <div className="bg-white rounded-2xl border-2 border-slate-200 p-6 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Progress</h2>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex-1">
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium text-slate-700">Lessons Completed</span>
                <span className="font-bold text-rose-600">{completedLessons.length}/{lessons.length}</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-rose-500 to-pink-500 h-3 rounded-full transition-all"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-rose-600">{getTotalXP()}</div>
              <div className="text-xs text-slate-600">Total XP</div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 mb-8">
          <p className="text-yellow-800 font-semibold">🚧 Lesson content coming soon! This path is currently under development.</p>
        </div>

        <div className="space-y-4">
          {lessons.map((lesson, index) => {
            const isCompleted = completedLessons.includes(lesson.number);
            const isLocked = true; // All locked until content is added

            return (
              <div
                key={lesson.number}
                className="bg-white rounded-2xl border-2 border-slate-200 opacity-60"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <Lock className="w-6 h-6 text-slate-400" />
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-slate-900">{lesson.title}</h3>
                        <p className="text-sm text-slate-600">{lesson.duration}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EarlyChristianityGuide;
