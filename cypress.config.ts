import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL || 'https://example.cypress.io',
    specPattern: 'cypress/e2e/**/*.cy.ts',
    supportFile: 'cypress/support/e2e.ts',
    fixturesFolder: 'cypress/fixtures',
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    defaultCommandTimeout: 10_000,
    requestTimeout: 15_000,
    pageLoadTimeout: 30_000,
    viewportWidth: 1440,
    viewportHeight: 900,
    retries: {
      runMode: 1,
      openMode: 0
    },
    video: true,
    screenshotOnRunFailure: true,
    reporter: 'junit',
    reporterOptions: {
      mochaFile: 'reports/junit-[hash].xml',
      toConsole: true
    },
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.family === 'chromium' && browser.isHeadless) {
          launchOptions.args.push('--disable-dev-shm-usage');
        }
        return launchOptions;
      });
      return config;
    }
  }
});
