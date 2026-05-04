# 03-custom-transactional-emails

## Context

Building on our Stripe webhook infrastructure, we will use Resend and React Email to deliver a highly tailored, visually stunning brand experience. We are consolidating to a strict "One Email" rule: a single Order Confirmation & Receipt sent to the customer upon purchase. We will NOT construct automated shipping emails (the carrier handles this natively).

**Relevant Skills to Utilize:**

- `email-sequence` (for planning the transactional flow)
- `copywriting` (for drafting the Polish copy compliant with `COPY_DICTIONARY.md`)

## Epic 2: Custom Transactional Emails via Resend

**Feature 1: React Email Templates**

- `[ ]` Design and build a custom, visually appealing "Order Confirmation" HTML email. The design must adhere to the premium "Clinical Naturalism" brand guidelines and design system. This template will be later imported into resend templates and reused.
- `[ ]` **Utilize the `copywriting` skill** to write a Polish confirmation message that expresses gratitude, outlines what to expect next, and strictly follows `COPY_DICTIONARY.md` (no medical claims).
- `[ ]` Design and build an internal "New Order Alert" HTML email sent to `SELLER_EMAIL`. This should clearly list the items purchased, the calculated total, and customer shipping details.

**Feature 2: Delivery Integration**

- `[ ]` Integrate the Resend SDK into the webhook handler built in the previous step.
- `[ ]` **Utilize the `email-sequence` skill** to map out the data required for both templates (e.g. inject order summary, amount, customer name into the React Email component).
- `[ ]` In the webhook handler, logically connect the retrieved `session` data to trigger both the Customer Order Confirmation email and the Seller Alert email.
- `[ ]` Validate the email logic by capturing test webhooks using the Stripe CLI during local development.
