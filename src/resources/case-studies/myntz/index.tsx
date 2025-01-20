import type { DetailMetadata } from "../../types";

import { initGetImage } from "../../utils";
import { slugify } from "../utils";

const label = "Myntz! Breathmints";

const images = import.meta.glob("./images/*.{png,jpg}");
const getImage = initGetImage(images);

export const sections = [
  {
    label: "Strategy",
    images: ["strategy-1.png", "strategy-2.png"].map(getImage),
  },
  { label: "Photography Art Direction", images: [getImage("photo.png")] },
  {
    label: "Packaging",
    images: ["packaging-1.png", "packaging-2.png"].map(getImage),
  },
  { label: "Store Displays", images: [getImage("store.png")] },
];

const description = () => (
  <p>
    When the brand transitioned to cleaner ingredients, I saw a chance to
    revitalize its visual identity. I modernized the packaging and logo design
    to reflect this change while supporting the introduction of new flavors.
    This case study showcases how I helped the brand refresh its image while
    staying true to its market presence.
  </p>
);

export default {
  label,
  ...slugify(label),
  imgSrc: getImage("card.png"),
  highlights: [
    "Brand Strategy",
    "Photography Art Direction",
    "Logo Redesign",
    "Color",
    "Packaging Redesign",
    "POS Design",
  ],
  sections,
  description,
  credit: "Credit: Myntz! on solid blue backgrounds @Julee Ho and team",
} satisfies DetailMetadata;
