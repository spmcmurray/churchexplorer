# Pricing Update Guide

## New Pricing Structure

You've updated your pricing to:
- **Free**: $0 - 0 AI lessons/month (unchanged)
- **Basic**: $2.99/month - 4 AI lessons/month (1 per week)
- **Premium**: $5.99/month - Unlimited AI lessons

## ⚠️ IMPORTANT: Update Stripe Prices

The frontend code has been updated, but you **MUST** create new prices in Stripe to match.

### Step 1: Create New Prices in Stripe Dashboard

#### Test Mode (for testing):

1. Go to: https://dashboard.stripe.com/test/products
2. Click on your existing product (or create a new one called "Church Explorer Subscription")

**Create Basic Price ($2.99/month):**
- Click "Add another price"
- Price: `$2.99`
- Billing period: `Monthly`
- Click "Add price"
- **Copy the Price ID** (starts with `price_`)

**Create Premium Price ($5.99/month):**
- Click "Add another price"
- Price: `$5.99`
- Billing period: `Monthly`
- Click "Add price"
- **Copy the Price ID** (starts with `price_`)

#### Live Mode (when ready for production):

Repeat the same steps in **Live Mode**: https://dashboard.stripe.com/products

### Step 2: Update Environment Variables

Update your environment variables with the new price IDs:

**In Vercel (churchexplorer-server project):**
1. Go to: https://vercel.com/scott-mcmurrays-projects/churchexplorer-server/settings/environment-variables
2. Update these variables:
   - `STRIPE_BASIC_PRICE_ID` = `price_XXXXX` (your new $2.99 price ID)
   - `STRIPE_PREMIUM_PRICE_ID` = `price_XXXXX` (your new $5.99 price ID)
3. Click "Save"
4. Redeploy your server

**In Local Development (.env file):**
```bash
# Update server/.env
STRIPE_BASIC_PRICE_ID=price_XXXXX  # New $2.99/month price
STRIPE_PREMIUM_PRICE_ID=price_XXXXX  # New $5.99/month price
```

### Step 3: Redeploy Server

After updating environment variables in Vercel:
```bash
cd server
vercel --prod
```

Or trigger a redeploy in Vercel dashboard.

### Step 4: Test the New Pricing

1. Sign out and sign back in
2. Click "Upgrade" 
3. Verify prices show as $2.99 and $5.99
4. Complete a test purchase with card `4242 4242 4242 4242`
5. Check Firestore to confirm subscription was created
6. Verify you get 4 AI lessons with Basic tier

## Migration Notes

### Existing Subscribers

**Important considerations:**
- Existing subscribers on old prices ($4.99 and $9.99) will continue at their current price
- They won't automatically switch to new pricing
- Stripe keeps them on their "grandfathered" price

**Options for existing subscribers:**
1. **Do nothing** - Let them stay on old pricing (recommended)
2. **Migrate them** - Use Stripe API to update subscriptions (requires careful planning)
3. **Communicate** - Email them about new lower pricing and offer to switch

### Recommended Approach

**For Test Mode:**
- Cancel any test subscriptions
- Create new ones with new prices
- This avoids confusion during development

**For Live Mode (when you have real customers):**
- Keep existing subscribers on current pricing
- New signups get new pricing
- This is standard practice and legally safest

## Price Comparison

| Tier | Old Price | New Price | Old Limit | New Limit |
|------|-----------|-----------|-----------|-----------|
| Free | $0 | $0 | 0 lessons | 0 lessons |
| Basic | $4.99 | $2.99 | 1 lesson/month | 4 lessons/month (1/week) |
| Premium | $9.99 | $5.99 | Unlimited | Unlimited |

**Value Proposition:**
- Basic: 40% price reduction + 4x more lessons! 🎉
- Premium: 40% price reduction with same unlimited access! 🎉

This is a **huge** improvement for your customers!

## Communication Template

When you're ready to announce the new pricing:

```
Subject: Big News - We're Lowering Our Prices! 🎉

Hi [Name],

We have exciting news! We're making Church Explorer more affordable for everyone.

NEW PRICING (effective immediately):
✅ Basic Plan: $2.99/month (was $4.99) - Now includes 1 AI lesson per week!
✅ Premium Plan: $5.99/month (was $9.99) - Still unlimited!

What this means for you:
[If current subscriber] - You're grandfathered at your current rate, but you can 
switch to the new pricing anytime by contacting us!

[If new user] - Sign up now and lock in these incredible rates!

Get started: https://churchexplorer.app

Blessings,
Scott
Church Explorer Team
```

## Checklist

Before going live with new pricing:

- [ ] Created new Stripe prices in test mode
- [ ] Updated environment variables in Vercel (test)
- [ ] Redeployed server to test environment
- [ ] Tested checkout flow with new prices
- [ ] Verified Firestore updates correctly
- [ ] Tested with promo codes (if applicable)
- [ ] Created new Stripe prices in live mode
- [ ] Updated environment variables in Vercel (production)
- [ ] Redeployed production server
- [ ] Tested live checkout (small amount)
- [ ] Updated marketing materials with new pricing
- [ ] Prepared customer communication (if needed)

---

## Quick Commands Reference

**Create Stripe prices via CLI (optional):**
```bash
# Test mode
stripe prices create \
  --product=prod_XXXXX \
  --unit-amount=299 \
  --currency=usd \
  --recurring[interval]=month \
  --nickname="Basic - $2.99/month"

stripe prices create \
  --product=prod_XXXXX \
  --unit-amount=599 \
  --currency=usd \
  --recurring[interval]=month \
  --nickname="Premium - $5.99/month"
```

**Redeploy server:**
```bash
cd /workspaces/churchexplorer/server
vercel --prod
```

---

Your frontend is already updated! Just follow the steps above to sync Stripe and environment variables. 🚀
