import React from 'react';
import { Trophy, X, Sparkles } from 'lucide-react';

const SignUpPrompt = ({ onSignUp, onDismiss, xp }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-slideUp">
        <button
          onClick={onDismiss}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 transition"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4">
          <Trophy className="w-10 h-10 text-white" />
        </div>
        
        <h2 className="text-3xl font-black text-gray-900 text-center mb-2">
          Great Start! 🎉
        </h2>
        
        <p className="text-gray-600 text-center mb-6">
          You've earned <span className="font-bold text-amber-600">{xp} XP</span>! Create an account to save your progress and compete on the global leaderboard.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4">
          <p className="text-sm text-amber-900 text-center">
            <span className="font-bold">Your {xp} XP will be saved</span> when you sign up! 🎯
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 mb-6">
          <div className="flex items-start gap-3 mb-3">
            <Sparkles className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-gray-900 text-sm">Save Your Progress</p>
              <p className="text-gray-600 text-xs">Never lose your learning streak</p>
            </div>
          </div>
          <div className="flex items-start gap-3 mb-3">
            <Trophy className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-gray-900 text-sm">Global Leaderboard</p>
              <p className="text-gray-600 text-xs">Compete with learners worldwide</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-gray-900 text-sm">Track Across Devices</p>
              <p className="text-gray-600 text-xs">Continue learning anywhere</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={onSignUp}
            className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition shadow-lg hover:shadow-xl"
          >
            Create Free Account
          </button>
          <button
            onClick={onDismiss}
            className="w-full px-6 py-3 text-gray-600 hover:text-gray-800 font-medium transition"
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPrompt;
