import _slugify from "@sindresorhus/slugify";

import { createUrlGenerator } from "../utils";

export const slugify = (label: string) => {
  const slug = _slugify(label);

  return {
    slug,
    href: `${import.meta.env.BASE_URL}expertise/${slug}`,
  };
};

export const initGetImage = createUrlGenerator(
  "https://pub-37a146c31556466fa0f3dde87899ea27.r2.dev",
);
