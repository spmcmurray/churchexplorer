# Stripe Integration Setup Guide

## ✅ Completed Steps

1. ✅ Installed Stripe dependencies (`stripe`, `@stripe/stripe-js`, `@stripe/react-stripe-js`)
2. ✅ Added Stripe configuration to `.env` files
3. ✅ Created Stripe checkout endpoints in `server/server.js`:
   - `/api/create-checkout-session` - Creates Stripe Checkout for subscriptions
   - `/api/create-portal-session` - Opens Stripe Customer Portal
   - `/api/stripe-webhook` - Handles Stripe events
4. ✅ Updated `UpgradeModal.jsx` to redirect to Stripe Checkout
5. ✅ Updated `Profile.jsx` to open Stripe Customer Portal
6. ✅ Added Price IDs to server configuration:
   - Basic: `price_1SPSw1CfXNPvR4vp5dfX8H1C`
   - Premium: `price_1SPSwcCfXNPvR4vp3rDFMuSr`

---

## 🔧 Remaining Setup Steps

### Step 1: Add Stripe Secret Key to Local `.env`

**File:** `/workspaces/churchexplorer/server/.env`

Replace this line:
```
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
```

With your actual secret key from Stripe Dashboard → Developers → API keys:
```
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxx
```

⚠️ **Important:** Use the **SECRET key** (starts with `sk_test_`), not the publishable key

---

### Step 2: Add Environment Variables to Vercel

Go to your Vercel dashboard and add these environment variables:

1. **Go to**: https://vercel.com/dashboard
2. **Select** your server project
3. **Go to**: Settings → Environment Variables
4. **Add** these 4 variables:

| Variable Name | Value | Notes |
|---------------|-------|-------|
| `STRIPE_SECRET_KEY` | `sk_test_xxxxxxxxxxxxx` | From Stripe Dashboard → Developers → API keys |
| `STRIPE_BASIC_PRICE_ID` | `price_1SPSw1CfXNPvR4vp5dfX8H1C` | Already configured |
| `STRIPE_PREMIUM_PRICE_ID` | `price_1SPSwcCfXNPvR4vp3rDFMuSr` | Already configured |
| `STRIPE_WEBHOOK_SECRET` | `whsec_xxxxxxxxxxxxx` | From Step 3 below (after creating webhook) |

5. **Redeploy** your Vercel app after adding variables

---

### Step 3: Set Up Stripe Webhooks

Webhooks allow Stripe to notify your server when subscriptions are created, updated, or canceled.

#### Test Mode (Local Development)

1. **Install Stripe CLI** (if testing locally):
   ```bash
   # Mac
   brew install stripe/stripe-cli/stripe
   
   # Windows
   # Download from https://github.com/stripe/stripe-cli/releases
   ```

2. **Login to Stripe:**
   ```bash
   stripe login
   ```

3. **Forward webhooks to local server:**
   ```bash
   stripe listen --forward-to localhost:3001/api/stripe-webhook
   ```

4. **Copy the webhook signing secret** (starts with `whsec_`) and add to `server/.env`

#### Production Mode (Vercel)

1. **Go to Stripe Dashboard** → Developers → Webhooks
2. **Click "Add endpoint"**
3. **Endpoint URL:** `https://your-vercel-app.vercel.app/api/stripe-webhook`
   - Replace with your actual Vercel URL
