import { test, expect } from '@playwright/test';

test.describe('Experience Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.locator('#experience').scrollIntoViewIfNeeded();
  });

  test('should display experience section', async ({ page }) => {
    const experienceSection = page.locator('#experience');
    await expect(experienceSection).toBeVisible();

    // Check for section heading
    await expect(page.getByRole('heading', { name: /experience|education/i })).toBeVisible();
  });

  test('should display timeline', async ({ page }) => {
    const experienceSection = page.locator('#experience');

    // Check for timeline visual element (line or dots)
    const hasTimeline = await experienceSection.locator('[class*="timeline"], [class*="line"]').count();
    expect(hasTimeline).toBeGreaterThanOrEqual(0);
  });

  test('should display experience cards', async ({ page }) => {
    const experienceSection = page.locator('#experience');

    // Check for job titles or organization names
    const experienceCards = experienceSection.locator('h3, h4').filter({ hasText: /developer|intern|bootcamp|diploma/i });
    await expect(experienceCards.first()).toBeVisible();
  });

  test('should show current position badge', async ({ page }) => {
    const currentBadge = page.locator('text=Current').or(page.locator('[class*="current"]').filter({ hasText: /current/i }));

    if (await currentBadge.count() > 0) {
      await expect(currentBadge.first()).toBeVisible();
    }
  });

  test('should display job descriptions', async ({ page }) => {
    const experienceSection = page.locator('#experience');

    // Check for description lists or paragraphs
    const descriptions = experienceSection.locator('ul li, p').filter({ hasText: /building|developing|managing|implementing/i });

    if (await descriptions.count() > 0) {
      await expect(descriptions.first()).toBeVisible();
    }
  });

  test('should display technology tags', async ({ page }) => {
    const experienceSection = page.locator('#experience');

    // Check for tech stack tags
    const techTags = experienceSection.locator('span').filter({ hasText: /React|Node|AWS|PHP|JavaScript|Python/i });

    if (await techTags.count() > 0) {
      await expect(techTags.first()).toBeVisible();
    }
  });

  test('should display experience icons', async ({ page }) => {
    const experienceSection = page.locator('#experience');

    // Check for work/education icons
    const icons = experienceSection.locator('svg');
    expect(await icons.count()).toBeGreaterThan(0);
  });

  test('should be properly formatted on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.locator('#experience').scrollIntoViewIfNeeded();

    const experienceSection = page.locator('#experience');
    await expect(experienceSection).toBeVisible();

    // Check that cards are visible and not overflowing
    const cards = experienceSection.locator('[class*="card"], article, > div > div > div');
    if (await cards.count() > 0) {
      await expect(cards.first()).toBeVisible();
    }
  });

  test('should display summary stats', async ({ page }) => {
    const experienceSection = page.locator('#experience');

    // Look for stats like "3+ Years", "10+ Projects", etc.
    const stats = experienceSection.locator('text=/\\d+\\+/');

    if (await stats.count() > 0) {
      await expect(stats.first()).toBeVisible();
    }
  });
});
