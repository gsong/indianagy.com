import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import netlify from "@netlify/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import { R2_ORIGIN } from "./src/lib/r2";

export default defineConfig({
  site: process.env.SITE_URL || "https://indianagy.com",
  base: process.env.SITE_BASE || "/",
  output: "static",

  integrations: [
    react(),
    sitemap({
      lastmod: new Date(),
    }),
  ],

  image: {
    // Netlify Image CDN transforms pictures on request. Its allowlist lives in
    // netlify.toml; this pattern lets Astro fetch originals for their size.
    service: { entrypoint: "@astrojs/netlify/image-service.js" },
    remotePatterns: [
      { protocol: "https", hostname: new URL(R2_ORIGIN).hostname },
    ],
    layout: "constrained",
    responsiveStyles: true, // Enabled - using wrapper-based styling to avoid cascade layer conflicts
    objectFit: "cover",
  },

  experimental: {
    contentIntellisense: true,
  },

  server: { host: true, allowedHosts: true },

  vite: {
    plugins: [
      tailwindcss(),
      // Serves /.netlify/images during `astro dev`; nothing else.
      netlify({
        blobs: { enabled: false },
        database: { enabled: false },
        edgeFunctions: { enabled: false },
        environmentVariables: { enabled: false },
        functions: { enabled: false },
      }),
    ],
  },
});
