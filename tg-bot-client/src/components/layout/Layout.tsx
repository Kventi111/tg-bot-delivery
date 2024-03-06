import styles from "./Layout.module.css";

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.wrapper}>
    <div className={styles.content}>{children}</div>
  </div>
);
