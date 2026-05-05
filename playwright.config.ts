import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5 * 1000,
  },
  fullyParallel: true,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: 'http://127.0.0.1:1313/Aaditya_Golash',
    viewport: { width: 1280, height: 900 },
    actionTimeout: 10 * 1000,
    ignoreHTTPSErrors: true,
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
  },
  webServer: {
    command: 'hugo server --port 1313 --bind 127.0.0.1 --disableFastRender',
    port: 1313,
    reuseExistingServer: true,
    timeout: 120 * 1000,
  },
});
