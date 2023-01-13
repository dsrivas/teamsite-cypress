const { defineConfig } = require('cypress')
const getCompareSnapshotsPlugin = require('cypress-visual-regression/dist/plugin');

module.exports = defineConfig({
  viewportWidth: 1800,
  viewportHeight: 1200,
  browser: 'firefox',
  screenshotOnRunFailure: true,
  defaultCommandTimeout: 60000,
  chromeWebSecurity: false,
  experimentalSessionAndOrigin: true,
  failOnStatusCode: false,
  screenshotsFolder: 'cypress/screenshots',
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'mochawesome',
    mochawesomeReporterOptions: {
      reportDir: 'cypress/reports/mocha',
      quite: true,
      overwrite: false,
      html: false,
      json: true,
    },
  },
  env: {
    trashAssetsBeforeRuns: true,
    video: false,
    failSilently: false,
    type: 'actual'
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      getCompareSnapshotsPlugin(on, config);
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*/*.*',
  },
})
