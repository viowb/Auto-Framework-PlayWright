import { defineConfig, devices } from '@playwright/test';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  retries : 1,
  timeout: 50 * 1000,
  expect: {
    timeout: 15000, 
  },

  reporter: [['html', { open: 'on-failure' }]],
  
  use: {
   browserName: 'chromium', 
    headless : false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },
});
