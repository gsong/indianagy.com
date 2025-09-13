import _slugify from "@sindresorhus/slugify";

import { createUrlGenerator } from "../utils";

export const slugify = (label: string) => {
  const slug = _slugify(label);

  return {
    slug,
    href: `${import.meta.env.BASE_URL}expertise/${slug}`,
  };
};

export const initGetImage = createUrlGenerator("expertise");
