import type { DetailMetadata } from "../types";

import { initGetImage, slugify } from "./utils";

const label = "Amazon Grocery";

const getImage = initGetImage("amazon-grocery");

export const sections = [
  { label: "Store Renders", images: [getImage("store-renders.png")] },
  { label: "Signage", images: [getImage("signage.png")] },
  { label: "Website", images: [getImage("website.png")] },
  { label: "Digital Menus", images: [getImage("menu.jpg")] },
  { label: "Store Signage", images: [getImage("store-signage.png")] },
];

const description = () => (
  <p>
    As graphic designer, I created digital and print programmatic signage and
    that highlighted the innovative character of Amazon's new store, while
    adapting the brand's new expression into cohesive visual materials.
    Collaborating with the copywriter and art director, I ensured seamless
    integration of brand messaging across mediums, delivering an engaging and
    impactful customer experience.
  </p>
);

export default {
  label,
  ...slugify(label),
  imgSrc: getImage("card.png"),
  highlights: ["Brand", "Digital", "Retail Store Environment"],
  sections,
  description,
  credit:
    "Credit: art direction @Dana Deneinger, creative director, and Amazon Go!/Grocery Team",
} satisfies DetailMetadata;
