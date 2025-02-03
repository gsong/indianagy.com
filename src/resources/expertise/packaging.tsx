import type { DetailMetadata, Section } from "../types";

import { initGetImage, slugify } from "./utils";

const label = "Packaging";

const getImage = initGetImage("packaging");

export const sections: Section[] = [
  {
    label: "Packaging Redesign for Choice",
    images: [
      {
        src: getImage("choice-redesign-1.png"),
        alt: "Collage of Choice teas including sketches of tea packaging, watercolor paintings and sketcches, color swatches, brewing instruction icons, a caddy of tea envelopes, and a box of Mango Black tea.",
      },
      {
        src: getImage("choice-redesign-2.jpg"),
        alt: "Three images showcasing Choice tea boxes. One side by side of an old and new design and one with multiple flavors stacked.",
      },
    ],
  },
  {
    label: "Packaging Redesign for Dilettante",
    images: [
      {
        src: getImage("dillettante-redesign.png"),
        alt: "Side-by-side comparisons of previous and refreshed designs of Dilettante chocolates, showing bags of peppermint truffles and rainier cherries.",
      },
    ],
  },
  {
    label: "New Packaging for Choice",
    images: [
      {
        src: getImage("choice-new-1.png"),
        alt: "Collage of four images showing various stages of tea-themed artwork, from a photograph of a tea plantation to sketches and illustrations.",
      },
      {
        src: getImage("choice-new-2.png"),
        alt: "Two images showing Choice tea packaging elements including pyramid illustrations, tea name typography, color palette, packaging sketches and a box of Lychee White tea.",
      },
      {
        src: getImage("choice-new-3.png"),
        alt: "Two images of Choice brand tea, on the left is a stack of eight tins and on the right is a pyramid tea bag with its wrapper.",
      },
    ],
  },
  {
    label: "New Product Line for Alki Organics",
    images: [
      {
        src: getImage("alki.png"),
        alt: "Three boxes of Alki Organics tea, including Beet Root Hibiscus, Reishi Green, and Mushroom Turmeric on a light wood surface.",
      },
    ],
  },
  {
    label: "New Products Offerings for Dilettante",
    images: [
      {
        src: getImage("dillettante-new-1.png"),
        alt: "Two images of Dilettante chocolate boxes, including Ruby Cacao Cherries, Ruby Cacao Blueberries and Hearts Mix, one image with stand alone boxes and one with boxes on a store shelf.",
      },
      {
        src: getImage("dillettante-new-2.jpg"),
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
  ...slugify(label),
  imgSrc: getImage("card.png"),
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
    "Specializing in packaging design, I craft cohesive branded systems, directing creatives to develop strategic, engaging concepts that resonate with consumers.",
  credit:
    "Credits: Gourmet Teas watercolor illustrations @Karen Kurycki, Whole Leaf Organics tea field illustration @Maija Fiebig, Wellness Teas photo-illustrations @Joe Heiner, Dilettante chocolate photography @Sean Misa",
} satisfies DetailMetadata;
