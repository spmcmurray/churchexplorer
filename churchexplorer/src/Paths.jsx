import React, { useEffect } from 'react';
import { BookOpen, Scroll, Shield, CheckCircle2 } from 'lucide-react';
import { getPathProgress, getProfile } from './services/progressService';

const Paths = ({ onNavigate }) => {
  const bible = getPathProgress('bible');
  const church = getPathProgress('church');
  const apologetics = getPathProgress('apologetics');

  const profile = getProfile();
  const recommended = profile?.startingPoint;

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const cards = [
    {
      id: 'bible-history',
      title: 'Bible History',
      subtitle: 'From oral tradition to modern translations',
      icon: <Scroll className="w-10 h-10" />,
      color: 'from-blue-600 to-indigo-600',
      progress: bible,
      key: 'bible',
    },
    {
      id: 'study-guide',
      title: 'Church History',
      subtitle: 'From Pentecost to today’s denominations',
      icon: <BookOpen className="w-10 h-10" />,
      color: 'from-amber-600 to-orange-600',
      progress: church,
      key: 'church',
    },
    {
      id: 'apologetics',
      title: 'Apologetics',
      subtitle: 'Make a reasoned case with grace',
      icon: <Shield className="w-10 h-10" />,
      color: 'from-indigo-600 to-purple-600',
      progress: apologetics,
      key: 'apologetics',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-8">Choose your learning path</h1>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, idx) => (
            <button
              key={idx}
              onClick={() => onNavigate(c.id)}
              className={`text-left bg-white rounded-2xl border-2 p-6 hover:shadow-lg transition ${
                recommended === c.key ? 'border-blue-400 ring-2 ring-blue-200' : 'border-slate-200'
              }`}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${c.color} text-white flex items-center justify-center mb-4`}>{c.icon}</div>
              <h2 className="text-xl font-bold text-slate-900">{c.title}</h2>
              <p className="text-slate-600 mb-4">{c.subtitle}</p>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-sm font-semibold">{c.progress.completedCount}/{c.progress.total} lessons completed</span>
                {recommended === c.key && (
                  <span className="ml-auto text-xs font-bold text-blue-700 bg-blue-100 px-2 py-1 rounded-full">Recommended</span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Paths;
