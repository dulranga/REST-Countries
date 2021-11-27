export interface ISearchRegion {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
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
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
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

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Demonyms {
  eng: Eng2;
  fra: Eng2;
}

export interface Eng2 {
  f: string;
  m: string;
}

export interface Translations {
  ara: Eng;
  ces: Eng;
  cym: Eng;
  deu: Eng;
  est: Eng;
  fin: Eng;
  fra: Eng;
  hrv: Eng;
  hun: Eng;
  ita: Eng;
  jpn: Eng;
  kor: Eng;
  nld: Eng;
  per: Eng;
  pol: Eng;
  por: Eng;
  rus: Eng;
  slk: Eng;
  spa: Eng;
  swe: Eng;
  urd: Eng;
  zho: Eng;
}

export interface Languages {
  eng: string;
  fra: string;
  nrf: string;
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface Currencies {
  GBP: GBP;
  JEP: GBP;
}

export interface GBP {
  name: string;
  symbol: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

export interface NativeName {
  eng: Eng;
  fra: Eng;
  nrf: Eng;
}

export interface Eng {
  official: string;
  common: string;
}
