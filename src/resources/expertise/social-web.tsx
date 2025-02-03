import type { DetailMetadata } from "../types";

import { initGetImage, slugify } from "./utils";

const label = "Social + Web";

const getImage = initGetImage("social-web");

export const sections = [
  {
    label: "Campaigns",
    images: ["social-1.png", "social-2.png"].map(getImage),
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
    images: ["web-2.jpg", "web-3.jpg"].map(getImage),
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
  metaDescription:
    "Created on-brand digital content for social media and marketing, including web pages and custom graphics, enhancing storytelling and driving audience engagement.",
  credit:
    "Credit: art direction for Promise Confection website branding @Gertrude",
} satisfies DetailMetadata;
