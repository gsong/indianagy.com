import menuImage from "@/images/case-study/amazon-grocery/menu.jpg";
import signageImage from "@/images/case-study/amazon-grocery/signage.png";
import storeRendersImage from "@/images/case-study/amazon-grocery/store-renders.png";
import storeSignageImage from "@/images/case-study/amazon-grocery/store-signage.png";
import websiteImage from "@/images/case-study/amazon-grocery/website.png";

export const sections = [
  { label: "Store Renders", imgSrc: storeRendersImage },
  { label: "Signage", imgSrc: signageImage },
  { label: "Website", imgSrc: websiteImage },
  { label: "Digital Menus", imgSrc: menuImage },
  { label: "Store Signage", imgSrc: storeSignageImage },
];

export type Section = (typeof sections)[number];
