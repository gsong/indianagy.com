import type { DetailMetadata } from "../types";

import { initGetImage, slugify } from "./utils";

const label = "Photography Art Direction";

const getImage = initGetImage("photography");

export const sections = [
  {
    label: "Packaging Imagery",
    images: [getImage("packaging-1.png")],
    description:
      "This photo direction project focused on creating fresh, bold imagery that conveyed the motion and freshness on the packaging. The challenge was to craft a clean, modern aesthetic while maintaining consistency with the brand’s recognizable identity.",
  },
  {
    label: "E-Commerce Imagery",
    images: [getImage("marketing-2.png")],
    description:
      "This annual holiday gift set photoshoot for Costco e-commerce focused on close-up product shots while ensuring brand consistency. The challenge was capturing diverse angles for visual interest while maintaining consistent styling, incorporating flavor cues, and refining imagery in post-production.",
  },
  {
    label: "Brand Imagery",
    images: [getImage("marketing-3.png")],
    description:
      "These varied chocolate shots showcase styling for print and digital marketing materials such as catalogs, sell sheets, and online stores.",
  },
  {
    label: "Packaging Imagery",
    images: [getImage("packaging-2.png")],
    description:
      "This project focused on conceptualizing photorealistic illustrations and collaborating with the photographer to develop a cohesive color palette for twelve new teas and botanicals in a product line. A key challenge was accurately representing the botanicals in realistic sizes on a small package, requiring meticulous planning before shooting and during digital assembly.",
  },
  {
    label: "Website Imagery",
    images: [getImage("marketing-1.png")],
    description:
      "This project involved art direction, prop styling, and creating shot lists for the photographer. The challenge was managing a high volume of shots in a single day while handling all styling tasks independently.",
  },
];

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
  credit:
    "Photography Credits: Peppermint Truffle photos @Sean Misa, photorealistic tea cups @Joe Heiner, tea compositions @People People, all other chocolate photos @Nelson Miyazaki",
} satisfies DetailMetadata;
