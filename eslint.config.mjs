import js from "@eslint/js";
import prettier from "eslint-plugin-prettier";
import globals from "globals";

export default [
  {
    files: ["src/**/*.js"],
    ignores: ["node_modules/**", "dist/**", "build/**"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      prettier,
    },
    rules: {
      ...js.configs.recommended.rules,

      "prettier/prettier": "error",
      "no-console": "off",
      indent: ["error", 2],

      semi: ["error", "always"],
      "linebreak-style": 0,

      camelcase: ["error", { properties: "always" }],
      "id-length": ["error", { min: 2, exceptions: ["i", "j", "x", "y"] }],
      "no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },
];
