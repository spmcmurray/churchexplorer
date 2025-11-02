import React, { useState, useEffect } from 'react';
import { Zap, CheckCircle, X, Star, Trophy, Flame } from 'lucide-react';
import { timelineChallenges, lessonChallenges } from './dailyChallenges';
import { addPathXP } from './services/progressService';

const DailyChallenge = ({ onNavigate }) => {
  const [challenge, setChallenge] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [completedToday, setCompletedToday] = useState(false);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    loadDailyChallenge();
    loadStreak();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadDailyChallenge = () => {
    // Check if already completed today
    const today = new Date().toDateString();
    const savedCompletion = localStorage.getItem('dailyChallengeCompletion');
    if (savedCompletion === today) {
      setCompletedToday(true);
      return;
    }

    // Get user's completed lessons
    const bibleProgress = JSON.parse(localStorage.getItem('bibleHistoryProgress') || '[]');
    const churchProgress = JSON.parse(localStorage.getItem('churchHistoryProgress') || '[]');
    const apologeticsProgress = JSON.parse(localStorage.getItem('apologeticsProgress') || '[]');

    // Filter lesson challenges based on completion
    const availableLessonChallenges = lessonChallenges.filter(c => {
      const { path, lesson } = c.requiredLesson;
      if (path === 'bible') return bibleProgress.includes(lesson);
      if (path === 'church') return churchProgress.includes(lesson);
      if (path === 'apologetics') return apologeticsProgress.includes(lesson);
      return false;
    });

    // Combine timeline challenges (always available) with available lesson challenges
    const allAvailable = [...timelineChallenges, ...availableLessonChallenges];

    if (allAvailable.length === 0) {
      // Fallback to timeline only if no lessons completed
      setChallenge(getRandomChallenge(timelineChallenges));
      return;
    }

    // Get deterministic challenge based on day of year
    const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
    const index = dayOfYear % allAvailable.length;
    setChallenge(allAvailable[index]);
  };

  const getRandomChallenge = (pool) => {
    return pool[Math.floor(Math.random() * pool.length)];
  };

  const loadStreak = () => {
    const streakData = localStorage.getItem('dailyChallengeStreak');
    if (streakData) {
      const { count, lastCompletedDate } = JSON.parse(streakData);
      setStreak(count);
    }
  };

  const updateStreak = () => {
    const today = new Date().toDateString();
    const streakData = localStorage.getItem('dailyChallengeStreak');
    
    if (!streakData) {
      // First time completing
      const newStreak = { count: 1, lastCompletedDate: today };
      localStorage.setItem('dailyChallengeStreak', JSON.stringify(newStreak));
      setStreak(1);
      return;
    }

    const { count, lastCompletedDate } = JSON.parse(streakData);
    const lastDate = new Date(lastCompletedDate);
    const todayDate = new Date(today);
    const yesterday = new Date(todayDate);
    yesterday.setDate(yesterday.getDate() - 1);

    if (lastCompletedDate === today) {
      // Already completed today, no change
      return;
    } else if (lastDate.toDateString() === yesterday.toDateString()) {
      // Consecutive day - increment streak
      const newStreak = { count: count + 1, lastCompletedDate: today };
      localStorage.setItem('dailyChallengeStreak', JSON.stringify(newStreak));
      setStreak(count + 1);
    } else {
      // Streak broken - reset to 1
      const newStreak = { count: 1, lastCompletedDate: today };
      localStorage.setItem('dailyChallengeStreak', JSON.stringify(newStreak));
      setStreak(1);
    }
  };

  const handleSubmit = () => {
    if (challenge.type === 'quiz') {
      const correct = selectedAnswer === challenge.correctAnswer;
      setIsCorrect(correct);
      setShowResult(true);
      
      if (correct) {
        awardXP(challenge.xp);
        markCompleted();
      }
    } else if (challenge.type === 'fillblank') {
      const correct = userAnswer.trim().toLowerCase() === challenge.answer.toLowerCase();
      setIsCorrect(correct);
      setShowResult(true);
      
      if (correct) {
        awardXP(challenge.xp);
        markCompleted();
      }
    } else if (challenge.type === 'truefalse') {
      const correct = selectedAnswer === challenge.answer;
      setIsCorrect(correct);
      setShowResult(true);
      
      if (correct) {
        awardXP(challenge.xp);
        markCompleted();
      }
    } else if (challenge.type === 'trivia') {
      // Trivia is always "correct" - just acknowledge reading
      awardXP(challenge.xp);
      markCompleted();
      setShowResult(true);
      setIsCorrect(true);
    }
  };

  const awardXP = async (xp) => {
    // Award XP to bible path for daily challenge
    await addPathXP('bible', xp);
  };

  const markCompleted = () => {
    const today = new Date().toDateString();
    localStorage.setItem('dailyChallengeCompletion', today);
    updateStreak();
    setCompletedToday(true);
  };

  const handleTryAgain = () => {
    setSelectedAnswer(null);
    setUserAnswer('');
    setShowResult(false);
    setIsCorrect(false);
  };

  if (completedToday) {
    return (
      <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <Trophy className="w-6 h-6" />
            <span className="font-bold text-lg">Daily Challenge Complete! ✓</span>
          </div>
          {streak > 0 && (
            <div className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-full">
              <Flame className="w-5 h-5 fill-white" />
              <span className="font-bold">{streak} day{streak !== 1 ? 's' : ''}</span>
            </div>
          )}
        </div>
        <p className="text-white/90">Great job! Come back tomorrow for a new challenge.</p>
      </div>
    );
  }

  if (!challenge) {
    return (
      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-6 text-white">
        <div className="flex items-center gap-3 mb-2">
          <Zap className="w-6 h-6" />
          <span className="font-bold text-lg">Daily Challenge</span>
        </div>
        <p className="text-white/90 mb-3">
          Complete lessons to unlock daily challenges! Start with a learning path below.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-6 text-white shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Zap className="w-6 h-6" />
          <span className="font-bold text-lg">Today's Quick Win</span>
        </div>
        <div className="flex items-center gap-3">
          {streak > 0 && (
            <div className="flex items-center gap-1.5 bg-white/20 px-3 py-1 rounded-full">
              <Flame className="w-4 h-4 fill-white" />
              <span className="font-bold text-sm">{streak}</span>
            </div>
          )}
          <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
            <Star className="w-4 h-4 fill-white" />
            <span className="font-bold text-sm">+{challenge.xp} XP</span>
          </div>
        </div>
      </div>

      {/* Objective */}
      {challenge.objective && (
        <div className="mb-3 text-white/90 text-sm">
          🎯 <span className="font-medium">{challenge.objective}</span>
        </div>
      )}

      {/* Question */}
      {challenge.type === 'quiz' && (
        <>
          <p className="text-white font-semibold mb-4">{challenge.question}</p>
          <div className="grid grid-cols-1 gap-2 mb-4">
            {challenge.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => !showResult && setSelectedAnswer(idx)}
                disabled={showResult}
                className={`text-left px-4 py-3 rounded-xl font-medium transition ${
                  showResult
                    ? idx === challenge.correctAnswer
                      ? 'bg-green-600 text-white border-2 border-green-400'
                      : idx === selectedAnswer && !isCorrect
                      ? 'bg-red-600 text-white border-2 border-red-400'
                      : 'bg-white/20 text-white/60'
                    : selectedAnswer === idx
                    ? 'bg-white text-amber-700 border-2 border-white'
                    : 'bg-white/30 text-white hover:bg-white/40 border-2 border-transparent'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}

      {challenge.type === 'truefalse' && (
        <>
          <p className="text-white font-semibold mb-4">{challenge.statement}</p>
          <div className="grid grid-cols-2 gap-2 mb-4">
            {[true, false].map((option) => (
              <button
                key={option.toString()}
                onClick={() => !showResult && setSelectedAnswer(option)}
                disabled={showResult}
                className={`px-4 py-3 rounded-xl font-bold transition ${
                  showResult
                    ? option === challenge.answer
                      ? 'bg-green-600 text-white border-2 border-green-400'
                      : option === selectedAnswer && !isCorrect
                      ? 'bg-red-600 text-white border-2 border-red-400'
                      : 'bg-white/20 text-white/60'
                    : selectedAnswer === option
                    ? 'bg-white text-amber-700 border-2 border-white'
                    : 'bg-white/30 text-white hover:bg-white/40 border-2 border-transparent'
                }`}
              >
                {option ? 'TRUE' : 'FALSE'}
              </button>
            ))}
          </div>
        </>
      )}

      {challenge.type === 'fillblank' && (
        <>
          <p className="text-white font-semibold mb-4">{challenge.prompt}</p>
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => !showResult && setUserAnswer(e.target.value)}
            disabled={showResult}
            placeholder="Type your answer..."
            className="w-full px-4 py-3 rounded-xl text-gray-900 font-medium mb-4 focus:outline-none focus:ring-2 focus:ring-white"
          />
        </>
      )}

      {challenge.type === 'trivia' && (
        <>
          <p className="text-white font-semibold mb-3">💡 Did you know?</p>
          <p className="text-white/95 mb-4">{challenge.fact}</p>
        </>
      )}

      {/* Feedback */}
      {showResult && (
        <div className={`mb-4 p-4 rounded-xl ${isCorrect ? 'bg-green-600/30 border-2 border-green-400' : 'bg-red-600/30 border-2 border-red-400'}`}>
          <div className="flex items-center gap-2 mb-2">
            {isCorrect ? (
              <>
                <CheckCircle className="w-5 h-5" />
                <span className="font-bold">Correct! +{challenge.xp} XP</span>
              </>
            ) : (
              <>
                <X className="w-5 h-5" />
                <span className="font-bold">Not quite!</span>
              </>
            )}
          </div>
          <p className="text-white/90 text-sm">{challenge.explanation}</p>
        </div>
      )}

      {/* Action Button */}
      {!showResult ? (
        <button
          onClick={handleSubmit}
          disabled={
            (challenge.type === 'quiz' && selectedAnswer === null) ||
            (challenge.type === 'truefalse' && selectedAnswer === null) ||
            (challenge.type === 'fillblank' && !userAnswer.trim())
          }
          className={`w-full px-6 py-3 rounded-xl font-bold transition ${
            ((challenge.type === 'quiz' || challenge.type === 'truefalse') && selectedAnswer !== null) ||
            (challenge.type === 'fillblank' && userAnswer.trim()) ||
            challenge.type === 'trivia'
              ? 'bg-white text-amber-700 hover:bg-amber-50 shadow-lg'
              : 'bg-white/30 text-white/60 cursor-not-allowed'
          }`}
        >
          {challenge.type === 'trivia' ? 'Got it! 👍' : 'Submit Answer'}
        </button>
      ) : (
        <div className="flex flex-col gap-2">
          {!isCorrect && challenge.type !== 'trivia' && (
            <button
              onClick={handleTryAgain}
              className="w-full px-6 py-3 bg-white/30 text-white rounded-xl font-bold hover:bg-white/40 transition"
            >
              Try Again
            </button>
          )}
          {/* Lesson-based review CTA */}
          {isCorrect && challenge.requiredLesson && (
            <button
              onClick={() => {
                const path = challenge.requiredLesson.path;
                if (path === 'bible') onNavigate('bible');
                else if (path === 'church') onNavigate('church');
                else if (path === 'apologetics') onNavigate('apologetics');
              }}
              className="w-full px-6 py-3 bg-white text-amber-700 rounded-xl font-bold hover:bg-amber-50 transition"
            >
              📚 Review Lesson {challenge.requiredLesson.lesson}
            </button>
          )}
          {/* Timeline CTA */}
          {challenge.cta && (
            <button
              onClick={() => onNavigate('explorer')}
              className="w-full px-6 py-3 bg-white text-amber-700 rounded-xl font-bold hover:bg-amber-50 transition"
            >
              {challenge.cta}
            </button>
          )}
        </div>
      )}

      {/* Source badge */}
      <p className="text-center text-white/60 text-xs mt-3">
        {challenge.source === 'church-timeline' && '📜 From Church Timeline'}
        {challenge.source === 'denomination-facts' && '⛪ From Denominations'}
        {challenge.requiredLesson && `📚 From ${challenge.requiredLesson.path === 'bible' ? 'Bible' : challenge.requiredLesson.path === 'church' ? 'Church' : 'Apologetics'} History Lesson ${challenge.requiredLesson.lesson}`}
      </p>
    </div>
  );
};

export default DailyChallenge;
