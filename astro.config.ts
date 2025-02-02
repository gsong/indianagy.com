import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: process.env.SITE_URL || "https://indianagy.com",
  base: process.env.SITE_BASE || "/",
  output: "static",

  integrations: [
    react(),
    sitemap({
      lastmod: new Date(),
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],

  image: { remotePatterns: [{ protocol: "https", hostname: "*.r2.dev" }] },

  server: { host: true },
  vite: {
    server: { allowedHosts: true },
  },
});
