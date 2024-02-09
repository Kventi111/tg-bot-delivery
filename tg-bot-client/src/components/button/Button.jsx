import cls from "classnames";

import styles from "./Button.module.css";

export const Button = ({ onClick, text, className }) => {
  return (
    <button className={cls(styles.root, className)} onClick={onClick}>
      {text}
    </button>
  );
};
