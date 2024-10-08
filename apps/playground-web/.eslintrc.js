/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@dicedb/eslint-config/next.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  env: {
    jest: true,
  },
  ignorePatterns: ['jest.setup.mjs', 'jest.config.mjs', 'out'],
};
