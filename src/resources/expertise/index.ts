import { defineDetailKind } from "../detail-kind";

import environmental from "./environmental";
import illustration from "./illustration";
import packaging from "./packaging";
import photography from "./photography";
import print from "./print";
import socialWeb from "./social-web";

export const expertise = defineDetailKind({
  name: "Expertise",
  route: "expertise",
  r2Folder: "expertise",
  details: [
    photography,
    packaging,
    print,
    socialWeb,
    environmental,
    illustration,
  ],
});
