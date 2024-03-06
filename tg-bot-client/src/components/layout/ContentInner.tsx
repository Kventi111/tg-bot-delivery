import styles from "./Layout.module.css";

export const ContentInner = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.contentInner}>{children}</div>
);
