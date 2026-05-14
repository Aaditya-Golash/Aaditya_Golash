import { test, expect } from '@playwright/test';
import { siteRoot } from './site';

test.describe('Accessibility, semantics, and web design fundamentals', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(siteRoot);
  });

  test('page uses semantic sections and accessible link text', async ({ page }) => {
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();

    const resumeMenuLink = page.locator('nav a[title="Resume"]');
    await expect(resumeMenuLink).toHaveAttribute('target', '_blank');
    await expect(resumeMenuLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('hero section content is accessible and readable', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Aaditya Golash' })).toBeVisible();
    await expect(page.locator('.hero-ascii')).toBeVisible();
    await expect(page.locator('p.operator-subtitle')).toBeVisible();
  });

  test('all primary nav links are keyboard focusable and stable', async ({ page }) => {
    const navigationLinks = page.locator('nav ul li a');
    await expect(navigationLinks).toHaveCount(6);
    await navigationLinks.first().focus();
    await expect(navigationLinks.first()).toBeFocused();
  });
});
