import cls from "classnames";

import styles from "./Button.module.css";

export const Button = ({
  onClick,
  children,
  className,
  size,
  variant = "primary",
}) => {
  return (
    <button
      className={cls(styles.root, className, {
        [styles[`size-${size}`]]: size,
        [styles[`${variant}`]]: variant,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
