# Stripe Customer Portal Setup Guide

## Quick Fix: Configure Customer Portal in Stripe Dashboard

### The Issue
Stripe requires the Customer Portal to be configured before it can be used, even in test mode.

### Solution (Takes 2 minutes)

#### For Test Mode (Do This Now):
1. Go to: https://dashboard.stripe.com/test/settings/billing/portal
2. You'll see the Customer Portal settings page
3. **Click "Save changes"** at the bottom (even without changing anything)
   - This creates the default configuration
4. That's it! Try the button again.

#### For Production Mode (Do Later):
1. Switch to Live mode in Stripe dashboard
2. Go to: https://dashboard.stripe.com/settings/billing/portal
3. Configure these settings:
   - ✅ **Allow customers to update payment methods** (enabled by default)
   - ✅ **Allow customers to update billing information** (enabled)
   - ✅ **Allow customers to cancel subscriptions** (choose one):
     - ⭐ Recommended: "At the end of billing period" (access until paid period ends)
     - Or: "Immediately" (loses access right away)
   - ✅ **Allow customers to switch plans** (optional - let them upgrade/downgrade)
4. Click "Save changes"

### What the Customer Portal Provides:
- Update payment methods (credit cards)
- View/download invoices
- Update billing address
- Cancel subscription
- Switch between plans (if enabled)
- View payment history

### Recommended Settings:

**Business Branding:**
- Business name: Church Explorer
- Support email: scottymcmurray@gmail.com
- Icon/logo: (optional)

**Cancellation:**
- Set to "At the end of billing period" ✅
- This gives users access until their paid period ends
- Reduces refund requests
- More user-friendly

**Plan Switching:**
- Enable "Allow customers to switch plans" ✅
- Set proration: "Always invoice immediately"
- This lets users upgrade Basic → Premium instantly

### After Setup:
Your "Open Billing Portal" button will work immediately! 🎉

No code changes needed - Stripe handles everything.
