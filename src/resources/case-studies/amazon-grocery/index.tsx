import type { CaseStudy } from "../types";

import cardImage from "./images/card.png";
import { initGetImage } from "../utils";

const images = import.meta.glob("./images/*.{png,jpg}");

const getImage = initGetImage(images);

export const sections = [
  { label: "Store Renders", imgSrc: getImage("store-renders.png") },
  { label: "Signage", imgSrc: getImage("signage.png") },
  { label: "Website", imgSrc: getImage("website.png") },
  { label: "Digital Menus", imgSrc: getImage("menu.jpg") },
  { label: "Store Signage", imgSrc: getImage("store-signage.png") },
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
  label: "Amazon Grocery",
  href: `${import.meta.env.BASE_URL}case-study/amazon-grocery`,
  imgSrc: cardImage,
  highlights: ["Brand", "Digital", "Retail Store Environment"],
  sections,
  description,
  credit:
    "Credit: art direction @Dana Deneinger, creative director, and Amazon Go!/Grocery Team",
} satisfies CaseStudy;
