import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    /*{
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },/*
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'edge',
      use: { ...devices['Desktop Edge'] },
    }, 
    {
      name: 'iPhone SE',
      use: { ...devices['iPhone SE'] },
    },
    {
      name: 'iPhone 11',
      use: { ...devices['iPhone 11'] },
    },
    {
      name: 'iPhone 12',
      use: { ...devices['iPhone 12'] },
    },
    {
      name: 'iPhone 13',
      use: { ...devices['iPhone 13'] },
    },
    {
      name: 'iPhone 14',
      use: { ...devices['iPhone 14'] },
    },
    {
      name: 'Galaxy S5',
      use: { ...devices['Galaxy S5'] },
    },
    {
      name: 'Galaxy S8',
      use: { ...devices['Galaxy S8'] },
    },
    {
      name: 'Galaxy S9+',
      use: { ...devices['Galaxy S9+'] },
    },*/

    /* Links */
    {
      name: 'Links iPhone 14',
      testMatch: 'tests/links.test.ts',
      use: { ...devices['iPhone 14'] },
    },
    {
      name: 'Links Galaxy S9+',
      testMatch: 'tests/links.test.ts',
      use: { ...devices['Galaxy S9+'] },
    },
    {
      name: 'Links chromium',
      testMatch: 'tests/links.test.ts',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Links firefox',
      testMatch: 'tests/links.test.ts',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'Links webkit',
      testMatch: 'tests/links.test.ts',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Links edge',
      testMatch: 'tests/links.test.ts',
      use: { ...devices['Desktop Edge'] },
    },

    /* Mobile download */
    {
      name: 'Mobile download iPhone 14',
      testMatch: 'tests/mobileDownload.test.ts',
      use: { ...devices['iPhone 14'] },
    },
    {
      name: 'Mobile download Galaxy S9+',
      testMatch: 'tests/mobileDownload.test.ts',
      use: { ...devices['Galaxy S9+'] },
    },

    /* Web download */
    {
      name: 'Web download chromium',
      testMatch: 'tests/webDownload.test.ts',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Web download firefox',
      testMatch: 'tests/webDownload.test.ts',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'Web download webkit',
      testMatch: 'tests/webDownload.test.ts',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Web download edge',
      testMatch: 'tests/webDownload.test.ts',
      use: { ...devices['Desktop Edge'] },
    },

    /* Web UI Behavior */
    {
      name: 'Web UI Behavior chromium',
      testMatch: 'tests/webUIBehavior.test.ts',
      use: { ...devices['Desktop Chrome'] },
    },
    /*{
      name: 'Web UI Behavior firefox',
      testMatch: 'tests/webUIBehavior.test.ts',
      use: { ...devices['Desktop Firefox'] },
    },
    Firefox handles mailto: links differently than other browsers. 
    In some cases, Firefox might not trigger a popup event when a mailto: link is clicked.
    */
    {
      name: 'Web UI Behavior webkit',
      testMatch: 'tests/webUIBehavior.test.ts',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Web UI Behavior edge',
      testMatch: 'tests/webUIBehavior.test.ts',
      use: { ...devices['Desktop Edge'] },
    },

    /* Mobile UI Behavior */
    {
      name: 'Mobile UI Behavior iPhone 14',
      testMatch: 'tests/mobileUIBehavior.test.ts',
      use: { ...devices['iPhone 14'] },
    },
    {
      name: 'Mobile UI Behavior Galaxy S9+',
      testMatch: 'tests/mobileUIBehavior.test.ts',
      use: { ...devices['Galaxy S9+'] },
    },
  ],

});
