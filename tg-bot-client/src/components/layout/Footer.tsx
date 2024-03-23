import styles from "./Layout.module.css";

export const Footer = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.footer}>{children}</div>
);
