# Profile Page Guide

## Overview
The Profile page provides a comprehensive interface for users to manage their account settings, subscription, payment information, and preferences.

## Features

### 1. Account Tab
- **Personal Information**
  - Edit display name
  - View email (read-only)
  - See member since date
  - Save changes with visual feedback
  
- **Danger Zone**
  - Delete account functionality
  - Warning message with irreversible action notice

### 2. Subscription Tab
- **Tier Overview Card**
  - Beautiful gradient card showing current tier (Free/Basic/Premium)
  - Visual tier icons (Star/Zap/Crown)
  - Renewal/expiration date display
  - Upgrade button for non-premium users

- **AI Lesson Usage**
  - Full `UsageDisplay` component integration
  - Shows current usage vs limit
  - Progress bar visualization
  - Unlimited badge for premium users

- **Billing & Payment** (for paid tiers)
  - Payment method management (Stripe Customer Portal integration ready)
  - Subscription status display
  - Next billing date
  - Upgrade options
  - Cancel subscription functionality

- **Upgrade Prompts** (for free tier)
  - Beautiful call-to-action card
  - Direct link to upgrade modal
  - Clear value proposition

### 3. Preferences Tab
- **Email Notifications**
  - Toggle switches for:
    - Weekly Learning Digest
    - Lesson Reminders
    - Achievement Notifications
    - Product Updates
  - Auto-save functionality (noted in UI)

- **Privacy & Data**
  - Download my data option
  - Privacy policy link
  - Data export capabilities (placeholders for future implementation)

## Access
Users can access their profile through:
1. User menu dropdown in the navigation bar
2. Click on profile icon → "Profile & Settings"
3. Direct URL: `/#/profile`

## Integration Points

### Current Integrations
- ✅ `subscriptionService.js` - Loads user subscription data
- ✅ `UsageDisplay` component - Shows AI lesson usage
- ✅ `UpgradeModal` component - Tier comparison modal
- ✅ Firebase Auth - User data and metadata

### Pending Integrations (TODOs in code)
- ⏳ Firebase `updateProfile()` - Save display name changes
- ⏳ Stripe Customer Portal - Payment method management
- ⏳ Email preferences save to Firestore
- ⏳ Data export functionality
- ⏳ Privacy policy links

## UI/UX Design

### Tab-Based Layout
The page uses a clean tab-based interface with three main sections:
- **Account** - User icon
- **Subscription** - Credit card icon
- **Preferences** - Shield icon

### Color Coding
- **Free Tier**: Slate gray gradient
- **Basic Tier**: Blue to cyan gradient
- **Premium Tier**: Purple to pink gradient

### Responsive Design
- Mobile-friendly tab navigation
- Flexible grid layouts
- Touch-optimized toggle switches
- Proper spacing and padding

### Visual Feedback
- Save button shows loading spinner
- Success message with checkmark
- Color-coded status indicators
- Smooth transitions and hover effects

## Subscription Management

### Cancel Subscription Flow
1. User clicks "Cancel Plan" button
2. Browser confirmation dialog appears
3. If confirmed, calls `cancelSubscription()` from subscription service
4. Updates subscription status to 'canceled'
5. User retains access until end of billing period
6. UI updates to show "Canceled (access until period end)"

### Upgrade Flow
1. User clicks "Upgrade" or "View Plans" button
2. `UpgradeModal` appears with tier comparison
3. User selects desired tier
4. (TODO) Stripe checkout session created
5. (TODO) Payment processed
6. (TODO) Subscription updated via webhook
7. Profile page refreshes to show new tier

## Payment Integration

### Stripe Customer Portal (Ready to Implement)
The profile page includes a "Manage Payment Methods" button that will open the Stripe Customer Portal. This allows users to:
- Update payment methods
- View billing history
- Download invoices
- Update billing address

**Implementation Steps:**
1. Create Stripe Customer Portal session endpoint
2. Call endpoint when button clicked
3. Redirect to Stripe-hosted portal
4. User returns to profile page when done

## Security Considerations
- Email address cannot be changed (enforced in UI with disabled input + lock icon)
- Delete account requires password confirmation (handled by parent component)
- Subscription data loaded only for authenticated user
- User can only view/edit their own data

## Future Enhancements
- [ ] Email preference persistence to Firestore
- [ ] Two-factor authentication setup
- [ ] Password change functionality
- [ ] Connected accounts (Google, Facebook)
- [ ] Theme preferences (dark mode)
- [ ] Learning preferences and goals
- [ ] Data export (JSON/CSV download)
- [ ] Invoice history display
- [ ] Referral program integration
- [ ] Learning statistics dashboard

## Testing Checklist
- [ ] Free user sees upgrade prompts
- [ ] Basic user sees correct usage and limits
- [ ] Premium user sees unlimited badge
- [ ] Save profile changes works
- [ ] Toggle switches update state
- [ ] Cancel subscription shows confirmation
- [ ] Upgrade modal opens correctly
- [ ] Navigation menu link works
- [ ] Mobile responsive design
- [ ] All tabs render correctly
