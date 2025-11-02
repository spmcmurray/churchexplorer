import React, { useState, useEffect } from 'react';
import { ChevronRight, Star, X, Trophy } from 'lucide-react';
import { markReviewComplete } from './services/reviewService';

// Helper function to parse markdown bold syntax
const parseMarkdown = (text) => {
  if (!text) return text;

  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, idx) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={idx}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

const ReviewSession = ({ lessonData, path, lessonNumber, onComplete, onExit }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showFeedback, setShowFeedback] = useState({});
  const [correctCount, setCorrectCount] = useState(0);
  const [sessionComplete, setSessionComplete] = useState(false);

  // Extract only quiz and fillblank cards, shuffle and limit to 5
  const reviewQuestions = React.useMemo(() => {
    const quizCards = lessonData.cards.filter(
      card => card.type === 'quiz' || card.type === 'fillblank'
    );
    
    // Shuffle using Fisher-Yates
    const shuffled = [...quizCards];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    // Take first 5 (or all if less than 5)
    return shuffled.slice(0, Math.min(5, shuffled.length));
  }, [lessonData]);

  const totalQuestions = reviewQuestions.length;
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  // Scroll to top when question changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentQuestion]);

  const handleAnswer = (questionIndex, answer, isCorrect) => {
    setAnswers(prev => ({ ...prev, [questionIndex]: answer }));
    setShowFeedback(prev => ({ ...prev, [questionIndex]: true }));

    if (isCorrect && !showFeedback[questionIndex]) {
      setCorrectCount(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Review session complete!
      const score = Math.round((correctCount / totalQuestions) * 100);
      markReviewComplete(path, lessonNumber, score);
      setSessionComplete(true);
    }
  };

  const handleFinish = () => {
    const xp = correctCount * 5; // 5 XP per correct answer
    onComplete(xp);
  };

  const card = reviewQuestions[currentQuestion];

  if (sessionComplete) {
    const score = Math.round((correctCount / totalQuestions) * 100);
    const xp = correctCount * 5;

    return (
      <div className="min-h-screen bg-gray-50 pb-20">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden p-10 text-center">
            <Trophy className="w-28 h-28 text-yellow-500 mx-auto mb-6" />
            <h2 className="text-4xl font-black text-gray-900 mb-4">Review Complete! 🎉</h2>
            <p className="text-xl text-gray-600 mb-8">Great work reinforcing your knowledge!</p>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 sm:p-8 mb-8 border-2 border-blue-200 shadow-lg">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-6">
                <div className="text-center sm:text-left">
                  <p className="text-gray-600 text-sm mb-2">Score</p>
                  <p className="text-2xl sm:text-4xl font-black text-blue-600">{score}%</p>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-gray-600 text-sm mb-2">Correct</p>
                  <p className="text-2xl sm:text-4xl font-black text-green-600">{correctCount}/{totalQuestions}</p>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-gray-600 text-sm mb-2">XP Earned</p>
                  <p className="text-2xl sm:text-4xl font-black text-yellow-600">+{xp}</p>
                </div>
              </div>
            </div>

            {score >= 80 ? (
              <p className="text-lg text-green-700 mb-6">
                ⭐ Excellent! You've mastered this material.
              </p>
            ) : score >= 60 ? (
              <p className="text-lg text-blue-700 mb-6">
                🌿 Good work! Keep reviewing to strengthen your understanding.
              </p>
            ) : (
              <p className="text-lg text-yellow-700 mb-6">
                🌱 Consider reviewing this lesson again to improve retention.
              </p>
            )}

            <button
              onClick={handleFinish}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-bold hover:from-blue-600 hover:to-purple-700 transition shadow-lg text-lg"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header with Progress */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={onExit}
              className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition font-medium"
            >
              <X className="w-5 h-5" />
              <span className="hidden sm:inline">Exit</span>
            </button>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-gradient-to-r from-purple-400 to-purple-500 px-4 py-2 rounded-2xl shadow-md">
                <Star className="w-5 h-5 text-white fill-white" />
                <span className="font-bold text-white text-lg">{correctCount * 5} XP</span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="relative">
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div
                className="bg-gradient-to-r from-purple-500 to-pink-600 h-4 rounded-full transition-all duration-500 shadow-lg"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          <div className="text-center mt-2 text-sm font-semibold text-gray-600">
            Question {currentQuestion + 1} / {totalQuestions}
          </div>
        </div>
      </div>

      {/* Question Card */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[500px]">
          {card.type === 'quiz' && (
            <QuizCard
              card={card}
              questionIndex={currentQuestion}
              answer={answers[currentQuestion]}
              showFeedback={showFeedback[currentQuestion]}
              onAnswer={handleAnswer}
            />
          )}

          {card.type === 'fillblank' && (
            <FillBlankCard
              card={card}
              questionIndex={currentQuestion}
              answer={answers[currentQuestion]}
              showFeedback={showFeedback[currentQuestion]}
              onAnswer={handleAnswer}
            />
          )}
        </div>

        {/* Next Button */}
        <div className="flex justify-end mt-8">
          {showFeedback[currentQuestion] && (
            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-2xl font-bold hover:from-purple-600 hover:to-pink-700 transition shadow-lg hover:shadow-xl text-lg"
            >
              {currentQuestion < totalQuestions - 1 ? 'Next Question' : 'Finish Review'}
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// Quiz Card Component
const QuizCard = ({ card, questionIndex, answer, showFeedback, onAnswer }) => {
  const [selected, setSelected] = useState(answer);

  const handleSelect = (optionIndex) => {
    setSelected(optionIndex);
    const isCorrect = optionIndex === card.correctAnswer;
    onAnswer(questionIndex, optionIndex, isCorrect);
  };

  return (
    <div className="p-10">
      <h3 className="text-3xl font-black text-gray-900 mb-2">📖 Review Question</h3>
      <p className="text-gray-600 text-lg mb-8">Test your retention of this topic.</p>

      <div className="mb-8">
        <p className="text-xl font-bold text-gray-800 mb-6">{parseMarkdown(card.question)}</p>

        <div className="space-y-3">
          {card.options.map((option, idx) => {
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
                {parseMarkdown(option)}
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
            {selected === card.correctAnswer ? '✓ Correct! +5 XP' : 'Not quite!'}
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">{parseMarkdown(card.explanation)}</p>
        </div>
      )}
    </div>
  );
};

// Fill in the Blank Card Component
const FillBlankCard = ({ card, questionIndex, answer, showFeedback, onAnswer }) => {
  const [userAnswer, setUserAnswer] = useState(answer || '');

  const handleSubmit = () => {
    const isCorrect = userAnswer.trim().toLowerCase() === card.correctAnswer.toLowerCase();
    onAnswer(questionIndex, userAnswer, isCorrect);
  };

  return (
    <div className="p-10">
      <h3 className="text-3xl font-black text-gray-900 mb-2">📖 Fill in the Blank</h3>
      <p className="text-gray-600 text-lg mb-8">Complete the sentence with the correct term.</p>

      <div className="mb-8">
        <p className="text-xl font-semibold text-gray-800 mb-6">{parseMarkdown(card.prompt)}</p>

        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          disabled={showFeedback}
          placeholder="Type your answer..."
          className="w-full p-5 text-lg border-2 border-gray-300 rounded-xl focus:border-purple-500 focus:outline-none disabled:bg-gray-100 shadow-sm transition"
        />

        {!showFeedback && (
          <button
            onClick={handleSubmit}
            disabled={!userAnswer.trim()}
            className="mt-6 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl font-bold hover:from-purple-600 hover:to-pink-700 transition shadow-lg hover:shadow-xl disabled:from-gray-300 disabled:to-gray-300 disabled:shadow-none"
          >
            Check Answer
          </button>
        )}
      </div>

      {showFeedback && (
        <div className={`p-5 rounded-xl border-l-4 ${
          userAnswer.trim().toLowerCase() === card.correctAnswer.toLowerCase()
            ? 'bg-green-50 border-green-500'
            : 'bg-blue-50 border-blue-500'
        }`}>
          <p className="font-bold text-lg mb-2">
            {userAnswer.trim().toLowerCase() === card.correctAnswer.toLowerCase()
              ? '✓ Correct! +5 XP'
              : `The answer is: ${card.correctAnswer}`}
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">{parseMarkdown(card.explanation)}</p>
        </div>
      )}
    </div>
  );
};

export default ReviewSession;
