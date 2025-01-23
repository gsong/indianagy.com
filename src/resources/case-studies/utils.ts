import _slugify from "@sindresorhus/slugify";

import { createUrlGenerator } from "../utils";

export const slugify = (label: string) => {
  const slug = _slugify(label);

  return {
    slug,
    href: `${import.meta.env.BASE_URL}case-study/${slug}`,
  };
};

export const initGetImage = createUrlGenerator(
  "https://pub-2b21573a122e4116b29744d5dfaf96d6.r2.dev",
);
