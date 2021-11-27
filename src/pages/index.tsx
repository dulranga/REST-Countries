import styles from "@styles/index.module.scss";
import Head from "next/head";
import { FC, useContext } from "react";
import { ChevronDownOutline, SearchOutline } from "react-ionicons";
import { ICON_SIZE, REGIONS } from "src/constants";
import { ThemeContext } from "src/providers/ThemeProvider";

interface Props {}
const Home: FC<Props> = ({}) => {
  const { theme } = useContext(ThemeContext);
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

      <main>
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
      </main>
    </>
  );
};

export default Home;
