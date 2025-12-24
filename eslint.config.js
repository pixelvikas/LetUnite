import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: ["dist", "node_modules"],
  },

  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      /* Base JS */
      ...js.configs.recommended.rules,

      /* React */
      ...react.configs.recommended.rules,
      "react/react-in-jsx-scope": "off", // React 17+

      /* Hooks */
      ...reactHooks.configs.recommended.rules,

      /* Fast Refresh (Vite) */
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      /* Clean code */
      "no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^[A-Z_]",
        },
      ],
    },
  },
]);
