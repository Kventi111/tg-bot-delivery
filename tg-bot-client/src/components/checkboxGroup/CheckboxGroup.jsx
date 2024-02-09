import { Checkbox } from "../checkbox/Checkbox";
import styles from "./CheckboxGroup.module.css";

export const CheckboxGroup = ({ items, onChange }) => {
  return (
    <div className={styles.root}>
      {items.map((item) => (
        <>
          <div className={styles.item}>
            <Checkbox id={item.id} value={item.value} checked />
          </div>
          {/* <span className={styles.separator} /> */}
        </>
      ))}
    </div>
  );
};
