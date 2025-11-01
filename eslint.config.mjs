import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import tailwind from "eslint-plugin-tailwindcss";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...tailwind.configs["flat/recommended"],
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  // @TODO remove below when tailwind CSS plugin updates to support v4 better
  {
    settings: {
      tailwindcss: {
        config: `${import.meta.dirname}/app/globals.css`,
      },
    },
  },
]);

export default eslintConfig;
