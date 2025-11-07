import React, { useState, useEffect } from 'react';
import { CheckCircle, ChevronDown, ChevronRight, Scale, Lock, ArrowLeft } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import InteractiveLesson from './InteractiveLesson';
import ReviewSession from './ReviewSession';
import { completeCourseLesson } from './firebase/progressService';
import { getCurrentUser } from './firebase/authService';
import { scheduleReviews } from './services/reviewService';
import { lesson33Data, lesson34Data, lesson35Data, lesson36Data, lesson37Data, lesson38Data, lesson39Data, lesson40Data } from './interactiveLessonData';

const InterpretationGuide = ({ userProgress, onNavigate, onGoBack, onProgressUpdate }) => {
  const location = useLocation();
  const [expandedLesson, setExpandedLesson] = useState(null);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [interactiveMode, setInteractiveMode] = useState(null);
  const [reviewMode, setReviewMode] = useState(null);

  useEffect(() => {
    if (location.state?.reviewMode && location.state.reviewMode.path === 'interpretation') {
      setReviewMode(location.state.reviewMode);
    }
  }, [location.state]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (userProgress?.courses?.interpretation?.completedLessons) {
      setCompletedLessons(userProgress.courses.interpretation.completedLessons);
    }
  }, [userProgress]);

  const getTotalXP = () => userProgress?.courses?.interpretation?.totalXP || 0;

  const lessons = [
    { number: 33, title: 'Introduction to Hermeneutics', duration: '7 min', data: lesson33Data },
    { number: 34, title: 'Why Denominations Interpret Differently', duration: '8 min', data: lesson34Data },
    { number: 35, title: 'Literal vs Allegorical Reading', duration: '7 min', data: lesson35Data },
    { number: 36, title: 'Context is King', duration: '7 min', data: lesson36Data },
    { number: 37, title: 'Genre Matters', duration: '6 min', data: lesson37Data },
    { number: 38, title: 'Orthodox Interpretation Principles', duration: '7 min', data: lesson38Data },
    { number: 39, title: 'Spotting Fringe Interpretations', duration: '7 min', data: lesson39Data },
    { number: 40, title: 'Becoming a Better Interpreter', duration: '6 min', data: lesson40Data },
  ];

  const handleLessonComplete = async (lessonNumber, xp) => {
    const user = await getCurrentUser();
    if (!user) return;

    await completeCourseLesson(user.uid, 'interpretation', lessonNumber, xp);
    await scheduleReviews(user.uid, 'interpretation', lessonNumber);
    
    if (onProgressUpdate) await onProgressUpdate();

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
    if (lesson?.data) {
      return <ReviewSession lessonData={lesson.data} onComplete={handleReviewComplete} onBack={handleReviewComplete} />;
    }
  }

  if (interactiveMode !== null) {
    const lesson = lessons.find(l => l.number === interactiveMode);
    if (lesson?.data) {
      return <InteractiveLesson lessonData={lesson.data} onComplete={(xp) => handleLessonComplete(interactiveMode, xp)} onExit={() => { setInteractiveMode(null); setExpandedLesson(null); }} />;
    }
  }

  const progressPercent = Math.round((completedLessons.length / lessons.length) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="relative overflow-hidden text-white py-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600"></div>
        <div className="relative max-w-4xl mx-auto z-10">
          <div className="flex items-center gap-3 mb-4">
            <Scale className="w-12 h-12" />
            <div>
              <h1 className="text-4xl md:text-5xl font-black">Why We Interpret Scripture Differently</h1>
              <p className="text-cyan-100">Denominational differences and discerning truth</p>
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

        <div className="space-y-4">
          {lessons.map((lesson, index) => {
            const isCompleted = completedLessons.includes(lesson.number);
            const isLocked = index > 0 && !completedLessons.includes(lessons[index - 1].number);
            const isExpanded = expandedLesson === lesson.number;

            return (
              <div key={lesson.number} className={`bg-white rounded-2xl border-2 transition ${
                isCompleted ? 'border-cyan-400' : isLocked ? 'border-slate-200 opacity-60' : 'border-slate-200 hover:border-cyan-300'
              }`}>
                <div 
                  className={`p-6 rounded-t-2xl transition ${isLocked ? 'cursor-not-allowed' : 'hover:bg-slate-50 cursor-pointer'}`}
                  onClick={() => !isLocked && setExpandedLesson(isExpanded ? null : lesson.number)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <div className={`w-12 h-12 min-w-[3rem] rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0 ${
                        isCompleted ? 'bg-cyan-100 text-cyan-700' : isLocked ? 'bg-slate-200 text-slate-400' : 'bg-cyan-100 text-cyan-700'
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
                  <div className="border-t-2 border-slate-100 p-6 rounded-b-2xl">
                    <button onClick={() => lesson.data ? setInteractiveMode(lesson.number) : null} disabled={!lesson.data} className={`w-full py-3 px-6 rounded-xl font-semibold transition ${lesson.data ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg cursor-pointer' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}>
                      {lesson.data ? (isCompleted ? 'Review Lesson' : 'Start Lesson') : 'Coming Soon'}
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

export default InterpretationGuide;
