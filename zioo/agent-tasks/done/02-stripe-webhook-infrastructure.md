# 02-stripe-webhook-infrastructure

## Context

We are implementing a custom Stripe webhook handler. This endpoint will serve as the foundation to verify payments and securely trigger our customized operations (like transactional emails) later.

## Epic 1: Stripe Webhook Infrastructure

**Feature 1: Webhook Endpoint Configuration**

- `[x]` Create the Next.js API Route for handling Stripe `checkout.session.completed` events at `/api/webhooks/stripe`.
- `[x]` Implement robust Stripe signature verification using the `STRIPE_WEBHOOK_SECRET` to ensure payload authenticity.
- `[x]` Ensure the endpoint properly parses the `checkout.session.completed` event data or re-fetches metadata via Stripe's `sessions.retrieve` if `line_items` are missing from the raw payload.
- `[x]` Add error handling that explicitly _swallows_ down-stream processing errors to ensure we strictly return a `200` status to Stripe once the payment clears (preventing Stripe from retrying due to timeouts).
- `[x]` Add a concise and short guide doc to set it up on stripe's side

