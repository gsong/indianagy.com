import type { DetailMetadata } from "../../types";

import { slugify } from "../utils";
import { initGetImage } from "../../utils";

const label = "Illustration";

const images = import.meta.glob("./images/*.{png,jpg}");
const getImage = initGetImage(images);

export const sections = [
  {
    images: ["01.png", "02.png", "03.png", "04.png", "05.png"].map(getImage),
  },
];

const description = () => (
  <p>
    With a passion for exploration, I bring a fresh approach and creative ideas
    to each project with a mix of techniques and media.
  </p>
);

export default {
  label,
  ...slugify(label),
  imgSrc: getImage("card.png"),
  highlights: [
    "Visual Storytelling",
    "Creative Concepting",
    "Technical Expertise",
  ],
  sections,
  description,
} satisfies DetailMetadata;
