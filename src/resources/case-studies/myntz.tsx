import type { DetailSource, SectionSource } from "../detail-kind";

const label = "Myntz! Breathmints";

const sections: SectionSource[] = [
  {
    label: "Strategy",
    images: [
      {
        src: "strategy-1.png",
        alt: "Side-by-side comparison of the previous and refreshed design of MYNTZ! breathmints, displaying the packaging and the candies.",
      },
      {
        src: "strategy-2.png",
        alt: "Three black and white logos of MYNTZ! breathmints, including the main logo, the secondary logo and the plant-based sweeteners logo.",
      },
    ],
  },
  {
    label: "Photography Art Direction",
    images: [
      {
        src: "photo-1.png",
        alt: "Four tins of MYNTZ! breathmints in different flavors with mint, lemon, tangerine and cinnamon with corresponding fruit and herbs.",
      },
      {
        src: "photo-2.png",
        alt: "An open tin of MYNTZ! breathmints with an unopened tin and scattered mint leaves and mints on a light blue background.",
      },
    ],
  },
  {
    label: "Packaging",
    images: [
      {
        src: "packaging-1.png",
        alt: "Four tins of MYNTZ! breathmints displaying different flavors: Wintermint, Cinnamon, Tangerine Vanilla, and Lemon Ginger.",
      },
      {
        src: "packaging-2.png",
        alt: "Two images of MYNTZ! breathmints. The first is a variety box with six tins. The second is a stack of 4 single-flavor boxes.",
      },
    ],
  },
  {
    label: "Store Displays",
    images: [
      {
        src: "store.png",
        alt: "Two images showcasing MYNTZ! breathmints displays; one display stand alone, the other in a store shelf.",
      },
    ],
  },
];

const description = () => (
  <p>
    When the brand transitioned to cleaner ingredients, I saw a chance to
    revitalize its visual identity. I modernized the packaging and logo design
    to reflect this change while supporting the introduction of new flavors.
    This case study showcases how I helped the brand refresh its image while
    staying true to its market presence.
  </p>
);

export default {
  label,
  folder: "myntz",
  card: "card.png",
  highlights: [
    "Brand Strategy",
    "Photography Art Direction",
    "Logo Redesign",
    "Color",
    "Packaging Redesign",
    "POS Design",
  ],
  sections,
  description,
  metaDescription:
    "Revitalized brand identity with modern packaging and logo to reflect cleaner ingredients and support new flavors, enhancing market presence and appeal.",
  credit: "Credit: Myntz! on solid blue backgrounds @Julee Ho and team",
} satisfies DetailSource;
