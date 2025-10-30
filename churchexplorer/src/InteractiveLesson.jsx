import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Award, Star, CheckCircle, X } from 'lucide-react';

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

const InteractiveLesson = ({ lessonData, onComplete, onExit }) => {
  const [currentCard, setCurrentCard] = useState(0);
  const [xp, setXp] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showFeedback, setShowFeedback] = useState({});
  const [completedCards, setCompletedCards] = useState(new Set());
  const [quizResults, setQuizResults] = useState({ correct: 0, total: 0 });

  const totalCards = lessonData.cards.length;
  const progress = ((currentCard + 1) / totalCards) * 100;

  const handleNext = () => {
    if (currentCard < totalCards - 1) {
      setCompletedCards(prev => new Set([...prev, currentCard]));
      setCurrentCard(currentCard + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleAnswer = (cardIndex, answer, isCorrect) => {
    // Track quiz results for accuracy calculation BEFORE updating answers
    const card = lessonData.cards[cardIndex];
    const isFirstAttempt = !answers[cardIndex];

    if (card.type === 'quiz' && isFirstAttempt) {
      console.log(`📝 Quiz answer: card ${cardIndex}, correct: ${isCorrect}, card type: ${card.type}`);
      setQuizResults(prev => {
        const newResults = {
          correct: prev.correct + (isCorrect ? 1 : 0),
          total: prev.total + 1
        };
        console.log('📊 Updated quiz results:', newResults);
        return newResults;
      });
    }

    setAnswers(prev => ({ ...prev, [cardIndex]: answer }));
    setShowFeedback(prev => ({ ...prev, [cardIndex]: true }));

    if (isCorrect && !completedCards.has(cardIndex)) {
      setXp(prev => prev + 10);
    }
  };

  const handleComplete = () => {
    setXp(prev => prev + 50); // Bonus for completing lesson
    console.log('🎯 Lesson completed! Final quiz results:', quizResults);
    setTimeout(() => {
      onComplete(xp + 50, quizResults);
    }, 1500);
  };

  const card = lessonData.cards[currentCard];

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
              <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 px-4 py-2 rounded-2xl shadow-md">
                <Star className="w-5 h-5 text-white fill-white" />
                <span className="font-bold text-white text-lg">{xp}</span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="relative">
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-4 rounded-full transition-all duration-500 shadow-lg"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          <div className="text-center mt-2 text-sm font-semibold text-gray-600">
            {currentCard + 1} / {totalCards}
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
              answer={answers[currentCard]}
              showFeedback={showFeedback[currentCard]}
              onAnswer={handleAnswer}
            />
          )}

          {card.type === 'matching' && (
            <MatchingCard
              card={card}
              cardIndex={currentCard}
              onComplete={() => handleAnswer(currentCard, 'completed', true)}
            />
          )}

          {card.type === 'fillblank' && (
            <FillBlankCard
              card={card}
              cardIndex={currentCard}
              answer={answers[currentCard]}
              showFeedback={showFeedback[currentCard]}
              onAnswer={handleAnswer}
            />
          )}

          {card.type === 'completion' && (
            <CompletionCard
              card={card}
              xp={xp}
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
};

// Content Card Component
const ContentCard = ({ card }) => (
  <div className="p-10">
    <h2 className="text-4xl font-black text-gray-900 mb-3">{card.title}</h2>
    {card.subtitle && (
      <p className="text-xl text-purple-600 font-semibold mb-8">{parseMarkdown(card.subtitle)}</p>
    )}
    <div className="prose prose-lg max-w-none">
      {card.content.map((paragraph, idx) => (
        <p key={idx} className="text-gray-700 text-lg leading-relaxed mb-5">
          {parseMarkdown(paragraph)}
        </p>
      ))}
    </div>
    {card.highlight && (
      <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-purple-500 p-5 rounded-xl">
        <p className="text-purple-900 font-semibold text-lg">{parseMarkdown(card.highlight)}</p>
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
            {selected === card.correctAnswer ? '✓ Correct! +10 XP' : 'Explanation:'}
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">{parseMarkdown(card.explanation)}</p>
        </div>
      )}
    </div>
  );
};

// Matching Card Component
const MatchingCard = ({ card, cardIndex, onComplete }) => {
  const [matches, setMatches] = useState({});
  const [selected, setSelected] = useState(null);
  const [completed, setCompleted] = useState(false);

  const handleTermClick = (term) => {
    if (completed) return;
    setSelected(term);
  };

  const handleDefinitionClick = (definition) => {
    if (completed || !selected) return;

    const newMatches = { ...matches, [selected]: definition };
    setMatches(newMatches);
    setSelected(null);

    // Check if all matched
    if (Object.keys(newMatches).length === card.pairs.length) {
      const allCorrect = card.pairs.every(pair => newMatches[pair.term] === pair.definition);
      if (allCorrect) {
        setCompleted(true);
        onComplete();
      }
    }
  };

  return (
    <div className="p-10">
      <h3 className="text-3xl font-black text-gray-900 mb-2">Match the Terms</h3>
      <p className="text-gray-600 text-lg mb-8">Click a term, then click its matching definition!</p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <h4 className="font-bold text-gray-800 text-lg mb-4">Terms</h4>
          {card.pairs.map((pair, idx) => (
            <button
              key={idx}
              onClick={() => handleTermClick(pair.term)}
              className={`w-full text-left p-5 rounded-xl border-2 transition font-medium shadow-sm ${
                selected === pair.term
                  ? 'border-purple-500 bg-purple-50 shadow-md'
                  : matches[pair.term]
                  ? 'border-green-500 bg-green-50 text-green-900'
                  : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50 hover:shadow-md'
              }`}
            >
              <span className="font-semibold">{pair.term}</span>
            </button>
          ))}
        </div>

        <div className="space-y-3">
          <h4 className="font-bold text-gray-800 text-lg mb-4">Definitions</h4>
          {card.pairs.map((pair, idx) => (
            <button
              key={idx}
              onClick={() => handleDefinitionClick(pair.definition)}
              className={`w-full text-left p-5 rounded-xl border-2 transition font-medium shadow-sm ${
                Object.values(matches).includes(pair.definition)
                  ? 'border-green-500 bg-green-50 text-green-900'
                  : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50 hover:shadow-md'
              }`}
            >
              <span className="text-base">{pair.definition}</span>
            </button>
          ))}
        </div>
      </div>

      {completed && (
        <div className="mt-8 p-5 bg-green-50 border-l-4 border-green-500 rounded-xl">
          <p className="text-green-800 font-bold text-lg">🎉 Perfect! All matched correctly! +10 XP</p>
        </div>
      )}
    </div>
  );
};

// Fill in the Blank Card Component
const FillBlankCard = ({ card, cardIndex, answer, showFeedback, onAnswer }) => {
  const [userAnswer, setUserAnswer] = useState(answer || '');

  const handleSubmit = () => {
    const isCorrect = userAnswer.trim().toLowerCase() === card.correctAnswer.toLowerCase();
    onAnswer(cardIndex, userAnswer, isCorrect);
  };

  return (
    <div className="p-10">
      <h3 className="text-3xl font-black text-gray-900 mb-2">Fill in the Blank</h3>
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
            className="mt-6 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-bold hover:from-blue-600 hover:to-purple-700 transition shadow-lg hover:shadow-xl disabled:from-gray-300 disabled:to-gray-300 disabled:shadow-none"
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
              ? '✓ Correct! +10 XP'
              : `The answer is: ${card.correctAnswer}`}
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">{parseMarkdown(card.explanation)}</p>
        </div>
      )}
    </div>
  );
};

// Completion Card Component
const CompletionCard = ({ card, xp, onComplete }) => {
  const [celebrating, setCelebrating] = useState(false);

  const handleComplete = () => {
    setCelebrating(true);
    onComplete();
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

          {card.badge && (
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 mb-8 border-2 border-purple-200 shadow-lg">
              <p className="text-xl font-bold text-gray-800 mb-3">Badge Unlocked!</p>
              <p className="text-5xl mb-3">{card.badge.icon}</p>
              <p className="text-2xl font-black text-purple-700">{card.badge.name}</p>
              <p className="text-base text-gray-600 mt-2">{card.badge.description}</p>
            </div>
          )}

          <button
            onClick={handleComplete}
            className="px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xl rounded-2xl font-black hover:from-blue-600 hover:to-purple-700 transition shadow-xl hover:shadow-2xl"
          >
            Complete Lesson! 🎉
          </button>
        </>
      ) : (
        <div className="animate-bounce py-10">
          <CheckCircle className="w-36 h-36 text-green-500 mx-auto mb-6" />
          <h2 className="text-5xl font-black text-green-600">Lesson Complete!</h2>
        </div>
      )}
    </div>
  );
};

export default InteractiveLesson;
