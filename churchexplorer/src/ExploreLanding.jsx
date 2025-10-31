import React from 'react';
import { Scroll, BookOpen, Users } from 'lucide-react';

const ExploreLanding = ({ onNavigate }) => {
  const cards = [
    {
      id: 'explore-bible',
      title: 'Bible Timeline',
      subtitle: 'From oral tradition to modern translations',
      icon: <Scroll className="w-10 h-10" />,
      color: 'from-blue-600 to-indigo-600',
    },
    {
      id: 'explore-church',
      title: 'Church Timeline',
      subtitle: "From Pentecost to today's denominations",
      icon: <BookOpen className="w-10 h-10" />,
      color: 'from-amber-600 to-orange-600',
    },
    {
      id: 'explore-denominations',
      title: 'Explore Denominations',
      subtitle: 'Compare beliefs and worship experiences',
      icon: <Users className="w-10 h-10" />,
      color: 'from-purple-600 to-indigo-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Explore Timelines</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl">
            Visual journeys through Scripture and Church history with a coherent, modern UI.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, idx) => (
            <button
              key={idx}
              onClick={() => onNavigate(c.id)}
              className="text-left bg-white rounded-2xl border-2 border-slate-200 p-6 hover:shadow-lg transition"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${c.color} text-white flex items-center justify-center mb-4`}>{c.icon}</div>
              <h2 className="text-xl font-bold text-slate-900">{c.title}</h2>
              <p className="text-slate-600 mb-2">{c.subtitle}</p>
              <span className="inline-block text-xs font-bold text-amber-700 bg-amber-100 px-2 py-1 rounded-full">Refreshed UI</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreLanding;
