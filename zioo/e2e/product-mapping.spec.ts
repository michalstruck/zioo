import { test, expect } from "@playwright/test";

test.describe("QR Label Redirect Middleware", () => {
  test("should redirect valid label (fresh-01) to product page", async ({ page }) => {
    await page.goto("/?label=fresh-01");
    await expect(page).toHaveURL(/\/produkt\/fresh/);
  });

  test("should redirect valid terpene label (sleep-terpene-xyz) to product page", async ({ page }) => {
    await page.goto("/?label=sleep-terpene-xyz");
    await expect(page).toHaveURL(/\/produkt\/sleep-terpene/);
  });

  test("should redirect unknown label to store", async ({ page }) => {
    await page.goto("/?label=nonexistent");
    await expect(page).toHaveURL(/\/store/);
  });

  test("should redirect empty label to store", async ({ page }) => {
    await page.goto("/?label=");
    await expect(page).toHaveURL(/\/store/);
  });

  test("should not redirect if no label parameter is present", async ({ page }) => {
    await page.goto("/");
    // We should be on the homepage, ending with / (and not /store or /produkt/...)
    expect(new URL(page.url()).pathname).toBe("/");
  });
});
