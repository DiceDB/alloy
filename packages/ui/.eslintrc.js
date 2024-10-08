/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@dicedb/eslint-config/react-internal.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.lint.json",
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ["jest.setup.mjs", "jest.config.mjs"],
};
