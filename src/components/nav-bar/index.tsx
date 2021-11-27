import ThemeToggleButton from "@components/theme-toggle-button";
import Link from "next/link";
import { FC, useContext } from "react";
import { ThemeContext } from "src/providers/ThemeProvider";
import styles from "./nav.module.scss";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a>
          <h1>Where in the world?</h1>
        </a>
      </Link>
      <ThemeToggleButton />
    </nav>
  );
};

export default NavBar;
