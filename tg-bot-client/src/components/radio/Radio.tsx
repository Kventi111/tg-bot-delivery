import * as RadioGroup from "@radix-ui/react-radio-group";
import clsx from "classnames";
import styles from "./Radio.module.css";

import CheckIcon from "./check.svg?react";

type Radioitem = {
  label: string;
  value: string;
};

type RadioProps = {
  onSelect: (value: string) => void;
  selected: string;
  items: Radioitem[];
};

export const Radio = ({ onSelect, selected = "", items }: RadioProps) => (
  <RadioGroup.Root className={styles.radioGroupRoot} value={selected}>
    {items.map(({ label, value }) => (
      <button
        key={value}
        onClick={() => onSelect(value)}
        className={clsx(styles.radioGroupItemWrapper, {
          [styles.selected]: selected === value,
        })}
      >
        <label className={clsx(styles.radioGroupItemLabel)} htmlFor={label}>
          {label}
        </label>
        <RadioGroup.Item
          className={styles.radioGroupItem}
          value={value}
          id={value}
        >
          <RadioGroup.Indicator>
            <CheckIcon />
          </RadioGroup.Indicator>
        </RadioGroup.Item>
      </button>
    ))}
  </RadioGroup.Root>
);
