import React, { useState } from 'react';
import { X, Check, Zap, Crown, Star } from 'lucide-react';
import { SUBSCRIPTION_TIERS } from './firebase/subscriptionService';

/**
 * Upgrade Modal - Shows pricing tiers and upgrade options
 */
const UpgradeModal = ({ isOpen, onClose, currentTier = 'free', currentUser, reason = null }) => {
  const [loading, setLoading] = useState(false);
  
  if (!isOpen) return null;

  const getTierIcon = (tierId) => {
    switch (tierId) {
      case 'free': return <Star className="w-8 h-8" />;
      case 'basic': return <Zap className="w-8 h-8" />;
      case 'premium': return <Crown className="w-8 h-8" />;
      default: return <Star className="w-8 h-8" />;
    }
  };

  const getTierColor = (tierId) => {
    switch (tierId) {
      case 'free': return 'slate';
      case 'basic': return 'blue';
      case 'premium': return 'purple';
      default: return 'slate';
    }
  };

  const handleUpgrade = async (tierId) => {
    if (!currentUser) {
      alert('Please sign in to upgrade your subscription');
      return;
    }

    if (tierId === 'free') {
      onClose();
      return;
    }

    setLoading(true);

    try {
      // Map tier to Stripe price ID
      const priceIds = {
        basic: process.env.REACT_APP_STRIPE_BASIC_PRICE_ID || 'price_1SPnkPCfikIx5DrknESztFpf',
        premium: process.env.REACT_APP_STRIPE_PREMIUM_PRICE_ID || 'price_1SPnkbCfikIx5DrkwASRL00l',
      };

      const apiEndpoint = process.env.REACT_APP_AI_API_ENDPOINT?.replace('/api/ai', '') || 
                         'https://churchexplorer-hlo9hbs7g-scott-mcmurrays-projects.vercel.app';

      const response = await fetch(`${apiEndpoint}/api/create-checkout-session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          priceId: priceIds[tierId],
          userId: currentUser.uid,
          userEmail: currentUser.email,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const { url } = await response.json();
      
      // Redirect to Stripe Checkout
      window.location.href = url;
    } catch (error) {
      console.error('Error creating checkout session:', error);
      alert('Failed to start checkout. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header - Fixed at top */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-2xl flex-shrink-0 z-10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-2">Upgrade Your Learning</h2>
              {reason && (
                <p className="text-blue-100">{reason}</p>
              )}
            </div>
            <button
              onClick={onClose}
              className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1 p-8">{/* Pricing Tiers */}
          <div className="grid md:grid-cols-3 gap-6">
            {Object.values(SUBSCRIPTION_TIERS).map((tier) => {
              const color = getTierColor(tier.id);
              const isCurrent = currentTier === tier.id;
              const isUpgrade = tier.price > SUBSCRIPTION_TIERS[currentTier.toUpperCase()].price;

              // Color mappings for inline styles
              const colorStyles = {
                slate: { 
                  border: 'rgb(100, 116, 139)', 
                  bg: 'rgb(248, 250, 252)',
                  badge: 'rgb(71, 85, 105)',
                  text: 'rgb(51, 65, 85)',
                  buttonBg: 'rgb(226, 232, 240)',
                  buttonText: 'rgb(51, 65, 85)',
                  highlightBg: 'rgb(241, 245, 249)',
                  highlightText: 'rgb(51, 65, 85)'
                },
                blue: { 
                  border: 'rgb(59, 130, 246)', 
                  bg: 'rgb(239, 246, 255)',
                  badge: 'rgb(37, 99, 235)',
                  text: 'rgb(29, 78, 216)',
                  buttonBg: 'linear-gradient(to right, rgb(37, 99, 235), rgb(29, 78, 216))',
                  buttonText: 'white',
                  highlightBg: 'rgb(219, 234, 254)',
                  highlightText: 'rgb(30, 64, 175)'
                },
                purple: { 
                  border: 'rgb(168, 85, 247)', 
                  bg: 'rgb(250, 245, 255)',
                  badge: 'rgb(147, 51, 234)',
                  text: 'rgb(126, 34, 206)',
                  buttonBg: 'linear-gradient(to right, rgb(147, 51, 234), rgb(126, 34, 206))',
                  buttonText: 'white',
                  highlightBg: 'rgb(233, 213, 255)',
                  highlightText: 'rgb(107, 33, 168)'
                }
              };

              const colors = colorStyles[color];

              return (
                <div
                  key={tier.id}
                  className="relative rounded-2xl border-2 p-6 transition-all hover:shadow-lg"
                  style={{ 
                    borderColor: isCurrent ? colors.border : 'rgb(229, 231, 235)',
                    backgroundColor: isCurrent ? colors.bg : 'white'
                  }}
                >
                  {/* Current Badge */}
                  {isCurrent && (
                    <div 
                      className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-sm font-bold shadow-md"
                      style={{ backgroundColor: colors.badge, color: 'white' }}
                    >
                      Current Plan
                    </div>
                  )}

                  {/* Icon */}
                  <div className="flex justify-center mb-4" style={{ color: colors.text }}>
                    {getTierIcon(tier.id)}
                  </div>

                  {/* Tier Name */}
                  <h3 className="text-2xl font-bold text-center mb-2">{tier.name}</h3>

                  {/* Price */}
                  <div className="text-center mb-6">
                    {tier.price === 0 ? (
                      <div className="text-4xl font-black text-gray-800">Free</div>
                    ) : (
                      <>
                        <div className="text-4xl font-black text-gray-800">
                          ${tier.price}
                          <span className="text-lg font-normal text-gray-500">/mo</span>
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          or ${(tier.price * 10).toFixed(2)}/year (save 2 months)
                        </div>
                      </>
                    )}
                  </div>

                  {/* AI Lessons Limit */}
                  <div 
                    className="rounded-lg p-4 mb-6"
                    style={{ backgroundColor: colors.highlightBg }}
                  >
                    <div className="text-center">
                      <div className="text-3xl font-bold" style={{ color: colors.highlightText }}>
                        {tier.isUnlimited ? '∞' : tier.aiLessonsPerMonth}
                      </div>
                      <div className="text-sm font-semibold" style={{ color: colors.highlightText }}>
                        {tier.isUnlimited ? 'Unlimited AI Lessons' : `AI Lesson${tier.aiLessonsPerMonth === 1 ? '' : 's'}/Month`}
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {tier.features
                      .filter(feature => !feature.toLowerCase().includes('support'))
                      .map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: colors.text }} />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                  </ul>

                  {/* Action Button */}
                  {isCurrent ? (
                    <button
                      disabled
                      className="w-full font-bold py-3 rounded-xl cursor-not-allowed"
                      style={{ 
                        backgroundColor: colors.buttonBg,
                        color: colors.buttonText
                      }}
                    >
                      Your Current Plan
                    </button>
                  ) : isUpgrade ? (
                    <button
                      onClick={() => handleUpgrade(tier.id)}
                      disabled={loading}
                      className="w-full text-white font-bold py-3 rounded-xl transition shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
                      style={{ 
                        background: colors.buttonBg
                      }}
                    >
                      {loading ? 'Loading...' : `Upgrade to ${tier.name}`}
                    </button>
                  ) : (
                    <button
                      disabled
                      className="w-full bg-gray-100 text-gray-400 font-bold py-3 rounded-xl cursor-not-allowed"
                    >
                      Lower Tier
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          {/* FAQ/Info */}
          <div className="mt-8 bg-gray-50 rounded-xl p-6">
            <h4 className="font-bold text-lg mb-4">Frequently Asked Questions</h4>
            <div className="space-y-3 text-sm text-gray-600">
              <p><strong>What's included in the Free tier?</strong> All 24 curated lessons (Bible History, Church History, Apologetics) with full progress tracking and daily challenges. No AI lessons included.</p>
              <p><strong>What counts as an AI lesson?</strong> Any AI-generated content: Quick Lessons (1 lesson), Deep Dives (3 lessons), or Full Paths (8 lessons) each count as 1 AI lesson creation.</p>
              <p><strong>Can I cancel anytime?</strong> Yes, cancel anytime. You'll keep access until your billing period ends, then revert to the Free tier.</p>
              <p><strong>Do unused lessons roll over?</strong> No, your monthly AI lesson limit resets on your billing date.</p>
              <p><strong>What does "Unlimited" mean?</strong> Premium users can create as many AI lessons, deep dives, and full paths as they want—no monthly limits!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpgradeModal;
