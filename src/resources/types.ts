import type { JSX } from "react";

interface Media {
  src: string;
  alt: string;
}

export interface Section {
  label?: string;
  images?: (Media | string)[];
  videos?: (Media | string)[];
}

export interface DetailMetadata {
  label: string;
  slug: string;
  href: string;
  imgSrc: string;
  highlights: string[];
  sections: Section[];
  description: () => JSX.Element;
  credit?: string;
}
