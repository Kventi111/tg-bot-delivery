import cls from "classnames";
import styles from "./Chip.module.css";

export const Chip = ({ onSelect, items, currentCategoryId }) => {
  return items.map((item) => (
    <div
      key={item.id}
      className={cls(styles.root, {
        [styles.active]: item.id === currentCategoryId,
      })}
      onClick={() => onSelect(item)}
    >
      {item.value}
    </div>
  ));
};
