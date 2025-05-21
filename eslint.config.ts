import js from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";
import stylistic from "@stylistic/eslint-plugin";

export default [
  // Base ESLint recommended rules
  js.configs.recommended,

  // TypeScript recommended rules
  ...tseslint.configs.recommended,

  // Global configuration
  {
    files: ["**/*.js", "**/*.ts"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      "@stylistic": stylistic,
    },
    rules: {
      // Stylistic rules
      "@stylistic/keyword-spacing": ["error", {
        after: true,
        overrides: {
          switch: { after: true }, // Explicitly enforce space after "switch"
        },
      }],
      "@stylistic/max-statements-per-line": ["error", { max: 1 }],
      "@stylistic/eol-last": ["error", "always"],
      "@stylistic/no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
      "@stylistic/padded-blocks": ["error", "never"],
      "@stylistic/space-infix-ops": "error",
      "@stylistic/space-in-parens": ["error", "never"],
      "@stylistic/no-trailing-spaces": "error",
      "@stylistic/comma-dangle": ["error", "always-multiline"],
      "@stylistic/indent": ["error", 2],

      // You can keep/add other rules here
    },
  },
];
