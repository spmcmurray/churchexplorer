import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  BookOpen, 
  Award, 
  ArrowLeft, 
  ChevronRight,
  ChevronLeft,
  CheckCircle,
  X,
  Lightbulb,
  Quote,
  Star,
  Trophy
} from 'lucide-react';
import { completeCourseLesson } from './firebase/progressService';
import { scheduleReviews } from './services/reviewService';

// Helper function to parse and format text content
const parseContent = (text) => {
  if (!text) return null;
  
  // Split by newlines first
  const lines = text.split('\n').filter(line => line.trim());
  
  return lines.map((line, idx) => {
    const trimmed = line.trim();
    
    // Check for bullet points (-, *, •, or numbered lists)
    const bulletMatch = trimmed.match(/^[-*•]\s+(.+)$/);
    const numberMatch = trimmed.match(/^\d+\.\s+(.+)$/);
    
    if (bulletMatch) {
      return (
        <li key={idx} className="ml-6 mb-2 text-gray-700 text-lg leading-relaxed">
          {bulletMatch[1]}
        </li>
      );
    } else if (numberMatch) {
      return (
        <li key={idx} className="ml-6 mb-2 text-gray-700 text-lg leading-relaxed list-decimal">
          {numberMatch[1]}
        </li>
      );
    } else {
      return (
        <p key={idx} className="text-gray-700 text-lg leading-relaxed mb-4">
          {trimmed}
        </p>
      );
    }
  });
};

