import { Checkbox } from "../checkbox/Checkbox";
import styles from "./CheckboxGroup.module.css";

export const CheckboxGroup = ({ items, selectedItems, onChange }) => {
  return (
    <div className={styles.root}>
      {items.map((item) => (
        <>
          <div className={styles.item}>
            <div className={styles.checkboxWrapper}>
              <Checkbox
                id={item.id}
                value={item.value}
                withLabel={false}
                checked={selectedItems[item.value]}
                onChecked={onChange}
              />
            </div>
            <div className={styles.label}>{item.value}</div>
          </div>
          {/* <span className={styles.separator} /> */}
        </>
      ))}
    </div>
  );
};
