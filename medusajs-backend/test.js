require('dotenv').config();

const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_API_KEY);


async function testStripeConnection() {
  console.log(process.env.STRIPE_API_KEY);
  try {
    const account = await stripe.accounts.retrieve();
    console.log('Stripe is connected. Account details:');
    console.log(account);
  } catch (error) {
    console.error('Stripe connection test failed:', error);
  }
}

testStripeConnection();