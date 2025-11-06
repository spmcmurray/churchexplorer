/**
 * Configure Stripe Customer Portal to allow plan switching
 * Run with: node configure-portal.js
 */

require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

async function configurePortal() {
  try {
    // Get current configurations
    const configurations = await stripe.billingPortal.configurations.list({ limit: 1 });
    
    if (configurations.data.length > 0) {
      // Update existing configuration
      const config = configurations.data[0];
      console.log('Updating existing portal configuration:', config.id);
      
      const updated = await stripe.billingPortal.configurations.update(config.id, {
        features: {
          subscription_update: {
            enabled: true,
            default_allowed_updates: ['price'],
            proration_behavior: 'always_invoice',
            products: [
              { 
                product: process.env.STRIPE_BASIC_PRODUCT_ID, // You'll need to add these
                prices: [process.env.STRIPE_BASIC_PRICE_ID]
              },
              {
                product: process.env.STRIPE_PREMIUM_PRODUCT_ID,
                prices: [process.env.STRIPE_PREMIUM_PRICE_ID]
              }
            ]
          },
          subscription_cancel: {
            enabled: true,
            mode: 'at_period_end',
            cancellation_reason: {
              enabled: true,
              options: ['too_expensive', 'missing_features', 'other']
            }
          },
          payment_method_update: {
            enabled: true
          },
          invoice_history: {
            enabled: true
          }
        }
      });
      
      console.log('✅ Portal configuration updated!');
      console.log('Users can now:');
      console.log('- Switch between Basic and Premium plans');
      console.log('- Cancel at period end');
      console.log('- Update payment methods');
      console.log('- View invoice history');
    } else {
      // Create new configuration
      console.log('Creating new portal configuration...');
      
      const config = await stripe.billingPortal.configurations.create({
        business_profile: {
          headline: 'Manage your Church Explorer subscription'
        },
        features: {
          subscription_update: {
            enabled: true,
            default_allowed_updates: ['price'],
            proration_behavior: 'always_invoice'
          },
          subscription_cancel: {
            enabled: true,
            mode: 'at_period_end'
          },
          payment_method_update: {
            enabled: true
          },
          invoice_history: {
            enabled: true
          }
        }
      });
      
      console.log('✅ Portal configuration created!');
      console.log('Configuration ID:', config.id);
    }
    
  } catch (error) {
    console.error('❌ Error configuring portal:', error.message);
    console.error('Full error:', error);
  }
}

configurePortal();
