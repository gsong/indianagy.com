---
status: accepted
---

# Transform portfolio pictures at request time with Netlify Image CDN

Sharp used to resize and re-encode portfolio pictures during `astro build`. 62 R2 originals became 1,860 files. That took 170 s and 38 CPU-minutes on a 16-core laptop, and 626 s on Netlify CI. Netlify's legacy Free plan allows 300 build minutes a month and one build at a time. Every push waited behind that work. Now the build emits Netlify Image CDN URLs. Netlify transforms each picture when a browser first asks for it. This removes the build image cache, `netlify-plugin-cache`, and the local `netlify build` deploy path.

## Considered Options

- **Keep build-time transforms and tune the cache.** Rejected: even a warm cache needs restoring and revalidating on every CI build, and any width or quality change makes the next build cold again.
- **Install the `@astrojs/netlify` adapter.** Rejected: the adapter switches the build output to server mode even when every page is prerendered. It then deploys a catch-all function at `/*`, so every 404 counts against the function quota. We use only the adapter's image service (`@astrojs/netlify/image-service.js`), list R2 under `[images]` in `netlify.toml`, and add `@netlify/vite-plugin` so `astro dev` serves `/.netlify/images`.
- **Cloudflare Image Transformations.** Rejected: it means moving hosting off Netlify. The `@astrojs/cloudflare` adapter's `imageService: "cloudflare"` builds transform URLs under `/cdn-cgi/image/` on the site's own domain. Those URLs work only when Cloudflare hosts or proxies the site. The Free plan's cap of 5,000 unique transforms a month is not the obstacle, because the build emits about 300. Reconsider if the Netlify usage page shows an Image Transformations charge or bandwidth near the 100 GB limit.

## Consequences

- `astro preview` cannot render pictures, because nothing local answers `/.netlify/images`. Use `netlify serve` instead.
- The legacy pricing docs list no charge for Image CDN usage. Check the "Image Transformations" and bandwidth lines on the Netlify usage page after the first deploy, and again if traffic grows.
