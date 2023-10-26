const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'pdm3nr',
  e2e: {
    baseUrl: 'http://localhost:8000'
  },
});
