import styles from "./Input.module.css";

export const Input = ({ onChange, placeholder, value }) => (
  <input
    className={styles.root}
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);
