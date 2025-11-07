import React, { useState, useEffect } from 'react';
import { X, Star, Send, CheckCircle } from 'lucide-react';

/**
 * RatePathModal - Modal for users to rate AI-generated learning paths
 * Allows 1-5 star rating with optional comment
 */
const RatePathModal = ({ isOpen, onClose, path, currentUser, onSubmitRating }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [existingRating, setExistingRating] = useState(null);

  // Load existing rating if user has already rated this path
  useEffect(() => {
    const loadExistingRating = async () => {
      if (!isOpen || !currentUser?.uid || !path?.id) return;
      
      try {
        const { getUserRatingForPath } = await import('./firebase/ratingService');
        const result = await getUserRatingForPath(currentUser.uid, path.id);
        if (result.success && result.rating) {
          setExistingRating(result.rating);
          setRating(result.rating.rating);
          setComment(result.rating.comment || '');
        } else {
          setExistingRating(null);
          setRating(0);
          setComment('');
        }
      } catch (err) {
        console.error('Error loading existing rating:', err);
      }
    };

    loadExistingRating();
  }, [isOpen, currentUser, path]);

  // Reset state when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
      setError('');
      setSubmitting(false);
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (rating === 0) {
      setError('Please select a star rating');
      return;
    }

    setSubmitting(true);
    setError('');

    try {
      const { submitPathRating } = await import('./firebase/ratingService');
      const result = await submitPathRating(
        currentUser.uid,
        path.id,
        rating,
        comment.trim()
      );

      if (result.success) {
        setSubmitted(true);
        
        // Call parent callback if provided
        if (onSubmitRating) {
          onSubmitRating(result.rating);
        }

        // Close modal after short delay
        setTimeout(() => {
          onClose();
        }, 1500);
      } else {
        setError(result.error || 'Failed to submit rating');
      }
    } catch (err) {
      console.error('Error submitting rating:', err);
      setError('An error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">
            {existingRating ? 'Update Your Rating' : 'Rate This Path'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            disabled={submitting}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Path Title */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              {path?.title}
            </h3>
            <p className="text-sm text-gray-600">
              Share your experience with this learning path
            </p>
          </div>

          {/* Success Message */}
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                {existingRating ? 'Rating Updated!' : 'Thank You!'}
              </h3>
              <p className="text-green-700">
                Your rating helps improve the community experience
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Star Rating */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Your Rating *
                </label>
                <div className="flex items-center justify-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                    >
                      <Star
                        className={`w-10 h-10 ${
                          star <= (hoveredRating || rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        } transition-colors`}
                      />
                    </button>
                  ))}
                </div>
                <div className="text-center mt-2">
                  {rating > 0 && (
                    <span className="text-sm font-medium text-gray-700">
                      {rating === 1 && 'Poor'}
                      {rating === 2 && 'Fair'}
                      {rating === 3 && 'Good'}
                      {rating === 4 && 'Very Good'}
                      {rating === 5 && 'Excellent'}
                    </span>
                  )}
                </div>
              </div>

              {/* Comment (Optional) */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Comments (Optional)
                </label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Share your thoughts about this path's quality, accuracy, or content..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  rows={4}
                  maxLength={500}
                  disabled={submitting}
                />
                <p className="text-xs text-gray-500 mt-1">
                  {comment.length}/500 characters
                </p>
              </div>

              {/* Error Message */}
              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitting || rating === 0}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {existingRating ? 'Update Rating' : 'Submit Rating'}
                  </>
                )}
              </button>

              {existingRating && (
                <p className="text-xs text-gray-500 text-center mt-3">
                  You previously rated this path {existingRating.rating} stars
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default RatePathModal;
