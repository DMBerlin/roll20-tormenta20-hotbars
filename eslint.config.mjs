import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";


export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    ignores: ["dist/**/*", "node_modules/**/*"],
    plugins: { js },
    extends: ["js/recommended"]
  },
  {
    files: ["**/*.js"],
    ignores: ["dist/**/*", "node_modules/**/*", "src/components/**/*.js", "src/core/**/*.js"],
    languageOptions: { sourceType: "commonjs" }
  },
  {
    files: ["src/components/**/*.js"],
    languageOptions: {
      sourceType: "module",
      globals: globals.browser
    }
  },
  {
    files: ["src/**/*.{js,mjs,cjs}"],
    ignores: ["src/components/**/*.js"],
    languageOptions: { globals: globals.browser }
  },
  {
    files: ["src/core/**/*.js"],
    languageOptions: {
      sourceType: "module",
      globals: globals.node
    }
  },
  {
    files: ["scripts/**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: globals.node
    }
  },
  {
    files: ["update-version.js"],
    languageOptions: { globals: globals.node }
  },
]);
