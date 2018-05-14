module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'eslint-config-wizeline',
    'prettier/react',
  ],
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/no-access-state-in-setstate': 2,
    'react/sort-comp': 0,
  },
};
