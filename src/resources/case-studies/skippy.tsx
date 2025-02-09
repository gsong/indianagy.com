import type { DetailMetadata, Section } from "../types";

import { initGetImage, slugify } from "./utils";

const label = "Skippy Nut Roll";

const getImage = initGetImage("skippy");

export const sections: Section[] = [
  {
    label: "Branding",
    images: [
      {
        src: getImage("branding.png"),
        alt: "Image showing the collaboration of Skippy and Pearson to create Skippy’s Peanut Butter Salted Nut Roll with a 2023 award.",
      },
    ],
  },
  {
    label: "Web",
    images: [
      {
        src: getImage("web.png"),
        alt: "Pearson’s website showcasing the new Skippy Peanut Butter Salted Nut Roll.",
      },
    ],
  },
  {
    label: "Digital Imagery",
    images: [
      {
        src: getImage("digital.png"),
        alt: "Three images of the Skippy Peanut Butter Salted Nut Roll including box, bar closeup, and nutritional information.",
      },
    ],
  },
  {
    label: "Packaging",
    images: [
      {
        src: getImage("packaging-1.png"),
        alt: "Two packages and two individual bars of Skippy's Peanut Butter Salted Nut Roll. One package is King Size.",
      },
      {
        src: getImage("packaging-2.png"),
        alt: "A bag of Skippy Peanut Butter Salted Nut Roll bite sized candies and three individual pieces.",
      },
    ],
  },
  {
    label: "Store Displays",
    images: [
      {
        src: getImage("store.png"),
        alt: "Three images of Skippy's Peanut Butter Salted Nut Roll display boxes. The first two show stand alone boxes and the last two show placement in a store.",
      },
    ],
  },
];

const description = () => (
  <p>
    For the co-branded launch of the classic Salted Nut Roll with Skippy, I
    designed packaging that seamlessly integrated both brands across wrappers,
    cartons, corrugated POP display shippers, and bags. Integrating Skippy’s
    branding, I adapted designs for various printing methods while maintaining
    brand standards. I also created digital assets for the brand website and
    Amazon, updating sites to support the launch. Collaborating with Hormel
    under Pearson’s marketing director, I prepared and presented designs,
    efficiently implementing feedback. The project earned recognition as an
    Innovative Product at the 2023 Sweets and Snack Show.
  </p>
);

export default {
  label,
  ...slugify(label),
  imgSrc: getImage("card.png"),
  highlights: [
    "Brand Strategy",
    "Art Direction",
    "Web & Digital Imagery",
    "Packaging Design",
    "POS Design",
  ],
  sections,
  description,
  metaDescription:
    "Designed cohesive packaging and digital assets for the Skippy Salted Nut Roll launch, earning recognition as an Innovative Product at the 2023 Sweets & Snacks Show.",
} satisfies DetailMetadata;
