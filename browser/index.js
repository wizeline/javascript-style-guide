module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint-config-wizeline',
    'prettier/flowtype',
    'prettier/react',
    'plugin:flowtype/recommended',
  ],
  plugins: ['react', 'flowtype', 'flowtype-errors'],
  rules: {
    semi: 0,
    'arrow-parens': 0,
    'class-methods-use-this': 0,
    curly: [2, 'multi-line'],
    'flowtype-errors/enforce-min-coverage': [2, 70],
    'flowtype-errors/show-errors': 2,
    'flowtype/boolean-style': [2, 'boolean'],
    'flowtype/no-dupe-keys': 2,
    'flowtype/object-type-delimiter': 2,
    'flowtype/require-valid-file-annotation': [
      2,
      'always',
      { annotationStyle: 'line' },
    ],
    'flowtype/union-intersection-spacing': [2, 'always'],
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
  },
};
