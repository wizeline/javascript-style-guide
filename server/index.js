module.exports = {
  "extends": [
    'eslint-config-wizeline',
  ],
  "env": {
    "server": true,
    "node": true,
  },
  "rules": {
    semi: 0,
    'arrow-parens': 0,
    'class-methods-use-this': 0,
    curly: [2, 'multi-line'],
    'global-require': 'off',
    'import/extensions': ['error', 'never', { packages: 'always' }],
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': [0],
    'no-confusing-arrow': 0,
    'no-duplicate-imports': 0,
    'no-else-return': 0,
    'no-prototype-builtins': 0,
    'no-unused-vars': [2, { varsIgnorePattern: '^_+$' }],
    'no-unused-expressions': ['error', { allowTaggedTemplates: true }],
    quotes: 0,
    'react/jsx-filename-extension': 0,
    'react/no-access-state-in-setstate': 2,
    'react/sort-comp': 0,
    'symbol-description': 0,
  }
};
