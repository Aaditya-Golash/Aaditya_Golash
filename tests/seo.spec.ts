import { test, expect } from '@playwright/test';
import { primaryPages, projectPages, sitePath, siteRoot } from './site';

const description =
  'UBC BSc Computer Science major and Management minor building workflow, data, and product systems for real operational problems.';

test.describe('SEO, sharing metadata, and crawler basics', () => {
  test('homepage exposes useful metadata for recruiters and link previews', async ({ page }) => {
    await page.goto(siteRoot);

    await expect(page).toHaveTitle(/Aaditya Golash/);
    await expect(page.locator('html')).toHaveAttribute('lang', /en/);
    await expect(page.locator('meta[name="viewport"]')).toHaveAttribute('content', /width=device-width/);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', description);
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', /Aaditya Golash/);
    await expect(page.locator('meta[property="og:description"]')).toHaveAttribute('content', description);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', /\/Aaditya_Golash\/$/);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /index/);
  });

  test('primary and project pages have one visible h1 and canonical URLs', async ({ page }) => {
    const routes = [
      ...primaryPages.map((entry) => entry.path),
      ...projectPages,
    ];

    for (const route of routes) {
      await page.goto(sitePath(route));
      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', /^https:\/\/aaditya-golash\.github\.io\/Aaditya_Golash\//);
      await expect(page.locator('meta[name="description"], meta[property="og:description"]').first()).toHaveAttribute('content', /.+/);
    }
  });

  test('links avoid broken internal paths and unsafe new-tab behavior', async ({ page }) => {
    await page.goto(siteRoot);

    const links = await page.locator('a').evaluateAll((anchors) =>
      anchors.map((anchor) => ({
        text: anchor.textContent?.trim() ?? '',
        href: anchor.getAttribute('href') ?? '',
        target: anchor.getAttribute('target') ?? '',
        rel: anchor.getAttribute('rel') ?? '',
      })),
    );

    expect(links.length).toBeGreaterThan(0);
    expect(links.filter((link) => link.href.includes('/Aaditya_Golash/Aaditya_Golash/'))).toEqual([]);
    expect(links.filter((link) => link.href.startsWith('javascript:'))).toEqual([]);
    expect(links.filter((link) => link.target === '_blank' && !link.rel.includes('noopener'))).toEqual([]);
    expect(links).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ text: 'GitHub', href: 'https://github.com/Aaditya-Golash', target: '_blank' }),
        expect.objectContaining({ text: 'LinkedIn', href: 'https://linkedin.com/in/aaditya-golash', target: '_blank' }),
      ]),
    );
  });
});
