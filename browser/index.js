module.exports = {
  "extends": "eslint-config-wizeline",
  "env": {
    "browser": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": [
    "react",
    "flowtype"
  ],
  "rules": {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/prefer-stateless-function": "error"
  }
};
