import type { DetailMetadata, Section } from "../types";

import { initGetImage, slugify } from "./utils";

const label = "Print";

const getImage = initGetImage("print");

export const sections: Section[] = [
  {
    label: "Cookbook",
    images: [
      {
        src: getImage("cookbook.jpg"),
        alt: "Two images of Innovasian cookbook, one closed on a textured surface with ingredients and one opened to a Sweet and Tangy Chicken Tostada Bites recipe.",
      },
    ],
  },
  {
    label: "Invitations",
    images: [
      {
        src: getImage("invitations.jpg"),
        alt: "Wedding invitation set for Uraina and David, with yellow and gray floral designs, including invite, program, rehearsal dinner and save the date cards.",
      },
    ],
  },
  {
    label: "Promotional Booklet",
    images: [
      {
        src: getImage("booklet.png"),
        alt: "Three images of Choice's Modern Tea Party Kit, showing the box, scorecards and an inside page of the guide book.",
      },
    ],
  },
  {
    label: "Business Collateral",
    images: [
      {
        src: getImage("business.jpg"),
        alt: "Collage of Barefoot Yoga products, including stationery, a gift certificate, a yoga block sleeve, and an ad with product photos and the Barefoot Yoga logo.",
      },
    ],
  },
  {
    label: "Brochures",
    images: [
      {
        src: getImage("brochures.png"),
        alt: "Collage of Choice tea promotional materials including a brochure, a tea brewing guide and details on brewing time and temperatures.",
      },
    ],
  },
  {
    label: "Catalogs",
    images: [
      {
        src: getImage("catalogs.png"),
        alt: "Two images of Seattle Gourmet Foods print materials, including the front of a catalog and a price list, and an inside spread showing a variety of Dilettante chocolate products.",
      },
    ],
  },
  {
    label: "Marketing Collateral",
    images: [
      {
        src: getImage("marketing.png"),
        alt: "Collage of Choice brand tea marketing materials, including a social media contest, information on mushroom wellness teas, a free tea box, coupons, 30th anniversary and wholesale program offerings.",
      },
    ],
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
  metaDescription:
    "I design impactful print marketing materials, ensuring fresh, on-brand visuals. Collaborating with printers, I oversee color accuracy and quality production.",
} satisfies DetailMetadata;
