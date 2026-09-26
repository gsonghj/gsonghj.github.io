import js from "@eslint/js"
import { defineConfig, globalIgnores } from "eslint/config"
import eslintPluginAstro from "eslint-plugin-astro"
import betterTailwindcss from "eslint-plugin-better-tailwindcss"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import tseslint from "typescript-eslint"

export default defineConfig([
  globalIgnores(["dist/", ".astro/", "node_modules/", ".claude/"]),
  js.configs.recommended,
  tseslint.configs.recommended,
  eslintPluginAstro.configs.recommended,
  {
    plugins: { "simple-import-sort": simpleImportSort },
    rules: {
      "simple-import-sort/imports": "warn",
      "simple-import-sort/exports": "warn",
    },
  },
  {
    files: ["**/*.astro"],
    extends: [betterTailwindcss.configs.recommended],
    settings: { "better-tailwindcss": { entryPoint: "src/styles/global.css" } },
    rules: {
      "better-tailwindcss/enforce-consistent-variant-order": "warn",
      "better-tailwindcss/enforce-consistent-variable-syntax": "warn",
      "better-tailwindcss/enforce-consistent-important-position": "warn",
      "better-tailwindcss/enforce-shorthand-classes": "warn",
      "better-tailwindcss/no-unknown-classes": ["error", { ignore: ["^embla"] }],
      "better-tailwindcss/enforce-consistent-line-wrapping": "off",
    },
  },
])
