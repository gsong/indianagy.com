import type { DetailSource, SectionSource } from "../detail-kind";

const label = "Packaging";

const sections: SectionSource[] = [
  {
    label: "Packaging Redesign for Choice",
    images: [
      {
        src: "choice-redesign-1.png",
        alt: "Collage of Choice teas including sketches of tea packaging, watercolor paintings and sketcches, color swatches, brewing instruction icons, a caddy of tea envelopes, and a box of Mango Black tea.",
      },
      {
        src: "choice-redesign-2.jpg",
        alt: "Three images showcasing Choice tea boxes. One side by side of an old and new design and one with multiple flavors stacked.",
      },
    ],
  },
  {
    label: "Packaging Redesign for Dilettante",
    images: [
      {
        src: "dillettante-redesign.png",
        alt: "Side-by-side comparisons of previous and refreshed designs of Dilettante chocolates, showing bags of peppermint truffles and rainier cherries.",
      },
    ],
  },
  {
    label: "New Packaging for Choice",
    images: [
      {
        src: "choice-new-1.png",
        alt: "Collage of four images showing various stages of tea-themed artwork, from a photograph of a tea plantation to sketches and illustrations.",
      },
      {
        src: "choice-new-2.png",
        alt: "Two images showing Choice tea packaging elements including pyramid illustrations, tea name typography, color palette, packaging sketches and a box of Lychee White tea.",
      },
      {
        src: "choice-new-3.png",
        alt: "Two images of Choice brand tea, on the left is a stack of eight tins and on the right is a pyramid tea bag with its wrapper.",
      },
    ],
  },
  {
    label: "New Product Line for Alki Organics",
    images: [
      {
        src: "alki.png",
        alt: "Three boxes of Alki Organics tea, including Beet Root Hibiscus, Reishi Green, and Mushroom Turmeric on a light wood surface.",
      },
    ],
  },
  {
    label: "New Products Offerings for Dilettante",
    images: [
      {
        src: "dillettante-new-1.png",
        alt: "Two images of Dilettante chocolate boxes, including Ruby Cacao Cherries, Ruby Cacao Blueberries and Hearts Mix, one image with stand alone boxes and one with boxes on a store shelf.",
      },
      {
        src: "dillettante-new-2.jpg",
        alt: "Collage of Dilettante chocolate holiday packaging, including patterns and boxes of Candy Cane, Peppermint Pretzels, Dark Chocolate and Chocolate Trufflecremes.",
      },
    ],
  },
];

const description = () => (
  <p>
    I specialize in packaging design, providing art direction to photographers,
    illustrators, and copywriters to develop cohesive creative concepts from the
    ground up. By crafting unified branded systems and product lines, I ensure
    the packaging aligns seamlessly with the overall brand while meeting the
    specific objectives of the product line. My work blends strategic vision
    with creative execution, delivering designs that connect with consumers.
  </p>
);

export default {
  label,
  folder: "packaging",
  card: "card.png",
  highlights: [
    "Brand Strategy",
    "Visual Storytelling",
    "Art Direction",
    "Graphic Design",
    "Icon Design",
  ],
  sections,
  description,
  metaDescription:
    "Specializing in packaging design, I craft cohesive branded systems and create strategic, engaging packaging that resonate with consumers.",
  credit:
    "Credits: Gourmet Teas watercolor illustrations @Karen Kurycki, Whole Leaf Organics tea field illustration @Maija Fiebig, Wellness Teas photo-illustrations @Joe Heiner, Dilettante chocolate photography @Sean Misa",
} satisfies DetailSource;
