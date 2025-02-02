import type { JSX } from "react";

interface Image {
  src: string;
  alt: string;
}

export interface Section {
  label?: string;
  images?: (Image | string)[];
  videos?: string[];
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
