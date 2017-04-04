module.exporst = {
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "ecmaVersion": 2016,
    "sourceType": "module"
  },
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
    "semi": ["error", "always"],
    "strict": ["error", "never"]
  }
};

