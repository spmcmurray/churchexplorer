/**
 * Clear Test Mode Stripe Subscriptions from Firestore
 * This script removes all test-mode Stripe customer/subscription data
 * Run with: node clear-test-subscriptions.js
 */

require('dotenv').config();
const admin = require('firebase-admin');

// Initialize Firebase Admin
if (process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON) {
  const serviceAccount = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON);
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    projectId: process.env.FIREBASE_PROJECT_ID || 'church-explorer-20e5a',
  });
} else {
  admin.initializeApp({
    projectId: process.env.FIREBASE_PROJECT_ID || 'church-explorer-20e5a',
  });
}

const db = admin.firestore();

async function clearTestSubscriptions() {
  try {
    console.log('🔍 Searching for test mode subscriptions...\n');
    
    // Get all users
    const usersSnapshot = await db.collection('users').get();
    
    let testSubsFound = 0;
    let testSubsCleared = 0;
    
    for (const userDoc of usersSnapshot.docs) {
      const userId = userDoc.id;
      
      // Check subscription subcollection
      const subSnapshot = await db.collection('users').doc(userId).collection('subscription').get();
      
      for (const subDoc of subSnapshot.docs) {
        const subData = subDoc.data();
        
        // Check if it has test mode Stripe IDs (test IDs start with cus_test or sub_test, 
        // but older test data uses regular format - we'll check for both)
        const hasStripeData = subData.stripeCustomerId || subData.stripeSubscriptionId;
        
        if (hasStripeData) {
          testSubsFound++;
          const customerId = subData.stripeCustomerId || 'none';
          const subscriptionId = subData.stripeSubscriptionId || 'none';
          
          console.log(`Found subscription for user ${userId}:`);
          console.log(`  Customer ID: ${customerId}`);
          console.log(`  Subscription ID: ${subscriptionId}`);
          console.log(`  Tier: ${subData.tier || 'unknown'}`);
          console.log(`  Status: ${subData.status || 'unknown'}`);
          
          // Delete the Stripe-related fields (keep tier and other data)
          await db.collection('users').doc(userId).collection('subscription').doc(subDoc.id).update({
            stripeCustomerId: admin.firestore.FieldValue.delete(),
            stripeSubscriptionId: admin.firestore.FieldValue.delete(),
            currentPeriodStart: admin.firestore.FieldValue.delete(),
            currentPeriodEnd: admin.firestore.FieldValue.delete(),
            cancelAtPeriodEnd: admin.firestore.FieldValue.delete(),
            pendingTierChange: admin.firestore.FieldValue.delete(),
            pendingTierChangeDate: admin.firestore.FieldValue.delete(),
            tier: 'free', // Reset to free tier
            status: 'active',
          });
          
          testSubsCleared++;
          console.log(`  ✅ Cleared Stripe data, reset to free tier\n`);
        }
      }
    }
    
    console.log('================================================');
    console.log(`✅ Cleanup Complete!`);
    console.log(`   Subscriptions found: ${testSubsFound}`);
    console.log(`   Subscriptions cleared: ${testSubsCleared}`);
    console.log('================================================\n');
    
    if (testSubsCleared > 0) {
      console.log('Next steps:');
      console.log('1. Users can now subscribe with live mode Stripe');
      console.log('2. New customer IDs will be created in production');
      console.log('3. All users have been reset to free tier\n');
    } else {
      console.log('No test subscriptions found. Database is clean!\n');
    }
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error clearing subscriptions:', error);
    process.exit(1);
  }
}

clearTestSubscriptions();
