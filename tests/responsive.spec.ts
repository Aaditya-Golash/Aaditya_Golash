import { test, expect } from '@playwright/test';
import { projectPages, sitePath, siteRoot } from './site';

const checkedRoutes = [
  siteRoot,
  sitePath('systems/'),
  sitePath('posts/'),
  sitePath('contact/'),
  ...projectPages.slice(0, 6).map((path) => sitePath(path)),
];

const viewports = [
  { name: 'desktop', width: 1440, height: 1000 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 390, height: 844 },
  { name: 'narrow', width: 320, height: 740 },
];

test.describe('Responsive layout and visual stability', () => {
  for (const viewport of viewports) {
    test(`no horizontal overflow or clipped text at ${viewport.name}`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });

      for (const route of checkedRoutes) {
        await page.goto(route, { waitUntil: 'networkidle' });

        const result = await page.evaluate(() => {
          const doc = document.documentElement;
          const overflowingElements = [];
          const selectors = 'h1,h2,h3,p,a,button,label,input,textarea,pre,.role-pill,.proof-strip span';

          for (const el of document.querySelectorAll<HTMLElement>(selectors)) {
            const rect = el.getBoundingClientRect();
            if (rect.width === 0 || rect.height === 0) continue;
            if (rect.left < -2 || rect.right > doc.clientWidth + 2) {
              overflowingElements.push({
                tag: el.tagName,
                text: (el.innerText || el.getAttribute('aria-label') || '').trim().slice(0, 80),
              });
            }
          }

          const scrollingAscii = [...document.querySelectorAll<HTMLElement>('pre')]
            .filter((el) => getComputedStyle(el).display !== 'none')
            .filter((el) => el.scrollWidth > el.clientWidth + 2)
            .map((el) => el.innerText.trim().split('\n')[0]);

          return {
            pageOverflow: doc.scrollWidth - doc.clientWidth,
            overflowingElements,
            scrollingAscii,
          };
        });

        expect.soft(result.pageOverflow, `${route} page overflow`).toBeLessThanOrEqual(2);
        expect.soft(result.overflowingElements, `${route} clipped elements`).toEqual([]);
        expect.soft(result.scrollingAscii, `${route} ASCII overflow`).toEqual([]);
      }
    });
  }

  test('mobile project pages keep ASCII covers and readable titles', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });

    for (const path of projectPages) {
      await page.goto(sitePath(path));
      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('.ascii-cover-art').first()).toBeVisible();

      const titleMetrics = await page.locator('h1').first().evaluate((heading) => {
        const rect = heading.getBoundingClientRect();
        const styles = getComputedStyle(heading);
        return {
          right: rect.right,
          viewportWidth: document.documentElement.clientWidth,
          fontSize: Number.parseFloat(styles.fontSize),
        };
      });

      expect(titleMetrics.right).toBeLessThanOrEqual(titleMetrics.viewportWidth + 2);
      expect(titleMetrics.fontSize).toBeLessThanOrEqual(36);
    }
  });
});
