import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";


export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    ignores: ["dist/**/*", "node_modules/**/*"],
    ...js.configs.recommended
  },
  {
    files: ["src/main.js", "dist/**/*.js"],
    languageOptions: {
      sourceType: "script",
      globals: {
        ...globals.browser,
        ...globals.jquery,
        d20: "readonly",
        require: "readonly"
      }
    }
  },
  {
    files: ["src/modules/**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.node,
        module: "writable",
        require: "readonly"
      }
    }
  },
  {
    files: ["src/core/**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.node,
        __dirname: "readonly",
        module: "writable",
        require: "readonly"
      }
    }
  },
  {
    files: ["chrome-extension/**/*.js"],
    ignores: ["chrome-extension/node_modules/**/*"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.browser,
        ...globals.webextensions,
        ...globals.node,
        chrome: "readonly",
        d20: "readonly",
        __dirname: "readonly",
        module: "writable",
        require: "readonly",
        Buffer: "readonly",
        process: "readonly"
      }
    }
  }
]);
