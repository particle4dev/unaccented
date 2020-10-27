// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = Object.assign(
  {},
  require('@penguin-ui/global-configuration/jest/jest.config.common'),
  require('@penguin-ui/global-configuration/jest/jest.config.typescript'),
  {
    testEnvironment: 'node',
    transformIgnorePatterns: [
      '/node_modules/'
    ],
    coveragePathIgnorePatterns: [
      '/node_modules/'
    ],
    moduleNameMapper: {
      // '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/mocks.js',
      // '\\.(css|less)$': '<rootDir>/__mocks__/mocks.js'
    },
    // snapshotSerializers: ['enzyme-to-json/serializer'],
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.jest.json'
      }
    }
  }
)
