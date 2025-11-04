import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Lightbulb, 
  BookOpen, 
  Sparkles, 
  ArrowRight, 
  Star,
  Loader,
  AlertCircle,
  CheckCircle,
  TrendingUp,
  Zap,
  Layers,
  Target,
  Rocket
} from 'lucide-react';
import { 
  generateAILesson, 
  generateTopicSuggestions,
  generateLearningPathOutline,
  generateCompleteLearningPath,
  saveAILessonToLibrary
} from './services/aiLessonService';

const AILessonCreator = ({ currentUser, onStartLesson, onGoBack }) => {
  const [topic, setTopic] = useState('');
  const [additionalContext, setAdditionalContext] = useState('');
  const [pathType, setPathType] = useState('quick'); // 'quick', 'deep-dive', 'complete'
  const [generating, setGenerating] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);
  const [generatedLesson, setGeneratedLesson] = useState(null);
  const [pathOutline, setPathOutline] = useState(null);
  const [generatingPath, setGeneratingPath] = useState(false);
  const [pathProgress, setPathProgress] = useState(null);
  const [error, setError] = useState('');
  const [estimatedTime, setEstimatedTime] = useState('2-3 minutes');
  
  // Ref for scrolling to input section
  const inputSectionRef = React.useRef(null);

  const pathTypes = [
    {
      id: 'quick',
      name: 'Quick Lesson',
      icon: Zap,
      lessons: 1,
      time: '2-3 min',
      description: 'Single comprehensive lesson on your topic',
      color: 'from-blue-600 to-blue-700'
    },
    {
      id: 'deep-dive',
      name: 'Deep Dive',
      icon: Layers,
      lessons: 3,
      time: '6-9 min',
      description: 'Three-part series for focused exploration',
      color: 'from-purple-600 to-purple-700'
    },
    {
      id: 'complete',
      name: 'Complete Course',
      icon: Rocket,
      lessons: 8,
      time: '16-24 min',
      description: 'Full mastery path with progressive learning',
      color: 'from-pink-600 to-rose-700'
    }
  ];

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

  useEffect(() => {
    // Load topic suggestions when component mounts
    loadTopicSuggestions();
  }, []); // Removed the dependency to avoid circular reference

  const handleGenerateLesson = async () => {
    if (!topic.trim()) {
      setError('Please enter a topic you\'d like to learn about');
      return;
    }

    if (pathType === 'quick') {
      // Single lesson - generate immediately
      setGenerating(true);
      setError('');
      setGeneratedLesson(null);

      try {
  const result = await generateAILesson(topic, additionalContext, currentUser?.uid);
        
        if (result.success) {
          // Save lesson to user's library
          saveAILessonToLibrary(result.lesson);
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
    } else {
      // Multi-lesson path - generate outline first
      setGenerating(true);
      setError('');
      setPathOutline(null);

      try {
  const result = await generateLearningPathOutline(topic, pathType, additionalContext, currentUser?.uid);
        
        if (result.success) {
          setPathOutline(result.outline);
        } else {
          setError(result.error || 'Failed to generate path outline. Please try again.');
        }
      } catch (error) {
        setError('An unexpected error occurred. Please try again.');
        console.error('Path outline generation error:', error);
      } finally {
        setGenerating(false);
      }
    }
  };

  const handleGenerateCompletePath = async () => {
    if (!pathOutline) return;

    setGeneratingPath(true);
    setError('');

    try {
      const result = await generateCompleteLearningPath(pathOutline, (progress) => {
        setPathProgress(progress);
      }, currentUser?.uid);
      
      if (result.success) {
        // For now, start with the first lesson
        // In future, we can save the entire path and show a path navigator
        if (result.path.lessons && result.path.lessons.length > 0) {
          // Save all lessons to library with path metadata
          result.path.lessons.forEach((lesson, index) => {
            const lessonWithPath = {
              ...lesson,
              pathInfo: {
                pathType: pathType,
                pathTitle: pathOutline.pathTitle,
                pathId: pathOutline.pathId,
                lessonNumber: index + 1,
                totalLessons: result.path.lessons.length
              }
            };
            saveAILessonToLibrary(lessonWithPath);
          });
          
          setGeneratedLesson(result.path.lessons[0]);
          setPathProgress(null);
        }
      } else {
        setError(result.error || 'Failed to generate complete path. Please try again.');
      }
    } catch (error) {
      setError('An unexpected error occurred. Please try again.');
      console.error('Complete path generation error:', error);
    } finally {
      setGeneratingPath(false);
    }
  };

  const handleStartGeneratedLesson = () => {
    if (generatedLesson && onStartLesson) {
      onStartLesson(generatedLesson);
    }
  };

  const handleTopicSuggestionClick = (suggestionTitle, suggestionDescription) => {
    setTopic(suggestionTitle);
    setAdditionalContext(suggestionDescription);
    setError('');
    
    // Scroll to input section smoothly
    setTimeout(() => {
      if (inputSectionRef.current) {
        inputSectionRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start'
        });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden text-white py-16 px-4">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-blue-500 to-purple-700 animate-gradient-shift"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-blue-500 via-purple-500 to-blue-700 opacity-60 animate-gradient-shift-reverse"></div>
        
        {/* Content */}
        <div className="relative max-w-5xl mx-auto z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black">AI Lesson Creator</h1>
          </div>
          <p className="text-lg md:text-xl text-purple-100 max-w-3xl">
            Create personalized lessons on any Christian topic. Our AI generates comprehensive, structured lessons 
            tailored to what you want to learn.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Back Button */}
        {onGoBack && (
          <button
            onClick={onGoBack}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-xl border-2 border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition font-semibold"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            <span>Back to Home</span>
          </button>
        )}

        {!generatedLesson && !pathOutline ? (
          <>
            {/* Main Input Card */}
            <div ref={inputSectionRef} className="bg-white rounded-2xl border-2 border-slate-200 p-8 mb-6 shadow-sm scroll-mt-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Create Your Learning Experience</h2>
              </div>

              {/* Path Type Selection */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Choose Your Learning Path Type
                </label>
                <div className="grid md:grid-cols-3 gap-3">
                  {pathTypes.map((type) => {
                    const Icon = type.icon;
                    const isSelected = pathType === type.id;
                    return (
                      <button
                        key={type.id}
                        onClick={() => setPathType(type.id)}
                        className={`text-left p-4 rounded-xl border-2 transition ${
                          isSelected
                            ? 'border-purple-500 bg-purple-50 shadow-md'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-start gap-3 mb-2">
                          <div className={`bg-gradient-to-r ${type.color} p-2 rounded-lg`}>
                            <Icon className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className={`font-bold ${isSelected ? 'text-purple-700' : 'text-slate-900'}`}>
                              {type.name}
                            </h3>
                            <div className="flex gap-2 mt-1 text-xs text-slate-600">
                              <span>{type.lessons} lesson{type.lessons > 1 ? 's' : ''}</span>
                              <span>•</span>
                              <span>{type.time}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-xs text-slate-600">{type.description}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    What would you like to learn about?
                  </label>
                  <input
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && !generating && topic.trim() && handleGenerateLesson()}
                    placeholder="e.g., Catholic Church beliefs, Presbyterian theology, Orthodox traditions..."
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-purple-500 focus:outline-none text-base transition"
                    maxLength={200}
                  />
                  <p className="text-xs text-slate-500 mt-1">Be specific about what you want to learn</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Additional Details (Optional)
                  </label>
                  <textarea
                    value={additionalContext}
                    onChange={(e) => setAdditionalContext(e.target.value)}
                    placeholder="Any specific aspects you'd like to focus on, questions you have, or background information..."
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-purple-500 focus:outline-none transition text-sm"
                    rows={3}
                    maxLength={500}
                  />
                </div>

                {error && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 border-2 border-red-200 p-4 rounded-xl">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="font-medium">{error}</span>
                  </div>
                )}

                <button
                  onClick={handleGenerateLesson}
                  disabled={generating || !topic.trim()}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-4 px-6 rounded-xl hover:from-purple-700 hover:to-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                >
                  {generating ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      {pathType === 'quick' ? 'Generating Lesson...' : 'Creating Path Outline...'}
                    </>
                  ) : (
                    <>
                      <Zap className="w-5 h-5" />
                      {pathType === 'quick' ? 'Generate Lesson' : 'Create Learning Path'}
                    </>
                  )}
                </button>

                {generating && (
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-purple-900 mb-2">
                      <Loader className="w-4 h-4 animate-spin" />
                      <span className="font-semibold">
                        {pathType === 'quick' ? 'Creating your lesson...' : 'Designing your learning path...'}
                      </span>
                    </div>
                    <p className="text-sm text-purple-700">
                      Our AI is researching "{topic}" and building your {pathType === 'quick' ? 'lesson' : 'learning path'}. 
                      This usually takes {pathType === 'quick' ? '2-3 minutes' : pathType === 'deep-dive' ? '1-2 minutes' : '1-2 minutes for the outline'}.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Popular Topics Grid */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-slate-600" />
                <h3 className="text-xl font-bold text-slate-900">Popular Topics</h3>
              </div>

              {loadingSuggestions ? (
                <div className="bg-white rounded-2xl border-2 border-slate-200 p-12 flex items-center justify-center">
                  <Loader className="w-6 h-6 animate-spin text-purple-600" />
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
                  {(suggestions.length > 0 ? suggestions : popularTopics).map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleTopicSuggestionClick(suggestion.title, suggestion.description)}
                      className="text-left bg-white rounded-xl border-2 border-slate-200 p-5 hover:border-purple-500 hover:shadow-md transition group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg group-hover:scale-110 transition-transform">
                          <BookOpen className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-slate-900 group-hover:text-purple-700 transition mb-1">
                            {suggestion.title}
                          </h4>
                          <p className="text-sm text-slate-600">{suggestion.description}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Features Section */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">How AI Lessons Work</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold mb-2">AI-Powered Research</h4>
                  <p className="text-sm text-purple-100">
                    Advanced AI creates accurate, well-researched content on your chosen topic
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold mb-2">Proven Structure</h4>
                  <p className="text-sm text-purple-100">
                    Same effective lesson format as our hand-crafted courses
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold mb-2">Full Experience</h4>
                  <p className="text-sm text-purple-100">
                    Earn XP, track progress, and test your knowledge with quizzes
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : pathOutline ? (
          /* Path Outline Preview */
          <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-purple-100 p-3 rounded-xl">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-slate-900 mb-1">{pathOutline.pathTitle}</h2>
                <p className="text-slate-600">{pathOutline.pathDescription}</p>
              </div>
            </div>

            {/* Path Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-50 rounded-lg p-3 text-center">
                <BookOpen className="w-5 h-5 text-purple-600 mx-auto mb-1" />
                <div className="font-bold text-slate-900">{pathOutline.totalLessons}</div>
                <div className="text-xs text-slate-600">Lessons</div>
              </div>
              <div className="bg-slate-50 rounded-lg p-3 text-center">
                <Lightbulb className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                <div className="font-bold text-slate-900">{pathOutline.estimatedTime}</div>
                <div className="text-xs text-slate-600">Per Lesson</div>
              </div>
              <div className="bg-slate-50 rounded-lg p-3 text-center">
                <Star className="w-5 h-5 text-yellow-500 mx-auto mb-1" />
                <div className="font-bold text-slate-900">{pathOutline.totalLessons * 50}</div>
                <div className="text-xs text-slate-600">Total XP</div>
              </div>
            </div>

            {/* Lesson List */}
            <div className="mb-6">
              <h3 className="font-bold text-slate-900 mb-4">Learning Path Structure:</h3>
              <div className="space-y-3">
                {pathOutline.lessons.map((lesson, index) => (
                  <div key={index} className="bg-gradient-to-r from-slate-50 to-purple-50 border-2 border-slate-200 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900">{lesson.title}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Generation Progress */}
            {generatingPath && pathProgress && (
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200 rounded-xl p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Loader className="w-6 h-6 animate-spin text-purple-600" />
                  <div>
                    <div className="font-bold text-purple-900">
                      Generating Lesson {pathProgress.current} of {pathProgress.total}
                    </div>
                    <div className="text-sm text-purple-700">{pathProgress.lessonTitle}</div>
                  </div>
                </div>
                <div className="bg-white rounded-full h-3 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-purple-600 to-blue-600 h-full transition-all duration-500"
                    style={{ width: `${(pathProgress.current / pathProgress.total) * 100}%` }}
                  />
                </div>
                <p className="text-xs text-purple-600 mt-2">
                  This may take a few minutes. Your lessons are being generated with care...
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleGenerateCompletePath}
                disabled={generatingPath}
                className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-4 px-6 rounded-xl hover:from-purple-700 hover:to-blue-700 transition disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                {generatingPath ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Rocket className="w-5 h-5" />
                    Start
                  </>
                )}
              </button>
              
              <button
                onClick={() => {
                  setPathOutline(null);
                  setTopic('');
                  setAdditionalContext('');
                }}
                disabled={generatingPath}
                className="px-6 py-4 border-2 border-slate-300 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition disabled:opacity-50"
              >
                New Topic
              </button>
            </div>
          </div>
        ) : generatedLesson ? (
          /* Generated Lesson Preview */
          <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-green-100 p-3 rounded-xl">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-slate-900 mb-1">Lesson Ready!</h2>
                <p className="text-slate-600">Your AI-generated lesson has been created</p>
              </div>
            </div>

            {/* Lesson Preview Card */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200 rounded-xl p-6 mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{generatedLesson.title}</h3>
              <p className="text-slate-700 text-lg mb-4">{generatedLesson.subtitle}</p>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 text-center">
                  <BookOpen className="w-5 h-5 text-purple-600 mx-auto mb-1" />
                  <div className="font-bold text-slate-900">{generatedLesson.sections?.length || 0}</div>
                  <div className="text-xs text-slate-600">Sections</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 text-center">
                  <Lightbulb className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                  <div className="font-bold text-slate-900">{generatedLesson.quiz?.length || 0}</div>
                  <div className="text-xs text-slate-600">Quiz Questions</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 text-center">
                  <Star className="w-5 h-5 text-yellow-500 mx-auto mb-1" />
                  <div className="font-bold text-slate-900">{generatedLesson.xpReward}</div>
                  <div className="text-xs text-slate-600">XP Reward</div>
                </div>
              </div>
            </div>

            {/* Introduction Preview */}
            <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-5 mb-6">
              <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Introduction Preview
              </h4>
              <p className="text-slate-700 text-sm leading-relaxed line-clamp-4">
                {generatedLesson.introduction}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleStartGeneratedLesson}
                className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-4 px-6 rounded-xl hover:from-purple-700 hover:to-blue-700 transition flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <BookOpen className="w-5 h-5" />
                Start Learning
              </button>
              
              <button
                onClick={() => {
                  setGeneratedLesson(null);
                  setTopic('');
                  setAdditionalContext('');
                }}
                className="px-6 py-4 border-2 border-slate-300 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition"
              >
                Create Another
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AILessonCreator;