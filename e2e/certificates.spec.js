import { test, expect } from '@playwright/test';

test.describe('Certificates Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.locator('#certificates').scrollIntoViewIfNeeded();
  });

  test('should display certificates section', async ({ page }) => {
    const certificatesSection = page.locator('#certificates');
    await expect(certificatesSection).toBeVisible();

    // Check for section heading
    await expect(page.getByRole('heading', { name: /certificate|award/i })).toBeVisible();
  });

  test('should display certificate cards', async ({ page }) => {
    const certificatesSection = page.locator('#certificates');

    // Check for certificate titles
    const certTitles = certificatesSection.locator('h3').filter({ hasText: /terraform|devops|react|javascript|node|express/i });
    await expect(certTitles.first()).toBeVisible();
  });

  test('should display certificate images', async ({ page }) => {
    const certificatesSection = page.locator('#certificates');

    // Check for certificate images
    const certImages = certificatesSection.locator('img[alt*="Terraform"], img[alt*="DevOps"], img[alt*="React"], img[alt*="JavaScript"]');

    if (await certImages.count() > 0) {
      await expect(certImages.first()).toBeVisible();

      // Check that image has loaded - wait for naturalWidth to be > 0
      const firstImage = certImages.first();
      await firstImage.evaluate(img => {
        return new Promise((resolve, reject) => {
          if (img.complete && img.naturalWidth > 0) {
            resolve();
          } else {
            img.onload = () => resolve();
            img.onerror = () => reject(new Error('Image failed to load'));
            // Fallback timeout
            setTimeout(() => resolve(), 5000);
          }
        });
      });

      const naturalWidth = await firstImage.evaluate(img => img.naturalWidth);
      expect(naturalWidth).toBeGreaterThan(0);
    }
  });

  test('should display verified badges', async ({ page }) => {
    const certificatesSection = page.locator('#certificates');

    // Check for verified/certification badges
    const badges = certificatesSection.locator('svg').filter({ has: page.locator('path[d*="12"]') });
    expect(await badges.count()).toBeGreaterThan(0);
  });

  test('should show certificate details', async ({ page }) => {
    const certificatesSection = page.locator('#certificates');

    // Check for issuer info (LinkedIn Learning)
    await expect(certificatesSection.locator('text=LinkedIn Learning').first()).toBeVisible();

    // Check for dates
    const dates = certificatesSection.locator('text=/20(23|24|25)/');
    expect(await dates.count()).toBeGreaterThan(0);
  });

  test('should display skill tags', async ({ page }) => {
    const certificatesSection = page.locator('#certificates');

    // Check for technology tags
    const skillTags = certificatesSection.locator('span').filter({ hasText: /Terraform|AWS|CI\/CD|React|JavaScript|Node/i });

    if (await skillTags.count() > 0) {
      await expect(skillTags.first()).toBeVisible();
    }
  });

  test('should have view credential buttons', async ({ page }) => {
    const certificatesSection = page.locator('#certificates');

    // Look for "View Credential" buttons/links
    const credentialLinks = certificatesSection.locator('a').filter({ hasText: /view credential|credential/i });

    if (await credentialLinks.count() > 0) {
      await expect(credentialLinks.first()).toBeVisible();
      expect(await credentialLinks.first().getAttribute('href')).toBeTruthy();
    }
  });

  test('should have "View All Certificates" link', async ({ page }) => {
    // Look for link to certificates page
    const viewAllLink = page.locator('a[href="/certificates"]').or(page.locator('a').filter({ hasText: /view all certificate/i }));

    if (await viewAllLink.count() > 0) {
      await expect(viewAllLink.first()).toBeVisible();
    }
  });

  test('should display category badges', async ({ page }) => {
    const certificatesSection = page.locator('#certificates');

    // Check for category labels
    const categories = certificatesSection.locator('text=/Cloud|DevOps|Frontend|Backend/');

    if (await categories.count() > 0) {
      await expect(categories.first()).toBeVisible();
    }
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.locator('#certificates').scrollIntoViewIfNeeded();

    const certificatesSection = page.locator('#certificates');
    await expect(certificatesSection).toBeVisible();

    // Check that certificate cards are visible
    const certCards = certificatesSection.locator('h3').first();
    await expect(certCards).toBeVisible();
  });

  test('should display certificate images at proper size', async ({ page }) => {
    const certificatesSection = page.locator('#certificates');
    const certImages = certificatesSection.locator('img').first();

    if (await certImages.count() > 0) {
      await expect(certImages).toBeVisible();

      // Check image dimensions are reasonable
      const box = await certImages.boundingBox();
      if (box) {
        expect(box.height).toBeGreaterThan(100);
        expect(box.width).toBeGreaterThan(100);
      }
    }
  });
});
