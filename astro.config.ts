import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

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

  image: { remotePatterns: [{ protocol: "https", hostname: "*.r2.dev" }] },

  server: { host: true, allowedHosts: true },

  vite: {
    plugins: [tailwindcss()],
  },
});
