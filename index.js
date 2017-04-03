const config = {
  "env": {
    "browser": true,
    "es6": true,
    "mocha": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "comma-dangle": ["error", "always-multiline"],
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "keyword-spacing": "error",
    "object-curly-spacing": ["error", "always"],
    "no-multiple-empty-lines": ["error", { "max": 1 }],
    "linebreak-style": ["error", "unix"],
    "max-len": ["error", 120, 4, { "ignoreUrls": true }],
    "no-param-reassign": ["error", { "props": false }],
    "quotes": ["error", "single"],
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "semi": ["error", "always"],
    "strict": ["error", "never"]
  },
  "indent": ["error", 2],
  "linebreak-style": ["error", "unix"],
  "max-len": ["error", 120, 4, { "ignoreUrls": true }],
  "no-param-reassign": ["error", { "props": false }],
  "quotes": ["error", "single"],
  "react/jsx-uses-react": 1,
  "react/jsx-uses-vars": 1,
  "semi": ["error", "always"],
  "strict": ["error", "never"]
};

module.exports = config;
