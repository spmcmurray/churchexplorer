import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Lightbulb, 
  BookOpen, 
  Sparkles, 
  Search, 
  ArrowRight, 
  Clock,
  Star,
  Loader,
  AlertCircle,
  CheckCircle
} from 'lucide-react';
import { generateAILesson, generateTopicSuggestions } from './services/aiLessonService';

const AILessonCreator = ({ currentUser, onStartLesson, onGoBack }) => {
  const [topic, setTopic] = useState('');
  const [additionalContext, setAdditionalContext] = useState('');
  const [generating, setGenerating] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);
  const [generatedLesson, setGeneratedLesson] = useState(null);
  const [error, setError] = useState('');
  const [estimatedTime, setEstimatedTime] = useState('2-3 minutes');

  const popularTopics = [
    { title: 'Catholic Church Beliefs', description: 'Core doctrines and practices of Catholicism' },
    { title: 'Lutheran Theology', description: 'Martin Luther\'s teachings and modern Lutheran churches' },
    { title: 'Orthodox Christianity', description: 'Eastern Orthodox beliefs and traditions' },
    { title: 'Presbyterian Doctrine', description: 'Reformed theology and Presbyterian practices' },
    { title: 'Pentecostal Movement', description: 'History and beliefs of Pentecostal churches' },
    { title: 'Anglican Communion', description: 'Church of England and worldwide Anglican churches' },
    { title: 'Baptist Traditions', description: 'Baptist history, beliefs, and practices' },
    { title: 'Methodist Heritage', description: 'Wesleyan theology and Methodist churches' }
  ];

  useEffect(() => {
    // Load topic suggestions when component mounts
    loadTopicSuggestions();
  }, [loadTopicSuggestions]);

  const loadTopicSuggestions = async () => {
    setLoadingSuggestions(true);
    try {
      const result = await generateTopicSuggestions(['church history', 'theology', 'denominations']);
      if (result.success) {
        setSuggestions(result.suggestions);
      } else {
        setSuggestions(result.fallbackSuggestions || []);
      }
    } catch (error) {
      console.error('Error loading suggestions:', error);
      setSuggestions(popularTopics);
    } finally {
      setLoadingSuggestions(false);
    }
  };

  const handleGenerateLesson = async () => {
    if (!topic.trim()) {
      setError('Please enter a topic you\'d like to learn about');
      return;
    }

    setGenerating(true);
    setError('');
    setGeneratedLesson(null);

    try {
      const result = await generateAILesson(topic, additionalContext);
      
      if (result.success) {
        setGeneratedLesson(result.lesson);
        setEstimatedTime('3-5 minutes');
      } else {
        setError(result.error || 'Failed to generate lesson. Please try again.');
      }
    } catch (error) {
      setError('An unexpected error occurred. Please try again.');
      console.error('Lesson generation error:', error);
    } finally {
      setGenerating(false);
    }
  };

  const handleStartGeneratedLesson = () => {
    if (generatedLesson && onStartLesson) {
      onStartLesson(generatedLesson);
    }
  };

  const handleTopicSuggestionClick = (suggestionTitle) => {
    setTopic(suggestionTitle);
    setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 pb-20">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          {onGoBack && (
            <button
              onClick={onGoBack}
              className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-purple-200 rounded-xl hover:border-purple-500 hover:text-purple-600 transition mb-4 font-semibold"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back
            </button>
          )}

          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="bg-gradient-to-r from-purple-500 to-blue-600 p-3 rounded-xl">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-black text-gray-900">AI Lesson Creator</h1>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn about any Christian topic with AI-generated lessons. Just tell us what you'd like to study, 
              and we'll create a comprehensive lesson using our proven educational structure.
            </p>
          </div>
        </div>

        {!generatedLesson ? (
          <>
            {/* Topic Input Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900">What would you like to learn about?</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Topic or Question
                  </label>
                  <input
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="e.g., Catholic Church beliefs, Presbyterian theology, Orthodox traditions..."
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none text-lg"
                    maxLength={200}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Context (Optional)
                  </label>
                  <textarea
                    value={additionalContext}
                    onChange={(e) => setAdditionalContext(e.target.value)}
                    placeholder="Any specific aspects you'd like to focus on, questions you have, or background information..."
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
                    rows={3}
                    maxLength={500}
                  />
                </div>

                {error && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg">
                    <AlertCircle className="w-5 h-5" />
                    <span>{error}</span>
                  </div>
                )}

                <button
                  onClick={handleGenerateLesson}
                  disabled={generating || !topic.trim()}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-4 px-6 rounded-xl hover:from-purple-700 hover:to-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {generating ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      Generating your lesson...
                    </>
                  ) : (
                    <>
                      <Brain className="w-5 h-5" />
                      Generate Lesson
                    </>
                  )}
                </button>

                {generating && (
                  <div className="text-center text-gray-600">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Clock className="w-4 h-4" />
                      <span>Estimated generation time: {estimatedTime}</span>
                    </div>
                    <p className="text-sm">AI is researching and creating your personalized lesson...</p>
                  </div>
                )}
              </div>
            </div>

            {/* Topic Suggestions */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                <h3 className="text-xl font-bold text-gray-900">Popular Learning Topics</h3>
              </div>

              {loadingSuggestions ? (
                <div className="flex items-center justify-center py-8">
                  <Loader className="w-6 h-6 animate-spin text-purple-600" />
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-4">
                  {(suggestions.length > 0 ? suggestions : popularTopics).map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleTopicSuggestionClick(suggestion.title)}
                      className="text-left p-4 border-2 border-gray-200 rounded-xl hover:border-purple-500 hover:bg-purple-50 transition group"
                    >
                      <h4 className="font-semibold text-gray-900 group-hover:text-purple-700 mb-1">
                        {suggestion.title}
                      </h4>
                      <p className="text-sm text-gray-600">{suggestion.description}</p>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </>
        ) : (
          /* Generated Lesson Preview */
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-8 h-8 text-green-500" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Your Lesson is Ready!</h2>
                <p className="text-gray-600">AI has generated a comprehensive lesson for you</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{generatedLesson.title}</h3>
              <p className="text-gray-700 mb-4">{generatedLesson.subtitle}</p>
              
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-purple-600" />
                  <span>{generatedLesson.sections?.length || 0} Sections</span>
                </div>
                <div className="flex items-center gap-2">
                  <Search className="w-4 h-4 text-blue-600" />
                  <span>{generatedLesson.quiz?.length || 0} Quiz Questions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>{generatedLesson.xpReward} XP Reward</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Introduction Preview:</h4>
                <p className="text-gray-700 text-sm line-clamp-3">
                  {generatedLesson.introduction}
                </p>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleStartGeneratedLesson}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-3 px-6 rounded-xl hover:from-purple-700 hover:to-blue-700 transition flex items-center justify-center gap-2"
                >
                  <BookOpen className="w-5 h-5" />
                  Start Lesson
                </button>
                
                <button
                  onClick={() => {
                    setGeneratedLesson(null);
                    setTopic('');
                    setAdditionalContext('');
                  }}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 transition"
                >
                  Generate Another
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Features Section */}
        <div className="mt-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">What makes AI lessons special?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <Brain className="w-12 h-12 mx-auto mb-3 opacity-90" />
              <h4 className="font-bold mb-2">Intelligent Content</h4>
              <p className="text-sm opacity-90">AI researches and creates accurate, well-sourced lessons</p>
            </div>
            <div className="text-center">
              <BookOpen className="w-12 h-12 mx-auto mb-3 opacity-90" />
              <h4 className="font-bold mb-2">Proven Structure</h4>
              <p className="text-sm opacity-90">Uses the same effective lesson format as our built-in courses</p>
            </div>
            <div className="text-center">
              <Star className="w-12 h-12 mx-auto mb-3 opacity-90" />
              <h4 className="font-bold mb-2">Full Integration</h4>
              <p className="text-sm opacity-90">Earn XP, track progress, and get the complete learning experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AILessonCreator;