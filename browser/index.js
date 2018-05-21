module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'eslint-config-wizeline',
    'prettier/react',
  ],
  env: {
    browser: true,
  },
  plugins: [
    'react',
  ],
  rules: {
    'global-require': 'off',
    'react/jsx-filename-extension': 0,
    'react/no-access-state-in-setstate': 2,
    'react/sort-comp': 0,
  },
};
