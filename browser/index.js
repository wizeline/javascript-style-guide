module.exports = {
  extends: [
    'eslint-config-wizeline',
    'plugin:flowtype/recommended',
    'prettier/flowtype',
    'prettier/react',
  ],
  env: {
    browser: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['react', 'flowtype'],
  rules: {
    'react/jsx-filename-extension': 0,
  },
};
