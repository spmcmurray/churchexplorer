import React, { useState, useEffect } from 'react';
import { Sparkles, BookOpen, CheckCircle2, ArrowLeft, Trash2, Play, ChevronDown, ChevronUp, Shuffle, Zap, Layers, Rocket, Lightbulb, TrendingUp, Star, BookMarked, AlertCircle, Lock, Unlock, Globe } from 'lucide-react';
import AIPathViewer from './AIPathViewer';
import UpgradeModal from './UpgradeModal';
import UsageDisplay from './UsageDisplay';
import RatePathModal from './RatePathModal';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from './firebase/config';
import { togglePathPublicStatus, submitPathRating } from './firebase/ratingService';
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
  const [activeTab, setActiveTab] = useState('library'); // 'library' or 'create'
  const [viewingPath, setViewingPath] = useState(null); // For conditional rendering of path viewer
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [subscription, setSubscription] = useState(null);
  const [showPublicModal, setShowPublicModal] = useState(false);
  const [pendingTogglePath, setPendingTogglePath] = useState(null);
  const [ratingPath, setRatingPath] = useState(null);
  const [hoverRating, setHoverRating] = useState({});
  
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
  const [showCompletedPaths, setShowCompletedPaths] = useState(false);
  const creatorSectionRef = React.useRef(null);

  // Fallback topic pool when API suggestions are not available
  const topicPool = [
    'The Protestant Reformation',
    'Early Church History',
    'Biblical Theology Basics',
    'The Armor of God',
    'Fruits of the Spirit',
    'Biblical Prayer',
    'The Trinity Explained',
    'Book of Revelation'
  ];

  useEffect(() => {
    loadAIPaths();
    loadTopicSuggestions();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Listen for subscription changes
  useEffect(() => {
    if (!currentUser) {
      setSubscription(null);
      return;
    }

    const subscriptionRef = doc(db, 'users', currentUser.uid, 'subscription', 'current');
    const unsubscribe = onSnapshot(subscriptionRef, (doc) => {
      if (doc.exists()) {
        setSubscription(doc.data());
      } else {
        // Default to free tier if no subscription document exists
        setSubscription({ tier: 'free', status: 'active' });
      }
    });

    return () => unsubscribe();
  }, [currentUser]);

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
      } else {
        alert(result.error || 'Failed to delete path');
      }
    }
  };

  const handleTogglePublic = async (pathId, currentStatus) => {
    // If making public, show confirmation modal
    if (!currentStatus) {
      const path = aiPaths.find(p => p.id === pathId);
      setPendingTogglePath({ id: pathId, title: path?.title || 'this path', currentStatus });
      setShowPublicModal(true);
    } else {
      // Making private - no confirmation needed
      await performToggle(pathId, currentStatus);
    }
  };

  const performToggle = async (pathId, currentStatus) => {
    try {
      const result = await togglePathPublicStatus(currentUser.uid, pathId, !currentStatus);
      if (result.success) {
        // Update state directly without scrolling
        setAiPaths(prevPaths => prevPaths.map(path => {
          if (path.id === pathId) {
            return {
              ...path,
              isPublic: !currentStatus
            };
          }
          return path;
        }));
      } else {
        alert(result.error || 'Failed to update path visibility');
      }
    } catch (error) {
      console.error('Error toggling public status:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const confirmMakePublic = async () => {
    if (pendingTogglePath) {
      await performToggle(pendingTogglePath.id, pendingTogglePath.currentStatus);
      setShowPublicModal(false);
      setPendingTogglePath(null);
    }
  };

  const handleQuickRate = async (pathId, rating) => {
    try {
      const result = await submitPathRating(currentUser.uid, pathId, rating, '');
      if (result.success) {
        // Update state directly without scrolling
        setAiPaths(prevPaths => prevPaths.map(path => {
          if (path.id === pathId) {
            return {
              ...path,
              averageRating: result.averageRating || rating,
              ratingCount: result.ratingCount || 1,
              ratingDistribution: result.ratingDistribution || { [rating]: 1 }
            };
          }
          return path;
        }));
      }
    } catch (error) {
      console.error('Error submitting rating:', error);
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
        const result = await generateAILesson(topic, additionalContext, currentUser?.uid);
        
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
  const outlineResult = await generateLearningPathOutline(topic, pathType, additionalContext, currentUser?.uid);
        
        if (outlineResult.success) {
          setPathOutline(outlineResult.outline);
          setPathProgress('Generating lessons...');
          
          // Step 2: Generate all lessons in the path
          const pathResult = await generateCompleteLearningPath(outlineResult.outline, (progress) => {
            setPathProgress(progress);
          }, currentUser?.uid);
          
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
      console.error('Path generation error:', error);
      if (error.upgradeNeeded) {
        setShowUpgradeModal(true);
        setError(error.message || 'You have reached your monthly AI lesson limit.');
      } else {
        setError(error.message || 'An unexpected error occurred. Please try again.');
      }
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
      }, currentUser?.uid);
      
      if (result.success) {
        if (result.path.lessons && result.path.lessons.length > 0) {
          // Save the generated multi-lesson path as a single entity
          const completePath = {
            id: pathOutline.pathId,
            title: pathOutline.pathTitle,
            description: pathOutline.pathDescription || topic,
            topic: topic,
            pathType: pathType,
            lessons: result.path.lessons,
            createdAt: new Date().toISOString()
          };

          await saveAIPathToLibrary(completePath, currentUser);
          await loadAIPaths();
          setTopic('');
          setAdditionalContext('');
          setPathOutline(null);
          setPathProgress(null);
          // Scroll to top to show new path
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else {
        setError(result.error || 'Failed to generate complete path. Please try again.');
      }
    } catch (error) {
      console.error('Complete path generation error:', error);
      if (error.upgradeNeeded) {
        setShowUpgradeModal(true);
        setError(error.message || 'You have reached your monthly AI lesson limit.');
      } else {
        setError(error.message || 'An unexpected error occurred. Please try again.');
      }
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

      {/* Compact Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sparkles className="w-8 h-8" />
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">AI Learning Paths</h1>
                <p className="text-purple-100 text-sm">Personalized lessons on any topic</p>
              </div>
            </div>
            <button
              onClick={() => onGoBack ? onGoBack() : onNavigate('home')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 transition rounded-lg text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Simplified Usage Display */}
        <UsageDisplay 
          userId={currentUser?.uid} 
          onUpgradeClick={() => setShowUpgradeModal(true)}
        />
        
        {/* Mobile Back Button */}
        <button
          onClick={() => onGoBack ? onGoBack() : onNavigate('home')}
          className="sm:hidden inline-flex items-center gap-2 px-4 py-2 mt-4 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        {/* Cleaner Tab Navigation */}
        <div className="mt-6 mb-6">
          <div className="flex gap-3 border-b-2 border-slate-200">
            <button
              onClick={() => setActiveTab('library')}
              className={`flex items-center gap-2 px-4 py-3 font-semibold transition-all relative ${
                activeTab === 'library'
                  ? 'text-purple-600'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <BookMarked className="w-5 h-5" />
              <span>My Library</span>
              {activeTab === 'library' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab('create')}
              className={`flex items-center gap-2 px-4 py-3 font-semibold transition-all relative ${
                activeTab === 'create'
                  ? 'text-purple-600'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <Sparkles className="w-5 h-5" />
              <span>Create New</span>
              {activeTab === 'create' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600"></div>
              )}
            </button>
          </div>
        </div>

        {/* Create Path Tab - Simplified */}
        {activeTab === 'create' && (
          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-6">Create a Learning Path</h2>
              
              {/* Simplified Topic Input */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  What do you want to learn about?
                </label>
                <textarea
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g., The Armor of God, Biblical Prayer, Fruits of the Spirit..."
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all text-base resize-none"
                  disabled={generating}
                  rows="2"
                  onInput={(e) => {
                    e.target.style.height = 'auto';
                    e.target.style.height = e.target.scrollHeight + 'px';
                  }}
                />
                
                {/* Inline suggestion button */}
                <button
                  onClick={randomizeTopic}
                  className="mt-2 text-sm text-purple-600 hover:text-purple-700 font-medium flex items-center gap-1"
                  disabled={generating}
                >
                  <Shuffle className="w-4 h-4" />
                  Need inspiration? Get a random topic
                </button>
              </div>

              {/* Compact Path Type Selection */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Choose path length
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {pathTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setPathType(type.id)}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        pathType === type.id
                          ? 'border-purple-500 bg-purple-50'
                          : 'border-slate-200 hover:border-purple-300'
                      }`}
                    >
                      <type.icon className={`w-5 h-5 mx-auto mb-2 ${pathType === type.id ? 'text-purple-600' : 'text-slate-400'}`} />
                      <div className={`font-semibold text-sm mb-1 ${pathType === type.id ? 'text-purple-900' : 'text-slate-700'}`}>
                        {type.name}
                      </div>
                      <div className="text-xs text-slate-500">
                        {type.lessons} lesson{type.lessons > 1 ? 's' : ''}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Collapsible Additional Context */}
              <details className="mb-6 group">
                <summary className="cursor-pointer text-sm font-semibold text-slate-700 flex items-center gap-2 hover:text-purple-600 transition">
                  <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
                  Add specific context or questions (optional)
                </summary>
                <textarea
                  value={additionalContext}
                  onChange={(e) => setAdditionalContext(e.target.value)}
                  placeholder="Any specific aspects you want to focus on..."
                  className="w-full px-4 py-3 mt-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                  rows="3"
                  disabled={generating}
                />
              </details>

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
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  <div className="flex items-center gap-2 font-semibold">
                    <AlertCircle className="w-4 h-4" />
                    {error}
                  </div>
                </div>
              )}

              {/* Simplified Generate Button */}
              <button
                onClick={handleGenerateLesson}
                disabled={!topic.trim() || generating}
                className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  !topic.trim() || generating
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg'
                }`}
              >
                {generating ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                    Generating...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Generate Learning Path
                  </span>
                )}
              </button>
          </div>
        )}

        {/* My Library Tab - Simplified */}
        {activeTab === 'library' && (
          <>
            <div className="mb-4">
              <h2 className="text-xl font-bold text-slate-800">
                My Learning Paths
              </h2>
            </div>

        {/* Simplified Empty State */}
        {!loading && aiPaths.length === 0 && (
          <div className="bg-slate-50 rounded-lg p-12 text-center border border-slate-200">
            <Sparkles className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">No paths yet</h3>
            <p className="text-slate-600 mb-6 text-sm max-w-md mx-auto">
              Create your first AI-powered learning path to get started!
            </p>
            <button
              onClick={() => setActiveTab('create')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold px-5 py-2.5 rounded-lg hover:shadow-md transition"
            >
              <Sparkles className="w-4 h-4" />
              Create Path
            </button>
          </div>
        )}

        {/* Paths Grid */}
        {!loading && aiPaths.length > 0 && (
          <>
            {/* Active/In-Progress Paths */}
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
              {aiPaths.filter(path => path.completed !== true).map((path) => {
                // Calculate progress for this path (from Firestore data already loaded)
                const completedLessons = path.completedLessons || [];
                const totalLessons = path.lessons?.length || 0;
                const completedCount = completedLessons.length;
                const progressPercent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;
                
                return (
                  <div
                    key={path.id}
                    className="bg-gradient-to-br from-white to-purple-50/30 rounded-xl border-2 border-purple-100 p-5 hover:border-purple-300 hover:shadow-lg transition cursor-pointer group"
                    onClick={() => setViewingPath(path)}
                  >
                    {/* Header with title and delete */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="font-bold text-lg text-slate-900 line-clamp-2 flex-1">
                        {path.title}
                      </h3>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeletePath(path.id);
                        }}
                        className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-red-600 transition"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Metadata with icons */}
                    <div className="flex items-center gap-3 text-sm text-slate-600 mb-3">
                      <div className="flex items-center gap-1.5">
                        <BookOpen className="w-4 h-4 text-purple-500" />
                        <span>{totalLessons} lesson{totalLessons !== 1 ? 's' : ''}</span>
                      </div>
                      {path.averageRating > 0 && (
                        <div className="flex items-center gap-1.5">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{path.averageRating.toFixed(1)}</span>
                        </div>
                      )}
                    </div>

                    {/* Progress section with background */}
                    <div className="bg-white/80 rounded-lg p-3 mb-3">
                      <div className="flex items-center justify-between text-xs font-medium text-slate-700 mb-2">
                        <span>Progress</span>
                        <span className="text-purple-600">{progressPercent}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-purple-500 to-blue-600 h-2 rounded-full transition-all"
                          style={{ width: `${progressPercent}%` }}
                        />
                      </div>
                    </div>

                    {/* Start/Continue button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setViewingPath(path);
                      }}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-2.5 px-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition flex items-center justify-center gap-2 shadow-md"
                    >
                      <Play className="w-4 h-4" />
                      {completedCount > 0 ? 'Continue Learning' : 'Start Path'}
                    </button>

                    {/* Simplified sharing toggle - just icon button */}
                    {path.isOwned && path.ratingCount >= 1 && (
                      <div className="mt-3 pt-3 border-t border-purple-100">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleTogglePublic(path.id, path.isPublic);
                          }}
                          className="flex items-center gap-2 text-xs text-slate-600 hover:text-purple-600 transition"
                          title={path.isPublic ? 'Make private' : 'Share with community'}
                        >
                          {path.isPublic ? (
                            <><Globe className="w-3.5 h-3.5" /> Shared publicly</>
                          ) : (
                            <><Lock className="w-3.5 h-3.5" /> Private</>
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Completed Paths - Collapsible */}
            {aiPaths.filter(path => path.completed === true).length > 0 && (
              <div className="mb-6">
                <button
                  onClick={() => setShowCompletedPaths(!showCompletedPaths)}
                  className="w-full bg-white rounded-xl border-2 border-slate-200 p-4 hover:bg-slate-50 transition flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-slate-900">Completed Paths</h3>
                      <p className="text-sm text-slate-600">
                        {aiPaths.filter(path => path.completed === true).length} path{aiPaths.filter(path => path.completed === true).length !== 1 ? 's' : ''}
                      </p>
                    </div>
                  </div>
                  {showCompletedPaths ? (
                    <ChevronUp className="w-5 h-5 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </button>

                {showCompletedPaths && (
                  <div className="mt-4 space-y-4">
                    {aiPaths.filter(path => path.completed === true).map((path) => (
                      <div
                        key={path.id}
                        className="bg-white rounded-xl border-2 border-slate-200 overflow-hidden hover:border-slate-300 transition"
                      >
                        {/* Path Header - Clickable */}
                        <div
                          className="p-4 cursor-pointer hover:bg-slate-50 transition"
                          onClick={() => setViewingPath(path)}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex items-start gap-3 flex-1 min-w-0">
                              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                              <div className="flex-1 min-w-0">
                                <h4 className="font-semibold text-slate-900 break-words mb-1">{path.title}</h4>
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className="text-sm text-green-600 font-medium">✓ Complete</span>
                                </div>
                              </div>
                            </div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDeletePath(path.id);
                              }}
                              className="text-slate-400 hover:text-red-600 transition p-2 flex-shrink-0"
                              title="Delete path"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        {/* Rating Section */}
                        {path.isOwned && (
                          <div className="px-4 pb-3 border-b border-slate-200">
                            <div className="flex items-center justify-between gap-3">
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-slate-700">Rate this path:</span>
                                {path.averageRating > 0 && (
                                  <span className="text-xs text-slate-500">({path.averageRating.toFixed(1)} avg)</span>
                                )}
                              </div>
                              <div 
                                className="flex items-center gap-1"
                                onMouseLeave={() => setHoverRating(prev => ({...prev, [path.id]: 0}))}
                              >
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <button
                                    key={star}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleQuickRate(path.id, star);
                                    }}
                                    onMouseEnter={() => setHoverRating(prev => ({...prev, [path.id]: star}))}
                                    className="p-1 hover:scale-110 transition-transform"
                                    title={`${star} star${star !== 1 ? 's' : ''}`}
                                  >
                                    <Star 
                                      className={`w-5 h-5 transition-colors ${
                                        star <= (hoverRating[path.id] || path.ratingCount ? path.averageRating : 0)
                                          ? 'fill-yellow-400 text-yellow-400'
                                          : 'text-slate-300'
                                      }`}
                                    />
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Community Sharing Toggle - Always visible for owned paths */}
                        {path.isOwned && (
                          <div className="px-4 pb-4 pt-3">
                            <div className={`p-3 rounded-lg border transition-all ${
                              path.ratingCount >= 1
                                ? 'bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200'
                                : 'bg-slate-50 border-slate-200'
                            }`}>
                              <div className="flex items-center justify-between gap-3">
                                <div className="flex items-center gap-3 flex-1">
                                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                                    path.ratingCount >= 1
                                      ? (path.isPublic ? 'bg-purple-100' : 'bg-slate-100')
                                      : 'bg-slate-100'
                                  }`}>
                                    {path.isPublic ? (
                                      <Globe className="w-5 h-5 text-purple-600" />
                                    ) : (
                                      <Lock className="w-5 h-5 text-slate-500" />
                                    )}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="text-sm font-semibold text-slate-800 mb-0.5">
                                      Community Sharing
                                    </div>
                                    <p className="text-xs text-slate-600 leading-relaxed">
                                      {path.ratingCount >= 1
                                        ? (path.isPublic 
                                            ? 'Visible in Community Paths' 
                                            : 'Ready to share - toggle to make public')
                                        : 'Rate this path first to enable sharing'}
                                    </p>
                                  </div>
                                </div>
                                
                                {/* Toggle Switch */}
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    if (path.ratingCount >= 1) {
                                      handleTogglePublic(path.id, path.isPublic);
                                    }
                                  }}
                                  disabled={!path.ratingCount || path.ratingCount < 1}
                                  className={`relative inline-flex items-center h-7 w-12 rounded-full transition-colors duration-300 ease-in-out focus:outline-none flex-shrink-0 ${
                                    path.ratingCount >= 1
                                      ? (path.isPublic 
                                          ? 'bg-gradient-to-r from-purple-600 to-blue-600 cursor-pointer focus:ring-2 focus:ring-purple-500 focus:ring-offset-2' 
                                          : 'bg-slate-300 cursor-pointer hover:bg-slate-400 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2')
                                      : 'bg-slate-200 cursor-not-allowed opacity-50'
                                  }`}
                                  title={
                                    path.ratingCount >= 1
                                      ? (path.isPublic ? 'Make Private' : 'Make Public')
                                      : 'Rate this path to enable sharing'
                                  }
                                >
                                  <span
                                    className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out ${
                                      path.isPublic ? 'translate-x-6' : 'translate-x-1'
                                    }`}
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </>
        )}
          </>
        )}
        {/* End of Library Tab */}
      </div>
      
      {/* Make Public Confirmation Modal */}
      {showPublicModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Share with Community</h3>
              </div>
              <p className="text-purple-100 text-sm">
                Make your learning path discoverable by others
              </p>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="mb-6">
                <h4 className="font-semibold text-slate-900 mb-2">
                  "{pendingTogglePath?.title}"
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  By making this path public, other users will be able to:
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Discover and browse your path in Community Paths</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Clone it to their own library to learn from</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Rate and provide feedback on your path</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-blue-800 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>You can make it private again at any time using the toggle switch.</span>
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setShowPublicModal(false);
                    setPendingTogglePath(null);
                  }}
                  className="flex-1 px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl transition"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmMakePublic}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl transition shadow-lg hover:shadow-xl"
                >
                  Make Public
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Upgrade Modal */}
      <UpgradeModal
        isOpen={showUpgradeModal}
        onClose={() => setShowUpgradeModal(false)}
        currentUser={currentUser}
        currentTier={subscription?.tier || 'free'}
        reason="You've reached your monthly AI lesson limit. Upgrade to create more AI-powered lessons!"
      />
    </div>
  );
};

export default AIPathsView;
