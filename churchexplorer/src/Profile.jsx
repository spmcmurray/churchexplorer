import React, { useState, useEffect } from 'react';
import { User, Mail, Calendar, CreditCard, Shield, Trash2, Save, AlertCircle, CheckCircle, Crown, Zap, Star, ExternalLink, Lock, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import UsageDisplay from './UsageDisplay';
import UpgradeModal from './UpgradeModal';

export default function Profile({ currentUser, onDeleteAccount, onSignOut }) {
  const [activeTab, setActiveTab] = useState('account');
  const [subscription, setSubscription] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [saveStatus, setSaveStatus] = useState(null); // 'saving', 'success', 'error'
  const [formData, setFormData] = useState({
    displayName: currentUser?.displayName || '',
    email: currentUser?.email || '',
  });
  
  // Email preferences state
  const [emailPreferences, setEmailPreferences] = useState({
    weeklyDigest: true,
    lessonReminders: true,
    achievements: true,
    productUpdates: false,
  });

  // Denomination preference state
  const [denomination, setDenomination] = useState('');

  // Load denomination preference from Firestore
  useEffect(() => {
    if (!currentUser) return;
    
    const loadDenomination = async () => {
      try {
        const { db } = await import('./firebase/config');
        const { doc, getDoc } = await import('firebase/firestore');
        
        const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
        if (userDoc.exists() && userDoc.data().denomination) {
          setDenomination(userDoc.data().denomination);
        }
      } catch (error) {
        console.error('Error loading denomination:', error);
      }
    };
    
    loadDenomination();
  }, [currentUser]);

  // Load subscription data with real-time updates
  useEffect(() => {
    if (!currentUser) return;
    
    let unsubscribe;
    
    const setupSubscriptionListener = async () => {
      try {
        const { db } = await import('./firebase/config');
        const { doc, onSnapshot } = await import('firebase/firestore');
        
        // Listen to subscription changes in real-time
        unsubscribe = onSnapshot(
          doc(db, 'users', currentUser.uid, 'subscription', 'current'),
          (docSnapshot) => {
            if (docSnapshot.exists()) {
              const data = docSnapshot.data();
              setSubscription({
                tier: data.tier || 'free',
                status: data.status || 'active',
                currentPeriodEnd: data.currentPeriodEnd?.toDate?.() || null,
                stripeCustomerId: data.stripeCustomerId || null,
                stripeSubscriptionId: data.stripeSubscriptionId || null,
              });
            } else {
              // No subscription document = free tier
              setSubscription({
                tier: 'free',
                status: 'active',
                currentPeriodEnd: null,
                stripeCustomerId: null,
                stripeSubscriptionId: null,
              });
            }
            setLoading(false);
          },
          (error) => {
            console.error('Error listening to subscription:', error);
            setLoading(false);
          }
        );
      } catch (error) {
        console.error('Error setting up subscription listener:', error);
        setLoading(false);
      }
    };

    setupSubscriptionListener();
    
    // Cleanup listener on unmount
    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [currentUser]);

  const getTierIcon = (tier) => {
    switch (tier) {
      case 'premium':
        return <Crown className="w-5 h-5 text-purple-600" />;
      case 'basic':
        return <Zap className="w-5 h-5 text-blue-600" />;
      default:
        return <Star className="w-5 h-5 text-slate-600" />;
    }
  };

  const getTierColor = (tier) => {
    switch (tier) {
      case 'premium':
        return 'bg-gradient-to-r from-purple-500 to-pink-500';
      case 'basic':
        return 'bg-gradient-to-r from-blue-500 to-cyan-500';
      default:
        return 'bg-gradient-to-r from-slate-500 to-slate-600';
    }
  };

  const getTierName = (tier) => {
    switch (tier) {
      case 'premium':
        return 'Premium';
      case 'basic':
        return 'Basic';
      default:
        return 'Free';
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'N/A';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const handleSaveProfile = async () => {
    setSaveStatus('saving');
    
    // Simulate save operation (replace with actual Firebase updateProfile call)
    setTimeout(() => {
      setSaveStatus('success');
      setTimeout(() => setSaveStatus(null), 3000);
    }, 1000);

    // TODO: Implement actual profile update with Firebase
    // import { updateProfile } from 'firebase/auth';
    // await updateProfile(currentUser, { displayName: formData.displayName });
  };

  const handleCancelSubscription = async () => {
    if (!window.confirm('Are you sure you want to cancel your subscription? You will retain access until the end of your billing period.')) {
      return;
    }

    try {
      if (!subscription?.stripeSubscriptionId) {
        alert('No active subscription found.');
        return;
      }

      const apiEndpoint = process.env.REACT_APP_AI_API_ENDPOINT?.replace('/api/ai', '') || 
                         'https://churchexplorer-hlo9hbs7g-scott-mcmurrays-projects.vercel.app';

      const response = await fetch(`${apiEndpoint}/api/cancel-subscription`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subscriptionId: subscription.stripeSubscriptionId,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to cancel subscription');
      }

      const result = await response.json();
      
      // Subscription data will auto-refresh via the useEffect listener
      
      alert('Subscription canceled successfully. You will retain access until ' + formatDate(subscription.currentPeriodEnd));
    } catch (error) {
      console.error('Error canceling subscription:', error);
      alert(`Failed to cancel subscription: ${error.message}`);
    }
  };

  const openCustomerPortal = async () => {
    console.log('Opening customer portal...', { subscription });
    
    if (!subscription?.stripeCustomerId) {
      alert('No payment method on file. Please upgrade to a paid plan first.');
      return;
    }

    try {
      const apiEndpoint = process.env.REACT_APP_AI_API_ENDPOINT?.replace('/api/ai', '') || 
                         'https://churchexplorer-hlo9hbs7g-scott-mcmurrays-projects.vercel.app';

      console.log('API Endpoint:', apiEndpoint);
      console.log('Customer ID:', subscription.stripeCustomerId);

      const response = await fetch(`${apiEndpoint}/api/create-portal-session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerId: subscription.stripeCustomerId,
        }),
      });

      console.log('Response status:', response.status);

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error response:', errorData);
        throw new Error(errorData.error || 'Failed to create portal session');
      }

      const { url } = await response.json();
      console.log('Portal URL:', url);
      window.open(url, '_blank');
    } catch (error) {
      console.error('Error opening portal:', error);
      alert(`Failed to open customer portal: ${error.message}`);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-purple-600 border-t-transparent mx-auto mb-4"></div>
          <p className="text-slate-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Profile & Settings</h1>
          <p className="text-slate-600">Manage your account, subscription, and preferences</p>
        </div>

        {/* Subscription Overview Card */}
        <div className={`${getTierColor(subscription?.tier)} rounded-2xl p-6 mb-6 text-white shadow-lg`}>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                {getTierIcon(subscription?.tier)}
                <h2 className="text-2xl font-bold">{getTierName(subscription?.tier)} Plan</h2>
              </div>
              <p className="text-white/90 mb-4">
                {subscription?.tier === 'premium' && 'Unlimited AI lessons + all features'}
                {subscription?.tier === 'basic' && '1 AI lesson per week (4 per month) + all curated content'}
                {subscription?.tier === 'free' && 'Access to all curated lessons'}
              </p>
              <div className="flex items-center space-x-4 text-sm text-white/80">
                {subscription?.currentPeriodEnd && (
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {subscription.status === 'canceled' ? 'Access until' : 'Renews on'} {formatDate(subscription.currentPeriodEnd)}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 mb-6 overflow-hidden">
          <div className="flex border-b border-slate-200 overflow-x-auto scrollbar-hide">
            <button
              onClick={() => setActiveTab('account')}
              className={`flex-shrink-0 px-6 py-4 font-medium transition ${
                activeTab === 'account'
                  ? 'bg-purple-50 text-purple-600 border-b-2 border-purple-600'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <User className="w-4 h-4" />
                <span className="whitespace-nowrap">Account</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('subscription')}
              className={`flex-shrink-0 px-6 py-4 font-medium transition ${
                activeTab === 'subscription'
                  ? 'bg-purple-50 text-purple-600 border-b-2 border-purple-600'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <CreditCard className="w-4 h-4" />
                <span className="whitespace-nowrap">Subscription</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('preferences')}
              className={`flex-shrink-0 px-6 py-4 font-medium transition ${
                activeTab === 'preferences'
                  ? 'bg-purple-50 text-purple-600 border-b-2 border-purple-600'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <Shield className="w-4 h-4" />
                <span className="whitespace-nowrap">Preferences</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className={`flex-shrink-0 px-6 py-4 font-medium transition ${
                activeTab === 'about'
                  ? 'bg-purple-50 text-purple-600 border-b-2 border-purple-600'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <Star className="w-4 h-4" />
                <span className="whitespace-nowrap">Our Approach</span>
              </div>
            </button>
          </div>

          {/* Account Tab */}
          {activeTab === 'account' && (
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Personal Information</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Display Name
                    </label>
                    <input
                      type="text"
                      value={formData.displayName}
                      onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        value={formData.email}
                        disabled
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg bg-slate-50 text-slate-500 cursor-not-allowed"
                      />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        <Lock className="w-4 h-4 text-slate-400" />
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Email address cannot be changed</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Member Since
                    </label>
                    <input
                      type="text"
                      value={formatDate(currentUser?.metadata?.creationTime)}
                      disabled
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg bg-slate-50 text-slate-500 cursor-not-allowed"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between mt-6 pt-6 border-t border-slate-200">
                  <div className="flex items-center space-x-2">
                    {saveStatus === 'saving' && (
                      <div className="flex items-center space-x-2 text-blue-600">
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-blue-600 border-t-transparent"></div>
                        <span className="text-sm">Saving...</span>
                      </div>
                    )}
                    {saveStatus === 'success' && (
                      <div className="flex items-center space-x-2 text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        <span className="text-sm">Changes saved!</span>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={handleSaveProfile}
                    disabled={saveStatus === 'saving'}
                    className="flex items-center space-x-2 bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Save className="w-4 h-4" />
                    <span>Save Changes</span>
                  </button>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Danger Zone</h3>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-red-900 mb-1">Delete Account</h4>
                      <p className="text-sm text-red-700">
                        Permanently delete your account and all associated data. This action cannot be undone.
                      </p>
                    </div>
                    <button
                      onClick={onDeleteAccount}
                      className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition whitespace-nowrap ml-4"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span>Delete Account</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Subscription Tab */}
          {activeTab === 'subscription' && (
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">AI Lesson Usage</h3>
                <UsageDisplay 
                  userId={currentUser?.uid} 
                  onUpgradeClick={() => setShowUpgradeModal(true)}
                />
              </div>

              {subscription?.tier !== 'free' && (
                <div className="pt-6 border-t border-slate-200">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Billing & Payment</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-slate-900">Payment Method</h4>
                          <p className="text-sm text-slate-600 mt-1">Manage your payment methods and billing information</p>
                        </div>
                        <CreditCard className="w-8 h-8 text-slate-400" />
                      </div>
                      <button
                        onClick={openCustomerPortal}
                        className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-medium text-sm"
                      >
                        <span>Manage Payment Methods</span>
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                      <h4 className="font-semibold text-slate-900 mb-2">Subscription Status</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Current Plan:</span>
                          <span className="font-medium text-slate-900">{getTierName(subscription?.tier)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Status:</span>
                          <span className={`font-medium ${
                            subscription?.status === 'active' && !subscription?.cancelAtPeriodEnd ? 'text-green-600' : 
                            subscription?.status === 'canceled' || subscription?.cancelAtPeriodEnd ? 'text-orange-600' : 
                            'text-red-600'
                          }`}>
                            {subscription?.status === 'active' && !subscription?.cancelAtPeriodEnd ? 'Active' : 
                             subscription?.status === 'canceled' || subscription?.cancelAtPeriodEnd ? 'Canceling (access until period end)' : 
                             subscription?.status === 'past_due' ? 'Past Due - Please Update Payment' :
                             'Inactive'}
                          </span>
                        </div>
                        {subscription?.currentPeriodEnd && (
                          <div className="flex justify-between">
                            <span className="text-slate-600">
                              {subscription.status === 'canceled' || subscription?.cancelAtPeriodEnd ? 'Access Until:' : 'Next Billing:'}
                            </span>
                            <span className="font-medium text-slate-900">{formatDate(subscription.currentPeriodEnd)}</span>
                          </div>
                        )}
                        
                        {/* Pending Plan Change Alert */}
                        {subscription?.pendingTierChange && subscription?.pendingTierChangeDate && (
                          <div className="bg-blue-50 border border-blue-200 rounded p-3 mt-3">
                            <div className="flex items-start space-x-2">
                              <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                              <div>
                                <p className="text-sm font-semibold text-blue-900 mb-1">
                                  Plan Change Scheduled
                                </p>
                                <p className="text-xs text-blue-800">
                                  Your plan will change to <strong>{getTierName(subscription.pendingTierChange)}</strong> on{' '}
                                  <strong>{formatDate(subscription.pendingTierChangeDate)}</strong>
                                </p>
                                <p className="text-xs text-blue-700 mt-1">
                                  You'll keep your current <strong>{getTierName(subscription.tier)}</strong> features until then.
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {subscription?.cancelAtPeriodEnd && (
                          <div className="bg-orange-50 border border-orange-200 rounded p-2 mt-2">
                            <p className="text-xs text-orange-800">
                              Your subscription will not renew. You can reactivate anytime before {formatDate(subscription.currentPeriodEnd)}.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-slate-900">Manage Your Subscription</h4>
                          <p className="text-sm text-slate-600 mt-1">
                            Update payment methods, view invoices, and manage your plan
                          </p>
                        </div>
                        <Settings className="w-8 h-8 text-blue-600" />
                      </div>
                      <button
                        onClick={openCustomerPortal}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition shadow-md flex items-center justify-center space-x-2"
                      >
                        <span>Open Billing Portal</span>
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Cancellation / Reactivation Section */}
                  {subscription?.tier !== 'free' && (
                    <div className="mt-6 pt-6 border-t border-slate-200">
                      {subscription?.cancelAtPeriodEnd ? (
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-semibold text-blue-900 mb-1">Reactivate Subscription</h4>
                              <p className="text-sm text-blue-700">
                                Your plan will not renew. Click to continue your subscription.
                              </p>
                            </div>
                            <button
                              onClick={openCustomerPortal}
                              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition whitespace-nowrap ml-4"
                            >
                              Reactivate
                            </button>
                          </div>
                        </div>
                      ) : subscription?.status === 'active' ? (
                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-semibold text-orange-900 mb-1">Cancel Subscription</h4>
                              <p className="text-sm text-orange-700">
                                You will retain access until {formatDate(subscription.currentPeriodEnd)}
                              </p>
                            </div>
                            <button
                              onClick={handleCancelSubscription}
                              className="bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-700 transition whitespace-nowrap ml-4"
                            >
                              Cancel Plan
                            </button>
                          </div>
                        </div>
                      ) : subscription?.status === 'past_due' ? (
                        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-semibold text-red-900 mb-1">Payment Failed</h4>
                              <p className="text-sm text-red-700">
                                Please update your payment method to continue accessing AI lessons.
                              </p>
                            </div>
                            <button
                              onClick={openCustomerPortal}
                              className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition whitespace-nowrap ml-4"
                            >
                              Update Payment
                            </button>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  )}
                </div>
              )}

              {subscription?.tier === 'free' && (
                <div className="pt-6 border-t border-slate-200">
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6 text-center">
                    <Crown className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Unlock AI-Powered Learning</h3>
                    <p className="text-slate-600 mb-4">
                      Upgrade to create personalized AI lessons tailored to your interests
                    </p>
                    <button
                      onClick={() => setShowUpgradeModal(true)}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition shadow-lg"
                    >
                      View Plans & Upgrade
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Preferences Tab */}
          {activeTab === 'preferences' && (
            <div className="p-6 space-y-6">
              {/* Denomination Preference */}
              <div className="bg-gradient-to-br from-slate-50 to-purple-50 rounded-xl p-6 border border-slate-200 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-md">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Your Denomination</h3>
                    <p className="text-xs text-slate-500">Personalize your learning experience</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  Help Scribe understand your background. This helps the AI relate concepts to your tradition while remaining objective and educational.
                </p>
                <div className="relative">
                  <select
                    value={denomination}
                    onChange={async (e) => {
                      const newDenom = e.target.value;
                      setDenomination(newDenom);
                      
                      // Save to Firestore
                      try {
                        const { db } = await import('./firebase/config');
                        const { doc, setDoc } = await import('firebase/firestore');
                        await setDoc(doc(db, 'users', currentUser.uid), {
                          denomination: newDenom,
                          updatedAt: new Date()
                        }, { merge: true });
                        console.log('✅ Denomination saved');
                      } catch (error) {
                        console.error('Error saving denomination:', error);
                      }
                    }}
                    className="w-full px-4 py-3.5 pr-10 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all bg-white text-slate-900 font-medium shadow-sm hover:border-slate-300 cursor-pointer appearance-none"
                  >
                    <option value="" className="text-slate-400">Choose your tradition (optional)</option>
                    <option value="Catholic">⛪ Catholic (Roman Catholic)</option>
                    <option value="Eastern Orthodox">☦️ Eastern Orthodox</option>
                    <option value="Lutheran">✝️ Lutheran</option>
                    <option value="Baptist">💧 Baptist</option>
                    <option value="Methodist">🔥 Methodist</option>
                    <option value="Presbyterian">📖 Presbyterian/Reformed</option>
                    <option value="Anglican">👑 Anglican/Episcopal</option>
                    <option value="Pentecostal">🕊️ Pentecostal</option>
                    <option value="Assemblies of God">✨ Assemblies of God</option>
                    <option value="Church of Christ">⚡ Church of Christ</option>
                    <option value="Seventh-day Adventist">🌟 Seventh-day Adventist</option>
                    <option value="Non-denominational">🤝 Non-denominational</option>
                    <option value="Other Protestant">✝️ Other Protestant</option>
                    <option value="Exploring">🔍 Exploring/Undecided</option>
                  </select>
                  {/* Custom dropdown arrow */}
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-start space-x-2">
                  <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-blue-800">
                    This helps our AI provide more relatable explanations (e.g., "In your Catholic tradition, X is understood as..."). All content remains balanced and educational.
                  </p>
                </div>
              </div>

              {/* AI Review Backfill Tool */}
              <div className="border-t border-slate-200 pt-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">AI Lesson Reviews</h3>
                <p className="text-sm text-slate-600 mb-4">
                  If you completed AI lessons before the review system was added, use this tool to add them to your review schedule.
                </p>
                <button
                  onClick={async () => {
                    const confirmed = window.confirm('This will scan all your completed AI lessons and add them to the spaced repetition review system. Continue?');
                    if (!confirmed) return;

                    try {
                      const API_ENDPOINT = process.env.REACT_APP_AI_API_ENDPOINT || 'http://localhost:3001/api/ai';
                      const response = await fetch(`${API_ENDPOINT.replace('/api/ai', '')}/api/backfill-reviews`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ userId: currentUser.uid })
                      });

                      const data = await response.json();
                      
                      if (data.success) {
                        alert(`✅ Backfill complete!\n\nTotal AI Paths: ${data.stats.totalPaths}\nCompleted Lessons: ${data.stats.lessonsProcessed}\nNew Reviews Created: ${data.stats.reviewsCreated}\nAlready Existed: ${data.stats.reviewsSkipped}`);
                      } else {
                        alert('Error: ' + (data.error || 'Unknown error'));
                      }
                    } catch (error) {
                      console.error('Backfill error:', error);
                      alert('Error running backfill: ' + error.message);
                    }
                  }}
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-medium"
                >
                  🔄 Backfill AI Lesson Reviews
                </button>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Email Notifications</h3>
                <div className="space-y-4">
                  {[
                    { key: 'weeklyDigest', label: 'Weekly Learning Digest', description: 'Get a summary of your progress and new content' },
                    { key: 'lessonReminders', label: 'Lesson Reminders', description: 'Reminders to continue your learning journey' },
                    { key: 'achievements', label: 'Achievement Notifications', description: 'Get notified when you earn badges and milestones' },
                    { key: 'productUpdates', label: 'Product Updates', description: 'Learn about new features and improvements' },
                  ].map((pref) => (
                    <div key={pref.key} className="flex items-start justify-between py-3 border-b border-slate-200 last:border-0">
                      <div className="flex-1">
                        <h4 className="font-medium text-slate-900">{pref.label}</h4>
                        <p className="text-sm text-slate-600 mt-1">{pref.description}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer ml-4">
                        <input
                          type="checkbox"
                          checked={emailPreferences[pref.key]}
                          onChange={(e) => setEmailPreferences({ ...emailPreferences, [pref.key]: e.target.checked })}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                      </label>
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-blue-800">
                    <p className="font-medium mb-1">Email Preference Note</p>
                    <p>Email notification settings are saved automatically. You can update these preferences at any time.</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Privacy & Data</h3>
                <div className="space-y-3">
                  <button className="w-full text-left px-4 py-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-slate-900">Download My Data</span>
                      <ExternalLink className="w-4 h-4 text-slate-400" />
                    </div>
                    <p className="text-sm text-slate-600 mt-1">Export all your account data and learning progress</p>
                  </button>
                  <Link to="/legal" className="block w-full text-left px-4 py-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-slate-900">Terms & Privacy Policy</span>
                      <ExternalLink className="w-4 h-4 text-slate-400" />
                    </div>
                    <p className="text-sm text-slate-600 mt-1">Review our terms of service, privacy policy, and data practices</p>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* About / Our Approach Tab */}
          {activeTab === 'about' && (
            <div className="p-6 space-y-6">
              {/* Creator Section */}
              <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2.5 rounded-lg">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">About the Creator</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-base text-slate-700 leading-relaxed">
                    Church Explorer was built by a <span className="font-semibold text-blue-700">Christian</span>, <span className="font-semibold text-purple-700">husband</span>, and <span className="font-semibold text-indigo-700">father</span> who wanted to understand more about church history—what <span className="font-semibold text-green-700">unites all Christians</span> across traditions, and where we <span className="font-semibold text-amber-700">respectfully differ</span>.
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    This isn't a corporate product. It's a labor of love from someone walking the same journey of faith, seeking to understand the roots of what we believe and why it matters.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Guiding Principle</h3>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-purple-200 rounded-xl p-6 mb-6">
                  <p className="text-2xl font-bold text-slate-900 italic text-center">
                    "In essentials, unity. In non-essentials, liberty. In all things, charity."
                  </p>
                </div>

                <div className="space-y-4 text-slate-700">
                  <p className="text-lg leading-relaxed">
                    This ancient motto shapes everything we do at Church Explorer. It's a timeless principle that helps believers navigate theology with both conviction and grace.
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 my-6">
                    <div className="bg-white border-2 border-blue-200 rounded-lg p-4">
                      <h4 className="font-bold text-blue-700 mb-2">In Essentials, Unity</h4>
                      <p className="text-sm text-slate-600">
                        We focus on the core beliefs all Christians share — like the Trinity, the resurrection, and salvation through Christ.
                      </p>
                    </div>
                    <div className="bg-white border-2 border-purple-200 rounded-lg p-4">
                      <h4 className="font-bold text-purple-700 mb-2">In Non-Essentials, Liberty</h4>
                      <p className="text-sm text-slate-600">
                        On secondary matters where faithful believers disagree, we explore different views with respect and clarity.
                      </p>
                    </div>
                    <div className="bg-white border-2 border-green-200 rounded-lg p-4">
                      <h4 className="font-bold text-green-700 mb-2">In All Things, Charity</h4>
                      <p className="text-sm text-slate-600">
                        Whether discussing essentials or non-essentials, we approach every topic with love, humility, and grace.
                      </p>
                    </div>
                  </div>

                  <p className="text-base leading-relaxed">
                    Our lessons are designed to help you understand <strong>what</strong> Christians believe, <strong>why</strong> they believe it, and <strong>how</strong> those beliefs developed historically — all while distinguishing between the core doctrines that unite believers and the secondary matters where Christians can graciously disagree.
                  </p>

                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mt-4">
                    <p className="text-sm text-slate-600 italic">
                      This approach helps us avoid both the rigidity of treating every belief as equally important and the chaos of treating no beliefs as important. It's the wisdom of the historic church applied to modern learning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Upgrade Modal */}
      <UpgradeModal
        isOpen={showUpgradeModal}
        onClose={() => setShowUpgradeModal(false)}
        currentTier={subscription?.tier || 'free'}
        currentUser={currentUser}
      />
    </div>
  );
}
