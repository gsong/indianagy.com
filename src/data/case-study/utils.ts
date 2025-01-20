export const initGetImage =
  (images: Record<string, Function>) => (filename: string) => {
    const matchingKey = Object.keys(images).find((key) =>
      key.endsWith(filename),
    );

    return matchingKey ? images[matchingKey]() : undefined;
  };
