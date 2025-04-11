const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber());
    },
    env: {
      baseUrl: process.env.CYPRESS_BASE_URL,
      username: process.env.CYPRESS_USERNAME,
      password: process.env.CYPRESS_USER_PASSWORD,
      firstName: process.env.CYPRESS_USER_FIRSTNAME,
      lastName: process.env.CYPRESS_USER_LASTNAME,
      postalCode: process.env.CYPRESS_USER_POSTAL_CODE,
    },
    specPattern: 'cypress/e2e/features/*.feature',
  },
});
