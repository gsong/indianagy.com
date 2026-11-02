import { defineDetailKind } from "../detail-kind";

import amazon from "./amazon-grocery";
import myntz from "./myntz";
import skippy from "./skippy";

export const caseStudies = defineDetailKind({
  name: "Case Study",
  route: "case-study",
  r2Folder: "case-studies",
  details: [amazon, skippy, myntz],
});
