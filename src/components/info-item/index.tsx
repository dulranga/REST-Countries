import { FC } from "react";
import styles from "./info.module.scss";
interface InfoProps {
  label: string;
  value: string | number;
  className?: string;
}

const Info: FC<InfoProps> = ({ label, value, className }) => {
  return (
    <div className={[styles.info, className].join(" ")}>
      <strong>{label}</strong>
      <span>{value}</span>
    </div>
  );
};

export default Info;
