export const ICON_SIZE = "20px";

export const REGIONS = [
  "Africa",
  "Americas",
  "Asia",
  "Europe",
  "Oceania",
] as const;
export type Region = typeof REGIONS[number];
export const LIST_SEPERATOR = ", ";
