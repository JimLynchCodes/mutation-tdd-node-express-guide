const config = {
    verbose: true,

    collectCoverageFrom: [
        '**/*.js',
        '!**/node_modules/**',
        '!**/bin/**',
        '!**/jest.config.js',
        '!**/coverage/lcov-report/**',
        '!**/*.test.e2e.js',
        '!**/stryker.config.js',
    ],
    testMatch: [
        '**/*.test.js'
    ]
};

module.exports = config;