import React, { useState } from 'react';
import { recommendPathFromAnswers, saveProfile, getPathMeta } from './services/progressService';

const Onboarding = ({ onComplete }) => {
  const [answers, setAnswers] = useState({ startingPoint: '', style: '' });

  const canContinue = answers.startingPoint && answers.style;

  const handleFinish = () => {
    saveProfile(answers);
    const rec = recommendPathFromAnswers(answers);
    const meta = getPathMeta(rec.pathId);
    onComplete({ view: meta.view, lesson: rec.nextLesson });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Let’s personalize your path</h1>

        <div className="space-y-8">
          <Question
            title="What's your starting point?"
            options={[
              { value: 'bible', label: 'Bible History' },
              { value: 'church', label: 'Church History' },
              { value: 'apologetics', label: 'Defending Your Faith' },
            ]}
            value={answers.startingPoint}
            onChange={(v) => setAnswers(a => ({ ...a, startingPoint: v }))}
          />

          <Question
            title="Preferred learning style?"
            options={[
              { value: 'read', label: 'Read and reflect' },
              { value: 'interactive', label: 'Interactive & quizzes' },
              { value: 'mix', label: 'Mix it up' },
            ]}
            value={answers.style}
            onChange={(v) => setAnswers(a => ({ ...a, style: v }))}
          />

          <div className="pt-2">
            <button
              disabled={!canContinue}
              onClick={handleFinish}
              className={`px-6 py-3 rounded-xl font-bold shadow ${
                canContinue ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              Create my plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Question = ({ title, options, value, onChange }) => (
  <div>
    <h2 className="text-xl font-bold text-slate-900 mb-3">{title}</h2>
    <div className="grid sm:grid-cols-3 gap-3">
      {options.map((opt, idx) => (
        <button
          key={idx}
          onClick={() => onChange(opt.value)}
          className={`text-left rounded-xl border-2 p-4 transition ${
            value === opt.value
              ? 'border-blue-500 bg-blue-50 text-blue-800'
              : 'border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50'
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  </div>
);

export default Onboarding;
