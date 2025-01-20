import type { JSX } from "react";

export interface Section {
  label: string;
  images: ImageMetadata[];
}

export interface CaseStudy {
  label: string;
  href: string;
  imgSrc: ImageMetadata;
  highlights: string[];
  sections: Section[];
  description: () => JSX.Element;
  credit?: string;
}
