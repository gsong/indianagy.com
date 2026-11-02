import type { DetailSource, SectionSource } from "../detail-kind";

const label = "Amazon Grocery";

const sections: SectionSource[] = [
  {
    label: "Store Renders",
    images: [
      {
        src: "store-renders.png",
        alt: "Collage of Amazon Grocery stores shows mockups and real photos of the entrance, aisles, shelves and machines.",
      },
    ],
  },
  {
    label: "Signage",
    images: [
      {
        src: "signage.png",
        alt: "Four Amazon Grocery advertisements featuring discounts, grocery items and information about the first-floor store location.",
      },
    ],
  },
  {
    label: "Website",
    images: [
      {
        src: "website.png",
        alt: "Screenshot of the Amazon Grocery website promoting popular grocery brands, grab & go meals, coffee, desserts, dairy, frozen, pantry & household items.",
      },
    ],
  },
  {
    label: "Digital Menus",
    images: [
      {
        src: "menu.jpg",
        alt: "Digital menu boards displaying Counter Culture Coffee drink options, pricing, and an ad with information on their seed-to-cup process.",
      },
    ],
  },
  {
    label: "Store Signage",
    images: [
      {
        src: "store-signage.png",
        alt: "Collage of Amazon Grocery marketing images showcasing soft serve ice cream, ice cream bars, and Counter Culture coffee and their availability.",
      },
    ],
  },
];

const description = () => (
  <p>
    As a graphic designer, I created digital and print programmatic signage that
    highlighted the innovative character of Amazon's new store while adapting
    the brand's new expression into cohesive visual materials. Collaborating
    with the copywriter and art director, I ensured seamless integration of
    brand messaging across mediums, delivering an engaging and impactful
    customer experience.
  </p>
);

export default {
  label,
  folder: "amazon-grocery",
  card: "card.png",
  highlights: ["Brand", "Digital", "Retail Store Environment"],
  sections,
  description,
  metaDescription:
    "Created cohesive digital and print signage for Amazon’s new store, integrating brand messaging to deliver an engaging and impactful customer experience.",
  credit:
    "Credit: art direction @Dana Deneinger, creative director, and Amazon Go!/Grocery Team",
} satisfies DetailSource;
