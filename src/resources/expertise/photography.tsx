import type { DetailMetadata, Section } from "../types";

import { initGetImage, slugify } from "./utils";

const label = "Photography Art Direction";

const getImage = initGetImage("photography");

export const sections: Section[] = [
  {
    label: "Packaging Imagery",
    images: [
      {
        src: getImage("packaging-1.png"),
        alt: "Three images of Dilettante chocolate truffles, with a bag of individually wrapped peppermint truffles and chocolate pouring over individual pieces.",
      },
      {
        src: getImage("packaging-2.png"),
        alt: "Two images of Choice teas, one showing 4 cups of different flavored teas with flowers and leaves and one showing a display of multiple boxes.",
      },
    ],
  },
  {
    label: "Marketing Imagery",
    images: [
      {
        src: getImage("marketing-1.png"),
        alt: "Collage of four images, each showcasing a Choice tea flavor with its ingredients, including Reishi Matcha, Easy Digest, English Breakfast, Mango Black, and Peach Green teas.",
      },
      {
        src: getImage("marketing-2.png"),
        alt: "Three images of red Christmas boxes of chocolate candies including stacked gift boxes, close up of chocolate covered pretzels and white chocolate covered pretzels.",
      },
      {
        src: getImage("marketing-3.png"),
        alt: "Two images of assorted chocolate candies, one with various coated nuts in glass bowls and the other a flatlay of different chocolates.",
      },
    ],
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
  metaDescription:
    "I plan and direct photo shoots with thoughtful placement, cohesive styling, and trend-driven visuals, creating a unified look that elevated brand identity and storytelling.",
  credit:
    "Photography Credits: Peppermint Truffle photos @Sean Misa, photorealistic tea cups @Joe Heiner, tea compositions @People People, all other chocolate photos @Nelson Miyazaki",
} satisfies DetailMetadata;
