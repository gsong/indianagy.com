// Origin of the R2 bucket that holds portfolio pictures and the resume.
// astro.config.ts reads its hostname; netlify.toml repeats it, and
// r2.test.ts checks that copy.
export const R2_ORIGIN = "https://assets.indianagy.com";

/** Joins path segments onto the R2 origin. */
export const r2Url = (...segments: string[]): string =>
  [R2_ORIGIN, ...segments].join("/");

export const CDN_RESOURCES = {
  SOCIAL_CARD: r2Url("social-card.jpg"),
  RESUME_PDF: r2Url("resume.pdf"),
  ABOUT_IMAGE: r2Url("about.jpg"),
} as const;
