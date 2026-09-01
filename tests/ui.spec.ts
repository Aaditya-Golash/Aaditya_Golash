import { test, expect } from '@playwright/test';
import { siteRoot } from './site';

test.describe('Homepage UI and visual structure', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(siteRoot);
  });

  test('hero section loads with brand statement and core action buttons', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Aaditya Golash' })).toBeVisible();
    await expect(page.locator('.operator-subtitle')).toHaveText(
      'UBC Computer Science graduate with a Management minor, building software, workflow systems, and AI tooling for real operational problems.'
    );
    await expect(page.locator('.proof-strip')).toContainText('Built and deployed DealerSignal');
    await expect(page.locator('.proof-strip')).toContainText('Reduced TA allocation admin time by 70%');
    await expect(page.locator('.proof-strip')).toContainText('4M+ organic views');
    await expect(page.locator('.status-grid')).toContainText('Valid Canadian work permit');
    await expect(page.locator('.status-grid')).toContainText('Open to relocation');

    const actions = page.locator('.operator-actions a.retro-btn');
    await expect(actions).toHaveCount(5);
    await expect(actions.nth(0)).toHaveText('View Projects');
    await expect(actions.nth(1)).toHaveText('Resume');
    await expect(actions.nth(2)).toHaveText('GitHub');
    await expect(actions.nth(3)).toHaveText('LinkedIn');
    await expect(actions.nth(4)).toHaveText('Contact');
  });

  test('navigation header is present and accessible', async ({ page }) => {
    await expect(page.locator('header')).toBeVisible();
    await expect(page.getByRole('navigation')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Home', exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Projects', exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: 'All Work', exact: true })).toBeVisible();
  });

  test('project cards render featured and other sections consistently', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Featured Impact' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Additional Work' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Leadership & Community' })).toBeVisible();

    const featuredCards = page.locator('.featured-grid >> article.featured-card');
    await expect(featuredCards).toHaveCount(16);
    await expect(featuredCards.first()).toContainText('View Project');
  });
});
