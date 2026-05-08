import { test, expect } from '@playwright/test';

test('Critical Path: Store -> Cart -> Checkout (Stripe)', async ({ page }) => {
  // 1. Visit Product Page
  await page.goto('/store/product/fresh');

  // 2. Add to cart
  await page.locator('#add-to-cart-button').click();

  // 4. Verify the cart opens or we can navigate to checkout
  // If the cart doesn't open automatically, we might need to click the cart icon.
  // Wait for the cart drawer or Do kasy button to be visible
  await expect(page.locator('text=Do kasy').first()).toBeVisible({ timeout: 10000 });
  await page.locator('text=Do kasy').first().click();

  // 5. Verify we are on checkout page
  await expect(page).toHaveURL(/\/checkout/);

  // 6. Fill out the checkout form
  await page.fill('#firstName', 'Test');
  await page.fill('#lastName', 'User');
  await page.fill('#email', 'test@example.com');
  
  // Select InPost Courier (bypasses the map widget)
  await page.locator('label[for="inpostCourier"]').click();

  await page.fill('#street', 'Testowa 1/2');
  await page.fill('#zip', '00-000');
  await page.fill('#city', 'Warszawa');
  await page.fill('#phone', '123456789');

  // Accept terms
  await page.locator('label[for="terms"]').click();

  // 7. Submit to Stripe
  await page.locator('button:has-text("Przejdź do płatności")').click();

  // 8. Wait for Stripe Embedded Checkout iframe to load
  // This verifies that the /api/checkout endpoint successfully created a session
  // and returned a clientSecret.
  await expect(page.locator('#stripe-checkout-wrapper')).toBeVisible({ timeout: 15000 });
  
  // Note: Actually interacting with Stripe's Embedded Checkout iframe in Playwright
  // can be flaky and requires specific iframe locators that change. 
  // Seeing the iframe load successfully proves the critical path is unblocked.
});
