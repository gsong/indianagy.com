import type { DetailMetadata } from "../types";

import { initGetImage, slugify } from "./utils";

const label = "Environmental";

const getImage = initGetImage("environmental");

export const sections = [
  {
    images: ["01.png", "02.png", "03.png", "04.png"].map(getImage),
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
} satisfies DetailMetadata;
