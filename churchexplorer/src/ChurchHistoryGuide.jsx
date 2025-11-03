import React, { useState, useEffect } from 'react';
import { CheckCircle, Calendar, ChevronDown, ChevronRight, Award, Scroll, Lock, Trophy, Star, ArrowLeft } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import InteractiveLesson from './InteractiveLesson';
import ReviewSession from './ReviewSession';
import { lesson1Data, lesson2Data, lesson3Data, lesson4Data, lesson5Data, lesson6Data, lesson7Data, lesson8Data } from './churchHistoryLessonData';
import { scheduleReviews } from './services/reviewService';
import { completeCourseLesson } from './firebase/progressService';
import { getCurrentUser } from './firebase/authService';

const ChurchHistoryGuide = ({ userProgress, onNavigate, onGoBack, onProgressUpdate }) => {
  const location = useLocation();
  const [expandedLesson, setExpandedLesson] = useState(null);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizResults, setQuizResults] = useState({});
  const [interactiveMode, setInteractiveMode] = useState(null); // null or lessonNumber
  const [reviewMode, setReviewMode] = useState(null); // null or { path, lessonNumber }

  // Check for review mode from navigation state (no localStorage)
  useEffect(() => {
    if (location.state?.reviewMode && location.state.reviewMode.path === 'church') {
      setReviewMode(location.state.reviewMode);
    }
  }, [location.state]);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Navigate to other parts of the app from lesson links
  const handleLinkClick = (link) => {
    if (link.includes('Bible Timeline') || link.includes('Denomination')) {
      onNavigate('explorer');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (link.includes('Church History Guide')) {
      onNavigate('study-guide');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Format long text with breaks and support **bold** segments
  const formatTextWithBreaks = (text) => {
    const parts = text.split(/(\(\d+\)\s|\d+\.\s)/);
    return parts.map((part, index) => {
      const formatted = part.split(/(\*\*[^*]+\*\*)/g).map((seg, i) => {
        if (seg.startsWith('**') && seg.endsWith('**')) {
          return <strong key={`b-${index}-${i}`}>{seg.slice(2, -2)}</strong>;
        }
        return seg;
      });
      if (index > 0 && /(\(\d+\)\s|\d+\.\s)/.test(part)) {
        return (
          <React.Fragment key={`p-${index}`}>
            <br />
            <br />
            {formatted}
          </React.Fragment>
        );
      }
      return <React.Fragment key={`p-${index}`}>{formatted}</React.Fragment>;
    });
  };

  // Load progress from Firestore userProgress
  useEffect(() => {
    if (userProgress?.courses?.church?.completedLessons) {
      setCompletedLessons(userProgress.courses.church.completedLessons);
    }
  }, [userProgress]);

  // Total XP from Firestore
  const getTotalXP = () => {
    return userProgress?.courses?.church?.totalXP || 0;
  };

  // Mastery label based on percent complete
  const getMasteryLevel = (completed, total) => {
    const pct = (completed / total) * 100;
    if (pct === 0) return 'Beginner';
    if (pct < 38) return 'Novice';
    if (pct < 63) return 'Scholar';
    if (pct < 88) return 'Expert';
    return 'Master';
  };

  // Mark lesson complete (saved to Firestore via completeCourseLesson)
  const markLessonComplete = (lessonNum) => {
    if (!completedLessons.includes(lessonNum)) {
      const updated = [...completedLessons, lessonNum];
      setCompletedLessons(updated);
      // No localStorage - Firestore is source of truth
    }
  };

  // Quiz helpers for expandable lessons (kept for compatibility)
  const handleQuizAnswer = (lessonNum, questionIdx, answerIdx) => {
    setQuizAnswers(prev => ({
      ...prev,
      [`${lessonNum}-${questionIdx}`]: answerIdx
    }));
  };

  const submitQuiz = (lessonNum, quiz) => {
    let correct = 0;
    quiz.forEach((q, idx) => {
      if (quizAnswers[`${lessonNum}-${idx}`] === q.correctAnswer) correct++;
    });
    const quizResult = { score: correct, total: quiz.length };
    setQuizResults(prev => ({ ...prev, [lessonNum]: quizResult }));

    // Quiz results saved to Firestore via completeCourseLesson
    // No localStorage - Firestore is source of truth

    if (correct >= quiz.length * 0.7) {
      markLessonComplete(lessonNum);
    }
  };

  const handleCompleteInteractive = async (lessonNum, xpEarned) => {
    markLessonComplete(lessonNum);

    // Schedule spaced repetition reviews
    scheduleReviews('church', lessonNum);

    // Save to Firestore only (no localStorage)
    if (xpEarned) {
      const user = getCurrentUser();
      if (user) {
        await completeCourseLesson(user.uid, 'church', lessonNum, xpEarned);
        
        // Refresh progress in App state to update XP immediately
        if (onProgressUpdate) {
          onProgressUpdate();
        }
      }
    }

    setInteractiveMode(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExitInteractive = () => {
    setInteractiveMode(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const curriculum = [
    {
      lesson: 1,
      title: "The Beginning: Early Christianity",
      subtitle: "How it all started",
      introduction: "Welcome to your journey through church history! This week, we'll explore how Christianity began and grew in its first few centuries. Don't worry if you're new to this - we'll start with the basics and build from there."
    },
    {
      lesson: 2,
      title: "The Great Divide: East vs. West",
      subtitle: "Understanding the 1054 split",
      introduction: "This lesson explores one of Christianity's most significant moments: when the church split into Eastern (Orthodox) and Western (Catholic) branches. This wasn't a sudden break but rather centuries of growing differences in culture, language, and theology."
    },
    {
      lesson: 3,
      title: "The Reformation: A Revolution in Faith",
      subtitle: "Martin Luther and the Protestant movement",
      introduction: "Get ready for one of history's most dramatic religious movements! In 1517, a German monk named Martin Luther challenged the Catholic Church's practices and sparked a revolution that would reshape Christianity forever. This lesson explores why it happened and what changed."
    },
    {
      lesson: 4,
      title: "The Middle Way: Anglicans & Methodists",
      subtitle: "Finding balance between Catholic and Protestant",
      introduction: "Not all reformers wanted to completely break from Catholic tradition. This lesson explores two traditions that tried to find a 'middle way' - keeping some Catholic practices while embracing Protestant theology. We'll also learn about John Wesley and the Methodist revival."
    },
    {
      lesson: 5,
      title: "Believer's Baptism: Baptists & Anabaptists",
      subtitle: "Radical reformation and religious freedom",
      introduction: "Some reformers thought Luther and others didn't go far enough. This lesson explores traditions that took more radical stances on baptism, church-state separation, and religious freedom. These groups were often persecuted but their ideas eventually shaped modern concepts of religious liberty."
    },
    {
      lesson: 6,
      title: "The Spirit Moves: Pentecostals & Holiness Churches",
      subtitle: "Revival, spiritual gifts, and personal transformation",
      introduction: "In the late 1800s and early 1900s, powerful revival movements swept across America and beyond, emphasizing emotional worship, spiritual gifts, and complete transformation. This lesson explores two related but distinct movements that dramatically changed Christianity's landscape."
    },
    {
      lesson: 7,
      title: "Back to Basics: Restorationists & Non-Denominational Churches",
      subtitle: "Simplifying Christianity in the modern era",
      introduction: "Some Christians look at denominational divisions and say, 'Let's just get back to what the Bible says!' This lesson explores movements that seek to restore 'simple' New Testament Christianity and modern churches that reject denominational labels altogether."
    },
    {
      lesson: 8,
      title: "Your Journey: Understanding & Choosing",
      subtitle: "Putting it all together",
      introduction: "Congratulations on completing seven lessons of church history! This final lesson is about synthesis - understanding how all these traditions relate to each other and thinking about your own spiritual journey. There's no 'right' denomination, but understanding the options helps you make informed choices."
    }
  ];

  const stats = {
    completed: completedLessons.length,
    total: curriculum.length,
    percentage: Math.round((completedLessons.length / curriculum.length) * 100),
    badges: completedLessons.length, // Each completed lesson earns a badge
    masteryLevel: getMasteryLevel(completedLessons.length, curriculum.length),
    xp: getTotalXP(),
    maxXP: 800 // 40 activities × 10 XP + 8 lessons × 50 XP bonus
  };

  // If in review mode, show review session
  if (reviewMode) {
    const lessonDataMap = {
      1: lesson1Data, 2: lesson2Data, 3: lesson3Data, 4: lesson4Data,
      5: lesson5Data, 6: lesson6Data, 7: lesson7Data, 8: lesson8Data
    };
    
    const lessonData = lessonDataMap[reviewMode.lessonNumber];
    
    if (lessonData) {
      return (
        <ReviewSession
          lessonData={lessonData}
          path="church"
          lessonNumber={reviewMode.lessonNumber}
          onComplete={async (xp) => {
            // XP already awarded by ReviewSession component
            setReviewMode(null);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onExit={() => {
            setReviewMode(null);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      );
    }
  }

  // If in interactive mode, show interactive lesson
  if (interactiveMode === 1) {
    return (
      <InteractiveLesson
        lessonData={lesson1Data}
        onComplete={(xp) => handleCompleteInteractive(1, xp)}
        onExit={handleExitInteractive}
      />
    );
  }

  if (interactiveMode === 2) {
    return (
      <InteractiveLesson
        lessonData={lesson2Data}
        onComplete={(xp) => handleCompleteInteractive(2, xp)}
        onExit={handleExitInteractive}
      />
    );
  }

  if (interactiveMode === 3) {
    return (
      <InteractiveLesson
        lessonData={lesson3Data}
        onComplete={(xp) => handleCompleteInteractive(3, xp)}
        onExit={handleExitInteractive}
      />
    );
  }

  if (interactiveMode === 4) {
    return (
      <InteractiveLesson
        lessonData={lesson4Data}
        onComplete={(xp) => handleCompleteInteractive(4, xp)}
        onExit={handleExitInteractive}
      />
    );
  }

  if (interactiveMode === 5) {
    return (
      <InteractiveLesson
        lessonData={lesson5Data}
        onComplete={(xp) => handleCompleteInteractive(5, xp)}
        onExit={handleExitInteractive}
      />
    );
  }

  if (interactiveMode === 6) {
    return (
      <InteractiveLesson
        lessonData={lesson6Data}
        onComplete={(xp) => handleCompleteInteractive(6, xp)}
        onExit={handleExitInteractive}
      />
    );
  }

  if (interactiveMode === 7) {
    return (
      <InteractiveLesson
        lessonData={lesson7Data}
        onComplete={(xp) => handleCompleteInteractive(7, xp)}
        onExit={handleExitInteractive}
      />
    );
  }

  if (interactiveMode === 8) {
    return (
      <InteractiveLesson
        lessonData={lesson8Data}
        onComplete={(xp) => handleCompleteInteractive(8, xp)}
        onExit={handleExitInteractive}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Header */}
      <div className="relative overflow-hidden text-white py-16 px-4">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-orange-500 to-amber-700 animate-gradient-shift"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-orange-500 via-amber-500 to-orange-700 opacity-60 animate-gradient-shift-reverse"></div>
        
        {/* Content */}
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <div className="flex items-center justify-center mb-4">
            <Scroll className="w-12 h-12 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold">Church History Study Guide</h1>
          </div>
          <p className="text-xl md:text-2xl text-amber-100 mb-6">
            An 8-Lesson Journey from Early Christianity to Modern Churches
          </p>
          <p className="text-lg text-amber-50 max-w-2xl mx-auto">
            Discover how the Christian church grew, split, and evolved over 2,000 years.
            Track your progress as you learn.
          </p>
        </div>
      </div>

      {/* Progress Section */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back button */}
        <button
          onClick={() => onGoBack ? onGoBack() : onNavigate('paths')}
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-xl border-2 border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-12 border-2 border-amber-100">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <div className="flex items-center">
              <Award className="w-8 h-8 text-amber-600 mr-3" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Your Progress</h2>
            </div>
            <span className="text-3xl md:text-4xl font-bold text-amber-600">{stats.percentage}%</span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
            <div
              className="bg-gradient-to-r from-amber-500 to-orange-500 h-4 rounded-full transition-all duration-500"
              style={{ width: `${stats.percentage}%` }}
            ></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-amber-50 rounded-lg p-4">
              <div className="flex items-center gap-2 text-amber-700 mb-1">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Completed</span>
              </div>
              <p className="text-2xl font-bold text-amber-900">{stats.completed}/{stats.total}</p>
            </div>

            <div className="bg-purple-50 rounded-lg p-4">
              <div className="flex items-center gap-2 text-purple-700 mb-1">
                <Trophy className="w-5 h-5" />
                <span className="font-semibold">Badges Earned</span>
              </div>
              <p className="text-2xl font-bold text-purple-900">{stats.badges}</p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-center gap-2 text-blue-700 mb-1">
                <Award className="w-5 h-5" />
                <span className="font-semibold">Mastery Level</span>
              </div>
              <p className="text-2xl font-bold text-blue-900">{stats.masteryLevel}</p>
            </div>

            <div className="bg-green-50 rounded-lg p-4">
              <div className="flex items-center gap-2 text-green-700 mb-1">
                <Star className="w-5 h-5" />
                <span className="font-semibold">Total XP</span>
              </div>
              <p className="text-2xl font-bold text-green-900">{stats.xp}/{stats.maxXP}</p>
            </div>
          </div>
        </div>

        {/* Course Overview */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Calendar className="w-8 h-8 text-orange-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">8-Lesson Curriculum</h2>
          </div>

          <p className="text-gray-700 mb-8 text-lg">
            Click any lesson below to explore the content. Each lesson builds on the previous one,
            taking you from the early church through major schisms and reformations to today's denominations and worship styles.
          </p>

          {/* Lesson Cards */}
          <div className="space-y-4">
            {curriculum.map((lesson) => {
            const isExpanded = expandedLesson === lesson.lesson;
            const isCompleted = completedLessons.includes(lesson.lesson);
            const quizResult = quizResults[lesson.lesson];

            // Check if this lesson has interactive mode (lessons 1-8)
            const hasInteractiveMode = lesson.lesson >= 1 && lesson.lesson <= 8;

            // Check if lesson is locked (previous lesson not completed)
            const isLocked = lesson.lesson > 1 && !completedLessons.includes(lesson.lesson - 1);

            return (
              <div
                key={lesson.lesson}
                className={`bg-white rounded-xl shadow-lg overflow-hidden border-2 transition-all ${
                  isCompleted ? 'border-green-400' : isLocked ? 'border-gray-300 opacity-60' : 'border-gray-200'
                }`}
              >
                {/* Lesson Header */}
                <button
                  onClick={() => {
                    if (isLocked) {
                      // Don't allow clicking locked lessons
                      return;
                    }
                    if (hasInteractiveMode) {
                      // Launch interactive mode directly for lessons 1-4
                      setInteractiveMode(lesson.lesson);
                    } else {
                      // Toggle expand for lessons 5-8
                      setExpandedLesson(isExpanded ? null : lesson.lesson);
                    }
                  }}
                  disabled={isLocked}
                  className={`w-full p-6 transition ${isLocked ? 'cursor-not-allowed' : 'hover:bg-gray-50 cursor-pointer'}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 min-w-[3rem] rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0 ${
                        isCompleted ? 'bg-green-100 text-green-700' : isLocked ? 'bg-gray-200 text-gray-400' : 'bg-amber-100 text-amber-700'
                      }`}>
                        {isCompleted ? <CheckCircle className="w-6 h-6" /> : lesson.lesson}
                      </div>
                      <div className="text-left">
                        <h3 className={`text-xl font-bold ${isLocked ? 'text-gray-400' : 'text-gray-800'}`}>{lesson.title}</h3>
                        <p className={`${isLocked ? 'text-gray-400' : 'text-gray-600'}`}>
                          {lesson.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Show status: Complete, Start, or Lock */}
                    {isLocked ? (
                      <div className="flex items-center justify-center">
                        <Lock className="w-6 h-6 text-gray-400 flex-shrink-0" />
                      </div>
                    ) : isCompleted ? (
                      <span className="text-sm font-bold text-green-600 bg-green-100 px-4 py-2 rounded-full">
                        Complete
                      </span>
                    ) : hasInteractiveMode ? (
                      <span className="text-sm font-bold text-purple-600 bg-purple-100 px-4 py-2 rounded-full">
                        Start
                      </span>
                    ) : (
                      isExpanded ? <ChevronDown className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />
                    )}
                  </div>
                </button>

                {/* Lesson Content - Expandable (only for lessons 5-8) */}
                {!hasInteractiveMode && isExpanded && (
                  <div className="px-6 pb-6 border-t-2 border-gray-100 pt-6">
                    {/* Introduction */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-2 text-lg">Introduction</h4>
                      <p className="text-gray-700 leading-relaxed">{lesson.introduction}</p>
                    </div>

                    {/* Key Topics */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3 text-lg">Key Topics This Lesson</h4>
                      <ul className="space-y-2">
                        {lesson.keyTopics.map((topic, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Beginner Explanation */}
                    <div className="mb-6 bg-amber-50 rounded-lg p-4 border-l-4 border-amber-500">
                      <h4 className="font-semibold text-gray-800 mb-2 text-lg">Simple Explanation</h4>
                      <p className="text-gray-700 leading-relaxed">{lesson.beginnerExplanation}</p>
                    </div>

                    {/* Detailed Content */}
                    {lesson.detailedContent && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-800 mb-4 text-lg">In-Depth Study</h4>
                        <div className="space-y-4">
                          {lesson.detailedContent.map((section, idx) => (
                            <div key={idx} className="bg-white rounded-lg p-4 border-2 border-gray-200">
                              <h5 className="font-bold text-gray-900 mb-2">{section.heading}</h5>
                              <p className="text-gray-700 leading-relaxed">{formatTextWithBreaks(section.text)}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Reflection Questions */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3 text-lg">Questions to Consider</h4>
                      <ul className="space-y-2">
                        {lesson.reflectionQuestions.map((question, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-orange-600 font-bold mr-3 flex-shrink-0">{idx + 1}.</span>
                            <span className="text-gray-700 italic">{question}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Practical Application */}
                    <div className="mb-6 bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
                      <h4 className="font-semibold text-gray-800 mb-2 text-lg">This Lesson's Practice</h4>
                      <p className="text-gray-700 leading-relaxed">{lesson.practicalApplication}</p>
                    </div>

                    {/* App Links */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3 text-lg">Explore in the App</h4>
                      <div className="flex flex-wrap gap-2">
                        {lesson.appLinks.map((link, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleLinkClick(link)}
                            className="inline-block bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium border border-amber-200 hover:from-amber-200 hover:to-orange-200 hover:shadow-md transition cursor-pointer"
                          >
                            {link}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Quiz Section */}
                    {lesson.quiz && (
                      <div className="mb-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border-2 border-amber-200">
                        <div className="flex items-center mb-4">
                          <div className="bg-amber-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3">
                            ?
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 text-lg">Lesson {lesson.lesson} Quiz</h4>
                            <p className="text-sm text-gray-600">Test your understanding with 5 questions</p>
                          </div>
                        </div>

                        {!quizResult ? (
                          <>
                            {/* Quiz Questions */}
                            <div className="space-y-6">
                              {lesson.quiz.map((question, qIdx) => {
                                const userAnswer = quizAnswers[`${lesson.lesson}-${qIdx}`];

                                return (
                                  <div key={qIdx} className="bg-white rounded-lg p-4 border border-gray-200">
                                    <p className="font-semibold text-gray-900 mb-3">
                                      {qIdx + 1}. {question.question}
                                    </p>
                                    <div className="space-y-2">
                                      {question.options.map((option, oIdx) => {
                                        const isSelected = userAnswer === oIdx;

                                        return (
                                          <button
                                            key={oIdx}
                                            onClick={() => handleQuizAnswer(lesson.lesson, qIdx, oIdx)}
                                            className={`w-full text-left p-3 rounded-lg border-2 transition ${
                                              isSelected
                                                ? 'border-amber-500 bg-amber-50'
                                                : 'border-gray-200 hover:border-amber-300 hover:bg-gray-50'
                                            }`}
                                          >
                                            <span className="font-medium text-gray-700 mr-2">
                                              {String.fromCharCode(65 + oIdx)}.
                                            </span>
                                            {option}
                                          </button>
                                        );
                                      })}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>

                            <div className="mt-6">
                              <button
                                onClick={() => submitQuiz(lesson.lesson, lesson.quiz)}
                                className="w-full bg-amber-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-amber-700 transition shadow-md hover:shadow-lg"
                              >
                                Submit Quiz
                              </button>
                            </div>
                          </>
                        ) : (
                          <>
                            {/* Quiz Results */}
                            <div className="space-y-6">
                              {lesson.quiz.map((question, qIdx) => {
                                const userAnswer = quizAnswers[`${lesson.lesson}-${qIdx}`];
                                const isCorrect = userAnswer === question.correctAnswer;

                                return (
                                  <div key={qIdx} className="bg-white rounded-lg p-4 border border-gray-200">
                                    <p className="font-semibold text-gray-900 mb-3">
                                      {qIdx + 1}. {question.question}
                                    </p>
                                    <div className="space-y-2">
                                      {question.options.map((option, oIdx) => {
                                        const isSelected = userAnswer === oIdx;
                                        const isCorrectAnswer = oIdx === question.correctAnswer;

                                        let buttonClass = 'w-full text-left p-3 rounded-lg border-2 cursor-default ';
                                        if (isCorrectAnswer) {
                                          buttonClass += 'border-green-500 bg-green-50';
                                        } else if (isSelected && !isCorrect) {
                                          buttonClass += 'border-red-500 bg-red-50';
                                        } else {
                                          buttonClass += 'border-gray-200 bg-gray-50';
                                        }

                                        return (
                                          <div key={oIdx} className={buttonClass}>
                                            <span className="font-medium text-gray-700 mr-2">
                                              {String.fromCharCode(65 + oIdx)}.
                                            </span>
                                            {option}
                                          </div>
                                        );
                                      })}
                                    </div>
                                    <div className={`mt-3 p-3 rounded-lg ${isCorrect ? 'bg-green-100 border-l-4 border-green-500' : 'bg-blue-100 border-l-4 border-blue-500'}`}>
                                      <p className="text-sm font-semibold text-gray-900 mb-1">
                                        {isCorrect ? '✓ Correct!' : 'Explanation:'}
                                      </p>
                                      <p className="text-sm text-gray-800">{question.explanation}</p>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>

                            {/* Quiz Score */}
                            <div className="mt-6 p-4 bg-white rounded-lg border-2 border-amber-300">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-lg font-bold text-gray-800">Your Score:</span>
                                <span className="text-2xl font-bold text-amber-600">
                                  {quizResult.score} / {quizResult.total}
                                </span>
                              </div>
                              {quizResult.score >= quizResult.total * 0.7 ? (
                                <p className="text-green-700 font-semibold flex items-center">
                                  <CheckCircle className="w-5 h-5 mr-2" />
                                  Great job! You passed this lesson! ✓
                                </p>
                              ) : (
                                <p className="text-orange-700">
                                  Review the material and try again (need 70% to pass)
                                </p>
                              )}
                            </div>

                            <div className="mt-6">
                              <button
                                onClick={() => {
                                  setQuizResults(prev => {
                                    const updated = { ...prev };
                                    delete updated[lesson.lesson];
                                    return updated;
                                  });
                                  setQuizAnswers(prev => {
                                    const updated = { ...prev };
                                    lesson.quiz.forEach((_, idx) => {
                                      delete updated[`${lesson.lesson}-${idx}`];
                                    });
                                    return updated;
                                  });
                                }}
                                className="w-full bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-700 transition shadow-md hover:shadow-lg"
                              >
                                Retake Quiz
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                    )}


                    {!isCompleted && (
                      <button
                        onClick={() => markLessonComplete(lesson.lesson)}
                        className="mt-6 w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition"
                      >
                        Mark as Complete
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </div>
  );
};

export default ChurchHistoryGuide;
