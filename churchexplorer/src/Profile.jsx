import React, { useState, useEffect } from 'react';
import { User, Mail, Calendar, CreditCard, Shield, Trash2, Save, AlertCircle, CheckCircle, Crown, Zap, Star, ExternalLink, Lock } from 'lucide-react';
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
    if (!window.confirm('Are you sure you want to cancel your subscription? You will lose access to AI lessons at the end of your billing period.')) {
      return;
    }

    try {
      const { cancelSubscription } = await import('./firebase/subscriptionService');
      const result = await cancelSubscription(currentUser.uid);
      if (result.success) {
        setSubscription(result.subscription);
        alert('Subscription canceled. You will retain access until the end of your billing period.');
      } else {
        alert('Failed to cancel subscription. Please try again.');
      }
    } catch (error) {
      console.error('Error canceling subscription:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const openCustomerPortal = async () => {
    if (!subscription?.stripeCustomerId) {
      alert('No payment method on file. Please upgrade to a paid plan first.');
      return;
    }

    try {
      const apiEndpoint = process.env.REACT_APP_AI_API_ENDPOINT?.replace('/api/ai', '') || 
                         'https://churchexplorer-hlo9hbs7g-scott-mcmurrays-projects.vercel.app';

      const response = await fetch(`${apiEndpoint}/api/create-portal-session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerId: subscription.stripeCustomerId,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create portal session');
      }

      const { url } = await response.json();
      window.open(url, '_blank');
    } catch (error) {
      console.error('Error opening portal:', error);
      alert('Failed to open customer portal. Please try again.');
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
            <div>
              <div className="flex items-center space-x-2 mb-2">
                {getTierIcon(subscription?.tier)}
                <h2 className="text-2xl font-bold">{getTierName(subscription?.tier)} Plan</h2>
              </div>
              <p className="text-white/90 mb-4">
                {subscription?.tier === 'premium' && 'Unlimited AI lessons + all features'}
                {subscription?.tier === 'basic' && '1 AI lesson per month + all curated content'}
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
            {subscription?.tier !== 'premium' && (
              <button
                onClick={() => setShowUpgradeModal(true)}
                className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-purple-50 transition"
              >
                Upgrade
              </button>
            )}
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 mb-6 overflow-hidden">
          <div className="flex border-b border-slate-200">
            <button
              onClick={() => setActiveTab('account')}
              className={`flex-1 px-6 py-4 font-medium transition ${
                activeTab === 'account'
                  ? 'bg-purple-50 text-purple-600 border-b-2 border-purple-600'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <User className="w-4 h-4" />
                <span>Account</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('subscription')}
              className={`flex-1 px-6 py-4 font-medium transition ${
                activeTab === 'subscription'
                  ? 'bg-purple-50 text-purple-600 border-b-2 border-purple-600'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <CreditCard className="w-4 h-4" />
                <span>Subscription</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('preferences')}
              className={`flex-1 px-6 py-4 font-medium transition ${
                activeTab === 'preferences'
                  ? 'bg-purple-50 text-purple-600 border-b-2 border-purple-600'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>Preferences</span>
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
                <UsageDisplay userId={currentUser?.uid} />
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
                          <span className="text-slate-600">Plan:</span>
                          <span className="font-medium text-slate-900">{getTierName(subscription?.tier)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Status:</span>
                          <span className={`font-medium ${
                            subscription?.status === 'active' ? 'text-green-600' : 
                            subscription?.status === 'canceled' ? 'text-orange-600' : 
                            'text-red-600'
                          }`}>
                            {subscription?.status === 'active' ? 'Active' : 
                             subscription?.status === 'canceled' ? 'Canceled (access until period end)' : 
                             'Past Due'}
                          </span>
                        </div>
                        {subscription?.currentPeriodEnd && (
                          <div className="flex justify-between">
                            <span className="text-slate-600">
                              {subscription.status === 'canceled' ? 'Access Until:' : 'Next Billing:'}
                            </span>
                            <span className="font-medium text-slate-900">{formatDate(subscription.currentPeriodEnd)}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {subscription?.tier !== 'premium' && (
                    <div className="mt-6">
                      <button
                        onClick={() => setShowUpgradeModal(true)}
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition shadow-lg"
                      >
                        Upgrade to {subscription?.tier === 'basic' ? 'Premium' : 'a Paid Plan'}
                      </button>
                    </div>
                  )}

                  {subscription?.status === 'active' && subscription?.tier !== 'free' && (
                    <div className="mt-6 pt-6 border-t border-slate-200">
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
                      View Plans
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Preferences Tab */}
          {activeTab === 'preferences' && (
            <div className="p-6 space-y-6">
              <div>
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
