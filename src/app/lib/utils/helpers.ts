export const toBoolean = (value: string | null): boolean | null => {
  if (value === null) {
    return null;
  }
  return value.toLowerCase() === "true";
};

export const constructImgSrc = (id: string, size = 843) => {
  return `https://www.artic.edu/iiif/2/${id}/full/${size},/0/default.jpg`;
};

export const getIdsFromLocalStorage = (concatenatedValue: string): string[] => {
  if (concatenatedValue === "") {
    return [];
  } else if (!concatenatedValue.includes(",")) {
    return [concatenatedValue];
  } else {
    return concatenatedValue.split(",");
  }
};
