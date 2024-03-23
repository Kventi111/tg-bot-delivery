import * as RadixCheckbox from "@radix-ui/react-checkbox";
import clsx from "classnames";

import CheckIcon from "./check.svg?react";

import styles from "./Checkbox.module.css";

export type CheckboxProps = {
  id: string
  value: string
  checked: boolean
  withLabel: boolean
  className: string
  onChecked: ({ isChecked,value }: { isChecked: boolean,value?: string }) => void
}

export const Checkbox = ({
  id,
  value,
  checked = false,
  withLabel = true,
  onChecked,
  className,
}: CheckboxProps) => {
  const checkHandler = (isChecked: boolean) =>
    value ? onChecked({ isChecked, value }) : onChecked({ isChecked });

  return (
    <div className={clsx(styles.checkboxWrapper, className)}>
      <RadixCheckbox.Root
        checked={checked}
        onCheckedChange={checkHandler}
        className={styles.checkboxRoot}
        id={id}
      >
        {checked && (
          <RadixCheckbox.Indicator className={styles.checkboxIndicator}>
            <CheckIcon className={styles.checkboxIcon} />
          </RadixCheckbox.Indicator>
        )}
      </RadixCheckbox.Root>
      {value && withLabel && (
        <label className={styles.label} htmlFor={id}>
          {value}
        </label>
      )}
    </div>
  );
};
