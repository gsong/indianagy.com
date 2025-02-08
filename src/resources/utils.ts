import type { DetailMetadata } from "./types";

export const createUrlGenerator = (baseUrl: string) => {
  const cleanBaseUrl = baseUrl.replace(/\/+$/, ""); // Remove trailing slashes

  return (firstPart: string) => {
    const cleanFirstPart = firstPart.replace(/^\/+|\/+$/, ""); // Remove surrounding slashes

    return (secondPart: string): string => {
      const cleanSecondPart = secondPart.replace(/^\/+|\/+$/, "");
      return `${cleanBaseUrl}/${cleanFirstPart}/${cleanSecondPart}`;
    };
  };
};

export const initGetImage = <T>(
  images: Record<string, () => T>,
): ((filename: string) => T | undefined) => {
  return (filename: string) => {
    const matchingKey = Object.keys(images).find((key) =>
      key.endsWith(filename),
    );
    return matchingKey ? images[matchingKey]() : undefined;
  };
};

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
