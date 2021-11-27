export interface ICountry {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Languages;
  translations: Translations;
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini: Gini;
  fifa: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: Flags;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
}

export interface PostalCode {
  format: string;
  regex: string;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface Flags {
  png: string;
  svg: string;
}

export interface Car {
  signs: string[];
  side: string;
}

export interface Gini {
  [year: string]: number;
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Demonyms {
  eng: Eng;
  fra: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Translations {
  ara: NativeNames;
  ces: NativeNames;
  cym: NativeNames;
  deu: NativeNames;
  est: NativeNames;
  fin: NativeNames;
  fra: NativeNames;
  hrv: NativeNames;
  hun: NativeNames;
  ita: NativeNames;
  jpn: NativeNames;
  kor: NativeNames;
  nld: NativeNames;
  per: NativeNames;
  pol: NativeNames;
  por: NativeNames;
  rus: NativeNames;
  slk: NativeNames;
  spa: NativeNames;
  swe: NativeNames;
  urd: NativeNames;
  zho: NativeNames;
}

export interface Languages {
  [key: string]: string;
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface Currencies {
  [key: string]: Currency;
}

export interface Currency {
  name: string;
  symbol: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

export interface NativeName {
  [key: string]: NativeNames;
}

export interface NativeNames {
  official: string;
  common: string;
}
