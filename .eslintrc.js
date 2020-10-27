const baseConfig = require("@penguin-ui/global-configuration/eslint/eslint-config-typescript")

module.exports = {
  ...baseConfig,
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true,
    "jest": true
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": false
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
    ...baseConfig.rules,
    "indent": [
      "error",
      2
    ],
    "semi": [
      "error",
      "never"
    ],
  }
}
