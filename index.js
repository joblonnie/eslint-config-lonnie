import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import unusedImports from "eslint-plugin-unused-imports";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default defineConfig([
  {
    ignores: ["node_modules/**", "dist/**", "build/**", "coverage/**"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: {
      js,
      "unused-imports": unusedImports,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      // 🔧 unused-imports
      "unused-imports/no-unused-imports": "error",
      // 🔧 simple-import-sort
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    // React 17+ JSX Transform 지원 (React 19 포함)
    files: ["**/*.{jsx,tsx}"],
    rules: {
      "react/react-in-jsx-scope": "off", // React 17+ 새로운 JSX transform
      "react/jsx-uses-react": "off", // React import 불필요
    },
    settings: {
      react: {
        version: "detect", // package.json에서 React 버전 자동 감지
      },
    },
  },
]);
