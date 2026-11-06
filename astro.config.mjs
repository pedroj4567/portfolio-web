// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://pedroacosta.dev",
  trailingSlash: "always",
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: true,
      // `/` is handled by src/pages/index.astro (detects the language).
      redirectToDefaultLocale: false,
    },
  },
  prefetch: {
    // Prefetches internal links on hover: fast navigation without loading everything upfront.
    prefetchAll: true,
    defaultStrategy: "hover",
  },
  integrations: [
    sitemap({
      // Excludes the 404s and `/` (only redirects to /es/ or /en/).
      filter: (page) => !page.includes("/404") && new URL(page).pathname !== "/",
      i18n: {
        defaultLocale: "es",
        locales: { es: "es-VE", en: "en-US" },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
