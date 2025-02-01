import type { JSX } from "react";

export interface Section {
  label?: string;
  description?: string;
  images?: string[];
  videos?: string[];
}

export interface DetailMetadata {
  label: string;
  slug: string;
  href: string;
  imgSrc: string;
  highlights: string[];
  sections: Section[];
  description?: () => JSX.Element;
  credit?: string;
}
