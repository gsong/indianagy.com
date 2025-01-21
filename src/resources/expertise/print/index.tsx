import type { DetailMetadata } from "../../types";

import { slugify } from "../utils";
import { initGetImage } from "../../utils";

const label = "Print";

const images = import.meta.glob("./images/*.{png,jpg}");
const getImage = initGetImage(images);

export const sections = [
  {
    label: "Cookbook",
    images: [getImage("cookbook.jpg")],
  },
  {
    label: "Invitations",
    images: [getImage("invitations.jpg")],
  },
  {
    label: "Promotional Booklet",
    images: [getImage("booklet.png")],
  },
  {
    label: "Business Collateral",
    images: [getImage("business.jpg")],
  },
  {
    label: "Brochures",
    images: [getImage("brochures.png")],
  },
  {
    label: "Catalogs",
    images: [getImage("catalogs.png")],
  },
  {
    label: "Marketing Collateral",
    images: [getImage("marketing.png")],
  },
];

const description = () => (
  <p>
    I design engaging print marketing and sales materials, including promotional
    items, ensuring each piece is fresh, relevant, and on-brand. Working with a
    variety of print materials and techniques, I create visually striking
    designs that resonate with the target audience. I collaborate with printers
    to maintain color accuracy and quality, overseeing production to ensure each
    item aligns with brand goals and delivers maximum impact.
  </p>
);

export default {
  label,
  ...slugify(label),
  imgSrc: getImage("card.png"),
  highlights: [
    "Branding",
    "Design",
    "Color Management",
    "Print Production Knowledge",
    "Image Optimization",
  ],
  sections,
  description,
} satisfies DetailMetadata;
