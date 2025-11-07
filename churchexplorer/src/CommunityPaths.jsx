import React, { useState, useEffect } from 'react';
import { ArrowLeft, Star, BookOpen, Users, TrendingUp, Filter, Search, Sparkles, Download, CheckCircle } from 'lucide-react';
import { getCommunityPaths, cloneCommunityPath } from './firebase/ratingService';
import AIPathViewer from './AIPathViewer';
import UpgradeModal from './UpgradeModal';

/**
 * CommunityPaths - Browse and clone high-rated AI paths created by other users
 * Available to Basic and Premium subscribers
 */
const CommunityPaths = ({ currentUser, subscription, onNavigate }) => {
  const [paths, setPaths] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewingPath, setViewingPath] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [minRating, setMinRating] = useState(3.0);
  const [sortBy, setSortBy] = useState('rating'); // 'rating' or 'popularity'
  const [cloningPathId, setCloningPathId] = useState(null);
  const [clonedPaths, setClonedPaths] = useState(new Set());
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  // Check subscription access
  const hasAccess = subscription && (subscription.tier === 'basic' || subscription.tier === 'premium');

  useEffect(() => {
    if (hasAccess) {
      loadCommunityPaths();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [hasAccess]);

  const loadCommunityPaths = async () => {
    setLoading(true);
    try {
      // Load all public paths with at least 1 rating
      const result = await getCommunityPaths({
        minRating: 1.0,
        minRatingCount: 1,
        limitCount: 100
      });

      if (result.success) {
        setPaths(result.paths);
      } else {
        console.error('Error loading community paths:', result.error);
        setPaths([]);
      }
    } catch (error) {
      console.error('Error loading community paths:', error);
      setPaths([]);
    } finally {
      setLoading(false);
    }
  };

  const handleClonePath = async (path) => {
    if (!currentUser) {
      alert('Please sign in to clone paths');
      return;
    }

    if (!hasAccess) {
      setShowUpgradeModal(true);
      return;
    }

    setCloningPathId(path.id);
    
    try {
      const result = await cloneCommunityPath(currentUser.uid, path.id);
      
      if (result.success) {
        // Mark as cloned
        setClonedPaths(prev => new Set([...prev, path.id]));
        
        // Show success message
        alert(`"${path.title}" has been added to your AI Paths library!`);
      } else {
        alert(result.error || 'Failed to clone path');
      }
    } catch (error) {
      console.error('Error cloning path:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setCloningPathId(null);
    }
  };

  // Filter and sort paths
  const filteredPaths = paths
    .filter(path => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          path.title?.toLowerCase().includes(query) ||
          path.description?.toLowerCase().includes(query) ||
          path.category?.toLowerCase().includes(query)
        );
      }
      return true;
    })
    .filter(path => path.averageRating >= minRating)
    .sort((a, b) => {
      if (sortBy === 'rating') {
        // Sort by rating, then by rating count
        if (b.averageRating !== a.averageRating) {
          return b.averageRating - a.averageRating;
        }
        return b.ratingCount - a.ratingCount;
      } else {
        // Sort by popularity (rating count, then rating)
        if (b.ratingCount !== a.ratingCount) {
          return b.ratingCount - a.ratingCount;
        }
        return b.averageRating - a.averageRating;
      }
    });

  // If viewing a specific path
  if (viewingPath) {
    return (
      <AIPathViewer
        path={viewingPath}
        currentUser={currentUser}
        onGoBack={() => {
          setViewingPath(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    );
  }

  // Show upgrade prompt if no access
  if (!hasAccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => onNavigate ? onNavigate('/explore') : window.history.back()}
            className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Explore
          </button>

          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Upgrade to Access Community Paths
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Discover and learn from high-rated paths created by our community.
              Available with Basic or Premium subscription.
            </p>
            <button
              onClick={() => setShowUpgradeModal(true)}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold px-8 py-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg"
            >
              View Subscription Plans
            </button>
          </div>
        </div>

        {showUpgradeModal && (
          <UpgradeModal
            currentUser={currentUser}
            onClose={() => setShowUpgradeModal(false)}
            source="community_paths"
          />
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => onNavigate ? onNavigate('/explore') : window.history.back()}
            className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Explore
          </button>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">
                Community Paths
              </h1>
              <p className="text-gray-600 mt-1">
                Explore high-rated AI-generated learning paths requested by the community
              </p>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Search className="w-4 h-4 inline mr-1" />
                Search Paths
              </label>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title, description, or category..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Filter className="w-4 h-4 inline mr-1" />
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="rating">Highest Rated</option>
                <option value="popularity">Most Popular</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Showing {filteredPaths.length} path{filteredPaths.length !== 1 ? 's' : ''}
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              Minimum rating: {minRating.toFixed(1)} stars
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-gray-600">Loading community paths...</p>
          </div>
        )}

        {/* Community Paths */}
        {!loading && filteredPaths.length > 0 && (
          <>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <h2 className="text-2xl font-bold text-gray-900">Community Paths</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPaths.map((path) => (
                <PathCard
                  key={path.id}
                  path={path}
                  onView={() => setViewingPath(path)}
                  onClone={() => handleClonePath(path)}
                  isCloning={cloningPathId === path.id}
                  isCloned={clonedPaths.has(path.id)}
                />
              ))}
            </div>
          </>
        )}

        {/* Empty State */}
        {!loading && filteredPaths.length === 0 && (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <Sparkles className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {searchQuery ? 'No paths found' : 'No community paths available yet'}
            </h3>
            <p className="text-gray-600">
              {searchQuery 
                ? 'Try adjusting your search or filters' 
                : 'Be the first to create and share a highly-rated path!'}
            </p>
          </div>
        )}
      </div>

      {showUpgradeModal && (
        <UpgradeModal
          currentUser={currentUser}
          onClose={() => setShowUpgradeModal(false)}
          source="community_paths"
        />
      )}
    </div>
  );
};

/**
 * PathCard - Individual path card component
 */
const PathCard = ({ path, onView, onClone, isCloning, isCloned }) => {
  const lessonCount = path.lessons?.length || 0;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden group">
      {/* Header with Rating */}
      <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm px-3 py-1 rounded-full">
            <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
            <span className="text-white font-bold">
              {path.averageRating.toFixed(1)}
            </span>
            <span className="text-white text-sm opacity-80">
              ({path.ratingCount})
            </span>
          </div>
        </div>
        <h3 className="text-white font-bold text-lg line-clamp-2 min-h-[3.5rem]">
          {path.title}
        </h3>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Description */}
        <p className="text-gray-600 text-sm line-clamp-3 mb-4 min-h-[4rem]">
          {path.description || 'No description available'}
        </p>

        {/* Metadata */}
        <div className="space-y-2 mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-purple-500" />
            <span>{lessonCount} lesson{lessonCount !== 1 ? 's' : ''}</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span>Requested by {path.creatorDisplayName || 'Anonymous'}</span>
          </div>
          {path.category && (
            <div className="inline-block bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-medium">
              {path.category}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button
            onClick={onView}
            className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all flex items-center justify-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            View Path
          </button>
          <button
            onClick={onClone}
            disabled={isCloning || isCloned}
            className={`${
              isCloned
                ? 'bg-green-100 text-green-700 cursor-default'
                : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
            } font-semibold py-2 px-4 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50`}
            title={isCloned ? 'Already in your library' : 'Add to your library'}
          >
            {isCloning ? (
              <div className="w-4 h-4 border-2 border-purple-700 border-t-transparent rounded-full animate-spin" />
            ) : isCloned ? (
              <CheckCircle className="w-4 h-4" />
            ) : (
              <Download className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityPaths;
