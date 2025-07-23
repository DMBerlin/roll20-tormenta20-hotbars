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
    ignores: ["dist/**/*", "node_modules/**/*"],
    languageOptions: { sourceType: "commonjs" }
  },
  {
    files: ["src/**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.browser }
  },
  {
    files: ["src/core/**/*.js"],
    languageOptions: { globals: globals.node }
  },
  {
    files: ["update-version.js"],
    languageOptions: { globals: globals.node }
  },
]);
