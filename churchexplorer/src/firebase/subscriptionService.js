/**
 * Subscription & Usage Tracking Service
 * Manages user subscription tiers and AI lesson usage limits
 */

import { doc, getDoc, setDoc, updateDoc, increment } from 'firebase/firestore';
import { db } from './config';

// Subscription tiers with limits
export const SUBSCRIPTION_TIERS = {
  FREE: {
    id: 'free',
    name: 'Free',
    price: 0,
    aiLessonsPerMonth: 0,
    features: [
      'All curated learning paths',
      'Bible History (8 lessons)',
      'Church History (8 lessons)',
      'Apologetics (8 lessons)',
      'Progress tracking',
      'Daily challenges'
    ]
  },
  BASIC: {
    id: 'basic',
    name: 'Basic',
    price: 2.99,
    aiLessonsPerMonth: 4,
    features: [
      'All curated learning paths',
      '1 AI lesson per week (4/month)',
      'Custom AI-generated content',
      'Progress tracking',
      'Daily challenges'
    ]
  },
  PREMIUM: {
    id: 'premium',
    name: 'Premium',
    price: 5.99,
    aiLessonsPerMonth: Infinity,
    isUnlimited: true,
    features: [
      'All curated learning paths',
      'Unlimited AI lessons',
      'Unlimited Deep Dives (3 lessons)',
      'Unlimited Full Paths (8 lessons)',
      'Progress tracking',
      'Daily challenges',
      'Early access to new features'
    ]
  }
};

/**
 * Get user's subscription data
 */
