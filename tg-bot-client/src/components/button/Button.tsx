import cls from "classnames";

import styles from "./Button.module.css";

type ButtonProps = {
  onClick: () => void
  children: React.ReactNode
  className?: string
  size: "lg" | "md"
  variant?: 'primary' | "secondary"
}

export const Button = ({
  onClick,
  children,
  className,
  size,
  variant = "primary",
}: ButtonProps) => {
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
