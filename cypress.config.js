const { defineConfig } = require('cypress')
const getCompareSnapshotsPlugin = require('cypress-visual-regression/dist/plugin');

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  browser: 'chrome',
  video: false,
  screenshotOnRunFailure: true,
  defaultCommandTimeout: 10000,
  chromeWebSecurity: false,
  failOnStatusCode: false,
  downloadsFolder: 'cypress/downloads',
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
    slowMo: 50,
    font: 'Arial',
    failSilently: true,
    type: 'actual'
  },
//  imageSnapshot = {
//    capture: 'viewport',
//    exact: true
//  },
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
