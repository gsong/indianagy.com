import type { DetailSource, SectionSource } from "../detail-kind";

const label = "Illustration";

const sections: SectionSource[] = [
  {
    images: [
      {
        src: "01.png",
        alt: "Three illustrations. The first shows a watercolor of two women and a rabbit, the second shows a digital drawing of a bird, and the third shows a drawing of a moth, flowers, and a diamond.",
      },
      {
        src: "02.png",
        alt: `Three images of Eric Layer's "Fall" album, including a building at night, the album art of two silhouetted fish, and the physical CD in a case.`,
      },
      {
        src: "03.png",
        alt: "Three images of Mishka M. Morris massage therapy branding; sketches of a swan, a business card, and a sign for massage therapy services.",
      },
      {
        src: "04.png",
        alt: "Three images of artwork with winter themes: A poster of two women with blue tights and yellow shoes, ice skates with pink laces on a snowflake background, and a 2016 greeting card with ice skates.",
      },
      {
        src: "05.png",
        alt: "Three watercolor paintings: a still life with a toy horse, a heart with arrows and abstract patterns, and a portrait of a woman.",
      },
    ],
  },
];
const description = () => (
  <p>
    With a passion for exploration, I bring a fresh approach and creative ideas
    to each project with a mix of techniques and media.
  </p>
);

export default {
  label,
  folder: "illustration",
  card: "card.png",
  highlights: [
    "Visual Storytelling",
    "Creative Concepting",
    "Technical Expertise",
  ],
  sections,
  description,
  metaDescription:
    "With a passion for exploration, I bring a fresh approach and creative ideas to each project with a mix of techniques and media.",
} satisfies DetailSource;
