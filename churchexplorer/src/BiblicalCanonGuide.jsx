import React, { useState, useEffect } from 'react';
import { CheckCircle, Calendar, ChevronDown, ChevronRight, Award, Book, Lock, Trophy, Star, ArrowLeft } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import InteractiveLesson from './InteractiveLesson';
import ReviewSession from './ReviewSession';
import { lesson9Data, lesson10Data, lesson11Data, lesson12Data, lesson13Data, lesson14Data, lesson15Data, lesson16Data } from './interactiveLessonData';
import { scheduleReviews } from './services/reviewService';
import { completeCourseLesson } from './firebase/progressService';
import { getCurrentUser } from './firebase/authService';

const BiblicalCanonGuide = ({ userProgress, onNavigate, onGoBack, onProgressUpdate }) => {
  const location = useLocation();
  const [expandedLesson, setExpandedLesson] = useState(null);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [interactiveMode, setInteractiveMode] = useState(null);
  const [reviewMode, setReviewMode] = useState(null);

  // Check for review mode from navigation state
  useEffect(() => {
    if (location.state?.reviewMode && location.state.reviewMode.path === 'biblicalCanon') {
      setReviewMode(location.state.reviewMode);
    }
  }, [location.state]);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Load progress from Firestore userProgress
  useEffect(() => {
    if (userProgress?.courses?.biblicalCanon?.completedLessons) {
      setCompletedLessons(userProgress.courses.biblicalCanon.completedLessons);
    }
  }, [userProgress]);

  // Calculate total XP earned from Firestore
  const getTotalXP = () => {
    return userProgress?.courses?.biblicalCanon?.totalXP || 0;
  };

  const lessons = [
    { number: 9, title: 'What is the Canon?', duration: '6 min', data: lesson9Data },
    { number: 10, title: 'The Old Testament Canon', duration: '7 min', data: lesson10Data },
    { number: 11, title: 'Catholic vs Protestant Canons', duration: '7 min', data: lesson11Data },
    { number: 12, title: 'The New Testament Canon Formation', duration: '8 min', data: lesson12Data },
    { number: 13, title: 'Apocryphal Gospels and Forgeries', duration: '7 min', data: lesson13Data },
    { number: 14, title: 'The Canon and Church Authority', duration: '6 min', data: lesson14Data },
    { number: 15, title: 'Why the Canon Is Closed', duration: '6 min', data: lesson15Data },
    { number: 16, title: 'Applying Canon Knowledge Today', duration: '6 min', data: lesson16Data },
  ];

  const handleLessonComplete = async (lessonNumber, xp) => {
    const user = await getCurrentUser();
    if (!user) return;

    await completeCourseLesson(user.uid, 'biblicalCanon', lessonNumber, xp);
    await scheduleReviews(user.uid, 'biblicalCanon', lessonNumber);
    
    if (onProgressUpdate) {
      await onProgressUpdate();
    }

    setInteractiveMode(null);
    setExpandedLesson(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReviewComplete = () => {
    setReviewMode(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (reviewMode) {
    const lesson = lessons.find(l => l.number === reviewMode.lessonNumber);
    return (
      <ReviewSession
        lessonData={lesson.data}
        onComplete={handleReviewComplete}
        onBack={handleReviewComplete}
      />
    );
  }

  if (interactiveMode !== null) {
    const lesson = lessons.find(l => l.number === interactiveMode);
    return (
      <InteractiveLesson
        lessonData={lesson.data}
        onComplete={(xp) => handleLessonComplete(interactiveMode, xp)}
        onExit={() => {
          setInteractiveMode(null);
          setExpandedLesson(null);
        }}
      />
    );
  }

  const progressPercent = Math.round((completedLessons.length / lessons.length) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <div className="relative overflow-hidden text-white py-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600"></div>
        
        <div className="relative max-w-4xl mx-auto z-10">
          <div className="flex items-center gap-3 mb-4">
            <Book className="w-12 h-12" />
            <div>
              <h1 className="text-4xl md:text-5xl font-black">Where Did the Bible Come From?</h1>
              <p className="text-emerald-100">Canon formation and Catholic vs Protestant differences</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back button */}
        <button
          onClick={() => onGoBack ? onGoBack() : onNavigate('learn')}
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-xl border-2 border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Paths</span>
        </button>

        {/* Progress Overview */}
        <div className="bg-white rounded-2xl border-2 border-slate-200 p-6 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Progress</h2>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex-1">
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium text-slate-700">Lessons Completed</span>
                <span className="font-bold text-emerald-600">{completedLessons.length}/{lessons.length}</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full transition-all"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-emerald-600">{getTotalXP()}</div>
              <div className="text-xs text-slate-600">Total XP</div>
            </div>
          </div>
        </div>

        {/* Lessons List */}
        <div className="space-y-4">
          {lessons.map((lesson, index) => {
            const isCompleted = completedLessons.includes(lesson.number);
            const isLocked = index > 0 && !completedLessons.includes(lessons[index - 1].number);
            const isExpanded = expandedLesson === lesson.number;

            return (
              <div
                key={lesson.number}
                className={`bg-white rounded-2xl border-2 transition ${
                  isCompleted ? 'border-emerald-400' : isLocked ? 'border-slate-200 opacity-60' : 'border-slate-200 hover:border-emerald-300'
                }`}
              >
                <div
                  className={`p-6 transition ${isLocked ? 'cursor-not-allowed' : 'hover:bg-slate-50 cursor-pointer'}`}
                  onClick={() => !isLocked && setExpandedLesson(isExpanded ? null : lesson.number)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <div className={`w-12 h-12 min-w-[3rem] rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0 ${
                        isCompleted ? 'bg-emerald-100 text-emerald-700' : isLocked ? 'bg-slate-200 text-slate-400' : 'bg-emerald-100 text-emerald-700'
                      }`}>
                        {isCompleted ? <CheckCircle className="w-6 h-6" /> : index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-bold text-lg ${isLocked ? 'text-slate-400' : 'text-slate-900'}`}>{lesson.title}</h3>
                        <p className={`text-sm ${isLocked ? 'text-slate-400' : 'text-slate-600'}`}>{lesson.duration}</p>
                      </div>
                    </div>
                    {isLocked ? (
                      <div className="flex items-center justify-center">
                        <Lock className="w-6 h-6 text-slate-400 flex-shrink-0" />
                      </div>
                    ) : (
                      isExpanded ? <ChevronDown className="w-6 h-6 text-slate-400" /> : <ChevronRight className="w-6 h-6 text-slate-400" />
                    )}
                  </div>
                </div>

                {isExpanded && !isLocked && (
                  <div className="border-t-2 border-slate-100 p-6">
                    <button
                      onClick={() => setInteractiveMode(lesson.number)}
                      className="w-full py-3 px-6 rounded-xl font-semibold transition bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:shadow-lg"
                    >
                      {isCompleted ? 'Review Lesson' : 'Start Lesson'}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BiblicalCanonGuide;
