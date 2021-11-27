import { FC, useContext } from "react";
import { MoonOutline, Sunny } from "react-ionicons";
import { ICON_SIZE } from "src/constants";
import { ThemeContext } from "src/providers/ThemeProvider";
import styles from "./theme-button.module.scss";

interface ThemeToggleButtonProps {}

const ThemeToggleButton: FC<ThemeToggleButtonProps> = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className={styles.theme_toggle} onClick={toggleTheme}>
      {theme === "light" ? (
        <>
          <MoonOutline height={ICON_SIZE} width={ICON_SIZE} />
          <span>Dark Mode</span>
        </>
      ) : (
        <>
          <Sunny height={ICON_SIZE} width={ICON_SIZE} />
          <span>Light Mode</span>
        </>
      )}
    </button>
  );
};

export default ThemeToggleButton;
