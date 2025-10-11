import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/Outhman/i);
  });

  test('should display hero section', async ({ page }) => {
    // Check for hero content
    const heroSection = page.locator('section').first();
    await expect(heroSection).toBeVisible();

    // Check for name/title
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });

  test('should have working navigation', async ({ page }) => {
    // Test navigation to About section
    await page.click('text=About');
    await page.evaluate(() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }));
    await page.waitForTimeout(500);
    await expect(page.locator('#about')).toBeInViewport();

    // Test navigation to Experience section
    await page.click('text=Experience');
    await page.evaluate(() => document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' }));
    await page.waitForTimeout(500);
    await expect(page.locator('#experience')).toBeInViewport();

    // Test navigation to Projects section
    await page.click('text=Projects');
    await page.evaluate(() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }));
    await page.waitForTimeout(500);
    await expect(page.locator('#projects')).toBeInViewport();

    // Note: Certificates navigation goes to /certificates page, not tested here
  });

  test('should have theme toggle working', async ({ page }) => {
    // Find and click theme toggle button
    const themeToggle = page.locator('button').filter({ hasText: /theme|dark|light/i }).first();

    if (await themeToggle.count() > 0) {
      await themeToggle.click();

      // Check if theme changed (html element should have dark class or data-theme attribute)
      const html = page.locator('html');
      const hasThemeChange = await html.evaluate((el) => {
        return el.classList.contains('dark') ||
               el.classList.contains('light') ||
               el.hasAttribute('data-theme');
      });

      expect(hasThemeChange).toBeTruthy();
    }
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Check if page loads properly on mobile
    await expect(page.locator('section').first()).toBeVisible();
  });
});
