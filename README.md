# India Nagy Portfolio Website

This repository contains the source code for India Nagy's portfolio website, built using Astro.

## Deployment

The site is deployed on **Netlify** at: [https://indianagy.com](https://indianagy.com)

## Project Structure

- `components/`: Reusable Astro and React components, including UI elements and content display components.
- `layouts/`: Layout components for the site's overall structure (header, footer, base layout).
- `lib/`: Utility functions, such as helper functions for Tailwind CSS.
- `pages/`: Astro pages for different routes, including the homepage, about page, contact page, and dynamic routes for case studies and expertise.
- `resources/`: Data and utility files for case studies, areas of expertise, and shared types/utils.
  - `case-studies/`: Data files for individual case studies.
  - `expertise/`: Data files for individual areas of expertise.
- `styles/`: CSS files.

## Image Storage

Most of the images used on the site are stored on Cloudflare R2:

- Case study images are stored in a dedicated R2 bucket.
- Expertise images are stored in a separate dedicated R2 bucket.

These URLs are used in utility functions to generate image paths.
Other images are in `public/` folder.

## Key Points

- **Astro:** The project uses Astro for building the site, which allows for component-based architecture and great performance.
- **React:** React is used for interactive components, such as the contact form, via `@astrojs/react`.
- **Tailwind CSS:** Tailwind CSS is used for styling, enabling rapid development and a consistent visual language.
- **R2 Storage:** R2 is used to host most of the images, separating the static assets from the codebase.
- **Data-Driven Pages:** Case studies and expertise pages are generated dynamically using data from the `resources/` directory.
- **Sitemap:** The `@astrojs/sitemap` integration generates a sitemap for SEO.

## Available `pnpm` Commands

The following `pnpm` commands are available for development and deployment:

- `pnpm build`: Builds the Astro site for production. It also includes a step to clear the Astro cache if the `CLEAR_CACHE` environment variable is set to `true` (e.g., `CLEAR_CACHE=true pnpm build`).
  - **Note:** In order to clear the Astro build cache in Netlify, you must set the `CLEAR_CACHE` environment variable in your Netlify project settings.
- `pnpm run deploy`: Builds the site using `netlify build` and then deploys it to Netlify production using `netlify deploy --prod`.
- `pnpm dev`: Starts the Astro development server.
- `pnpm postinstall`: This script runs after `pnpm install`. It checks if `jq` (a command-line JSON processor) is available. If it is, the script updates the `package.json` file with the current version of pnpm. This ensures that the `packageManager` field reflects the actual pnpm version used.
- `pnpm preview`: Runs the Netlify preview server.

This README provides a general overview of the project. For more specific information, please refer to the source code.
