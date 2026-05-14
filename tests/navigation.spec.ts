import { test, expect } from '@playwright/test';
import { origin, primaryPages, sitePath, siteRoot, siteUrl } from './site';

const standardLinks = [
  { label: 'View Projects', path: sitePath('systems/') },
  { label: 'Resume', path: sitePath('resume.pdf') },
  { label: 'GitHub', path: 'https://github.com/Aaditya-Golash' },
  { label: 'LinkedIn', path: 'https://linkedin.com/in/aaditya-golash' },
  { label: 'Contact', path: sitePath('contact/') },
];

test.describe('Functional navigation and link quality', () => {
  test('top-level menu links resolve to valid layouts', async ({ page }) => {
    await page.goto(siteRoot);

    for (const entry of primaryPages) {
      const link = page.getByRole('link', { name: entry.name, exact: true });
      await expect(link).toBeVisible();
      await Promise.all([page.waitForNavigation(), link.click()]);
      await expect(page).toHaveURL(new RegExp(`${sitePath(entry.path)}$`));
      await expect(page).not.toHaveTitle('404');
    }
  });

  test('hero action buttons resolve cleanly and do not create duplicate project paths', async ({ page }) => {
    await page.goto(siteRoot);

    for (const entry of standardLinks) {
      const button = page.locator('main').getByRole('link', { name: entry.label, exact: true });
      await expect(button).toBeVisible();
      const href = await button.getAttribute('href');
      expect(href).toContain(entry.path);
      expect(href).not.toContain('/Aaditya_Golash/Aaditya_Golash/');
    }
  });

  test('all primary page routes return a healthy status code', async ({ page }) => {
    expect(origin).toMatch(/^https?:\/\//);

    for (const entry of primaryPages) {
      const response = await page.request.get(siteUrl(entry.path));
      expect(response.status()).toBeLessThan(400);
    }
  });
});
