import * as RadioGroup from "@radix-ui/react-radio-group";
import clsx from "classnames";
import styles from "./Radio.module.css";

export const Radio = ({ onSelect, selected = "", items }) => (
  <RadioGroup.Root className={styles.radioGroupRoot} value={selected}>
    {items.map(({ label, value }) => (
      <button
        key={value}
        onClick={() => onSelect(value)}
        className={clsx(styles.radioGroupItemWrapper, {
          [styles.selected]: selected === value,
        })}
      >
        <RadioGroup.Item
          className={styles.radioGroupItem}
          value={value}
          id={value}
        >
          <RadioGroup.Indicator className={styles.radioGroupIndicator} />
        </RadioGroup.Item>
        <label className={clsx(styles.radioGroupItemLabel)} htmlFor={label}>
          {label}
        </label>
      </button>
    ))}
  </RadioGroup.Root>
);
