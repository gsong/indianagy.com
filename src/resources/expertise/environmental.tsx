import type { DetailMetadata, Section } from "../types";

import { initGetImage, slugify } from "./utils";

const label = "Environmental";

const getImage = initGetImage("environmental");

export const sections: Section[] = [
  {
    images: [
      {
        src: getImage("01.png"),
        alt: "Collage of six photos from trade shows features Choice tea booths, banners, products, and tea samples.",
      },
      {
        src: getImage("02.png"),
        alt: "Collage of Choice Tea's 25th anniversary celebration at a trade show featuring staff, a band, invites, sample packaging, and the anniversary logo.",
      },
      {
        src: getImage("03.png"),
        alt: "Six images of Choice tea marketing materials and trade show booths, showing product placement, samples, illustrations, and mockups.",
      },
      {
        src: getImage("04.png"),
        alt: "Two images of trade show displays. One shows Abba-Zaba banners and the other displays from Myntz, Dilettante, Seattle Gourmet Foods and Fungus Among Us.",
      },
    ],
  },
];
const description = () => (
  <p>
    I create visually striking and cohesive graphics and design concepts for
    trade show booths that capture attention in a crowded environment while
    communicating a clear, on-brand message. I design engaging elements such as
    banners, counters, and swag, ensuring that each piece seamlessly integrates
    into the overall booth experience and resonates with the target audience.
  </p>
);

export default {
  label,
  ...slugify(label),
  imgSrc: getImage("card.png"),
  highlights: ["Marketing", "Strategy", "Branding", "Large Scale Design"],
  sections,
  description,
  metaDescription:
    "Designed impactful trade show booth graphics and elements, ensuring cohesive, on-brand messaging with engaging banners, counters, and swag to captivate audiences.",
} satisfies DetailMetadata;
