import { ICountry } from "@interfaces/FullCountry";
import { INotFound } from "@interfaces/NotFound";
import { ISearchCountry } from "@interfaces/SearchCountry";
import { ISearchRegion } from "@interfaces/SearchRegion";
import { Region } from "src/constants";

export const searchByName = async (
  name: string
): Promise<ISearchCountry[] | null> => {
  const req = await fetch(`https://restcountries.com/v2/name/${name}`);
  const res = await req.json();
  if (res.status === 404) return null;
  return res;
};

export const searchByRegion = async (
  region?: Region
): Promise<ISearchRegion[] | null> => {
  if (region) {
    const req = await fetch(`https://restcountries.com/v3.1/region/${region}`);
    const res = await req.json();
    return res;
  }
  return null;
};

export const searchCountriesByNameAndRegion = async (
  name: string,
  region?: Region
) => {
  const countries = await searchByName(name);
  if (countries) {
    if (region) return countries.filter((country) => country.region === region);
    return countries;
  }
  return null;
};

export const searchByCode = async (code: any): Promise<ICountry | null> => {
  const req = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
  const res = await req.json();
  if (res.status == 400) return null;
  return res[0];
};

export type Border = { name: string; code: string };

export const getBorderCountries = async (
  borders?: string[]
): Promise<Border[] | null> => {
  if (borders) {
    const req = await fetch(
      `https://restcountries.com/v3.1/alpha?codes=${borders.join(",")}`
    );
    const res: ICountry[] = await req.json();

    // @ts-ignore
    if (res.status == 400) return null;

    const borderCountries = res.map((country) => ({
      name: country.name.common,
      code: country.cca3,
    }));

    return borderCountries;
  }
  return null;
};
