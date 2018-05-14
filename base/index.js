module.exports = {
  extends: ['airbnb/base', 'prettier'],
  env: {
    browser: true,
    node: true,
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 2,
  },
  globals: {
    SyntheticEvent: true,
    SyntheticAnimationEvent: true,
    SyntheticClipboardEvent: true,
    SyntheticCompositionEvent: true,
    SyntheticInputEvent: true,
    SyntheticUIEvent: true,
    SyntheticFocusEvent: true,
    SyntheticKeyboardEvent: true,
    SyntheticMouseEvent: true,
    SyntheticDragEvent: true,
    SyntheticWheelEvent: true,
    SyntheticTouchEvent: true,
    SyntheticTransitionEvent: true,
  },
};
