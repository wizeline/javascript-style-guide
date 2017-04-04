module.exports = {
  "extends": "eslint-config-wizeline",
  "env": {
    "browser": true
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "react/prefer-stateless-function": "error"
  }
};
