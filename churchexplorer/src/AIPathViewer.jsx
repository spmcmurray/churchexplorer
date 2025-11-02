import React, { useState, useEffect } from 'react';
import { CheckCircle, Award, ArrowLeft, Play, BookOpen, Sparkles, Lock, Trophy, Star } from 'lucide-react';
import AILessonViewer from './AILessonViewer';

/**
 * Dedicated viewer for a single AI-generated learning path
 * Similar to BibleHistoryGuide - shows all lessons in path with progressive flow
 */
const AIPathViewer = ({ path, currentUser, onGoBack }) => {
  const [completedLessons, setCompletedLessons] = useState([]);
  const [viewingLesson, setViewingLesson] = useState(null);

  // Load progress from localStorage and Firestore
  useEffect(() => {
    const loadProgress = async () => {
      // Try Firestore first if user is logged in
      if (currentUser?.uid) {
        try {
          const { getAIPathProgressFromFirestore } = await import('./firebase/progressService');
          const result = await getAIPathProgressFromFirestore(currentUser.uid, path.id);
          if (result.success && result.progress?.completedLessons) {
            setCompletedLessons(result.progress.completedLessons);
            // Sync to localStorage as backup
            localStorage.setItem(`aiPathProgress_${path.id}`, JSON.stringify(result.progress.completedLessons));
            return;
          }
        } catch (error) {
          console.error('Error loading progress from Firestore:', error);
        }
      }
      
      // Fallback to localStorage
      const saved = localStorage.getItem(`aiPathProgress_${path.id}`);
      if (saved) {
        setCompletedLessons(JSON.parse(saved));
      }
    };
    
    loadProgress();
  }, [path.id, currentUser]);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Calculate progress stats
  const stats = {
    total: path.lessons?.length || 0,
    completed: completedLessons.length,
    percentage: path.lessons?.length > 0 
      ? Math.round((completedLessons.length / path.lessons.length) * 100) 
      : 0
  };

  // Mark lesson complete
  const markLessonComplete = async (lessonIndex) => {
    if (!completedLessons.includes(lessonIndex)) {
      const updated = [...completedLessons, lessonIndex];
      setCompletedLessons(updated);
      localStorage.setItem(`aiPathProgress_${path.id}`, JSON.stringify(updated));
      
      // Also save to Firestore if user is logged in
      if (currentUser?.uid) {
        try {
          const { saveAIPathProgressToFirestore } = await import('./firebase/progressService');
          await saveAIPathProgressToFirestore(currentUser.uid, path.id, updated);
        } catch (error) {
          console.error('Error saving progress to Firestore:', error);
        }
      }
    }
  };

  // Check if lesson is unlocked (progressive unlock)
  const isLessonUnlocked = (lessonIndex) => {
    if (lessonIndex === 0) return true; // First lesson always unlocked
    return completedLessons.includes(lessonIndex - 1); // Previous lesson must be complete
  };

  // If viewing a specific lesson, show lesson viewer
  if (viewingLesson !== null) {
    const lesson = path.lessons[viewingLesson];
    return (
      <AILessonViewer
        lesson={lesson}
        currentUser={currentUser}
        onComplete={(result) => {
          markLessonComplete(viewingLesson);
          setViewingLesson(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onGoBack={() => {
          setViewingLesson(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-12 h-12 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold">{path.title || 'AI Learning Path'}</h1>
          </div>
          {path.description && (
            <p className="text-xl md:text-2xl text-purple-100 mb-6">
              {path.description}
            </p>
          )}
          <p className="text-lg text-purple-50 max-w-2xl mx-auto">
            {stats.total === 1 ? 'A comprehensive lesson' : `A ${stats.total}-Lesson Journey`} • Track your progress as you learn
          </p>
        </div>
      </div>

      {/* Progress Section */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back button */}
        <button
          onClick={onGoBack}
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-xl border-2 border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to AI Paths</span>
        </button>

        {/* Progress Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-12 border-2 border-purple-100">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <div className="flex items-center">
              <Award className="w-8 h-8 text-purple-600 mr-3" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Your Progress</h2>
            </div>
            <span className="text-3xl md:text-4xl font-bold text-purple-600">{stats.percentage}%</span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
            <div
              className="bg-gradient-to-r from-purple-500 to-blue-500 h-4 rounded-full transition-all duration-500"
              style={{ width: `${stats.percentage}%` }}
            ></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="flex items-center gap-2 text-purple-700 mb-1">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm font-semibold">Completed</span>
              </div>
              <p className="text-2xl font-bold text-purple-900">{stats.completed}</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-center gap-2 text-blue-700 mb-1">
                <BookOpen className="w-5 h-5" />
                <span className="text-sm font-semibold">Remaining</span>
              </div>
              <p className="text-2xl font-bold text-blue-900">{stats.total - stats.completed}</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-4">
              <div className="flex items-center gap-2 text-purple-700 mb-1">
                <Star className="w-5 h-5" />
                <span className="text-sm font-semibold">Total</span>
              </div>
              <p className="text-2xl font-bold text-purple-900">{stats.total}</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4">
              <div className="flex items-center gap-2 text-blue-700 mb-1">
                <Trophy className="w-5 h-5" />
                <span className="text-sm font-semibold">Progress</span>
              </div>
              <p className="text-2xl font-bold text-blue-900">{stats.percentage}%</p>
            </div>
          </div>
        </div>

        {/* Lessons Section */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8 border-2 border-slate-100">
          <div className="flex items-center mb-6">
            <BookOpen className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">{stats.total === 1 ? 'Lesson' : `${stats.total}-Lesson Curriculum`}</h2>
          </div>

          <p className="text-gray-700 mb-8 text-lg">
            {stats.total === 1 
              ? 'Click the lesson below to begin your learning journey.'
              : 'Click any lesson below to explore the content. Each lesson builds on the previous one.'}
          </p>

          {/* Lessons List */}
          <div className="space-y-4">
            {path.lessons && path.lessons.map((lesson, index) => {
              const isCompleted = completedLessons.includes(index);
              const isUnlocked = isLessonUnlocked(index);

              return (
                <div
                  key={index}
                  className={`bg-white rounded-xl shadow-lg overflow-hidden border-2 transition-all ${
                    isCompleted ? 'border-green-400' : isUnlocked ? 'border-gray-200' : 'border-gray-300 opacity-60'
                  }`}
                >
                  {/* Lesson Header - Button */}
                  <button
                    onClick={() => isUnlocked && setViewingLesson(index)}
                    disabled={!isUnlocked}
                    className={`w-full p-6 transition ${!isUnlocked ? 'cursor-not-allowed' : 'hover:bg-gray-50 cursor-pointer'}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 min-w-[3rem] rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0 ${
                          isCompleted ? 'bg-green-100 text-green-700' : !isUnlocked ? 'bg-gray-200 text-gray-400' : 'bg-purple-100 text-purple-700'
                        }`}>
                          {isCompleted ? <CheckCircle className="w-6 h-6" /> : index + 1}
                        </div>
                        <div className="text-left">
                          <h3 className={`text-xl font-bold ${!isUnlocked ? 'text-gray-400' : 'text-gray-800'}`}>
                            {lesson.title || `Lesson ${index + 1}`}
                          </h3>
                          {lesson.subtitle && (
                            <p className={`${!isUnlocked ? 'text-gray-400' : 'text-gray-600'}`}>
                              {lesson.subtitle}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Show status: Complete, Start, or Lock */}
                      {!isUnlocked ? (
                        <div className="flex items-center justify-center">
                          <Lock className="w-6 h-6 text-gray-400 flex-shrink-0" />
                        </div>
                      ) : isCompleted ? (
                        <span className="text-sm font-bold text-green-600 bg-green-100 px-4 py-2 rounded-full">
                          Complete
                        </span>
                      ) : (
                        <span className="text-sm font-bold text-purple-600 bg-purple-100 px-4 py-2 rounded-full">
                          Start
                        </span>
                      )}
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Completion Badge */}
        {stats.percentage === 100 && (
          <div className="mt-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
            <Trophy className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2">Path Complete! 🎉</h3>
            <p className="text-purple-100 text-lg">
              Congratulations on completing this learning path!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIPathViewer;
