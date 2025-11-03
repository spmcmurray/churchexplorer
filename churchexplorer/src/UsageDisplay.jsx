import React, { useState, useEffect } from 'react';
import { Zap, TrendingUp, Clock } from 'lucide-react';
import { getUsageSummary } from './firebase/subscriptionService';

/**
 * Usage Display - Shows current AI lesson usage and limits
 */
const UsageDisplay = ({ userId, compact = false, onUpgradeClick }) => {
  const [usage, setUsage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }

    loadUsage();
  }, [userId]);

  const loadUsage = async () => {
    setLoading(true);
    const result = await getUsageSummary(userId);
    if (result.success) {
      setUsage(result);
    }
    setLoading(false);
  };

  if (loading || !usage) {
    return null;
  }

  if (compact) {
    // Compact version for header/navbar
    if (usage.isUnlimited) {
      return (
        <div className="flex items-center gap-2 bg-purple-50 rounded-full px-4 py-2 border border-purple-200">
          <Zap className="w-4 h-4 text-purple-600" />
          <span className="text-sm font-semibold text-purple-700">
            ∞ Unlimited AI lessons
          </span>
        </div>
      );
    }

    return (
      <div className="flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2 border border-gray-200">
        <Zap className="w-4 h-4 text-purple-600" />
        <span className="text-sm font-semibold text-gray-700">
          {usage.remaining} / {usage.limit} AI lessons
        </span>
      </div>
    );
  }

  // Full version for dashboard/pages
  const isLow = !usage.isUnlimited && usage.remaining <= 1 && usage.remaining > 0;
  const isEmpty = !usage.isUnlimited && usage.remaining === 0;
  const colorClass = isEmpty ? 'red' : isLow ? 'orange' : usage.isUnlimited ? 'purple' : 'blue';

  return (
    <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`bg-${colorClass}-100 rounded-full p-3`}>
            <Zap className={`w-6 h-6 text-${colorClass}-600`} />
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-800">AI Lesson Usage</h3>
            <p className="text-sm text-gray-500 capitalize">{usage.tierName} Plan</p>
          </div>
        </div>
        {usage.tier !== 'premium' && (
          <button
            onClick={onUpgradeClick}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:from-purple-700 hover:to-blue-700 transition"
          >
            Upgrade
          </button>
        )}
      </div>

      {/* Progress Bar or Unlimited Badge */}
      {usage.isUnlimited ? (
        <div className="mb-4">
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-6 text-center border-2 border-purple-200">
            <div className="text-5xl font-bold text-purple-600 mb-2">∞</div>
            <p className="text-lg font-semibold text-purple-700">Unlimited AI Lessons</p>
            <p className="text-sm text-purple-600 mt-1">Create as many lessons as you want!</p>
          </div>
        </div>
      ) : (
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-600">
              {usage.used} of {usage.limit} used this month
            </span>
            <span className={`text-sm font-bold text-${colorClass}-600`}>
              {usage.remaining} remaining
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className={`bg-gradient-to-r from-${colorClass}-500 to-${colorClass}-600 h-3 rounded-full transition-all`}
              style={{ width: `${usage.percentage}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* Info */}
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <Clock className="w-4 h-4" />
        <span>
          Resets {usage.periodEnd ? (
            usage.periodEnd.toDate ? 
              new Date(usage.periodEnd.toDate()).toLocaleDateString() : 
              new Date(usage.periodEnd).toLocaleDateString()
          ) : 'soon'}
        </span>
      </div>

      {/* Warning Message */}
      {isEmpty && (
        <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-sm font-semibold text-red-700 mb-2">
            You've reached your monthly limit
          </p>
          <p className="text-sm text-red-600 mb-3">
            Upgrade to create more AI lessons this month or wait until your next billing period.
          </p>
          <button
            onClick={onUpgradeClick}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded-lg transition"
          >
            Upgrade Now
          </button>
        </div>
      )}

      {isLow && !isEmpty && (
        <div className="mt-4 bg-orange-50 border border-orange-200 rounded-lg p-4">
          <p className="text-sm font-semibold text-orange-700 mb-1">
            Running low on AI lessons
          </p>
          <p className="text-sm text-orange-600">
            You have {usage.remaining} lesson{usage.remaining === 1 ? '' : 's'} left this month. Consider upgrading for more!
          </p>
        </div>
      )}
    </div>
  );
};

export default UsageDisplay;
