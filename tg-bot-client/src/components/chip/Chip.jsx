import cls from "classnames";

import styles from "./Chip.module.css";

function ShipSkeleton() {
  return <span className={styles.skeleton} />;
}

export const Chip = ({ onSelect, items, currentCategoryId, isLoading }) => {
  return isLoading ? (
    <>
      <ShipSkeleton />
      <ShipSkeleton />
      <ShipSkeleton />
      <ShipSkeleton />
    </>
  ) : (
    items.map((item) => (
      <div
        key={item.id}
        className={cls(styles.root, {
          [styles.active]: item.id === currentCategoryId,
        })}
        onClick={() => onSelect(item)}
      >
        {item.value}
      </div>
    ))
  );
};
