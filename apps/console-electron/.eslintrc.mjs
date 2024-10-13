module.exports = {
  root: true,
  extends: ['@dicedb/eslint-config/next.js', 'next/typescript'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true, // To enable type-aware linting
  },
  ignorePatterns: ['out'],
};
