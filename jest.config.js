module.exports = {
  preset: 'ts-jest',
  testMatch: ['**/tests/**/*.ts'],
  testEnvironment: 'node',
  moduleDirectories: ['node_modules', 'src'],
  maxWorkers: 4
}

