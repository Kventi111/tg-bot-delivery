import { memo } from "react";
import cls from "classnames";
import { Button } from "../button/Button";

import PlusIcon from "./plus.svg?react";
import MinusIcon from "./minus.svg?react";

import styles from "./Counter.module.css";

export const Counter = memo(function Counter({
  count = 0,
  onIncrease,
  onDecrease,
}) {
  return (
    <div className={styles.root}>
      {count > 0 && (
        <Button className={styles.counterButton} onClick={onDecrease} size="md">
          <MinusIcon />
        </Button>
      )}
      {count > 0 && <div className={styles.count}>{count}</div>}
      {count >= 0 && (
        <Button
          className={cls(styles.counterButton, {
            [styles.fulled]: count === 0,
          })}
          onClick={onIncrease}
          size="md"
        >
          <PlusIcon />
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
