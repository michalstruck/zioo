# Stripe Webhook Setup Guide

This guide explains how to configure Stripe to send webhook events to the Zioo local or production environment.

## 1. Local Development (using Stripe CLI)

If you are testing locally, you need to use the Stripe CLI to forward events to your local server.

1. **Install Stripe CLI** (if not already installed)
   Follow instructions: [https://docs.stripe.com/stripe-cli](https://docs.stripe.com/stripe-cli)
2. **Login to Stripe CLI**
   ```bash
   stripe login
   ```
3. **Start Forwarding**
   Run the following command to forward webhook events to your local API route:
   ```bash
   stripe listen --forward-to localhost:3000/api/webhooks/stripe
   ```
4. **Get Webhook Secret**
   After running the `stripe listen` command, you will see an output like:
   `Ready! Your webhook signing secret is whsec_...`
5. **Update `.env` locally**
   Copy the `whsec_...` value and add it to your `.env` file:
   ```env
   STRIPE_WEBHOOK_SECRET=whsec_your_secret_here
   ```

## 2. Production Setup

For the production environment, you need to configure the Webhook endpoint in the Stripe Dashboard.

1. Go to the [Stripe Dashboard > Developers > Webhooks](https://dashboard.stripe.com/webhooks).
2. Click **Add endpoint**.
3. **Endpoint URL**: Enter your production URL (e.g., `https://zioo.pl/api/webhooks/stripe`).
4. **Events to send**: Select `checkout.session.completed` under the "Checkout" section.
5. Click **Add endpoint**.
6. After the endpoint is created, click **Reveal** under "Signing secret" to get your production secret.
7. Add this secret to your production environment variables (e.g., Vercel) under `STRIPE_WEBHOOK_SECRET`.
