import type { DetailMetadata } from "./types";

interface NavigationResult {
  current: DetailMetadata;
  previous: DetailMetadata | null;
  next: DetailMetadata | null;
}

/**
 * Finds navigation context for a detail page in a list of details
 * @param details Array of detail metadata to search through
 * @param label Label of the detail to find navigation for
 * @returns Navigation context containing current, previous, and next items
 * @throws {Error} When detail with specified label is not found
 */
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
