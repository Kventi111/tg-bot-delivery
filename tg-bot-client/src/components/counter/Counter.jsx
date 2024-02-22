import { useState, useEffect } from "react";
import cls from "classnames";
import { Button } from "../button/Button";

import styles from "./Counter.module.css";

export const Counter = ({ initialCount = 0, onChange }) => {
  let [count, setCount] = useState(initialCount);

  const onIncreaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const onDecreaseCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  useEffect(() => {
    if (count !== 0) {
      onChange?.(count);
    }
  }, [count]);

  return (
    <div className={styles.root}>
      {count > 0 && (
        <Button
          className={styles.counterButton}
          onClick={(e) => {
            e.stopPropagation();
            onDecreaseCount();
          }}
        >
          -
        </Button>
      )}
      {count > 0 && <span className={styles.count}>{count}</span>}
      {count >= 0 && (
        <Button
          className={cls(styles.counterButton, {
            [styles.fulled]: count === 0,
          })}
          onClick={(e) => {
            e.stopPropagation();
            onIncreaseCount();
          }}
        >
          +
        </Button>
      )}
    </div>
  );
};
