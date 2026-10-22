import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({ baseDirectory: dirname(fileURLToPath(import.meta.url)) });

const eslintConfig = [
  { ignores: [".next/**", "out/**", "dist/**", "node_modules/**", "next-env.d.ts", "public/js/**"] },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Plain <a> and <img> are intentional: the Affinity Website Builder edits real anchors and images.
      "@next/next/no-html-link-for-pages": "off",
      "@next/next/no-img-element": "off",
      // Copy keeps literal quotes/apostrophes so Builder edits match source text exactly.
      "react/no-unescaped-entities": "off",
    },
  },
];

export default eslintConfig;
