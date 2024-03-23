export const toBoolean = (value: string | null): boolean | null => {
  if (value === null) {
    return null;
  }
  return value.toLowerCase() === "true";
};
