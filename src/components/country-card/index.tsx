import { FC } from "react";
import styles from "./country-card.module.scss";
import { ISearchCountry } from "@interfaces/SearchCountry";
import Image from "next/image";
import Link from "next/link";
import { addCommaToNumber } from "src/common/addCommaToNumber";
import Info from "@components/info-item";

const CountryCard: FC<{ country: ISearchCountry }> = ({ country }) => {
  return (
    <div className={styles.container}>
      <Link href={`/${country.alpha3Code}`}>
        <a>
          <div className={styles.image}>
            <Image
              src={country.flags.svg}
              alt={country.name}
              width={400}
              height={300}
            />
          </div>
        </a>
      </Link>

      <div className={styles.text}>
        <Link href={`/${country.alpha3Code}`}>
          <a>
            <h2>{country.name}</h2>
          </a>
        </Link>
        <Info label="Population" value={addCommaToNumber(country.population)} />
        <Info label="Region" value={country.region} />
        <Info label="Capital" value={country.capital} />
      </div>
    </div>
  );
};

export default CountryCard;
