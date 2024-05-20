const typescriptEslintPlugin = require('@typescript-eslint/eslint-plugin');
const typescriptEslintParser = require('@typescript-eslint/parser');
const prettierConfig = require('eslint-config-prettier');

module.exports = [
  {
    files: ["**/*.ts"],
    ignores: ["typechain-types/**/*"],
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: ".",
        ecmaVersion: 2020,
        sourceType: "module"
      }
    },
    plugins: {
      "@typescript-eslint": typescriptEslintPlugin
    },
    rules: {
      ...typescriptEslintPlugin.configs.recommended.rules,
      ...prettierConfig.rules,
      "@typescript-eslint/prefer-readonly-parameter-types": "warn",
      "@typescript-eslint/no-non-null-assertion": "off"
    }
  },
  {
    files: ["test/**/*.ts"],
    rules: {
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/prefer-readonly-parameter-types": "off"
    }
  }
];