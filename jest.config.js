module.exports = {
  testEnvironment: 'jest-environment-node',
  verbose: true,
  setupFiles: ['./tests/setup.js'],
  testPathIgnorePatterns: ['/node_modules/']
}
