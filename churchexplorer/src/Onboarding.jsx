import React from 'react';
import { BookOpen, Shield, Scroll, CheckCircle2, Sparkles, Users, Zap, Target, Brain } from 'lucide-react';

const Onboarding = ({ onComplete, setShowAuth }) => {
  const handleGetStarted = () => {
    setShowAuth(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
        {/* Animated background layers */}
        <div className="absolute inset-0 bg-gradient-to-tl from-indigo-500/50 via-blue-500/50 to-purple-700/50 animate-gradient-shift"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-5 leading-tight">
            Understand the roots of your faith.
          </h1>
          <p className="text-lg md:text-xl text-blue-50 mb-6 max-w-3xl mx-auto leading-relaxed font-medium">
            Short, focused micro-lessons exploring why Christians believe what they believe — grounded in <span className="text-yellow-300 font-semibold">history</span>, <span className="text-green-300 font-semibold">Scripture</span>, and historic Christian teaching.
          </p>
          <div>
            <button
              onClick={handleGetStarted}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 px-8 py-3 rounded-xl font-bold text-lg shadow-lg hover:shadow-yellow-400/30 hover:scale-105 transition-transform"
            >
              <Zap className="w-5 h-5" />
              Start your first lesson — free
            </button>
          </div>
          <p className="text-blue-200 mt-3 text-sm">
            No credit card required to try your first lesson.
          </p>
        </div>
      </div>

      {/* Identity Section */}
      <div className="max-w-5xl mx-auto px-4 py-20 text-center">
        <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-bold text-sm mb-4">
          FOR BELIEVERS
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
          You already believe.
        </h2>
        <p className="text-2xl md:text-3xl text-purple-600 font-bold mb-4">
          Understand the roots behind what you believe.
        </p>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          We focus on the essentials all Christians share, and explore the non-essentials with grace and charity.
        </p>
      </div>

      {/* AI Features Section - Moved Higher */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 py-16">
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full mb-4 border border-white/30">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <span className="font-bold">AI-POWERED LEARNING</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Ask anything. Get focused answers.
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Our AI creates personalized lessons on <span className="font-black text-yellow-300">any theology topic</span> you're curious about — designed to reflect historic Christian teaching.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/6 backdrop-blur rounded-2xl p-6 transition">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Brain className="w-7 h-7 text-slate-900" />
              </div>
              <h3 className="text-xl font-black text-white mb-2">Generate Custom Lessons</h3>
              <p className="text-white/80">
                Type any question about theology, church history, or doctrine. Get an instant, personalized learning path.
              </p>
            </div>

            <div className="bg-white/6 backdrop-blur rounded-2xl p-6 transition">
              <div className="bg-gradient-to-r from-blue-400 to-cyan-500 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-black text-white mb-2">Rooted in History</h3>
              <p className="text-white/80">
                AI lessons are designed to reflect historic Christian teaching — aiming for the faith once delivered.
              </p>
            </div>

            <div className="bg-white/6 backdrop-blur rounded-2xl p-6 transition">
              <div className="bg-gradient-to-r from-green-400 to-emerald-500 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-black text-white mb-2">Your Questions, Explored</h3>
              <p className="text-white/80">
                Stop endlessly scrolling. Get focused exploration of the exact topics you're wrestling with.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-lg text-white/90 mb-4">
              "Why did the early church accept these 4 Gospels?" — generate a focused lesson in seconds.
            </p>
            <button
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 px-6 py-3 rounded-lg font-bold hover:scale-105 transition-transform"
            >
              Try AI Lesson
            </button>
          </div>
        </div>
      </div>

      {/* Tension Section */}
      <div className="bg-gradient-to-br from-slate-100 to-blue-50 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-blue-100">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-red-100 p-3 rounded-xl">
                <Target className="w-8 h-8 text-red-600" />
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                  Most Christians today want to go deeper…
                </h3>
                <p className="text-xl text-slate-600 mb-4">
                  but end up scrolling <span className="line-through text-slate-400">debates</span>, <span className="line-through text-slate-400">conflicting videos</span>, and <span className="line-through text-slate-400">confusing opinions</span>.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-xl text-slate-900 font-bold">
                  This app provides <span className="text-green-600 bg-green-100 px-2 py-1 rounded">theology rooted in history</span> through bite-sized micro-lessons designed to build your understanding without overwhelm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What You'll Learn Section */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <div className="inline-block bg-purple-100 text-purple-700 px-6 py-2 rounded-full font-bold text-sm mb-4">
            CURATED LESSONS
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            What You'll Learn
          </h2>
          <p className="text-xl text-slate-600">
            Start with our curated curriculum — or generate your own with AI
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { text: 'Where Scripture really came from', icon: Scroll, color: 'from-blue-500 to-indigo-600' },
            { text: 'What the early church believed before denominations', icon: BookOpen, color: 'from-purple-500 to-pink-600' },
            { text: 'Why the Trinity formed historically', icon: Brain, color: 'from-amber-500 to-orange-600' },
            { text: 'How to recognize fringe teaching', icon: Shield, color: 'from-red-500 to-rose-600' },
            { text: 'What "gospel" meant in the first century', icon: Sparkles, color: 'from-green-500 to-emerald-600' }
          ].map((item, idx) => (
            <div key={idx} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-2 border-slate-200 hover:border-purple-300 hover:-translate-y-1">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-lg text-slate-900 font-bold leading-snug">{item.text}</p>
            </div>
          ))}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-6 shadow-lg text-white flex items-center justify-center border-2 border-indigo-400">
            <p className="text-lg font-bold text-center">+ Many more lessons</p>
          </div>
        </div>
      </div>

      {/* Trust Anchor Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 to-purple-500"></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            Historic Christian faith.
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            In essentials, unity. In non-essentials, liberty. In all things, charity. This ancient wisdom guides every lesson.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border-2 border-red-500/30">
              <div className="text-4xl mb-2">✗</div>
              <p className="text-xl text-slate-300">Not progressive deconstruction</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border-2 border-red-500/30">
              <div className="text-4xl mb-2">✗</div>
              <p className="text-xl text-slate-300">Not internet-war theology</p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 border-2 border-green-400 shadow-xl shadow-green-500/50">
              <div className="text-4xl mb-2">✓</div>
              <p className="text-2xl font-black text-white">Just real roots</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mid-page CTA */}
      <div className="max-w-5xl mx-auto px-4 py-20 text-center">
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 shadow-xl border-2 border-purple-200">
          <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
            Ready to build your foundation?
          </h3>
          <button
            onClick={handleGetStarted}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white px-12 py-6 rounded-2xl font-black text-2xl shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all transform"
          >
            <Zap className="w-7 h-7" />
            Start learning now
          </button>
          <p className="text-slate-600 mt-4 text-lg font-medium">
            Join others discovering clarity, confidence, and depth
          </p>
        </div>
      </div>

      {/* Social Proof Section */}
      <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-purple-200">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-2xl shadow-lg">
                <Users className="w-12 h-12 text-white" />
              </div>
            </div>
            <p className="text-2xl md:text-3xl text-slate-900 font-bold leading-relaxed text-center">
              Believers are rediscovering{' '}
              <span className="text-blue-600 bg-blue-100 px-2 py-1 rounded-lg">clarity</span>,{' '}
              <span className="text-purple-600 bg-purple-100 px-2 py-1 rounded-lg">confidence</span>, and{' '}
              <span className="text-indigo-600 bg-indigo-100 px-2 py-1 rounded-lg">depth</span>{' '}
              in their faith — with curated lessons and AI-powered personalized learning.
            </p>
            <div className="flex items-center justify-center gap-8 mt-8 text-center flex-wrap">
              <div>
                <div className="text-4xl font-black text-purple-600">∞</div>
                <div className="text-sm text-slate-600 font-semibold">AI-Generated</div>
              </div>
              <div className="w-px h-12 bg-slate-300"></div>
              <div>
                <div className="text-4xl font-black text-blue-600">✓</div>
                <div className="text-sm text-slate-600 font-semibold">Curated Lessons</div>
              </div>
              <div className="w-px h-12 bg-slate-300"></div>
              <div>
                <div className="text-4xl font-black text-orange-600">Free</div>
                <div className="text-sm text-slate-600 font-semibold">To Start</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700">
        <div className="relative max-w-5xl mx-auto px-4 py-20 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Begin your first lesson.
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            No fluff. No agenda. Just the historical roots of what Christians have always believed.
          </p>
          <button
            onClick={handleGetStarted}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 px-12 py-6 rounded-2xl font-black text-2xl shadow-2xl hover:shadow-yellow-500/50 hover:scale-105 transition-all transform"
          >
            <BookOpen className="w-7 h-7" />
            Get Started — Free
          </button>
          <div className="flex items-center justify-center gap-6 mt-8 text-blue-100">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-300" />
              <span className="font-semibold">No credit card</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-300" />
              <span className="font-semibold">No commitment</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-300" />
              <span className="font-semibold">Start in 60 seconds</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
