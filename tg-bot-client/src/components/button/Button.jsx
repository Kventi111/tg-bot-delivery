import cls from "classnames";

import styles from "./Button.module.css";

export const Button = ({ onClick, children, className, size }) => {
  return (
    <button
      className={cls(styles.root, className, {
        [styles[`size-${size}`]]: size,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
