import { Checkbox,CheckboxProps } from "../checkbox/Checkbox";
import styles from "./CheckboxGroup.module.css";

type CheckboxGroupProps = {
  items: { id: string,value: string }[]
  selectedItems: CheckboxProps[]
  onChange: () => void
}

export const CheckboxGroup = ({ items, selectedItems, onChange }: CheckboxGroupProps) => {
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
        </>
      ))}
    </div>
  );
};
