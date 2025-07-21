const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://somersetrah.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    }
  }
})