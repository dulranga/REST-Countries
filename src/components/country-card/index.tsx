import { FC } from "react";
import styles from "./country-card.module.scss";
import { ISearchCountry } from "@interfaces/SearchCountry";
import Image from "next/image";
import { addCommaToNumber } from "src/common/addCommaToNumber";

const CountryCard: FC<{ country: ISearchCountry }> = ({ country }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src={country.flags.svg}
          alt={country.name}
          width={400}
          height={300}
        />
      </div>
      <div className={styles.text}>
        <h2>{country.name}</h2>
        <p>
          <strong>Population</strong>
          <span>{addCommaToNumber(country.population)}</span>
        </p>
        <p>
          <strong>Region</strong>
          <span>{country.region}</span>
        </p>
        <p>
          <strong>Capital</strong>
          <span>{country.capital}</span>
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
