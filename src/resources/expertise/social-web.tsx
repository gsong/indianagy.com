import type { DetailMetadata, Section } from "../types";

import { initGetImage, slugify } from "./utils";

const label = "Social + Web";

const getImage = initGetImage("social-web");

export const sections: Section[] = [
  {
    label: "Campaigns",
    images: [
      {
        src: getImage("social-1.png"),
        alt: "Collage of sixteen images showing Choice tea packaging and marketing materials including product placement, flatlays, environmental consciousness and promotional quotes.",
      },
      {
        src: getImage("social-2.png"),
        alt: "Collage of 12 images depicting various water-related situations, from business and leisure to water damage, repairs, and billing concerns.",
      },
    ],
  },
  {
    label: "Video",
    videos: [
      "holiday-shipping",
      "skippy",
      "trail-mix",
      "cat",
      "mark-your-calendar",
      "cyber-monday",
    ],
  },
  {
    label: "Web",
    images: [
      {
        src: getImage("web-2.jpg"),
        alt: "Three advertisements for the Sweets & Snacks Expo 2023, showing booths for Pearson's, Annabelle's and Dilettante and Myntz.",
      },
      {
        src: getImage("web-3.jpg"),
        alt: "Six screenshots of the Annabelle's Candy Co. website, showcasing the variety of branding for different candy bars: U-No, Big Hunk, a company history banner, and Look! and Abba-Zaba.",
      },
    ],
  },
];
const description = () => (
  <p>
    I design on-brand digital content for social media and marketing campaigns,
    including web pages, animated GIFs, and custom graphics, to strengthen brand
    presence. I develop engaging content and visuals to drive audience
    interaction and elevate storytelling, focusing on connecting with consumers
    while staying true to the brand’s unique style and voice.
  </p>
);

export default {
  label,
  ...slugify(label),
  imgSrc: getImage("card.png"),
  highlights: [
    "Brand Strategy",
    "Design",
    "Content",
    "Animation",
    "Campaigns",
    "Photography",
  ],
  sections,
  description,
  credit:
    "Credit: art direction for Promise Confection website branding @Gertrude",
} satisfies DetailMetadata;
