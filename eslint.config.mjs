import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";


export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    ignores: [
      "dist/**/*",
      "node_modules/**/*",
      "*.min.js",
      "*.bundle.js",
      "landing-page/package/**/*",
      "src/core/update/test-manual-check.js"
    ],
    ...js.configs.recommended
  },
  {
    files: ["src/main.js"],
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
    files: ["src/core/update/**/*.js"],
    languageOptions: {
      sourceType: "script",
      globals: {
        ...globals.browser,
        ...globals.es2021,
        MutationObserver: "readonly"
      }
    }
  },
  {
    files: ["src/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.node,
        module: "writable",
        require: "readonly",
        console: "readonly"
      }
    }
  },
  {
    files: ["landing-page/update-landing-page.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.node,
        __dirname: "readonly",
        module: "writable",
        require: "readonly",
        process: "readonly",
        console: "readonly"
      }
    }
  },
  {
    files: ["landing-page/script.js"],
    languageOptions: {
      sourceType: "script",
      globals: {
        ...globals.browser,
        ...globals.es2021
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
