import ThemeToggleButton from "@components/theme-toggle-button";
import { FC } from "react";
import styles from "./nav.module.scss";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => {
  return (
    <nav className={styles.nav}>
      <h1>Where in the world?</h1>
      <ThemeToggleButton />
    </nav>
  );
};

export default NavBar;
