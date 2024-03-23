import cls from "classnames";

import styles from "./Chip.module.css";

type ShipProps = {
  onSelect: (item: { id: string,value: string }) => void
  currentCategoryId: string
  isLoading: boolean
  items: { id: string,value: string }[]
}

function ShipSkeleton() {
  return <span className={styles.skeleton} />;
}

export const Chip = ({ onSelect, items, currentCategoryId, isLoading }: ShipProps) => {
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
