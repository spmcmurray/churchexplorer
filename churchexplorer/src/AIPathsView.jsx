import React, { useState, useEffect } from 'react';
import { Brain, Sparkles, BookOpen, CheckCircle2, ArrowLeft, Trash2, Play, ChevronDown, ChevronUp, Shuffle, Zap, Layers, Rocket, Lightbulb, TrendingUp, Star, BookMarked, AlertCircle } from 'lucide-react';
import AIPathViewer from './AIPathViewer';
import { 
  generateAILesson, 
  generateTopicSuggestions,
  generateLearningPathOutline,
  generateCompleteLearningPath,
  saveAIPathToLibrary,
  getSavedAIPaths,
  deleteAIPath
} from './services/aiLessonService';

/**
 * AIPathsView - Unified page for AI Lessons library and creator
 * Combines viewing saved lessons with creating new ones
 */
const AIPathsView = ({ currentUser, onNavigate, onGoBack }) => {
  const [aiPaths, setAiPaths] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCreator, setShowCreator] = useState(false);
  const [viewingPath, setViewingPath] = useState(null); // For conditional rendering of path viewer
  
  // Creator states
  const [topic, setTopic] = useState('');
  const [additionalContext, setAdditionalContext] = useState('');
  const [pathType, setPathType] = useState('quick');
  const [generating, setGenerating] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);
  const [pathOutline, setPathOutline] = useState(null);
  const [generatingPath, setGeneratingPath] = useState(false);
  const [pathProgress, setPathProgress] = useState(null);
  const [error, setError] = useState('');
  const [recentTopics, setRecentTopics] = useState([]);
  const creatorSectionRef = React.useRef(null);

  useEffect(() => {
    loadAIPaths();
    loadTopicSuggestions();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const loadAIPaths = async () => {
    setLoading(true);
    try {
      const paths = await getSavedAIPaths(currentUser);
      setAiPaths(paths.sort((a, b) => 
        new Date(b.savedAt || 0) - new Date(a.savedAt || 0)
      ));
    } catch (error) {
      console.error('Error loading AI paths:', error);
      setAiPaths([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePath = async (pathId) => {
    if (window.confirm('Are you sure you want to delete this learning path? This cannot be undone.')) {
      const result = await deleteAIPath(pathId, currentUser);
      if (result.success) {
        await loadAIPaths();
      }
    }
  };

  const loadTopicSuggestions = async () => {
    setLoadingSuggestions(true);
    try {
      const result = await generateTopicSuggestions(['church history', 'theology', 'denominations']);
      if (result.success) {
        // Store all suggestions for randomizer
        setSuggestions(result.suggestions || []);
      } else {
        setSuggestions(result.fallbackSuggestions || []);
      }
    } catch (error) {
      console.error('Error loading suggestions:', error);
      setSuggestions([
        'The Protestant Reformation',
        'Early Church History',
        'Biblical Theology Basics',
        'The Armor of God',
        'Fruits of the Spirit',
        'Biblical Prayer',
        'The Trinity Explained',
        'Book of Revelation'
      ]);
    } finally {
      setLoadingSuggestions(false);
    }
  };

  const randomizeTopic = () => {
    // Use suggestions from API if available, otherwise fallback to topic pool
    const sourcePool = suggestions.length > 0 ? suggestions : topicPool;
    
    // Filter out recently used topics
    const availableTopics = sourcePool.filter(item => {
      const itemTitle = typeof item === 'string' ? item : item.title;
      return !recentTopics.includes(itemTitle);
    });
    
    // If all topics have been used, reset the recent list
    const poolToUse = availableTopics.length > 0 ? availableTopics : sourcePool;
    
    const randomItem = poolToUse[Math.floor(Math.random() * poolToUse.length)];
    
    // Handle both string and object suggestions
    let selectedTopic = '';
    let selectedContext = '';
    
    if (typeof randomItem === 'string') {
      selectedTopic = randomItem;
    } else if (randomItem.title) {
      selectedTopic = randomItem.title;
      selectedContext = randomItem.description || '';
    }
    
    setTopic(selectedTopic);
    setAdditionalContext(selectedContext);
    setError('');
    
    // Update recent topics list (keep last 20)
    setRecentTopics(prev => {
      const updated = [selectedTopic, ...prev];
      return updated.slice(0, 20);
    });
    
    // Trigger textarea auto-resize after state update
    setTimeout(() => {
      const textarea = document.querySelector('textarea[placeholder*="Armor of God"]');
      if (textarea) {
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
      }
    }, 0);
  };

  const pathTypes = [
    {
      id: 'quick',
      name: 'Quick Lesson',
      icon: Zap,
      lessons: 1,
      time: '2-3 min',
      description: 'Single comprehensive lesson',
      color: 'from-blue-600 to-blue-700'
    },
    {
      id: 'deep-dive',
      name: 'Deep Dive',
      icon: Layers,
      lessons: 3,
      time: '6-9 min',
      description: 'Three-part exploration',
      color: 'from-purple-600 to-purple-700'
    },
    {
      id: 'complete',
      name: 'Complete Course',
      icon: Rocket,
      lessons: 8,
      time: '16-24 min',
      description: 'Full mastery path',
      color: 'from-pink-600 to-rose-700'
    }
  ];

  const handleGenerateLesson = async () => {
    if (!topic.trim()) {
      setError('Please enter a topic you\'d like to learn about');
      return;
    }

    setGenerating(true);
    setGeneratingPath(pathType !== 'quick');
    setError('');
    setPathOutline(null);

    try {
      if (pathType === 'quick') {
        // Single lesson - create as a 1-lesson path
        setPathProgress('Generating lesson...');
        const result = await generateAILesson(topic, additionalContext);
        
        if (result.success) {
          const singleLessonPath = {
            id: result.lesson.id,
            title: result.lesson.title,
            description: result.lesson.subtitle || topic,
            topic: topic,
            pathType: 'quick',
            lessons: [result.lesson],
            createdAt: new Date().toISOString()
          };
          
          await saveAIPathToLibrary(singleLessonPath, currentUser);
          await loadAIPaths();
          setTopic('');
          setAdditionalContext('');
          setPathProgress(null);
          
          // Route user to the newly created path
          setViewingPath(singleLessonPath);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          setError(result.error || 'Failed to generate lesson. Please try again.');
        }
      } else {
        // Multi-lesson paths (Deep Dive or Complete Course)
        // Step 1: Generate outline
        const outlineResult = await generateLearningPathOutline(topic, pathType, additionalContext);
        
        if (outlineResult.success) {
          setPathOutline(outlineResult.outline);
          setPathProgress('Generating lessons...');
          
          // Step 2: Generate all lessons in the path
          const pathResult = await generateCompleteLearningPath(outlineResult.outline, (progress) => {
            setPathProgress(progress);
          });
          
          if (pathResult.success) {
            // Save the complete path as a single entity
            const completePath = {
              id: outlineResult.outline.pathId,
              title: outlineResult.outline.pathTitle,
              description: outlineResult.outline.pathDescription || topic,
              topic: topic,
              pathType: pathType,
              lessons: pathResult.path.lessons,
              createdAt: new Date().toISOString()
            };
            
            await saveAIPathToLibrary(completePath, currentUser);
            await loadAIPaths();
            setTopic('');
            setAdditionalContext('');
            setPathOutline(null);
            setPathProgress(null);
            
            // Route user to the newly created path
            setViewingPath(completePath);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            setError(pathResult.error || 'Failed to generate lessons. Please try again.');
          }
        } else {
          setError(outlineResult.error || 'Failed to generate path outline. Please try again.');
        }
      }
    } catch (error) {
      setError('An unexpected error occurred. Please try again.');
      console.error('Path generation error:', error);
    } finally {
      setGenerating(false);
      setGeneratingPath(false);
    }
  };

  const handleGenerateCompletePath = async () => {
    if (!pathOutline) return;

    setGeneratingPath(true);
    setError('');

    try {
      const result = await generateCompleteLearningPath(pathOutline, (progress) => {
        setPathProgress(progress);
      });
      
      if (result.success) {
        if (result.path.lessons && result.path.lessons.length > 0) {
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
          
          loadAILessons();
          setTopic('');
          setAdditionalContext('');
          setPathOutline(null);
          setPathProgress(null);
          // Scroll to top to show new lessons
          window.scrollTo({ top: 0, behavior: 'smooth' });
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

  const handleTopicSuggestionClick = (suggestion) => {
    // Handle both string suggestions and object suggestions
    if (typeof suggestion === 'string') {
      setTopic(suggestion);
      setAdditionalContext('');
    } else if (suggestion.title) {
      setTopic(suggestion.title);
      setAdditionalContext(suggestion.description || '');
    }
    setError('');
  };

  // Set browser theme color when loading
  useEffect(() => {
    if (generating) {
      const metaTheme = document.querySelector('meta[name="theme-color"]');
      if (metaTheme) {
        metaTheme.setAttribute('content', '#9333ea'); // purple-600
      }
    } else {
      const metaTheme = document.querySelector('meta[name="theme-color"]');
      if (metaTheme) {
        metaTheme.setAttribute('content', '#ffffff');
      }
    }
  }, [generating]);

  // If viewing a specific path, show the path viewer (similar to Bible History's pattern)
  if (viewingPath) {
    return (
      <AIPathViewer
        path={viewingPath}
        currentUser={currentUser}
        onGoBack={() => {
          setViewingPath(null);
          loadAIPaths(); // Reload to reflect any progress changes
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Full Screen Loading Animation */}
      {generating && (
        <div className="fixed inset-0 bg-gradient-to-r from-purple-600 to-blue-600 z-50 flex items-center justify-center" style={{ minHeight: '100dvh' }}>
          <div className="text-center px-4">
            {/* Animated Icon */}
            <div className="mb-8 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-white/20 rounded-full animate-ping"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-white/30 rounded-full animate-pulse"></div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl">
                  <Sparkles className="w-10 h-10 text-purple-600 animate-pulse" />
                </div>
              </div>
            </div>

            {/* Loading Text */}
            <h2 className="text-3xl font-bold text-white mb-4">
              Creating Your Lesson{pathType !== 'quick' && 's'}
            </h2>
            
            {/* Progress Message */}
            <p className="text-xl text-white/90 mb-8">
              {generatingPath && pathProgress && typeof pathProgress === 'object' 
                ? `Generating lesson ${pathProgress.current} of ${pathProgress.total}...`
                : generatingPath && pathProgress 
                ? pathProgress 
                : 'Generating your personalized content...'}
            </p>

            {/* Animated Progress Bar */}
            {generatingPath && pathProgress && typeof pathProgress === 'object' && (
              <div className="max-w-md mx-auto">
                <div className="w-full bg-white/30 rounded-full h-3 overflow-hidden">
                  <div 
                    className="bg-white h-3 rounded-full transition-all duration-500 ease-out shadow-lg"
                    style={{ width: `${(pathProgress.current / pathProgress.total) * 100}%` }}
                  ></div>
                </div>
                <p className="text-white/90 text-sm mt-3">
                  {pathProgress.lessonTitle}
                </p>
              </div>
            )}

            {/* Spinning Loader */}
            {!generatingPath && (
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-white/30 border-t-white"></div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 backdrop-blur-md p-3 rounded-2xl shadow-lg">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-black mb-2">AI Lessons</h1>
                <p className="text-purple-100 text-lg">Create & manage your personalized learning</p>
              </div>
            </div>
            <button
              onClick={() => onGoBack ? onGoBack() : onNavigate('home')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 transition font-semibold rounded-xl"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Mobile Back Button */}
        <button
          onClick={() => onGoBack ? onGoBack() : onNavigate('home')}
          className="sm:hidden inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-xl border-2 border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        {/* AI Creator Section - Collapsible */}
        <div className="mb-8" ref={creatorSectionRef}>
          <button
            onClick={() => setShowCreator(!showCreator)}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6" />
              <div className="text-left">
                <h2 className="text-2xl font-bold">Create New AI Path</h2>
                <p className="text-purple-100 text-sm mt-1">Generate personalized learning paths on any topic</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {!showCreator && (
                <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">Create</span>
              )}
              {showCreator ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
            </div>
          </button>

          {showCreator && (
            <div className="mt-4 bg-white rounded-2xl shadow-lg p-6 md:p-8 border-2 border-slate-100">
              
              {/* Step 1: Path Type Selection */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <h3 className="text-lg font-bold text-slate-800">Choose Your Learning Path</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {pathTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setPathType(type.id)}
                      className={`p-5 rounded-xl border-2 transition-all duration-200 ${
                        pathType === type.id
                          ? 'border-purple-500 bg-purple-50 shadow-md ring-2 ring-purple-200'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-purple-300 hover:shadow-sm'
                      }`}
                    >
                      <div className="flex flex-col items-center text-center gap-3">
                        <div className={`p-3 rounded-xl ${pathType === type.id ? 'bg-gradient-to-r ' + type.color : 'bg-slate-100'}`}>
                          <type.icon className={`w-6 h-6 ${pathType === type.id ? 'text-white' : 'text-slate-400'}`} />
                        </div>
                        <div>
                          <div className={`font-bold text-base mb-1 ${pathType === type.id ? 'text-purple-900' : 'text-slate-700'}`}>
                            {type.name}
                          </div>
                          <div className="text-xs text-slate-500 mb-1">
                            {type.lessons} lesson{type.lessons > 1 ? 's' : ''} • {type.time}
                          </div>
                          <div className={`text-sm ${pathType === type.id ? 'text-purple-700' : 'text-slate-500'}`}>
                            {type.description}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Topic Input */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <h3 className="text-lg font-bold text-slate-800">Enter Your Topic</h3>
                </div>
                <textarea
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g., The Armor of God, Biblical Prayer, Fruits of the Spirit..."
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-500 transition-all text-base resize-none overflow-hidden"
                  disabled={generating}
                  rows="1"
                  onInput={(e) => {
                    e.target.style.height = 'auto';
                    e.target.style.height = e.target.scrollHeight + 'px';
                  }}
                />
                
                {/* Topic Randomizer */}
                <div className="mt-3">
                  <button
                    onClick={randomizeTopic}
                    className="w-full py-3 rounded-xl font-semibold text-base transition-all duration-200 bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 hover:shadow-md flex items-center justify-center gap-2"
                    disabled={generating}
                  >
                    <Shuffle className="w-4 h-4" />
                    Surprise Me
                  </button>
                </div>
              </div>

              {/* Step 3: Additional Context (Optional) */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-slate-400 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">3</div>
                  <h3 className="text-lg font-bold text-slate-800">
                    Add Context <span className="text-sm font-normal text-slate-500">(Optional)</span>
                  </h3>
                </div>
                <textarea
                  value={additionalContext}
                  onChange={(e) => setAdditionalContext(e.target.value)}
                  placeholder="Any specific aspects you want to focus on or questions you have..."
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-500 transition-all"
                  rows="3"
                  disabled={generating}
                />
              </div>

              {/* Path Outline Preview */}
              {pathOutline && pathOutline.length > 0 && (
                <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border-2 border-purple-200">
                  <h4 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                    <Layers className="w-5 h-5" />
                    Learning Path Outline ({pathOutline.length} lessons)
                  </h4>
                  <div className="space-y-2">
                    {pathOutline.map((lesson, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <span className="font-bold text-purple-600 min-w-[24px]">{idx + 1}.</span>
                        <span className="text-slate-700">{lesson.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Error Display */}
              {error && (
                <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-xl text-red-700">
                  <div className="flex items-center gap-2 font-semibold mb-1">
                    <AlertCircle className="w-5 h-5" />
                    Error
                  </div>
                  <p className="text-sm">{error}</p>
                </div>
              )}

              {/* Generate Button */}
              <div className="pt-4 border-t-2 border-slate-100">
                <button
                  onClick={handleGenerateLesson}
                  disabled={!topic.trim() || generating}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-200 ${
                    !topic.trim() || generating
                      ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-xl hover:scale-[1.02] shadow-lg'
                  }`}
                >
                  {generating ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      {generatingPath && pathProgress && typeof pathProgress === 'object' 
                        ? `Generating ${pathProgress.current}/${pathProgress.total}...`
                        : generatingPath && pathProgress 
                        ? pathProgress 
                        : 'Generating...'}
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      Generate {pathType === 'quick' ? 'Lesson' : pathType === 'deep-dive' ? 'Deep Dive' : 'Complete Path'}
                    </span>
                  )}
                </button>
                {!topic.trim() && (
                  <p className="text-center text-sm text-slate-500 mt-3">Enter a topic to get started</p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* My Lessons Section */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <BookMarked className="w-7 h-7 text-purple-600" />
            My Learning Paths
          </h2>
        </div>

        {/* Empty State */}
        {!loading && aiPaths.length === 0 && (
          <div className="bg-white rounded-2xl border-2 border-slate-200 shadow-sm p-12 text-center">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">No AI Paths Yet</h2>
            <p className="text-slate-600 mb-6 max-w-md mx-auto">
              Create your first personalized learning path using the AI Creator button above!
            </p>
            <button
              onClick={() => {
                setShowCreator(true);
                setTimeout(() => {
                  if (creatorSectionRef.current) {
                    creatorSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                }, 100);
              }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold px-6 py-3 rounded-xl hover:from-purple-700 hover:to-blue-700 transition shadow-lg hover:shadow-xl"
            >
              <Sparkles className="w-5 h-5" />
              Create Your First Path
            </button>
          </div>
        )}

        {/* Paths Grid */}
        {!loading && aiPaths.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
            {aiPaths.map((path) => {
              // Calculate progress for this path
              const savedProgress = localStorage.getItem(`aiPathProgress_${path.id}`);
              const completedLessons = savedProgress ? JSON.parse(savedProgress) : [];
              const totalLessons = path.lessons?.length || 0;
              const completedCount = completedLessons.length;
              const progressPercent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;
              const isCompleted = completedCount === totalLessons && totalLessons > 0;
              
              return (
                <div
                  key={path.id}
                  className="bg-white rounded-2xl border-2 border-slate-200 p-6 hover:shadow-lg transition cursor-pointer"
                  onClick={() => setViewingPath(path)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-3 flex-1">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${
                        isCompleted ? 'from-green-600 to-emerald-600' : 'from-purple-600 to-blue-600'
                      } text-white flex items-center justify-center flex-shrink-0`}>
                        {isCompleted ? (
                          <CheckCircle2 className="w-6 h-6" />
                        ) : (
                          <Sparkles className="w-6 h-6" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-900 text-lg mb-1 line-clamp-2">
                          {path.title}
                        </h3>
                        {path.description && (
                          <p className="text-sm text-slate-600 mb-2 line-clamp-2">{path.description}</p>
                        )}
                        <div className="flex items-center gap-2 text-xs text-purple-700 bg-purple-100 px-2 py-1 rounded-full inline-flex">
                          <Layers className="w-3 h-3" />
                          {totalLessons} {totalLessons === 1 ? 'Lesson' : 'Lessons'}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeletePath(path.id);
                      }}
                      className="text-slate-400 hover:text-red-600 transition p-2 -mr-2"
                      title="Delete path"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-slate-600 font-medium">Progress</span>
                      <span className="text-purple-600 font-bold">{progressPercent}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-blue-600 h-2 rounded-full transition-all"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      {completedCount} of {totalLessons} lessons completed
                    </div>
                  </div>

                  {/* View Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setViewingPath(path);
                    }}
                    className={`w-full font-bold py-3 px-4 rounded-xl transition flex items-center justify-center gap-2 ${
                      isCompleted
                        ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 shadow-md hover:shadow-lg'
                    }`}
                  >
                    {isCompleted ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        Review Path
                      </>
                    ) : completedCount > 0 ? (
                      <>
                        <Play className="w-4 h-4" />
                        Continue Learning
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4" />
                        Start Path
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default AIPathsView;
