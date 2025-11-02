import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  BookOpen, 
  Award, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle,
  Clock,
  Lightbulb,
  Quote,
  Star,
  Share2
} from 'lucide-react';
import { completeCourseLesson } from '../firebase/progressService';

const AILessonViewer = ({ lesson, currentUser, onComplete, onGoBack }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [lessonCompleted, setLessonCompleted] = useState(false);
  const [startTime] = useState(Date.now());

  const totalSections = lesson.sections?.length || 0;
  const progress = ((currentSection + 1) / (totalSections + 1)) * 100;

  const handleNextSection = () => {
    if (currentSection < totalSections - 1) {
      setCurrentSection(prev => prev + 1);
    } else {
      setShowQuiz(true);
    }
  };

  const handlePrevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(prev => prev - 1);
    }
  };

  const handleQuizAnswer = (questionIndex, answerIndex) => {
    setQuizAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex
    }));
  };

  const handleCompleteQuiz = async () => {
    if (!lesson.quiz) return;

    // Calculate score
    let correct = 0;
    lesson.quiz.forEach((question, index) => {
      if (quizAnswers[index] === question.correct) {
        correct++;
      }
    });

    const percentage = Math.round((correct / lesson.quiz.length) * 100);
    setScore(percentage);
    setQuizCompleted(true);

    // If quiz passed (70%+), complete the lesson
    if (percentage >= 70) {
      await completeLessonWithXP();
    }
  };

  const completeLessonWithXP = async () => {
    if (!currentUser || lessonCompleted) return;

    try {
      const studyTime = Math.round((Date.now() - startTime) / 1000 / 60); // minutes
      
      // Record completion in Firestore for AI lessons
      const result = await completeCourseLesson(
        currentUser.uid, 
        'ai_generated', 
        lesson.id, 
        lesson.xpReward || 50
      );

      if (result.success) {
        setLessonCompleted(true);
        if (onComplete) {
          onComplete({
            xpEarned: lesson.xpReward || 50,
            studyTime,
            score,
            topic: lesson.originalTopic
          });
        }
      }
    } catch (error) {
      console.error('Error completing AI lesson:', error);
    }
  };

  const getCurrentSection = () => {
    return lesson.sections[currentSection] || {};
  };

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Lesson not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 pb-20">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          {onGoBack && (
            <button
              onClick={onGoBack}
              className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-purple-200 rounded-xl hover:border-purple-500 hover:text-purple-600 transition mb-6 font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Creator
            </button>
          )}

          {/* AI Badge */}
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-gradient-to-r from-purple-500 to-blue-600 px-3 py-1 rounded-full">
              <div className="flex items-center gap-2 text-white text-sm font-semibold">
                <Brain className="w-4 h-4" />
                AI Generated
              </div>
            </div>
            <span className="text-gray-500 text-sm">
              Created for: {lesson.originalTopic}
            </span>
          </div>

          <h1 className="text-4xl font-black text-gray-900 mb-2">{lesson.title}</h1>
          <p className="text-xl text-gray-600 mb-6">{lesson.subtitle}</p>

          {/* Progress Bar */}
          <div className="bg-gray-200 rounded-full h-3 mb-6">
            <div 
              className="bg-gradient-to-r from-purple-500 to-blue-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>
              {showQuiz ? 'Quiz' : `Section ${currentSection + 1} of ${totalSections}`}
            </span>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{Math.round((Date.now() - startTime) / 1000 / 60)} min</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500" />
                <span>{lesson.xpReward || 50} XP</span>
              </div>
            </div>
          </div>
        </div>

        {!showQuiz ? (
          /* Lesson Content */
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            {currentSection === 0 && (
              /* Introduction */
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
                </div>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed">{lesson.introduction}</p>
                </div>
              </div>
            )}

            {/* Current Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold">
                  {currentSection + 1}
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{getCurrentSection().title}</h2>
              </div>

              <div className="prose prose-lg max-w-none mb-8">
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {getCurrentSection().content}
                </div>
              </div>

              {/* Key Points */}
              {getCurrentSection().keyPoints && getCurrentSection().keyPoints.length > 0 && (
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Lightbulb className="w-5 h-5 text-purple-600" />
                    <h3 className="font-bold text-gray-900">Key Points</h3>
                  </div>
                  <ul className="space-y-2">
                    {getCurrentSection().keyPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-6 border-t border-gray-200">
              <button
                onClick={handlePrevSection}
                disabled={currentSection === 0}
                className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </button>

              <button
                onClick={handleNextSection}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition"
              >
                {currentSection === totalSections - 1 ? 'Take Quiz' : 'Next'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Quiz Section */
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl font-bold text-gray-900">Knowledge Check</h2>
            </div>

            {!quizCompleted ? (
              <div className="space-y-6">
                {lesson.quiz?.map((question, qIndex) => (
                  <div key={qIndex} className="border-2 border-gray-200 rounded-xl p-6">
                    <h3 className="font-bold text-gray-900 mb-4">
                      {qIndex + 1}. {question.question}
                    </h3>
                    <div className="space-y-2">
                      {question.options?.map((option, oIndex) => (
                        <button
                          key={oIndex}
                          onClick={() => handleQuizAnswer(qIndex, oIndex)}
                          className={`w-full text-left p-3 rounded-lg border-2 transition ${
                            quizAnswers[qIndex] === oIndex
                              ? 'border-purple-500 bg-purple-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}

                <button
                  onClick={handleCompleteQuiz}
                  disabled={Object.keys(quizAnswers).length < lesson.quiz?.length}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-4 px-6 rounded-xl hover:from-purple-700 hover:to-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Complete Quiz
                </button>
              </div>
            ) : (
              /* Quiz Results */
              <div className="text-center">
                <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 ${
                  score >= 70 ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  <span className={`text-3xl font-bold ${score >= 70 ? 'text-green-600' : 'text-red-600'}`}>
                    {score}%
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {score >= 70 ? 'Congratulations!' : 'Keep Learning!'}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {score >= 70 
                    ? `You've successfully completed this AI-generated lesson and earned ${lesson.xpReward || 50} XP!`
                    : 'You can review the lesson content and retake the quiz to improve your score.'
                  }
                </p>

                {score >= 70 && (
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mb-6">
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <Trophy className="w-6 h-6 text-green-600" />
                      <span className="font-bold text-green-600">Lesson Completed!</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-center">
                        <p className="font-semibold text-gray-900">XP Earned</p>
                        <p className="text-green-600 font-bold">{lesson.xpReward || 50}</p>
                      </div>
                      <div className="text-center">
                        <p className="font-semibold text-gray-900">Final Score</p>
                        <p className="text-green-600 font-bold">{score}%</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex gap-4 justify-center">
                  {score < 70 && (
                    <button
                      onClick={() => {
                        setShowQuiz(false);
                        setCurrentSection(0);
                        setQuizCompleted(false);
                        setQuizAnswers({});
                      }}
                      className="px-6 py-3 border-2 border-purple-500 text-purple-600 font-semibold rounded-xl hover:bg-purple-50 transition"
                    >
                      Review Lesson
                    </button>
                  )}
                  
                  <button
                    onClick={onGoBack}
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition"
                  >
                    Create Another Lesson
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Memory Verse & Reflection (shown after quiz completion) */}
        {quizCompleted && score >= 70 && (
          <div className="space-y-6">
            {/* Memory Verse */}
            {lesson.memorizeVerse && (
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Quote className="w-6 h-6 text-yellow-600" />
                  <h3 className="text-xl font-bold text-gray-900">Memory Verse</h3>
                </div>
                <blockquote className="text-lg text-gray-800 italic mb-2">
                  "{lesson.memorizeVerse.text}"
                </blockquote>
                <cite className="text-yellow-700 font-semibold">
                  — {lesson.memorizeVerse.reference}
                </cite>
              </div>
            )}

            {/* Reflection */}
            {lesson.reflection && (
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">Reflection</h3>
                </div>
                <p className="text-gray-800 mb-4 font-medium">{lesson.reflection.question}</p>
                <p className="text-gray-600">{lesson.reflection.prompt}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AILessonViewer;