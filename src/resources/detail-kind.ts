import _slugify from "@sindresorhus/slugify";
import type { ReactNode } from "react";

import { r2Url } from "@/lib/r2";

/** A detail as its content file writes it: pictures and videos by file name. */
export interface DetailSource {
  label: string;
  /** The detail's folder inside its kind's R2 folder. */
  folder: string;
  /** File name of the card picture. */
  card: string;
  highlights: string[];
  sections: SectionSource[];
  description: () => ReactNode;
  metaDescription: string;
  credit?: string;
}

export type SectionSource =
  | { label?: string; images: MediaSource[]; videos?: never }
  | { label?: string; videos: MediaSource[]; images?: never };

/** A file name (a picture) or a name in public/videos (a video). */
interface MediaSource {
  src: string;
  alt: string;
}

/** A detail with every picture and video resolved to URLs. */
export interface Detail {
  /** Name of the detail's kind, e.g. "Case Study". */
  kind: string;
  label: string;
  slug: string;
  href: string;
  /** URL of the card picture. */
  card: string;
  highlights: string[];
  sections: Section[];
  description: () => ReactNode;
  metaDescription: string;
  credit?: string;
}

export type Section =
  | { label?: string; images: Picture[]; videos?: never }
  | { label?: string; videos: Video[]; images?: never };

export interface Picture {
  src: string;
  alt: string;
}

export interface Video {
  alt: string;
  poster: string;
  webm: string;
  mp4: string;
}

export interface DetailPage {
  detail: Detail;
  previous: Detail | null;
  next: Detail | null;
}

export interface DetailCard {
  label: string;
  href: string;
  picture: string;
  ariaLabel: string;
}

export interface DetailKind {
  name: string;
  /** Every detail, in listing order. */
  details: Detail[];
  /** Astro getStaticPaths for the kind's `[slug]` page. */
  staticPaths: () => {
    params: { slug: string };
    props: { page: DetailPage };
  }[];
  /** Throws when no detail has this slug. */
  page: (slug: string) => DetailPage;
  cards: () => DetailCard[];
}

/**
 * Builds a detail kind from its content files. Throws when two details
 * share a slug.
 */
export const defineDetailKind = ({
  name,
  route,
  r2Folder,
  details: sources,
}: {
  name: string;
  /** URL path segment of the kind's pages, e.g. "case-study". */
  route: string;
  /** Top-level R2 folder of the kind's pictures, e.g. "case-studies". */
  r2Folder: string;
  details: DetailSource[];
}): DetailKind => {
  const details = sources.map((source) =>
    resolveDetail(source, { name, route, r2Folder }),
  );
  assertUniqueSlugs(name, details);

  const page = (slug: string): DetailPage => {
    const index = details.findIndex((detail) => detail.slug === slug);
    if (index === -1) {
      throw new Error(`No ${name} has the slug "${slug}"`);
    }
    return {
      detail: details[index],
      previous: details[index - 1] ?? null,
      next: details[index + 1] ?? null,
    };
  };

  return {
    name,
    details,
    page,
    staticPaths: () =>
      details.map(({ slug }) => ({
        params: { slug },
        props: { page: page(slug) },
      })),
    cards: () =>
      details.map(({ label, href, card }) => ({
        label,
        href,
        picture: card,
        ariaLabel: `View ${label} ${name.toLowerCase()}`,
      })),
  };
};

const resolveDetail = (
  { folder, card, sections, ...rest }: DetailSource,
  kind: { name: string; route: string; r2Folder: string },
): Detail => {
  const slug = _slugify(rest.label);
  const picture = (file: string) => r2Url(kind.r2Folder, folder, file);

  return {
    ...rest,
    kind: kind.name,
    slug,
    href: `${import.meta.env.BASE_URL}${kind.route}/${slug}`,
    card: picture(card),
    sections: sections.map(
      (section): Section =>
        section.videos
          ? { label: section.label, videos: section.videos.map(resolveVideo) }
          : {
              label: section.label,
              images: section.images.map(({ src, alt }) => ({
                src: picture(src),
                alt,
              })),
            },
    ),
  };
};

const resolveVideo = ({ src, alt }: MediaSource): Video => {
  const file = (ext: string) =>
    `${import.meta.env.BASE_URL}videos/${src}.${ext}`;
  return { alt, poster: file("jpg"), webm: file("webm"), mp4: file("mp4") };
};

const assertUniqueSlugs = (name: string, details: Detail[]) => {
  const seen = new Set<string>();
  for (const { slug } of details) {
    if (seen.has(slug)) {
      throw new Error(`Two ${name} details share the slug "${slug}"`);
    }
    seen.add(slug);
  }
};
