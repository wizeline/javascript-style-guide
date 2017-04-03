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
    "react",
    "flowtype"
  ],
  "rules": {
    "comma-dangle": [2, "always-multiline"],
    "indent": [2, 2, { "SwitchCase": 1 }],
    "keyword-spacing": "error",
    "object-curly-spacing": ["error", "always"],
    "no-multiple-empty-lines": ["error", { "max": 1 }],
    "linebreak-style": [2, "unix"],
    "max-len": [2, 120, 4, { "ignoreUrls": true }],
    "no-param-reassign": [2, { "props": false }],
    "quotes": [2, "single"],
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "semi": [2, "always"],
    "strict": [2, "never"]
  },
  "indent": [2, 2],
  "linebreak-style": [2, "unix"],
  "max-len": [2, 120, 4, { "ignoreUrls": true }],
  "no-param-reassign": [2, { "props": false }],
  "quotes": [2, "single"],
  "react/jsx-uses-react": 1,
  "react/jsx-uses-vars": 1,
  "semi": [2, "always"],
  "strict": [2, "never"]
};

module.exports = config;