4. **Select events to listen for:**
   - `checkout.session.completed`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_failed`
5. **Click "Add endpoint"**
6. **Copy the Webhook Signing Secret** and add to Vercel environment variables as `STRIPE_WEBHOOK_SECRET`

---

### Step 4: Test the Integration

#### Local Testing

1. **Start your local server:**
   ```bash
   cd /workspaces/churchexplorer/server
   npm start
   ```

2. **Start your React app:**
   ```bash
   cd /workspaces/churchexplorer/churchexplorer
   npm start
   ```

3. **Test the flow:**
   - Go to Profile page
   - Click "Upgrade" button
   - Should redirect to Stripe Checkout
   - Use test card: `4242 4242 4242 4242`
   - Any future expiry, any CVC, any ZIP
   - Complete payment
   - Should redirect back to profile

#### Stripe Test Cards

| Card Number | Behavior |
|-------------|----------|
| `4242 4242 4242 4242` | Successful payment |
| `4000 0000 0000 0002` | Card declined |
| `4000 0000 0000 9995` | Insufficient funds |
| `4000 0025 0000 3155` | Requires authentication (3D Secure) |

---

### Step 5: Handle Webhook Events (TODO)

Currently, webhooks are received but not processed. You need to:

1. **Update Firestore when subscription is created:**
   - Save `stripeCustomerId` and `stripeSubscriptionId` to user's subscription document
   - Set tier to 'basic' or 'premium' based on price ID
   - Set status to 'active'

2. **Handle subscription updates:**
   - Update tier if user upgrades/downgrades
   - Update status if payment fails

3. **Handle cancellations:**
   - Set status to 'canceled'
   - Retain access until period end

**Implementation needed in `server/server.js`:**
- Add Firebase Admin SDK to server
- Create helper functions to update Firestore
- Call these functions in webhook handlers

---

## 🔐 Security Checklist

- ✅ Stripe publishable key is in frontend `.env` (safe to expose)
- ⚠️ Stripe secret key must ONLY be in server `.env` or Vercel (never commit to git)
- ✅ `.env` files are in `.gitignore`
- ⚠️ Webhook signature verification is implemented
- ⚠️ User IDs are validated in webhook handlers (prevent unauthorized updates)

---

## 📋 Testing Checklist

Before going live:

- [ ] Local checkout flow works with test card
- [ ] Webhook receives `checkout.session.completed` event
- [ ] Firestore subscription is updated after payment
- [ ] Customer Portal opens and shows subscription
- [ ] User can cancel subscription via portal
- [ ] Webhook receives `customer.subscription.deleted` event
- [ ] User's tier updates to 'free' after cancellation
- [ ] Test failed payment scenario
- [ ] Verify email receipts are sent by Stripe

---

## 🚀 Going Live (When Ready)

1. **Activate your Stripe account:**
   - Complete business verification
   - Add bank account for payouts

2. **Switch to live API keys:**
   - Update Vercel environment variables with live keys (starts with `sk_live_` and `pk_live_`)
   - Update frontend `.env` with live publishable key

3. **Update webhook endpoint:**
   - Create new webhook in Stripe for production URL
   - Update `STRIPE_WEBHOOK_SECRET` in Vercel

4. **Test with real payment:**
   - Make a small test purchase ($4.99)
   - Verify everything works
   - Cancel test subscription

5. **Monitor:**
   - Watch Stripe Dashboard for payments
   - Check webhook logs for errors
   - Monitor user feedback

---

## 🆘 Troubleshooting

### "Webhook signature verification failed"
- Ensure `STRIPE_WEBHOOK_SECRET` is set correctly
- Check that endpoint URL matches exactly
- Verify webhook is using correct API version

### "No such price: price_xxxxx"
- Check that Price IDs are correct in environment variables
- Ensure you're using the right mode (test vs live)
- Verify products are active in Stripe Dashboard

### Checkout redirects but no subscription created
- Check webhook is receiving `checkout.session.completed` event
- Look at webhook logs in Stripe Dashboard
- Verify server is processing webhook correctly

### Customer Portal shows "No subscription found"
- Ensure `stripeCustomerId` is saved in Firestore
- Check that subscription was created successfully in Stripe
- Verify user is authenticated

---

## 📞 Next Steps

1. **Add your Stripe secret key** to `server/.env`
2. **Set up webhooks** (test mode first)
3. **Test locally** with test cards
4. **Deploy to Vercel** with environment variables
5. **Implement webhook handlers** to update Firestore
6. **Test end-to-end** flow
7. **Go live** when ready!

---

## Current Status

✅ **Frontend Integration:** Complete
✅ **Backend Endpoints:** Complete  
✅ **Price IDs:** Configured
⏳ **Secret Key:** Needs to be added to `server/.env`
⏳ **Webhook Setup:** Needs configuration
⏳ **Webhook Handlers:** Need Firestore integration
⏳ **Testing:** Ready to begin

**You're about 70% done!** The main infrastructure is in place. Now you just need to:
1. Add your secret key
2. Set up webhooks
3. Implement Firestore updates in webhook handlers
4. Test the flow

