#!/bin/bash

# Update Vercel Environment Variables for New Pricing
# This script helps you update the Stripe price IDs in Vercel

echo "🔄 Updating Vercel Environment Variables..."
echo ""
echo "New Price IDs:"
echo "  STRIPE_BASIC_PRICE_ID=price_1SPTUGCfikIx5DrkU6Wr9HdX"
echo "  STRIPE_PREMIUM_PRICE_ID=price_1SPTUWCfikIx5DrkacQFblYf"
echo ""

# Update environment variables
vercel env rm STRIPE_BASIC_PRICE_ID production -y 2>/dev/null
vercel env rm STRIPE_PREMIUM_PRICE_ID production -y 2>/dev/null

echo "price_1SPTUGCfikIx5DrkU6Wr9HdX" | vercel env add STRIPE_BASIC_PRICE_ID production
echo "price_1SPTUWCfikIx5DrkacQFblYf" | vercel env add STRIPE_PREMIUM_PRICE_ID production

echo ""
echo "✅ Environment variables updated!"
echo ""
echo "🚀 Now deploying to production..."
vercel --prod

echo ""
echo "✅ Done! Your server is now using the new price IDs."
