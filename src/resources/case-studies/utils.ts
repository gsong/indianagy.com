import _slugify from "@sindresorhus/slugify";

export const slugify = (label: string) => {
  const slug = _slugify(label);

  return {
    slug,
    href: `${import.meta.env.BASE_URL}case-study/${slug}`,
  };
};
