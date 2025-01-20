import type { DetailMetadata } from "../../types";

import { initGetImage } from "../../utils";
const images = import.meta.glob("./images/*.{png,jpg}");

const getImage = initGetImage(images);

export const sections = [
  { label: "Branding", images: [getImage("branding.png")] },
  { label: "Web", images: [getImage("web.png")] },
  { label: "Digital Imagery", images: [getImage("digital.png")] },
  {
    label: "Packaging",
    images: ["packaging-1.png", "packaging-2.png"].map(getImage),
  },
  { label: "Store Displays", images: [getImage("store.png")] },
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
  label: "Skippy Nut Roll",
  href: `${import.meta.env.BASE_URL}case-study/skippy-nut-roll`,
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
} satisfies DetailMetadata;
