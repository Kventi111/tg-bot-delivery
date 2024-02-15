import { useState } from "react";
import cls from "classnames";
import { Button } from "../button/Button";

import styles from "./Counter.module.css";

export const Counter = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);

  return (
    <div className={styles.root}>
      {count > 0 && (
        <Button
          className={styles.counterButton}
          onClick={() => setCount((prevCount) => prevCount - 1)}
          text="-"
        />
      )}
      {count > 0 && <span className={styles.count}>{count}</span>}
      {count >= 0 && (
        <Button
          className={cls(styles.counterButton, {
            [styles.fulled]: count === 0,
          })}
          onClick={() => setCount((prevCount) => prevCount + 1)}
          text="+"
        />
      )}
    </div>
  );
};
