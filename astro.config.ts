import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: process.env.SITE_URL || "https://indianagy.com",
  base: process.env.SITE_BASE || "/",
  output: "static",

  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],

  image: {
    domains: ["pub-2b21573a122e4116b29744d5dfaf96d6.r2.dev"],
  },

  server: { host: true },
  vite: {
    server: { allowedHosts: true },
  },
});
