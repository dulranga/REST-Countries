import ThemeToggleButton from "@components/theme-toggle-button";
import { FC, useContext } from "react";
import { ThemeContext } from "src/providers/ThemeProvider";
import styles from "./nav.module.scss";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <nav className={styles.nav}>
      <h1>Where in the world?</h1>
      <ThemeToggleButton />
    </nav>
  );
};

export default NavBar;
