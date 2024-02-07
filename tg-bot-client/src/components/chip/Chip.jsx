import cls from "classnames";
import styles from "./Chip.module.css";

export const Chip = ({ onClick, text, active }) => {
  return (
    <span
      className={cls(styles.root, { [styles.active]: active })}
      onClick={onClick}
    >
      {text}
    </span>
  );
};