export const getUserSubscription = async (userId) => {
  try {
    const subscriptionRef = doc(db, 'users', userId, 'subscription', 'current');
    const subscriptionDoc = await getDoc(subscriptionRef);
    
    if (!subscriptionDoc.exists()) {
      // Create default free subscription
      const defaultSubscription = {
        tier: 'free',
        status: 'active',
        aiLessonsUsed: 0,
        currentPeriodStart: new Date(),
        currentPeriodEnd: getNextMonthDate(),
        createdAt: new Date()
      };
      
      await setDoc(subscriptionRef, defaultSubscription);
      return { success: true, subscription: defaultSubscription };
    }
    
    const subscription = subscriptionDoc.data();
    
    // Check if we need to reset monthly usage
    const now = new Date();
    if (subscription.currentPeriodEnd && subscription.currentPeriodEnd.toDate() < now) {
      // Reset usage for new period
      const updatedSubscription = {
        ...subscription,
        aiLessonsUsed: 0,
        currentPeriodStart: now,
        currentPeriodEnd: getNextMonthDate()
      };
      
      await updateDoc(subscriptionRef, updatedSubscription);
      return { success: true, subscription: updatedSubscription };
    }
    
    return { success: true, subscription };
  } catch (error) {
    console.error('Error getting user subscription:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Check if user can create an AI lesson
 */
export const canCreateAILesson = async (userId, lessonType = 'lesson') => {
  try {
    const result = await getUserSubscription(userId);
    if (!result.success) {
      return { allowed: false, reason: 'Failed to check subscription' };
    }
    
    const { subscription } = result;
    const tierConfig = SUBSCRIPTION_TIERS[subscription.tier.toUpperCase()];
    
    if (!tierConfig) {
      return { allowed: false, reason: 'Invalid subscription tier' };
    }
    
    // Premium tier gets unlimited AI lessons
    if (tierConfig.isUnlimited) {
      return { 
        allowed: true, 
        tier: subscription.tier,
        remaining: 'unlimited'
      };
    }
    
    // Check if user has remaining lessons this month
    const used = subscription.aiLessonsUsed || 0;
    const limit = tierConfig.aiLessonsPerMonth;
    
    // Special-case: allow one free AI lesson for registered users on the Free tier
    // This gives each new registered user one free AI lesson (one-time) before requiring a paid tier.
    if (subscription.tier === 'free' && used === 0) {
      return {
        allowed: true,
        tier: subscription.tier,
        used,
        limit,
        remaining: 1,
        freeTrialAvailable: true,
        note: 'One free AI lesson available for new registered users'
      };
    }

    if (used >= limit) {
      return { 
        allowed: false, 
        reason: limit === 0 
          ? 'AI lessons require a paid subscription'
          : 'Monthly limit reached',
        tier: subscription.tier,
        used,
        limit,
        upgradeNeeded: subscription.tier === 'free' ? 'basic' : 'premium'
      };
    }
    
    return { 
      allowed: true,
      tier: subscription.tier,
      used,
      limit,
      remaining: limit - used
    };
  } catch (error) {
    console.error('Error checking AI lesson eligibility:', error);
    return { allowed: false, reason: error.message };
  }
};

/**
 * Increment AI lesson usage counter
 */
export const incrementAILessonUsage = async (userId, lessonType = 'lesson') => {
  try {
    const subscriptionRef = doc(db, 'users', userId, 'subscription', 'current');
    
    // Don't count usage for premium users (unlimited)
    const result = await getUserSubscription(userId);
    if (result.success && result.subscription.tier === 'premium') {
      console.log('Premium user - unlimited lessons, not counting usage');
      return { success: true };
    }
    
    await updateDoc(subscriptionRef, {
      aiLessonsUsed: increment(1),
      lastLessonCreated: new Date()
    });
    
    console.log('✅ AI lesson usage incremented');
    return { success: true };
  } catch (error) {
    console.error('Error incrementing AI lesson usage:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Update user's subscription tier
 * (This will be called after successful payment)
 */
export const updateSubscriptionTier = async (userId, newTier, paymentInfo = {}) => {
  try {
    const subscriptionRef = doc(db, 'users', userId, 'subscription', 'current');
    
    const updates = {
      tier: newTier,
      status: 'active',
      updatedAt: new Date(),
      currentPeriodStart: new Date(),
      currentPeriodEnd: getNextMonthDate(),
      // Reset usage when upgrading
      aiLessonsUsed: 0,
      ...paymentInfo // Include Stripe customer ID, subscription ID, etc.
    };
    
    await updateDoc(subscriptionRef, updates);
    
    console.log(`✅ Subscription updated to ${newTier}`);
    return { success: true };
  } catch (error) {
    console.error('Error updating subscription tier:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Cancel subscription (downgrade to free)
 */
export const cancelSubscription = async (userId) => {
  try {
    const subscriptionRef = doc(db, 'users', userId, 'subscription', 'current');
    
    await updateDoc(subscriptionRef, {
      tier: 'free',
      status: 'canceled',
      canceledAt: new Date(),
      // Keep current period active until end
      // Usage resets at next period
    });
    
    console.log('✅ Subscription canceled, downgrading to free at period end');
    return { success: true };
  } catch (error) {
    console.error('Error canceling subscription:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Helper: Get date one month from now
 */
function getNextMonthDate() {
  const date = new Date();
  date.setMonth(date.getMonth() + 1);
  return date;
}

/**
 * Get tier configuration
 */
export const getTierConfig = (tierId) => {
  return SUBSCRIPTION_TIERS[tierId.toUpperCase()];
};

/**
 * Get usage summary for display
 */
export const getUsageSummary = async (userId) => {
  try {
    const result = await getUserSubscription(userId);
    if (!result.success) {
      return { success: false, error: result.error };
    }
    
    const { subscription } = result;
    const tierConfig = getTierConfig(subscription.tier);
    const used = subscription.aiLessonsUsed || 0;
    const limit = tierConfig.aiLessonsPerMonth;
    
    // Handle unlimited tier
    if (tierConfig.isUnlimited) {
      return {
        success: true,
        tier: subscription.tier,
        tierName: tierConfig.name,
        used,
        limit: '∞',
        remaining: '∞',
        percentage: 0,
        isUnlimited: true,
        periodEnd: subscription.currentPeriodEnd,
        status: subscription.status
      };
    }
    
    const remaining = limit - used;
    const percentage = limit > 0 ? Math.round((used / limit) * 100) : 0;
    // For free users, surface one-time free trial availability when appropriate
    const freeTrialAvailable = subscription.tier === 'free' && (subscription.aiLessonsUsed || 0) === 0;
    const adjustedRemaining = freeTrialAvailable ? Math.max(remaining, 1) : Math.max(remaining, 0);

    return {
      success: true,
      tier: subscription.tier,
      tierName: tierConfig.name,
      used,
      limit,
      remaining: adjustedRemaining,
      freeTrialAvailable,
      percentage,
      isUnlimited: false,
      periodEnd: subscription.currentPeriodEnd,
      status: subscription.status
    };
  } catch (error) {
    console.error('Error getting usage summary:', error);
    return { success: false, error: error.message };
  }
};
