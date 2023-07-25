// @ts-check
/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
const config = {
  _comment:
    "This config was generated using 'stryker init'. Please take a look at: https://stryker-mutator.io/docs/stryker-js/configuration/ for more information.",
  packageManager: "npm",
  reporters: ["html", "clear-text", "progress"],
  testRunner: "jest",
  testRunner_comment:
    "Take a look at (missing 'homepage' URL in package.json) for information about the jest plugin.",
  coverageAnalysis: "perTest",
  jest: {
    configFile: 'jest.config.js'
  },
  mutate: [
    '**/*.js',
    '!**/*.test.js',
    '!**/node_modules/**',
    '!**/bin/**',
    '!**/jest.config.js',
    '!**/coverage/lcov-report/**',
    '!**/*.test.e2e.js',
    '!**/stryker.config.js',
  ],
};

module.exports = config;
