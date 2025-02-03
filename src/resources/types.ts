import type { JSX } from "react";

interface Media {
  src: string;
  alt: string;
}

interface ImageSection {
  label?: string;
  images: Media[];
  videos?: Media[];
}

interface VideoSection {
  label?: string;
  images?: Media[];
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
  description: () => JSX.Element;
  metaDescription: string;
  credit?: string;
}
