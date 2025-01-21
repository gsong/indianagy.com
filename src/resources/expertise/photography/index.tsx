import type { DetailMetadata } from "../../types";

import { slugify } from "../utils";
import { initGetImage } from "../../utils";

const label = "Photography Art Direction";

const images = import.meta.glob("./images/*.{png,jpg}");
const getImage = initGetImage(images);

export const sections = [
  {
    label: "Packaging Imagery",
    images: ["packaging-1.png", "packaging-2.png"].map(getImage),
  },
  {
    label: "Marketing Imagery",
    images: ["marketing-1.png", "marketing-2.png", "marketing-3.png"].map(
      getImage,
    ),
  },
];

const description = () => (
  <p>
    When I provide art direction for photo shoots, I focus on showcasing product
    and packaging through thoughtful placement, cohesive styling, and
    trend-driven visuals. By ensuring consistency, I partner with photographers
    to create a unified look that elevated the brand's identity and tells a
    strong visual story.
  </p>
);

export default {
  label,
  ...slugify(label),
  imgSrc: getImage("card.png"),
  highlights: [
    "Visual Storytelling",
    "Concept Development",
    "Branding",
    "Shot List Creation",
    "Team Leadership",
  ],
  sections,
  description,
  credit:
    "Photography Credits: Peppermint Truffle photos @Sean Misa, photorealistic tea cups @Joe Heiner, tea compositions @People People, all other chocolate photos @Nelson Miyazaki",
} satisfies DetailMetadata;
