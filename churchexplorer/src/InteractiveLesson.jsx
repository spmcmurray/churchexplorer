import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Award, Star, CheckCircle, X } from 'lucide-react';

const InteractiveLesson = ({ lessonData, onComplete, onExit }) => {
  const [currentCard, setCurrentCard] = useState(0);
  const [xp, setXp] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showFeedback, setShowFeedback] = useState({});
  const [completedCards, setCompletedCards] = useState(new Set());

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
    setAnswers(prev => ({ ...prev, [cardIndex]: answer }));
    setShowFeedback(prev => ({ ...prev, [cardIndex]: true }));

    if (isCorrect && !completedCards.has(cardIndex)) {
      setXp(prev => prev + 10);
    }
  };

  const handleComplete = () => {
    setXp(prev => prev + 50); // Bonus for completing lesson
    setTimeout(() => {
      onComplete(xp + 50);
    }, 1500);
  };

  const card = lessonData.cards[currentCard];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 pb-20">
      {/* Header with Progress */}
      <div className="bg-white border-b-2 border-amber-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={onExit}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition"
            >
              <X className="w-5 h-5" />
              <span className="hidden sm:inline">Exit</span>
            </button>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-amber-100 px-3 py-1 rounded-full">
                <Star className="w-4 h-4 text-amber-600 fill-amber-600" />
                <span className="font-bold text-amber-800">{xp} XP</span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="relative">
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-amber-500 to-orange-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="absolute top-0 left-0 w-full h-3 flex justify-between px-1">
              {lessonData.cards.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-1 h-full ${
                    idx <= currentCard ? 'bg-amber-600' : 'bg-gray-300'
                  }`}
                ></div>
              ))}
            </div>
          </div>

          <div className="text-center mt-2 text-sm text-gray-600">
            Card {currentCard + 1} of {totalCards}
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-xl border-2 border-amber-200 overflow-hidden min-h-[500px]">
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
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition ${
              currentCard === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-white text-amber-700 border-2 border-amber-300 hover:bg-amber-50'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>

          {currentCard < totalCards - 1 ? (
            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition shadow-lg"
            >
              Next
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
  <div className="p-8">
    <h2 className="text-3xl font-bold text-gray-800 mb-4">{card.title}</h2>
    {card.subtitle && (
      <p className="text-lg text-amber-600 mb-6">{card.subtitle}</p>
    )}
    <div className="prose prose-lg max-w-none">
      {card.content.map((paragraph, idx) => (
        <p key={idx} className="text-gray-700 leading-relaxed mb-4">
          {paragraph}
        </p>
      ))}
    </div>
    {card.highlight && (
      <div className="mt-6 bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
        <p className="text-amber-900 font-medium">{card.highlight}</p>
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
    <div className="p-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">Knowledge Check</h3>
      <p className="text-gray-600 mb-6">Test your understanding of what you just learned!</p>

      <div className="mb-6">
        <p className="text-lg font-semibold text-gray-800 mb-4">{card.question}</p>

        <div className="space-y-3">
          {card.options.map((option, idx) => {
            const isSelected = selected === idx;
            const isCorrect = idx === card.correctAnswer;

            let buttonClass = 'w-full text-left p-4 rounded-lg border-2 transition ';
            if (showFeedback) {
              if (isCorrect) {
                buttonClass += 'border-green-500 bg-green-50';
              } else if (isSelected && !isCorrect) {
                buttonClass += 'border-red-500 bg-red-50';
              } else {
                buttonClass += 'border-gray-200 bg-gray-50';
              }
            } else {
              buttonClass += isSelected
                ? 'border-amber-500 bg-amber-50'
                : 'border-gray-200 hover:border-amber-300 hover:bg-amber-50';
            }

            return (
              <button
                key={idx}
                onClick={() => !showFeedback && handleSelect(idx)}
                disabled={showFeedback}
                className={buttonClass}
              >
                <span className="font-medium text-gray-700 mr-2">
                  {String.fromCharCode(65 + idx)}.
                </span>
                {option}
              </button>
            );
          })}
        </div>
      </div>

      {showFeedback && (
        <div className={`p-4 rounded-lg border-l-4 ${
          selected === card.correctAnswer
            ? 'bg-green-50 border-green-500'
            : 'bg-blue-50 border-blue-500'
        }`}>
          <p className="font-semibold mb-2">
            {selected === card.correctAnswer ? '✓ Correct! +10 XP' : 'Explanation:'}
          </p>
          <p className="text-gray-800">{card.explanation}</p>
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
    <div className="p-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">Match the Terms</h3>
      <p className="text-gray-600 mb-6">Click a term, then click its matching definition!</p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <h4 className="font-semibold text-gray-700 mb-3">Terms</h4>
          {card.pairs.map((pair, idx) => (
            <button
              key={idx}
              onClick={() => handleTermClick(pair.term)}
              className={`w-full text-left p-4 rounded-lg border-2 transition ${
                selected === pair.term
                  ? 'border-amber-500 bg-amber-50'
                  : matches[pair.term]
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200 hover:border-amber-300 hover:bg-amber-50'
              }`}
            >
              <span className="font-medium">{pair.term}</span>
            </button>
          ))}
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-gray-700 mb-3">Definitions</h4>
          {card.pairs.map((pair, idx) => (
            <button
              key={idx}
              onClick={() => handleDefinitionClick(pair.definition)}
              className={`w-full text-left p-4 rounded-lg border-2 transition ${
                Object.values(matches).includes(pair.definition)
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200 hover:border-amber-300 hover:bg-amber-50'
              }`}
            >
              <span className="text-sm">{pair.definition}</span>
            </button>
          ))}
        </div>
      </div>

      {completed && (
        <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
          <p className="text-green-800 font-semibold">🎉 Perfect! All matched correctly! +10 XP</p>
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
    <div className="p-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">Fill in the Blank</h3>
      <p className="text-gray-600 mb-6">Complete the sentence with the correct term.</p>

      <div className="mb-6">
        <p className="text-lg text-gray-800 mb-4">{card.prompt}</p>

        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          disabled={showFeedback}
          placeholder="Type your answer..."
          className="w-full p-4 text-lg border-2 border-gray-300 rounded-lg focus:border-amber-500 focus:outline-none disabled:bg-gray-100"
        />

        {!showFeedback && (
          <button
            onClick={handleSubmit}
            disabled={!userAnswer.trim()}
            className="mt-4 px-6 py-3 bg-amber-500 text-white rounded-lg font-semibold hover:bg-amber-600 transition disabled:bg-gray-300"
          >
            Check Answer
          </button>
        )}
      </div>

      {showFeedback && (
        <div className={`p-4 rounded-lg border-l-4 ${
          userAnswer.trim().toLowerCase() === card.correctAnswer.toLowerCase()
            ? 'bg-green-50 border-green-500'
            : 'bg-orange-50 border-orange-500'
        }`}>
          <p className="font-semibold mb-2">
            {userAnswer.trim().toLowerCase() === card.correctAnswer.toLowerCase()
              ? '✓ Correct! +10 XP'
              : `The answer is: ${card.correctAnswer}`}
          </p>
          <p className="text-gray-800">{card.explanation}</p>
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
    <div className="p-8 text-center">
      {!celebrating ? (
        <>
          <div className="mb-6">
            <Award className="w-24 h-24 text-amber-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{card.title}</h2>
            <p className="text-lg text-gray-600">{card.message}</p>
          </div>

          <div className="bg-amber-50 rounded-lg p-6 mb-6">
            <p className="text-2xl font-bold text-amber-800 mb-2">Total XP Earned</p>
            <p className="text-5xl font-bold text-amber-600">{xp}</p>
          </div>

          {card.badge && (
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg p-6 mb-6 border-2 border-amber-300">
              <p className="text-lg font-semibold text-gray-800 mb-2">Badge Unlocked!</p>
              <p className="text-3xl mb-2">{card.badge.icon}</p>
              <p className="text-xl font-bold text-amber-800">{card.badge.name}</p>
              <p className="text-sm text-gray-600">{card.badge.description}</p>
            </div>
          )}

          <button
            onClick={handleComplete}
            className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-lg rounded-lg font-bold hover:from-amber-600 hover:to-orange-600 transition shadow-lg"
          >
            Complete Lesson! 🎉
          </button>
        </>
      ) : (
        <div className="animate-bounce">
          <CheckCircle className="w-32 h-32 text-green-500 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-green-600">Lesson Complete!</h2>
        </div>
      )}
    </div>
  );
};

export default InteractiveLesson;
