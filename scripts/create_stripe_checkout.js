
const stripe = require('stripe')(process.env.STRIPE_SANDBOX_SECRET_KEY);

async function createProductAndLink(name, description, setupAmount, subAmount, redirectUrl) {
    console.log(`\n--- Creating: ${name} ---`);
    
    // 1. Create Product
    const product = await stripe.products.create({
        name: name,
        description: description,
    });
    console.log('Product created:', product.id);

    // 2. Create Prices
    const setupPrice = await stripe.prices.create({
        product: product.id,
        unit_amount: setupAmount,
        currency: 'usd',
        nickname: 'Setup Fee',
    });

    const subPrice = await stripe.prices.create({
        product: product.id,
        unit_amount: subAmount,
        currency: 'usd',
        recurring: { interval: 'month' },
        nickname: 'Monthly Subscription',
    });

    // 3. Create Payment Link with 30-Day Trial
    const paymentLink = await stripe.paymentLinks.create({
        line_items: [
            { price: setupPrice.id, quantity: 1 },
            { price: subPrice.id, quantity: 1 },
        ],
        subscription_data: {
            trial_period_days: 30, // First month free logic
        },
        after_completion: {
            type: 'redirect',
            redirect: { url: redirectUrl },
        },
    });

    console.log('Payment Link:', paymentLink.url);
    return paymentLink.url;
}

async function main() {
    try {
        // Home Services Product ($297/mo + Trial)
        await createProductAndLink(
            'FoxTrove Home Services AI',
            '24/7 Voice Agent + Lead Interception. Includes $2,500 Setup and $297/mo Service (First Month Free).',
            250000, // $2500
            29700,   // $297
            'https://foxtrove.ai/home-services/success?session_id={CHECKOUT_SESSION_ID}'
        );

        // Med Spa Product ($497/mo + Trial)
        await createProductAndLink(
            'FoxTrove Med Spa Recovery System',
            'Patient Revenue Recovery System. Includes $2,500 Setup and $497/mo Service (First Month Free).',
            250000, // $2500
            49700,   // $497 (INCREASED)
            'https://foxtrove.ai/med-spa/success?session_id={CHECKOUT_SESSION_ID}'
        );

    } catch (error) {
        console.error('Error:', error);
    }
}

main();
