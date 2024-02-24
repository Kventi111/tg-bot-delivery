import { memo } from "react";
import cls from "classnames";
import { Button } from "../button/Button";

import styles from "./Counter.module.css";

export const Counter = memo(function Counter({
  count = 0,
  onIncrease,
  onDecrease,
}) {
  return (
    <div className={styles.root}>
      {count > 0 && (
        <Button className={styles.counterButton} onClick={onDecrease}>
          -
        </Button>
      )}
      {count > 0 && <span className={styles.count}>{count}</span>}
      {count >= 0 && (
        <Button
          className={cls(styles.counterButton, {
            [styles.fulled]: count === 0,
          })}
          onClick={onIncrease}
        >
          +
        </Button>
      )}
    </div>
  );
});

Counter.propTypes = {
  count: Number,
  onIncrease: () => {},
  onDecrease: () => {},
};
