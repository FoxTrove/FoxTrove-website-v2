
const stripe = require('stripe')(process.env.STRIPE_SANDBOX_SECRET_KEY);

async function createCheckout() {
  try {
    console.log('Creating Product...');
    const product = await stripe.products.create({
      name: 'FoxTrove AI Launch Package',
      description: 'AI Voice Agent + Revenue Recovery System. Includes $2,500 Setup and $297/mo Service.',
    });
    console.log('Product created:', product.id);

    console.log('Creating Prices...');
    const setupPrice = await stripe.prices.create({
      product: product.id,
      unit_amount: 250000, // $2500.00
      currency: 'usd',
      recurring: undefined, // One-time
      nickname: 'Setup Fee',
    });

    const subPrice = await stripe.prices.create({
        product: product.id,
        unit_amount: 29700, // $297.00
        currency: 'usd',
        recurring: { interval: 'month' },
        nickname: 'Monthly Subscription',
      });

    console.log('Creating Payment Link...');
    const paymentLink = await stripe.paymentLinks.create({
      line_items: [
        { price: setupPrice.id, quantity: 1 },
        { price: subPrice.id, quantity: 1 },
      ],
      after_completion: {
        type: 'redirect',
        redirect: { url: 'https://foxtrove.ai/success?session_id={CHECKOUT_SESSION_ID}' }, // Update verify URL later if needed
      },
    });

    console.log('SUCCESS! Payment Link:', paymentLink.url);
  } catch (error) {
    console.error('Error:', error);
  }
}

createCheckout();
