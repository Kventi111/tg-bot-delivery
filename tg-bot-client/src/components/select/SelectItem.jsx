import * as RadixSelect from "@radix-ui/react-select";
import styles from "./Select.module.css";

export const SelectItem = ({ children, ...props }) => (
  <RadixSelect.Item className={styles.selectItem} {...props}>
    <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
  </RadixSelect.Item>
);
