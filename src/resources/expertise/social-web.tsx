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
        alt: "Collage of 12 social media posts showing Choice tea packaging and marketing materials including product placement, flatlays, environmental consciousness and promotional quotes.",
      },
      {
        src: getImage("social-2.png"),
        alt: "Collage of 12 social media posts depicting various water-related situations, from business and leisure to water damage, repairs, and billing concerns.",
      },
    ],
  },
  {
    label: "Video",
    videos: [
      {
        src: "holiday-shipping",
        alt: "Holiday shipping announcement video. December 15th is the last day to ship for the holidays.",
      },
      {
        src: "skippy",
        alt: "Animated promotional video for the new Skippy Salted Peanut Butter Nut Roll.",
      },
      {
        src: "trail-mix",
        alt: "Promotional video suggesting using Dilettante Chocolate Covered Blueberries to elevate trail mix.",
      },
      {
        src: "cat",
        alt: "Halloween themed animated video of a black cat overlay on chocolates from Dilettante Chocolates.",
      },
      {
        src: "mark-your-calendar",
        alt: "Animated promotional video announcing upcoming sitewide savings. Text reads: Mark Your Calendar, sitewide savings ahead.",
      },
      {
        src: "cyber-monday",
        alt: "Cyber Monday promotional video, 20 percent off gift sets and 10 percent off sitewide.",
      },
    ],
  },
  {
    label: "Web",
    images: [
      {
        src: getImage("web-2.jpg"),
        alt: "Three email banner ads for the Sweets & Snacks Expo 2023, showing booths for Pearson's, Annabelle's and Dilettante and Myntz.",
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
