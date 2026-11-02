import _slugify from "@sindresorhus/slugify";

import { r2Url } from "../../lib/r2";

export const slugify = (label: string) => {
  const slug = _slugify(label);

  return {
    slug,
    href: `${import.meta.env.BASE_URL}expertise/${slug}`,
  };
};

export const initGetImage = (folder: string) => (file: string) =>
  r2Url("expertise", folder, file);
