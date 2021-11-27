import CountryCard from "@components/country-card";
import { ISearchCountry } from "@interfaces/SearchCountry";
import styles from "@styles/index.module.scss";
import { GetStaticProps } from "next";
import Head from "next/head";
import { ChangeEvent, FC, useState } from "react";
import { ChevronDownOutline, SearchOutline } from "react-ionicons";
import { ICON_SIZE, Region, REGIONS } from "src/constants";
import { searchCountriesByNameAndRegion } from "src/services/SearchCountries";

interface Search {
  query: string;
  region?: Region;
}
interface Props {
  initialCountries: ISearchCountry[];
}
const Home: FC<Props> = ({ initialCountries }) => {
  const [countries, setCountries] =
    useState<ISearchCountry[]>(initialCountries);

  const [search, setSearch] = useState<Search>({ query: "" });

  const setRegion = (region: Search["region"]) => () => {
    setSearch((prev) => ({ ...prev, region }));
  };
  const setQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch((prev) => ({ ...prev, query: e.target.value.trim() }));
  };

  const searchCountries = async () => {
    try {
      const countries = await searchCountriesByNameAndRegion(
        search.query,
        search.region
      );
      if (!!countries?.length) setCountries(countries);
    } catch (error) {}
  };

  return (
    <main>
      <Head>
        <title>
          Frontend Mentor - REST Countries API with color theme switcher
          solution
        </title>
        <meta
          name="description"
          content="REST Countries API with color theme switcher solution by dulranga"
        />
      </Head>

      <header className={styles.header}>
        <div className={styles.input}>
          <label htmlFor="search-country">
            <SearchOutline
              width={ICON_SIZE}
              height={ICON_SIZE}
              onClick={searchCountries}
            />
          </label>
          <input
            id="search-country"
            type="text"
            onChange={setQuery}
            placeholder="Search for a country.."
            onKeyPress={(e) => e.key === "Enter" && searchCountries()}
          />
        </div>

        <button className={styles.drop_down} onBlur={searchCountries}>
          <div className={styles.title}>
            {search.region ?? "Filter by Region"}
          </div>
          <ChevronDownOutline
            cssClasses={styles.arrow}
            width={ICON_SIZE}
            height={ICON_SIZE}
          />

          <div className={styles.drop_down_menu}>
            {REGIONS.map((region, i) => (
              <div
                className={styles.option}
                key={`region-${i}`}
                onClick={setRegion(region)}
              >
                {region}
              </div>
            ))}
            <div
              className={[styles.option, styles.remove].join(" ")}
              key={`region-remove`}
              onClick={setRegion(undefined)}
            >
              Remove Selection
            </div>
          </div>
        </button>
      </header>

      <div className={styles.countries_container}>
        {countries.map((country, i) => (
          <CountryCard country={country} key={`search-country-${i}`} />
        ))}
      </div>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const initialCountries = await searchCountriesByNameAndRegion("us");
  return {
    props: {
      initialCountries,
    },
  };
};
export default Home;
