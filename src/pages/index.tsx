import styles from "@styles/index.module.scss";
import Head from "next/head";
import { FC } from "react";
import { ChevronDownOutline, SearchOutline } from "react-ionicons";
import { ICON_SIZE, REGIONS } from "src/constants";

interface Props {}
const Home: FC<Props> = ({}) => {
  return (
    <>
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

      <div>
        <header className={styles.header}>
          <div className={styles.input}>
            <label htmlFor="search-country">
              <SearchOutline width={ICON_SIZE} height={ICON_SIZE} />
            </label>
            <input
              id="search-country"
              type="text"
              placeholder="Search for a country.."
            />
          </div>

          <button className={styles.drop_down}>
            <div className={styles.title}>Filter by Region</div>
            <ChevronDownOutline
              cssClasses={styles.arrow}
              width={ICON_SIZE}
              height={ICON_SIZE}
            />

            <div className={styles.drop_down_menu}>
              {REGIONS.map((region, i) => (
                <div className={styles.option}>{region}</div>
              ))}
            </div>
          </button>
        </header>
      </div>
    </>
  );
};

export default Home;
