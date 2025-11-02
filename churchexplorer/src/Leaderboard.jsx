import React, { useState, useEffect } from 'react';
import { Trophy, Medal, Award, TrendingUp, ArrowLeft, RefreshCw } from 'lucide-react';
import { getLeaderboard, getUserRank, updateUserXP } from './firebase/leaderboardService';
import { getUserProfile } from './firebase/authService';
import { getTotalXP } from './services/progressService';

const Leaderboard = ({ currentUser, onNavigate, onGoBack, onSignOut }) => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [userRank, setUserRank] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [syncing, setSyncing] = useState(false);

  const syncLocalXPToFirestore = async () => {
    if (!currentUser) return;
    
    setSyncing(true);
    try {
      const localXP = getTotalXP();
      console.log('Syncing local XP to Firestore:', localXP);
      await updateUserXP(currentUser.uid, localXP);
      
      // Refresh the leaderboard data
      await loadLeaderboard();
      
      alert(`Successfully synced ${localXP} XP to Firestore!`);
    } catch (error) {
      console.error('Sync failed:', error);
      alert('Failed to sync XP to Firestore');
    } finally {
      setSyncing(false);
    }
  };

  const loadLeaderboard = async () => {
    setLoading(true);
    setError('');

    try {
      const result = await getLeaderboard(100);
      
      if (result.success) {
        // Debug: log leaderboard data
        console.log('Leaderboard data:', result.leaderboard);
        if (result.leaderboard.length > 0) {
          console.log('First user example:', result.leaderboard[0]);
        }
        
        setLeaderboard(result.leaderboard);
        
        // Get current user's rank and profile if logged in
        if (currentUser) {
          // Always fetch user's profile from Firestore to get accurate XP
          const profileResult = await getUserProfile(currentUser.uid);
          if (profileResult.success) {
            setUserProfile(profileResult.profile);
            
            // Get rank using Firestore XP data
            const rankResult = await getUserRank(currentUser.uid, profileResult.profile.totalXP);
            if (rankResult.success) {
              setUserRank(rankResult.rank);
            }
          } else {
            // Fallback to local storage if Firestore profile not found
            console.warn('Could not fetch user profile from Firestore, using local storage as fallback');
            const userXP = getTotalXP();
            const rankResult = await getUserRank(currentUser.uid, userXP);
            if (rankResult.success) {
              setUserRank(rankResult.rank);
            }
          }
        }
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError('Failed to load leaderboard');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadLeaderboard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getRankIcon = (rank) => {
    if (rank === 1) return <Trophy className="w-6 h-6 text-yellow-500" />;
    if (rank === 2) return <Medal className="w-6 h-6 text-gray-400" />;
    if (rank === 3) return <Medal className="w-6 h-6 text-orange-600" />;
    return <span className="text-gray-600 font-bold">#{rank}</span>;
  };

  const getCountryFlag = (country) => {
    // Debug: log the country value
    if (!country) {
      console.warn('No country provided to getCountryFlag');
      return '🌍';
    }
    
    // Emoji flags for all supported countries
    const flags = {
      'United States': '🇺🇸',
      'Canada': '🇨🇦',
      'United Kingdom': '🇬🇧',
      'Australia': '🇦🇺',
      'Germany': '🇩🇪',
      'France': '🇫🇷',
      'Spain': '🇪🇸',
      'Italy': '🇮🇹',
      'Brazil': '🇧🇷',
      'Mexico': '🇲🇽',
      'Argentina': '🇦🇷',
      'India': '🇮🇳',
      'China': '🇨🇳',
      'Japan': '🇯🇵',
      'South Korea': '🇰🇷',
      'Philippines': '🇵🇭',
      'Indonesia': '🇮🇩',
      'Nigeria': '🇳🇬',
      'South Africa': '🇿🇦',
      'Kenya': '🇰🇪',
      'Other': '🌍'
    };
    
    // Return flag or fallback to globe if country not found
    const flag = flags[country];
    if (!flag) {
      console.warn(`No flag found for country: "${country}"`);
      return '🌍';
    }
    return flag;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 pb-20">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          {onGoBack && (
            <button
              onClick={onGoBack}
              className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-slate-200 rounded-xl hover:border-blue-500 hover:text-blue-600 transition mb-4 font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          )}

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-black text-gray-900 mb-2">Global Leaderboard</h1>
              <p className="text-lg text-gray-600">Top learners from around the world</p>
            </div>
          </div>
        </div>

        {/* User's Rank Card */}
        {currentUser && userRank && (
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white mb-6 shadow-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <div className="text-4xl">{userProfile?.country && getCountryFlag(userProfile.country)}</div>
                </div>
                <div>
                  <p className="text-blue-100 text-sm font-medium">
                    {userProfile?.firstName || currentUser.displayName?.split(' ')[0] || 'Your'} Rank
                  </p>
                  <p className="text-3xl font-black">#{userRank}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-blue-100 text-sm font-medium">Total XP</p>
                <div className="flex items-center gap-2">
                  <p className="text-3xl font-black">{userProfile?.totalXP || 0}</p>
                  <button
                    onClick={syncLocalXPToFirestore}
                    disabled={syncing}
                    className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition disabled:opacity-50"
                    title="Sync local XP to Firestore"
                  >
                    <RefreshCw className={`w-4 h-4 ${syncing ? 'animate-spin' : ''}`} />
                  </button>
                </div>
                <p className="text-xs text-blue-200">Local: {getTotalXP()} XP</p>
              </div>
            </div>
          </div>
        )}

        {/* Leaderboard */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
            <div className="flex items-center gap-3 text-white">
              <TrendingUp className="w-6 h-6" />
              <h2 className="text-2xl font-black">Top 100 Leaders</h2>
            </div>
          </div>

          {loading ? (
            <div className="p-12 text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
              <p className="text-gray-600 mt-4">Loading leaderboard...</p>
            </div>
          ) : error ? (
            <div className="p-12 text-center">
              <p className="text-red-600 mb-4">{error}</p>
              <button
                onClick={loadLeaderboard}
                className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition font-semibold"
              >
                Try Again
              </button>
            </div>
          ) : leaderboard.length === 0 ? (
            <div className="p-12 text-center text-gray-600">
              <Award className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <p className="text-lg font-semibold">Be the first on the leaderboard!</p>
              <p className="text-sm">Complete lessons to earn XP and claim your spot</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {leaderboard.map((user, index) => {
                const rank = index + 1;
                const isCurrentUser = currentUser && user.uid === currentUser.uid;
                
                // Debug: log each user
                if (isCurrentUser) {
                  console.log('Current user on leaderboard:', user);
                  console.log('- firstName:', user.firstName);
                  console.log('- lastName:', user.lastName);
                  console.log('- name:', user.name);
                  console.log('- country:', user.country);
                  console.log('- All fields:', Object.keys(user));
                }
                
                return (
                  <div
                    key={user.uid}
                    className={`p-4 flex items-center gap-4 transition ${
                      isCurrentUser ? 'bg-blue-50' : 'hover:bg-gray-50'
                    }`}
                  >
                    {/* Rank */}
                    <div className="w-12 flex justify-center">
                      {getRankIcon(rank)}
                    </div>

                    {/* User Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl" role="img" aria-label={user.country || 'Country'}>
                          {user.country ? getCountryFlag(user.country) : '🌍'}
                        </span>
                        <p className={`font-bold text-lg ${isCurrentUser ? 'text-blue-600' : 'text-gray-900'}`}>
                          {user.firstName || user.name || (isCurrentUser && currentUser?.displayName) || 'User'} {isCurrentUser && <span className="text-sm font-normal">(You)</span>}
                        </p>
                      </div>
                      <p className="text-sm text-gray-500 ml-9">{user.country || 'Unknown'}</p>
                    </div>

                    {/* XP */}
                    <div className="text-right">
                      <p className="text-2xl font-black text-amber-600">{user.totalXP}</p>
                      <p className="text-xs text-gray-500">XP</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Not signed in message */}
        {!currentUser && (
          <div className="mt-6 bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 text-center">
            <Trophy className="w-12 h-12 text-blue-600 mx-auto mb-3" />
            <p className="text-lg font-bold text-gray-900 mb-2">Want to join the leaderboard?</p>
            <p className="text-gray-600 mb-4">Create an account to track your progress and compete globally</p>
            <button
              onClick={() => onNavigate('home')}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-bold hover:from-blue-600 hover:to-purple-700 transition shadow-lg"
            >
              Sign Up Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;
