import { test, expect } from '@playwright/test';

test.describe('Homepage UI and visual structure', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('hero section loads with brand statement and core action buttons', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Aaditya Golash' })).toBeVisible();
    await expect(page.locator('.operator-subtitle')).toHaveText(
      'I build practical systems across product, operations, data, and engineering.'
    );

    const actions = page.locator('.operator-actions a.retro-btn');
    await expect(actions).toHaveCount(4);
    await expect(actions.nth(0)).toHaveText('VIEW_SYSTEMS');
    await expect(actions.nth(1)).toHaveText('OPEN_LAB');
    await expect(actions.nth(2)).toHaveText('RESUME');
    await expect(actions.nth(3)).toHaveText('CONTACT');
  });

  test('navigation header is present and accessible', async ({ page }) => {
    await expect(page.locator('header')).toBeVisible();
    await expect(page.getByRole('navigation')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Home', exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Systems', exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Lab', exact: true })).toBeVisible();
  });

  test('project cards render featured and other sections consistently', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Featured Projects' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Other Projects' })).toBeVisible();

    const featuredCards = page.locator('.featured-grid >> article.featured-card');
    await expect(featuredCards).toHaveCount(8);
    await expect(featuredCards.first()).toContainText('Read Case Study');
  });
});
