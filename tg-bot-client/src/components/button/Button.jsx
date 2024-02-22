import cls from "classnames";

import styles from "./Button.module.css";

export const Button = ({ onClick, children, className }) => {
  return (
    <button className={cls(styles.root, className)} onClick={onClick}>
      {children}
    </button>
  );
};
