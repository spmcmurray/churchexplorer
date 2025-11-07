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

  // Full version for dashboard/pages - COMPACT
  const isLow = !usage.isUnlimited && usage.remaining <= 1 && usage.remaining > 0;
  const isEmpty = !usage.isUnlimited && usage.remaining === 0;

  return (
    <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200 p-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Zap className="w-5 h-5 text-purple-600" />
          <div>
            {usage.isUnlimited ? (
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-purple-700">Unlimited AI Lessons</span>
                <span className="text-xs text-purple-600 bg-purple-100 px-2 py-0.5 rounded-full">Premium</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-slate-700">
                  {usage.remaining} of {usage.limit} AI lessons left
                </span>
                {isEmpty && (
                  <span className="text-xs text-red-600 bg-red-50 px-2 py-0.5 rounded-full font-medium">Limit reached</span>
                )}
              </div>
            )}
          </div>
        </div>
        {usage.tier !== 'premium' && (
          <button
            onClick={onUpgradeClick}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1.5 rounded-lg font-medium text-xs hover:shadow-md transition"
          >
            Upgrade
          </button>
        )}
      </div>
    </div>
  );
};

export default UsageDisplay;
