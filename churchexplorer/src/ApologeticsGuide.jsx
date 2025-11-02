import React, { useState, useEffect } from 'react';
import { CheckCircle, Calendar, ChevronDown, ChevronRight, Award, Lock, Trophy, Star, Shield, ArrowLeft } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import InteractiveLesson from './InteractiveLesson';
import ReviewSession from './ReviewSession';
// Use the clean lesson data source
import { lesson1Data, lesson2Data, lesson3Data, lesson4Data, lesson5Data, lesson6Data, lesson7Data, lesson8Data } from './apologeticsLessonData.clean';
import { scheduleReviews } from './services/reviewService';
import { addPathXP } from './services/progressService';
import { completeCourseLesson } from './firebase/progressService';
import { getCurrentUser } from './firebase/authService';

const ApologeticsGuide = ({ onNavigate, onGoBack, onProgressUpdate }) => {
  const location = useLocation();
  const [expandedLesson, setExpandedLesson] = useState(null);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [interactiveMode, setInteractiveMode] = useState(null); // null or lessonNumber
  const [reviewMode, setReviewMode] = useState(null); // null or { path, lessonNumber }

  // Check for review mode from navigation state (no localStorage)
  useEffect(() => {
    if (location.state?.reviewMode && location.state.reviewMode.path === 'apologetics') {
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

  // Adapt Apologetics lesson data (info/teaching/quote/scenario/reflection/action)
  // to the InteractiveLesson schema (content/quiz/matching/fillblank/completion)
  const adaptLessonForInteractive = (src) => {
    if (!src || !Array.isArray(src.cards)) return src;

    const cards = src.cards.map((c) => {
      switch (c.type) {
        case 'info':
        case 'teaching': {
          return {
            type: 'content',
            title: c.title || (c.type === 'info' ? 'Info' : 'Teaching'),
            subtitle: c.subtitle || undefined,
            content: Array.isArray(c.content) ? c.content : c.content ? [c.content] : [],
            highlight: c.keyPoint || c.highlight || undefined,
          };
        }
        case 'quote': {
          const parts = [];
          if (c.text) parts.push(`“${c.text}”`);
          if (c.context) parts.push(`— ${c.context}`);
          return {
            type: 'content',
            title: c.author ? `Quote: ${c.author}` : 'Quote',
            content: parts.length ? parts : [],
          };
        }
        case 'reflection': {
          return {
            type: 'content',
            title: c.title || 'Reflection',
            content: c.prompt ? [c.prompt] : [],
            highlight: 'Take a moment to reflect and, if you can, jot down your thoughts.',
          };
        }
        case 'action': {
          return {
            type: 'content',
            title: c.title || 'Action',
            content: c.task ? [c.task] : [],
            highlight: 'Challenge: Put this into practice this week.',
          };
        }
        case 'scenario': {
          const options = (c.options || []).map(o => o.text);
          const correctIndex = (c.options || []).findIndex(o => o.isCorrect);
          const correctFeedback = correctIndex >= 0 && c.options[correctIndex].feedback
            ? c.options[correctIndex].feedback
            : 'Consider why the correct answer best captures the point of this scenario.';
          return {
            type: 'quiz',
            question: c.question || c.title || 'Choose the best response to the scenario.',
            options,
            correctAnswer: Math.max(0, correctIndex),
            explanation: correctFeedback,
          };
        }
        case 'quiz': {
          // Already compatible with InteractiveLesson
          return {
            type: 'quiz',
            question: c.question,
            options: c.options,
            correctAnswer: c.correctAnswer,
            explanation: c.explanation,
          };
        }
        default:
          return c;
      }
    });

    // Ensure a completion card exists so users can finish and receive XP
    const hasCompletion = cards.some(card => card.type === 'completion');
    if (!hasCompletion) {
      cards.push({
        type: 'completion',
        title: 'Lesson Complete! 🎉',
        message: `Great work finishing "${src.title}". Keep going—you’re building a strong apologetics foundation.`,
        badge: {
          icon: '🛡️',
          name: `Apologetics ${src.id}`,
          description: `Completed: ${src.title}`,
        },
      });
    }

    return {
      id: src.id,
      title: src.title,
      subtitle: src.subtitle,
      cards,
    };
  };

  // Load saved lesson completion on mount
  useEffect(() => {
    const saved = localStorage.getItem('apologeticsProgress');
    if (saved) {
      try {
        setCompletedLessons(JSON.parse(saved));
      } catch (_) {
        // ignore parse errors
      }
    }
  }, []);

  // Total XP across interactive lessons
  const getTotalXP = () => {
    const savedXP = localStorage.getItem('apologeticsTotalXP');
    return savedXP ? parseInt(savedXP) : 0;
  };

  // Mastery label based on percent complete
  const getMasteryLevel = (completed, total) => {
    const pct = (completed / total) * 100;
    if (pct === 0) return 'Beginner';
    if (pct < 38) return 'Novice';
    if (pct < 63) return 'Defender';
    if (pct < 88) return 'Apologist';
    return 'Master';
  };

  // Mark a lesson complete and persist
  const markLessonComplete = (lessonNum) => {
    if (!completedLessons.includes(lessonNum)) {
      const updated = [...completedLessons, lessonNum];
      setCompletedLessons(updated);
      localStorage.setItem('apologeticsProgress', JSON.stringify(updated));
    }
  };

  const handleCompleteInteractive = async (lessonNum, xpEarned) => {
    markLessonComplete(lessonNum);

    // Schedule spaced repetition reviews
    scheduleReviews('apologetics', lessonNum);

    if (xpEarned) {
      await addPathXP('apologetics', xpEarned);
      
      // Also sync this specific lesson completion to Firestore
      const user = getCurrentUser();
      if (user) {
        await completeCourseLesson(user.uid, 'apologetics', lessonNum, xpEarned);
        
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
      title: "The Case for God's Existence",
      subtitle: "Cosmological, teleological, and moral arguments",
      introduction: "Does God exist? This isn't just a philosophical question—it's the foundation of everything we believe. In this lesson, we'll explore the powerful logical arguments for God's existence championed by thinkers like William Lane Craig, John Lennox, and C.S. Lewis. You'll learn why many scholars believe the evidence points compellingly to a Creator."
    },
    {
      lesson: 2,
      title: "The Problem of Evil & Suffering",
      subtitle: "Answering the toughest objection to faith",
      introduction: "If God is good and all-powerful, why does evil exist? This is perhaps the most emotionally and intellectually challenging question believers face. We'll explore how Lewis, Keller, and Lennox address this problem, looking at free will, the greater good, and why a world with suffering might actually be necessary for genuine love and moral growth."
    },
    {
      lesson: 3,
      title: "The Resurrection of Jesus",
      subtitle: "Historical evidence for Christianity's central claim",
      introduction: "Christianity stands or falls on the resurrection. If Jesus didn't rise from the dead, our faith is worthless. But what if there's strong historical evidence that He did? We'll examine the 'minimal facts' approach, early testimony, the transformation of the disciples, and why most scholars—even skeptical ones—agree on certain key facts that point to the resurrection."
    },
    {
      lesson: 4,
      title: "Science & Faith: Friends or Foes?",
      subtitle: "The Big Bang, fine-tuning, and God's cosmos",
      introduction: "Many people think science has disproven God. But what if modern science actually points toward a Creator? John Lennox (Oxford mathematician) and others show how the Big Bang, cosmic fine-tuning, and the information in DNA all suggest an intelligent Designer. Science and faith aren't enemies—they're complementary ways of seeking truth."
    },
    {
      lesson: 5,
      title: "The Reliability of Scripture",
      subtitle: "Can we trust the Bible?",
      introduction: "Skeptics claim the Bible has been corrupted, contradicts itself, or is just ancient mythology. Is that true? We'll examine manuscript evidence, archaeological discoveries, fulfilled prophecy, and textual criticism. Apologists like Wesley Huff, Hank Hanegraaff, and R.C. Sproul show why the Bible is the most reliable ancient document we have."
    },
    {
      lesson: 6,
      title: "The Moral Argument for God",
      subtitle: "Where do right and wrong come from?",
      introduction: "Everyone believes some things are truly right or wrong—not just opinions. But where does objective morality come from? C.S. Lewis and William Lane Craig argue that moral law points to a Moral Lawgiver. We'll explore why atheism struggles to ground objective morality and why the moral argument remains one of the most powerful cases for God."
    },
    {
      lesson: 7,
      title: "Jesus: The Only Way?",
      subtitle: "Addressing religious pluralism and exclusivity",
      introduction: "Claiming Jesus is the only way to God sounds arrogant in our pluralistic world. But is it? Tim Keller, John Lennox, and R.C. Sproul explain why Jesus's claims are either true or false—there's no middle ground. We'll examine religious pluralism, the uniqueness of Christianity, and how to graciously defend the exclusivity of Christ."
    },
    {
      lesson: 8,
      title: "Engaging Skeptics with Grace",
      subtitle: "Your apologetics toolkit for real conversations",
      introduction: "Apologetics isn't about winning arguments—it's about winsome witness. In this final lesson, we'll compile everything you've learned into a practical toolkit: answering common objections, asking good questions, listening well, and sharing your faith with both truth and love. You'll be equipped to defend the hope within you with gentleness and respect."
    }
  ];

  const stats = {
    completed: completedLessons.length,
    total: curriculum.length,
    percentage: Math.round((completedLessons.length / curriculum.length) * 100),
    badges: completedLessons.length,
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
          lessonData={adaptLessonForInteractive(lessonData)}
          path="apologetics"
          lessonNumber={reviewMode.lessonNumber}
          onComplete={async (xp) => {
            // Award XP for review
            await addPathXP('apologetics', xp);
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
        lessonData={adaptLessonForInteractive(lesson1Data)}
        onComplete={(xp) => handleCompleteInteractive(1, xp)}
        onExit={handleExitInteractive}
      />
    );
  }

  if (interactiveMode === 2) {
    return (
      <InteractiveLesson
        lessonData={adaptLessonForInteractive(lesson2Data)}
        onComplete={(xp) => handleCompleteInteractive(2, xp)}
        onExit={handleExitInteractive}
      />
    );
  }

  if (interactiveMode === 3) {
    return (
      <InteractiveLesson
        lessonData={adaptLessonForInteractive(lesson3Data)}
        onComplete={(xp) => handleCompleteInteractive(3, xp)}
        onExit={handleExitInteractive}
      />
    );
  }

  if (interactiveMode === 4) {
    return (
      <InteractiveLesson
        lessonData={adaptLessonForInteractive(lesson4Data)}
        onComplete={(xp) => handleCompleteInteractive(4, xp)}
        onExit={handleExitInteractive}
      />
    );
  }

  if (interactiveMode === 5) {
    return (
      <InteractiveLesson
        lessonData={adaptLessonForInteractive(lesson5Data)}
        onComplete={(xp) => handleCompleteInteractive(5, xp)}
        onExit={handleExitInteractive}
      />
    );
  }

  if (interactiveMode === 6) {
    return (
      <InteractiveLesson
        lessonData={adaptLessonForInteractive(lesson6Data)}
        onComplete={(xp) => handleCompleteInteractive(6, xp)}
        onExit={handleExitInteractive}
      />
    );
  }

  if (interactiveMode === 7) {
    return (
      <InteractiveLesson
        lessonData={adaptLessonForInteractive(lesson7Data)}
        onComplete={(xp) => handleCompleteInteractive(7, xp)}
        onExit={handleExitInteractive}
      />
    );
  }

  if (interactiveMode === 8) {
    return (
      <InteractiveLesson
        lessonData={adaptLessonForInteractive(lesson8Data)}
        onComplete={(xp) => handleCompleteInteractive(8, xp)}
        onExit={handleExitInteractive}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-12 h-12 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold">Apologetics Study Guide</h1>
          </div>
          <p className="text-xl md:text-2xl text-blue-100 mb-6">
            8 Lessons Defending the Christian Faith
          </p>
          <p className="text-lg text-blue-50 max-w-2xl mx-auto">
            Learn to give reasons for the hope you have—with gentleness and respect.
            Master the arguments from Craig, Lennox, Lewis, Keller, and more.
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

        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-12 border-2 border-blue-100">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <div className="flex items-center">
              <Award className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Your Progress</h2>
            </div>
            <span className="text-3xl md:text-4xl font-bold text-blue-600">{stats.percentage}%</span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
            <div
              className="bg-gradient-to-r from-blue-500 to-indigo-500 h-4 rounded-full transition-all duration-500"
              style={{ width: `${stats.percentage}%` }}
            ></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-center gap-2 text-blue-700 mb-1">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Completed</span>
              </div>
              <p className="text-2xl font-bold text-blue-900">{stats.completed}/{stats.total}</p>
            </div>

            <div className="bg-purple-50 rounded-lg p-4">
              <div className="flex items-center gap-2 text-purple-700 mb-1">
                <Trophy className="w-5 h-5" />
                <span className="font-semibold">Badges Earned</span>
              </div>
              <p className="text-2xl font-bold text-purple-900">{stats.badges}</p>
            </div>

            <div className="bg-indigo-50 rounded-lg p-4">
              <div className="flex items-center gap-2 text-indigo-700 mb-1">
                <Shield className="w-5 h-5" />
                <span className="font-semibold">Defender Level</span>
              </div>
              <p className="text-2xl font-bold text-indigo-900">{stats.masteryLevel}</p>
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
            <Calendar className="w-8 h-8 text-indigo-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">8-Lesson Curriculum</h2>
          </div>

          <p className="text-gray-700 mb-8 text-lg">
            Each lesson equips you with powerful arguments and gracious responses to defend your faith.
            Click any lesson below to begin your journey as a Christian apologist.
          </p>

          {/* Lesson Cards */}
          <div className="space-y-4">
            {curriculum.map((lesson) => {
            const isExpanded = expandedLesson === lesson.lesson;
            const isCompleted = completedLessons.includes(lesson.lesson);

            // All lessons have interactive mode
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
                      return;
                    }
                    if (hasInteractiveMode) {
                      setInteractiveMode(lesson.lesson);
                    } else {
                      setExpandedLesson(isExpanded ? null : lesson.lesson);
                    }
                  }}
                  disabled={isLocked}
                  className={`w-full p-6 transition ${isLocked ? 'cursor-not-allowed' : 'hover:bg-gray-50 cursor-pointer'}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 min-w-[3rem] rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0 ${
                        isCompleted ? 'bg-green-100 text-green-700' : isLocked ? 'bg-gray-200 text-gray-400' : 'bg-blue-100 text-blue-700'
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </div>
  );
};

export default ApologeticsGuide;
