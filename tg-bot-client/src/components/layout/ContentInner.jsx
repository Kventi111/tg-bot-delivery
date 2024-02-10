import styles from "./Layout.module.css";

export const ContentInner = ({ children }) => (
  <div className={styles.contentInner}>{children}</div>
);
