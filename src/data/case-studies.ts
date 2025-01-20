import amazonImage from "@/images/home/case-studies/amazon.png";
import myntzImage from "@/images/home/case-studies/myntz.png";
import skippyImage from "@/images/home/case-studies/skippy.png";

export const caseStudies = [
  {
    label: "Amazon Grocery",
    href: `${import.meta.env.BASE_URL}case-study/amazon-grocery`,
    imgSrc: amazonImage,
  },
  {
    label: "Skippy Nut Roll",
    href: `${import.meta.env.BASE_URL}case-study/skippy-nut-roll`,
    imgSrc: skippyImage,
  },
  { label: "Myntz! Breathmints", href: "#", imgSrc: myntzImage },
];
