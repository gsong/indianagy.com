import type { ReactNode } from "react";

interface Media {
  src: string;
  alt: string;
}

interface ImageSection {
  label?: string;
  images: Media[];
  videos?: never;
}

interface VideoSection {
  label?: string;
  images?: never;
  videos: Media[];
}

export type Section = ImageSection | VideoSection;

export interface DetailMetadata {
  label: string;
  slug: string;
  href: string;
  imgSrc: string;
  highlights: string[];
  sections: Section[];
  description: () => ReactNode;
  metaDescription: string;
  credit?: string;
}
