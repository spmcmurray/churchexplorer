# Stripe Promo Codes Setup Guide

## Overview
Promo codes are now enabled in the Stripe checkout! Customers can enter promo codes to get discounts on subscriptions.

## How to Create Promo Codes in Stripe

### Method 1: Stripe Dashboard (Recommended for Manual Setup)

1. **Go to Stripe Dashboard**
   - Visit: https://dashboard.stripe.com/test/coupons
   - (Use test mode for testing, live mode for production)

2. **Create a Coupon First**
   - Click "Create coupon"
   - Choose coupon type:
     - **Percentage off**: e.g., 100% off for beta testers
     - **Amount off**: e.g., $5 off per month
     - **Fixed amount**: e.g., $10 total discount
   
   - **For Beta Testers/Friends/Family - 100% Off Forever:**
     - Name: "Beta Tester - Free Forever"
     - Percent off: `100%`
     - Duration: `Forever` (keeps discount for lifetime of subscription)
     - Currency: USD
     - Click "Create coupon"

   - **For Trial/Temporary Access:**
     - Name: "3 Month Free Trial"
     - Percent off: `100%`
     - Duration: `Repeating` with `3` months
     - This gives 3 months free, then starts charging

3. **Create Promotion Code from Coupon**
   - After creating coupon, click "Add promotion code"
   - **Code**: Enter your custom code (e.g., `BETATESTER2025`, `FAMILY100`, `FRIEND-FREE`)
   - **Max redemptions**: Set limit if desired (e.g., 50 for beta testers)
   - **Expiration date**: Optional (leave blank for no expiration)
   - **First time transaction**: Check this to limit to new customers only
   - Click "Create promotion code"

### Method 2: Stripe CLI (For Bulk Creation)

```bash
# Create a 100% off forever coupon
stripe coupons create \
  --percent-off=100 \
  --duration=forever \
  --name="Beta Tester - Free Forever"

# Create promotion codes from the coupon (use the coupon ID from above)
stripe promotion_codes create \
  --coupon=<COUPON_ID> \
  --code=BETATESTER2025 \
  --max-redemptions=50

stripe promotion_codes create \
  --coupon=<COUPON_ID> \
  --code=FAMILY100

stripe promotion_codes create \
  --coupon=<COUPON_ID> \
  --code=FRIEND-FREE
```

## Recommended Promo Code Structures

### For Beta Testers
- **Code**: `BETATESTER2025`
- **Discount**: 100% off forever
- **Max Redemptions**: 50-100
- **Purpose**: Reward early supporters with lifetime free access

### For Friends & Family
- **Code**: `FAMILY100` or personalized codes like `SCOTT-FRIEND`
- **Discount**: 100% off forever
- **Max Redemptions**: Unlimited or set per person
- **Purpose**: Give close connections free access

### For Marketing Campaigns
- **Code**: `LAUNCH50`
- **Discount**: 50% off for 3 months
- **Duration**: Repeating for 3 months
- **Purpose**: Attract new users with limited-time discount

### For Influencer Partnerships
- **Code**: `PASTOR-JOHN20`
- **Discount**: 20% off forever
- **Purpose**: Partner codes for ongoing revenue share

## How Customers Use Promo Codes

1. Click "Upgrade" button on your site
2. Redirected to Stripe Checkout
3. **Look for "Add promotion code" link** at the bottom of the payment form
4. Click link, enter code (e.g., `BETATESTER2025`)
5. Discount is automatically applied
6. Complete checkout with discounted price ($0 for 100% off codes)

## Important Notes

### For 100% Off Codes:
- ✅ Customer will see $0.00 total
- ✅ NO credit card required if using test mode
- ⚠️ In live mode, Stripe may still require card for future billing
- ✅ Subscription is created immediately
- ✅ Your webhook will receive the subscription data
- ✅ User gets full access to their tier features

### Testing Your Promo Codes

1. Make sure you're in **Test Mode** in Stripe Dashboard
2. Create test promo codes
3. Go through checkout flow on your site
4. Use test card: `4242 4242 4242 4242`
5. Enter your promo code
6. Verify discount is applied
7. Check Firestore to confirm subscription was created

### Tracking Promo Code Usage

In Stripe Dashboard:
1. Go to "Coupons" → Select your coupon
2. View "Promotion codes" tab
3. See redemption count and active subscriptions
4. Monitor which codes are most popular

## Security Best Practices

- ✅ Use unique, hard-to-guess codes for valuable discounts
- ✅ Set max redemptions for limited offers
- ✅ Set expiration dates for time-sensitive campaigns
- ✅ Monitor usage to prevent abuse
- ✅ Keep a spreadsheet of active codes and their purposes
- ⚠️ Don't share 100% off codes publicly (only with trusted testers)

## Moving from Test to Production

1. Create the same coupons/codes in **Live Mode**
2. Test with a real card in production
3. Update environment variables if needed
4. Monitor first few redemptions closely
5. Share codes with your beta testers!

## Example: Beta Tester Workflow

**Your Email to Beta Testers:**

```
Subject: Thank you for testing Church Explorer! 🎉

Hi [Name],

Thank you for being one of our beta testers! As a token of our appreciation, 
you get FREE LIFETIME access to Church Explorer Premium.

Here's how to claim it:

1. Go to https://churchexplorer.app
2. Sign up for an account
3. Navigate to your Profile → Subscription
4. Click "Upgrade to Premium"
5. Enter promo code: BETATESTER2025
6. Complete checkout (you'll see $0.00 total!)

Your Premium features include:
✅ Unlimited AI-generated lessons
✅ Custom learning paths
✅ All curated content
✅ Early access to new features

This code is limited to 50 users, so claim it soon!

Questions? Reply to this email.

Blessings,
Scott
Church Explorer Team
```

## Code Examples for Your Reference

**100% Off Forever (Beta Testers):**
- `BETATESTER2025`
- `EARLYBIRD100`
- `FOUNDING-MEMBER`

**Friends & Family:**
- `FAMILY-FREE`
- `SCOTTSFRIEND`
- `VIPACCESS`

**Limited Time Marketing:**
- `LAUNCH50` (50% off for 3 months)
- `HOLIDAY25` (25% off forever)
- `FIRSTMONTH` (100% off first month only)

---

## Next Steps

1. ✅ Create your first promo code in Stripe Dashboard (test mode)
2. ✅ Test it yourself with the checkout flow
3. ✅ Create production codes when ready to launch
4. ✅ Share with your beta testers
5. ✅ Track usage and gather feedback

Your checkout now supports promo codes automatically - no additional frontend changes needed!
