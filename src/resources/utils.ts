import type { DetailMetadata } from "./types";

export const initGetImage =
  (images: Record<string, Function>) => (filename: string) => {
    const matchingKey = Object.keys(images).find((key) =>
      key.endsWith(filename),
    );
    return matchingKey ? images[matchingKey]() : undefined;
  };

interface NavigationResult {
  current: DetailMetadata;
  previous: DetailMetadata | null;
  next: DetailMetadata | null;
}

export const getDetailNavigation = (
  details: DetailMetadata[],
  label: string,
): NavigationResult => {
  const currentIndex = details.findIndex((detail) => detail.label === label);

  if (currentIndex === -1) {
    throw new Error(`Detail with label "${label}" not found`);
  }

  return {
    current: details[currentIndex],
    previous: currentIndex > 0 ? details[currentIndex - 1] : null,
    next: currentIndex < details.length - 1 ? details[currentIndex + 1] : null,
  };
};
