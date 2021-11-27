import { FC } from "react";
import { MoonOutline } from "react-ionicons";
import { ICON_SIZE } from "src/constants";
import styles from "./theme-button.module.scss";

interface ThemeToggleButtonProps {}

const ThemeToggleButton: FC<ThemeToggleButtonProps> = () => {
  return (
    <button className={styles.theme_toggle}>
      <MoonOutline color={"#00000"} height={ICON_SIZE} width={ICON_SIZE} />
      <span>Dark Mode</span>
    </button>
  );
};

export default ThemeToggleButton;
