---
status: accepted
---

# Transform portfolio pictures at request time with Netlify Image CDN

Sharp used to resize and re-encode portfolio pictures during `astro build`. 62 R2 originals became 1,860 files. That took 170 s and 38 CPU-minutes on a 16-core laptop, and 626 s on Netlify CI. Netlify's legacy Free plan allows 300 build minutes a month and one build at a time. Every push waited behind that work. Now the build emits Netlify Image CDN URLs. Netlify transforms each picture when a browser first asks for it. This removes the build image cache, `netlify-plugin-cache`, and the local `netlify build` deploy path.

## Considered Options

- **Keep build-time transforms and tune the cache.** Rejected: even a warm cache needs restoring and revalidating on every CI build, and any width or quality change makes the next build cold again.
- **Install the `@astrojs/netlify` adapter.** Rejected: the adapter switches the build output to server mode even when every page is prerendered. It then deploys a catch-all function at `/*`, so every 404 counts against the function quota. We use only the adapter's image service (`@astrojs/netlify/image-service.js`), list R2 under `[images]` in `netlify.toml`, and add `@netlify/vite-plugin` so `astro dev` serves `/.netlify/images`.
- **Cloudflare Image Transformations on assets.indianagy.com.** Rejected: the Free plan caps unique transforms at 5,000 a month and returns errors past that, and no maintained Astro image service builds Cloudflare transform URLs, so we would have to write and maintain one.

## Consequences

- `astro preview` cannot render pictures, because nothing local answers `/.netlify/images`. Use `netlify serve` instead.
- The legacy pricing docs list no charge for Image CDN usage. Check the "Image Transformations" and bandwidth lines on the Netlify usage page after the first deploy, and again if traffic grows.
