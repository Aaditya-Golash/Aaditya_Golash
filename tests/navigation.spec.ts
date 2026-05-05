import { test, expect } from '@playwright/test';

const baseUrl = 'http://127.0.0.1:1313/Aaditya_Golash';
const pages = [
  { name: 'Home', path: '/' },
  { name: 'Systems', path: '/systems/' },
  { name: 'Lab', path: '/posts/' },
  { name: 'About', path: '/about/' },
  { name: 'Contact', path: '/contact/' },
];

const standardLinks = [
  { label: 'VIEW_SYSTEMS', path: '/systems/' },
  { label: 'OPEN_LAB', path: '/posts/' },
  { label: 'RESUME', path: '/resume.pdf' },
  { label: 'CONTACT', path: '/contact/' },
];

test.describe('Functional navigation and link quality', () => {
  test('top-level menu links resolve to valid layouts', async ({ page }) => {
    await page.goto('/');

    for (const entry of pages) {
      const link = page.getByRole('link', { name: entry.name, exact: true });
      await expect(link).toBeVisible();
      await Promise.all([page.waitForNavigation(), link.click()]);
      await expect(page).toHaveURL(new RegExp(`${entry.path}$`));
      await expect(page).not.toHaveTitle('404');
    }
  });

  test('hero action buttons resolve cleanly and do not create duplicate project paths', async ({ page }) => {
    await page.goto('/');

    for (const entry of standardLinks) {
      const button = page.getByRole('link', { name: entry.label, exact: true });
      await expect(button).toBeVisible();
      const href = await button.getAttribute('href');
      expect(href).toContain(entry.path);
      expect(href).not.toContain('/Aaditya_Golash/Aaditya_Golash/');
    }
  });

  test('all primary page routes return a healthy status code', async ({ page }) => {
    for (const entry of pages) {
      const url = new URL(entry.path, baseUrl).toString();
      const response = await page.request.get(url);
      expect(response.status()).toBeLessThan(400);
    }
  });
});
