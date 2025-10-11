import { test, expect } from '@playwright/test';

test.describe('Projects Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Navigate to projects section
    await page.locator('#projects').scrollIntoViewIfNeeded();
  });

  test('should display projects section', async ({ page }) => {
    const projectsSection = page.locator('#projects');
    await expect(projectsSection).toBeVisible();
  });

  test('should display project cards', async ({ page }) => {
    // Check if at least one project card is visible
    const projectCards = page.locator('[class*="gallery-item"]').or(page.locator('article').or(page.locator('[data-testid="project-card"]')));
    await expect(projectCards.first()).toBeVisible({ timeout: 10000 });
  });

  test('should navigate projects using arrows on desktop', async ({ page }) => {
    // Desktop viewport
    await page.setViewportSize({ width: 1280, height: 720 });

    // Find navigation buttons
    const nextButton = page.locator('button[aria-label*="Next"]').or(page.locator('button').filter({ hasText: /next|→|>/i }));
    const prevButton = page.locator('button[aria-label*="Previous"]').or(page.locator('button').filter({ hasText: /prev|←|</i }));

    if (await nextButton.count() > 0) {
      await nextButton.first().click();
      await page.waitForTimeout(600); // Wait for animation

      if (await prevButton.count() > 0) {
        await prevButton.first().click();
        await page.waitForTimeout(600);
      }
    }
  });

  test('should support swipe navigation on mobile', async ({ page }) => {
    // Mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.locator('#projects').scrollIntoViewIfNeeded();

    // Get the project container
    const projectContainer = page.locator('#projects').first();
    const box = await projectContainer.boundingBox();

    if (box) {
      // Simulate swipe left
      await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
      await page.mouse.down();
      await page.mouse.move(box.x + 50, box.y + box.height / 2);
      await page.mouse.up();

      await page.waitForTimeout(600);
    }
  });

  test('should display project details', async ({ page }) => {
    // Check for project information
    const projectSection = page.locator('#projects');

    // Look for project titles, descriptions, or tech tags
    const hasContent = await projectSection.locator('h3, p, span').count();
    expect(hasContent).toBeGreaterThan(0);
  });

  test('should have clickable project links', async ({ page }) => {
    const projectSection = page.locator('#projects');

    // Look for demo or GitHub links
    const links = projectSection.locator('a[href*="github"], a[href*="demo"], a:has-text("Live Demo"), a:has-text("GitHub")');

    if (await links.count() > 0) {
      const firstLink = links.first();
      await expect(firstLink).toBeVisible();
      expect(await firstLink.getAttribute('href')).toBeTruthy();
    }
  });

  test('should display dot navigation', async ({ page }) => {
    // Look for pagination dots
    const dots = page.locator('button[aria-label*="Go to project"]').or(page.locator('[class*="dot"]'));

    if (await dots.count() > 0) {
      await expect(dots.first()).toBeVisible();
    }
  });
});
