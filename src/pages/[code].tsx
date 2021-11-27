import cardStyles from "@components/country-card/country-card.module.scss";
import Info from "@components/info-item";
import { ICountry } from "@interfaces/FullCountry";
import styles from "@styles/[code].module.scss";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { ArrowBackOutline } from "react-ionicons";
import { addCommaToNumber } from "src/common/addCommaToNumber";
import { ICON_SIZE, LIST_SEPERATOR } from "src/constants";
import {
  Border,
  getBorderCountries,
  searchByCode,
} from "src/services/SearchCountries";

interface CountryPageProps {
  country: ICountry;
  borders: Border[] | null;
}

const CountryPage: FC<CountryPageProps> = ({ country, borders }) => {
  const router = useRouter();
  return (
    <main>
      <Head>
        <title>{country.name.official}</title>
      </Head>

      <button onClick={router.back} className={styles.back_button}>
        <ArrowBackOutline height={ICON_SIZE} width={ICON_SIZE} />
        <span>Back</span>
      </button>
      <article className={styles.content}>
        <div className={[cardStyles.image, styles.image].join(" ")}>
          <Image
            src={country.flags.svg}
            alt={country.name.official}
            width={500}
            height={300}
          />
        </div>
        <div className={styles.text}>
          <h1>{country.name.official}</h1>

          <div className={styles.info}>
            <Info
              className={styles.info_item}
              label="Native Name"
              value={Object.values(country.name.nativeName)
                .map((name) => name.common)
                .join(LIST_SEPERATOR)}
            />
            <Info
              className={styles.info_item}
              label="Top Level Domain"
              value={country.tld.join(", ")}
            />
            <Info
              className={styles.info_item}
              label="Population"
              value={addCommaToNumber(country.population)}
            />
            <Info
              className={styles.info_item}
              label="Currencies"
              value={Object.values(country.currencies)
                .map((currency) => currency.name)
                ?.join(LIST_SEPERATOR)}
            />
            <Info
              className={styles.info_item}
              label="Region"
              value={country.region}
            />
            <Info
              className={styles.info_item}
              label="Languages"
              value={Object.values(country.languages).join(LIST_SEPERATOR)}
            />
            <Info
              className={styles.info_item}
              label="Sub Region"
              value={country.subregion}
            />
            <Info
              className={styles.info_item}
              label="Capital"
              value={country.capital.join(LIST_SEPERATOR)}
            />
          </div>
          {borders && (
            <div className={styles.borders}>
              <strong>Border Countries:</strong>
              <div>
                {borders.map((border, i) => (
                  <div className={styles.border} key={`border-${i}`}>
                    <Link href={`/${border.code}`}>
                      <a>{border.name}</a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </main>
  );
};
export const getStaticPaths: GetStaticPaths = () => {
  return {
    fallback: "blocking",
    paths: [{ params: { code: "LK" } }],
  };
};
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { code } = ctx.params!;
  const country = await searchByCode(code);
  if (country === null) return { notFound: true };

  const borders = await getBorderCountries(country.borders);

  return {
    props: {
      country,
      borders,
    },
  };
};
export default CountryPage;
