import type { Detail } from "@/resources/detail-kind";

import { CDN_RESOURCES } from "./r2";

export interface PageMetadata {
  /** The page's own URL, for og:url and twitter:url. */
  url: string;
  title: string;
  description: string;
  ogImage: OgImage;
  jsonLd: Record<string, unknown>[];
}

export interface OgImage {
  src: string;
  width: number;
  height: number;
  /** When true, Netlify Image CDN must crop `src` to width × height. */
  crop: boolean;
}

/**
 * Describes a page for search engines and link previews. A detail page
 * passes its detail; every other page gets the site defaults.
 */
export const pageMetadata = ({
  site,
  pageUrl,
  detail,
}: {
  /** The site's root URL, e.g. "https://indianagy.com". */
  site: string;
  pageUrl: string;
  detail?: Detail;
}): PageMetadata => {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PERSON,
    jobTitle: JOB_TITLE,
    url: site,
    description: PERSON_DESCRIPTION,
    knowsAbout: KNOWS_ABOUT,
  };

  if (!detail) {
    return {
      url: pageUrl,
      title: `${PERSON} | ${JOB_TITLE}`,
      description: SITE_DESCRIPTION,
      ogImage: SOCIAL_CARD,
      jsonLd: [person],
    };
  }

  return {
    url: pageUrl,
    title: `${PERSON} | ${detail.kind} | ${detail.label}`,
    description: detail.metaDescription,
    ogImage: { src: detail.card, width: 1200, height: 630, crop: true },
    jsonLd: [
      person,
      {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: detail.label,
        author: { "@type": "Person", name: PERSON },
        description: detail.metaDescription,
        image: detail.card,
        url: pageUrl,
      },
    ],
  };
};

const PERSON = "India Nagy";
const JOB_TITLE = "Art Director & Graphic Designer";
const PERSON_DESCRIPTION =
  "Creative and versatile Art Director and Graphic Designer with extensive experience shaping iconic brands.";
const SITE_DESCRIPTION =
  "Creative and versatile Art Director and Graphic Designer with extensive experience shaping iconic brands. Passionate about storytelling, collaboration, and turning curiosity into impactful design solutions.";
const KNOWS_ABOUT = [
  "Graphic Design",
  "Art Direction",
  "Illustration",
  "Photography",
  "Packaging Design",
  "Social Media Design",
  "Environmental Graphics",
  "Print Design",
];
const SOCIAL_CARD: OgImage = {
  src: CDN_RESOURCES.SOCIAL_CARD,
  width: 1280,
  height: 672,
  crop: false,
};
