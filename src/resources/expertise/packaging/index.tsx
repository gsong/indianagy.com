import type { DetailMetadata } from "../../types";

import { slugify } from "../utils";
import { initGetImage } from "../../utils";

const label = "Packaging";

const images = import.meta.glob("./images/*.{png,jpg}");
const getImage = initGetImage(images);

export const sections = [
  {
    label: "Packaging Redesign for Choice",
    images: ["choice-redesign-1.png", "choice-redesign-2.jpg"].map(getImage),
  },
  {
    label: "Packaging Redesign for Dilettante",
    images: [getImage("dillettante-redesign.png")],
  },
  {
    label: "New Packaging for Choice",
    images: ["choice-new-1.png", "choice-new-2.png", "choice-new-3.png"].map(
      getImage,
    ),
  },
  {
    label: "New Product Line for Alki Organics",
    images: [getImage("alki.png")],
  },
  {
    label: "New Products Offerings for Dilettante",
    images: ["dillettante-new-1.png", "dillettante-new-2.jpg"].map(getImage),
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
  credit:
    "Credits: Gourmet Teas watercolor illustrations @Karen Kurycki, Whole Leaf Organics tea field illustration @Maija Fiebig, Wellness Teas photo-illustrations @Joe Heiner, Dilettante chocolate photography @Sean Misa",
} satisfies DetailMetadata;
