import * as RadixSelect from "@radix-ui/react-select";
import clx from "classnames";
import { SelectItem } from "./SelectItem";
import ChevronIcon from "./chevron.svg?react";

import styles from "./Select.module.css";

export const Select = ({
  placeholder,
  items,
  isValid,
  helperText,
  withHelper,
  onSelected,
}) => (
  <RadixSelect.Root onValueChange={onSelected}>
    <div className={styles.selectContainer}>
      <RadixSelect.Trigger
        className={clx(styles.selectTrigger, {
          [styles.error]: !isValid,
        })}
      >
        <RadixSelect.Value placeholder={placeholder} />
        <RadixSelect.Icon className={styles.selectIcon}>
          <ChevronIcon />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>
      {withHelper && (
        <span
          className={clx(styles.helperText, {
            [styles.error]: !isValid,
          })}
        >
          {helperText || ""}
        </span>
      )}
    </div>
    <RadixSelect.Portal>
      <RadixSelect.Content
        position="popper"
        side="bottom"
        align="center"
        sideOffset={8}
        className={styles.selectContent}
      >
        <RadixSelect.Viewport className={styles.selectViewport}>
          {items.map((item) => (
            <SelectItem key={item.id} value={item.id}>
              {item.value}
            </SelectItem>
          ))}
        </RadixSelect.Viewport>
      </RadixSelect.Content>
    </RadixSelect.Portal>
  </RadixSelect.Root>
);