const AILessonViewer = ({ lesson, currentUser, onComplete, onGoBack, onProgressUpdate }) => {
  const [currentCard, setCurrentCard] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showFeedback, setShowFeedback] = useState({});
  const [lessonCompleted, setLessonCompleted] = useState(false);
  const [xp, setXp] = useState(0);

  // Scroll to top when card changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentCard]);

  // Build card structure from lesson
  const cards = [];
  
  // Introduction card
  cards.push({
    type: 'content',
    title: lesson.title,
    subtitle: lesson.subtitle,
    content: [lesson.introduction]
  });

  // Section cards with INTERLEAVED quizzes (new format)
  lesson.sections?.forEach((section, idx) => {
    // Content card
    cards.push({
      type: 'content',
      title: section.title,
      subtitle: `Section ${idx + 1}`,
      content: section.content.split('\n\n'),
      highlight: section.keyPoints?.length > 0 ? section.keyPoints.join(' • ') : null
    });
    
    // Quiz card immediately after content (if section has quiz)
    if (section.quiz) {
      cards.push({
        type: 'quiz',
        question: section.quiz.question,
        options: section.quiz.options,
        correctAnswer: section.quiz.correct,
        explanation: section.quiz.explanation || 'Great job!'
      });
    }
  });

  // Legacy format support: separate quiz array (for old lessons)
  if (lesson.quiz && Array.isArray(lesson.quiz)) {
    lesson.quiz.forEach((question, idx) => {
      cards.push({
        type: 'quiz',
        question: question.question,
        options: question.options,
        correctAnswer: question.correct,
        explanation: question.explanation || 'Great job!'
      });
    });
  }

  // Reflection card
  if (lesson.reflection) {
    cards.push({
      type: 'reflection',
      title: 'Reflection',
      question: lesson.reflection.question,
      prompt: lesson.reflection.prompt
    });
  }

  // Completion card
  cards.push({
    type: 'completion',
    title: 'Lesson Complete!',
    message: `Congratulations! You've finished the AI-generated lesson on "${lesson.originalTopic}".`
  });

  const totalCards = cards.length;
  const progress = ((currentCard + 1) / totalCards) * 100;

  const handleNext = () => {
    if (currentCard < totalCards - 1) {
      setCurrentCard(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentCard > 0) {
      setCurrentCard(prev => prev - 1);
    }
  };

  const handleAnswer = (cardIndex, answerIndex, isCorrect) => {
    setQuizAnswers(prev => ({
      ...prev,
      [cardIndex]: answerIndex
    }));

    setShowFeedback(prev => ({
      ...prev,
      [cardIndex]: true
    }));

    if (isCorrect) {
      setXp(prev => prev + 10);
    }
  };

  const handleComplete = async () => {
    if (lessonCompleted) return;

    try {
      const totalXp = xp + (lesson.xpReward || 50);
      
      // If user is logged in, save to Firestore
      if (currentUser) {
        // Award XP to total
        const result = await completeCourseLesson(
          currentUser.uid, 
          'ai_generated', 
          lesson.id, 
          totalXp
        );
        
        if (result.success) {
          // Schedule spaced repetition reviews for this AI lesson
          await scheduleReviews('ai_generated', lesson.id, lesson.title);
          
          // If lesson belongs to an AI path, update path progress
          if (lesson.pathId) {
            const { saveAIPathProgressToFirestore, getAIPathProgressFromFirestore } = await import('./firebase/progressService');
            
            // Get current path progress
            const progressResult = await getAIPathProgressFromFirestore(currentUser.uid, lesson.pathId);
            const currentCompleted = progressResult.success && progressResult.progress 
              ? progressResult.progress.completedLessons || []
              : [];
            
            // Add this lesson if not already completed
            if (!currentCompleted.includes(lesson.id)) {
              const updatedCompleted = [...currentCompleted, lesson.id];
              await saveAIPathProgressToFirestore(currentUser.uid, lesson.pathId, updatedCompleted);
              console.log('✅ Updated AI path progress:', lesson.pathId, updatedCompleted.length, 'lessons');
            }
          }
          
          setLessonCompleted(true);
          
          // Trigger progress refresh in parent App component
          if (onProgressUpdate) {
            await onProgressUpdate();
          }
        }
      } else {
        // User not authenticated - cannot save progress
        console.warn('⚠️ User not authenticated - lesson progress not saved');
        setLessonCompleted(true);
      }
      
      if (onComplete) {
        onComplete({
          xpEarned: totalXp,
          topic: lesson.originalTopic
        });
      }
    } catch (error) {
      console.error('Error completing AI lesson:', error);
    }
    
    // Always go back after 1.5 seconds
    setTimeout(() => {
      if (onGoBack) onGoBack();
    }, 1500);
  };

  const card = cards[currentCard] || {};

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Lesson not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Sticky Header with Progress */}
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm shadow-md py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={onGoBack}
              className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-gray-200 rounded-xl hover:border-purple-500 hover:text-purple-600 transition font-semibold"
            >
              <X className="w-5 h-5" />
            </button>

            {/* XP Counter */}
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl shadow-lg">
              <Star className="w-5 h-5 text-white fill-white" />
              <span className="font-black text-white text-lg">{xp} XP</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center gap-3">
            <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-sm font-bold text-gray-600 min-w-[60px] text-right">
              {currentCard + 1} / {totalCards}
            </span>
          </div>

          {/* AI Generated Badge */}
          <div className="flex items-center gap-2 mt-3">
            <div className="bg-gradient-to-r from-purple-500 to-blue-600 px-3 py-1 rounded-full">
              <div className="flex items-center gap-2 text-white text-xs font-semibold">
                <Sparkles className="w-3 h-3" />
                AI Generated
              </div>
            </div>
            <span className="text-gray-500 text-xs">
              {lesson.originalTopic}
            </span>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[500px]">
          {card.type === 'content' && (
            <ContentCard card={card} />
          )}

          {card.type === 'quiz' && (
            <QuizCard
              card={card}
              cardIndex={currentCard}
              answer={quizAnswers[currentCard]}
              showFeedback={showFeedback[currentCard]}
              onAnswer={handleAnswer}
            />
          )}

          {card.type === 'reflection' && (
            <ReflectionCard card={card} />
          )}

          {card.type === 'completion' && (
            <CompletionCard
              card={card}
              xp={xp + (lesson.xpReward || 50)}
              onComplete={handleComplete}
            />
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button
            onClick={handlePrevious}
            disabled={currentCard === 0}
            className={`flex items-center gap-2 px-6 py-4 rounded-2xl font-bold transition text-lg ${
              currentCard === 0
                ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
                : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 shadow-md hover:shadow-lg'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
            Back
          </button>

          {currentCard < totalCards - 1 ? (
            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-bold hover:from-blue-600 hover:to-purple-700 transition shadow-lg hover:shadow-xl text-lg"
            >
              Continue
              <ChevronRight className="w-5 h-5" />
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

// Content Card Component
const ContentCard = ({ card }) => (
  <div className="p-10">
    <h2 className="text-4xl font-black text-gray-900 mb-3">{card.title}</h2>
    {card.subtitle && (
      <p className="text-xl text-purple-600 font-semibold mb-8">{card.subtitle}</p>
    )}
    <div className="prose prose-lg max-w-none">
      {card.content?.map((paragraph, idx) => (
        <div key={idx} className="mb-3">
          {parseContent(paragraph)}
        </div>
      ))}
    </div>
    {card.highlight && (
      <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-purple-500 p-5 rounded-xl">
        <p className="text-purple-900 font-semibold text-lg">{card.highlight}</p>
      </div>
    )}
  </div>
);

// Quiz Card Component
const QuizCard = ({ card, cardIndex, answer, showFeedback, onAnswer }) => {
  const [selected, setSelected] = useState(answer);

  const handleSelect = (optionIndex) => {
    setSelected(optionIndex);
    const isCorrect = optionIndex === card.correctAnswer;
    onAnswer(cardIndex, optionIndex, isCorrect);
  };

  return (
    <div className="p-10">
      <h3 className="text-3xl font-black text-gray-900 mb-2">Knowledge Check</h3>
      <p className="text-gray-600 text-lg mb-8">Test your understanding of what you just learned!</p>

      <div className="mb-8">
        <p className="text-xl font-bold text-gray-800 mb-6">{card.question}</p>

        <div className="space-y-3">
          {card.options?.map((option, idx) => {
            const isSelected = selected === idx;
            const isCorrect = idx === card.correctAnswer;

            let buttonClass = 'w-full text-left p-5 rounded-xl border-2 transition font-medium text-gray-800 shadow-sm ';
            if (showFeedback) {
              if (isCorrect) {
                buttonClass += 'border-green-500 bg-green-50 text-green-900';
              } else if (isSelected && !isCorrect) {
                buttonClass += 'border-red-500 bg-red-50 text-red-900';
              } else {
                buttonClass += 'border-gray-200 bg-gray-50';
              }
            } else {
              buttonClass += isSelected
                ? 'border-purple-500 bg-purple-50 shadow-md'
                : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50 hover:shadow-md';
            }

            return (
              <button
                key={idx}
                onClick={() => !showFeedback && handleSelect(idx)}
                disabled={showFeedback}
                className={buttonClass}
              >
                <span className="font-bold mr-3 text-gray-600">
                  {String.fromCharCode(65 + idx)}.
                </span>
                {option}
              </button>
            );
          })}
        </div>
      </div>

      {showFeedback && (
        <div className={`p-5 rounded-xl border-l-4 ${
          selected === card.correctAnswer
            ? 'bg-green-50 border-green-500'
            : 'bg-blue-50 border-blue-500'
        }`}>
          <p className="font-bold text-lg mb-2">
            {selected === card.correctAnswer ? '✓ Correct! +10 XP' : 'Explanation:'}
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">{card.explanation}</p>
        </div>
      )}
    </div>
  );
};

// Reflection Card Component
const ReflectionCard = ({ card }) => (
  <div className="p-10">
    <div className="text-center mb-8">
      <Lightbulb className="w-20 h-20 text-purple-500 mx-auto mb-4" />
      <h2 className="text-4xl font-black text-gray-900 mb-3">{card.title}</h2>
    </div>
    
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{card.question}</h3>
      <p className="text-gray-700 text-lg leading-relaxed">{card.prompt}</p>
    </div>

    <div className="bg-white border-2 border-purple-200 rounded-xl p-6">
      <p className="text-gray-600 mb-4 font-semibold">Take a moment to reflect:</p>
      <textarea
        className="w-full h-32 p-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none resize-none"
        placeholder="Write your thoughts here..."
      />
    </div>
  </div>
);

// Completion Card Component
const CompletionCard = ({ card, xp, onComplete }) => {
  const [celebrating, setCelebrating] = useState(false);

  const handleComplete = async () => {
    setCelebrating(true);
    await onComplete();
  };

  return (
    <div className="p-10 text-center">
      {!celebrating ? (
        <>
          <div className="mb-8">
            <Award className="w-28 h-28 text-yellow-500 mx-auto mb-6" />
            <h2 className="text-4xl font-black text-gray-900 mb-4">{card.title}</h2>
            <p className="text-xl text-gray-600 leading-relaxed">{card.message}</p>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl p-8 mb-8 border-2 border-yellow-200 shadow-lg">
            <p className="text-2xl font-bold text-gray-800 mb-3">Total XP Earned</p>
            <p className="text-6xl font-black text-yellow-600">{xp}</p>
          </div>

          {/* AI Generated Badge */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 mb-8 border-2 border-purple-200 shadow-lg">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Sparkles className="w-8 h-8 text-purple-600" />
            </div>
            <p className="text-2xl font-black text-purple-700">AI-Generated Lesson</p>
            <p className="text-base text-gray-600 mt-2">You've completed a custom AI lesson!</p>
          </div>

          <button
            onClick={handleComplete}
            className="px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xl rounded-2xl font-black hover:from-blue-600 hover:to-purple-700 transition shadow-xl hover:shadow-2xl"
          >
            Complete Lesson! 🎉
          </button>
        </>
      ) : (
        <div className="py-12">
          <Trophy className="w-32 h-32 text-yellow-500 mx-auto mb-6 animate-bounce" />
          <h2 className="text-5xl font-black text-gray-900 mb-4">Awesome! 🎉</h2>
          <p className="text-2xl text-gray-600">Returning to AI Creator...</p>
        </div>
      )}
    </div>
  );
};

export default AILessonViewer;