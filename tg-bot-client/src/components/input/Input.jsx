import clx from "classnames";

import styles from "./Input.module.css";

export const Input = ({ onChange, label, value }) => (
  <div className={styles.root}>
    <input
      className={clx(styles.input, { [styles.focused]: value })}
      type="text"
      value={value}
      onChange={onChange}
    />
    <label className={styles.label}>{label}</label>
  </div>
);
