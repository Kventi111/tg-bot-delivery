import * as RadixCheckbox from "@radix-ui/react-checkbox";
import clsx from "classnames";
// import { CheckIcon } from '@ewp/shared-app'
import styles from "./Checkbox.module.css";

export const Checkbox = ({
  id,
  value,
  checked = false,
  onChecked,
  className,
}) => {
  const checkHandler = (isChecked) =>
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
            {/* <CheckIcon className={styles.checkboxIcon} /> */}+
          </RadixCheckbox.Indicator>
        )}
      </RadixCheckbox.Root>
      {value && (
        <label className={styles.label} htmlFor={id}>
          {value}
        </label>
      )}
    </div>
  );
};
