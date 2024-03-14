import { forwardRef } from "react";
import clx from "classnames";

import styles from "./Input.module.css";

export const Input = forwardRef(({ onChange, label, value }, ref) => (
  <div className={styles.root}>
    <input
      className={clx(styles.input, { [styles.focused]: value })}
      type="text"
      value={value}
      onChange={onChange}
      ref={ref}
    />
    <label className={styles.label}>{label}</label>
  </div>
));
