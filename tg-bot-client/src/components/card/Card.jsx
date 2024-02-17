import { Counter } from "../counter/Counter";

import styles from "./Card.module.css";

export const Card = ({
  imgUrl,
  price,
  name,
  options,
  count,
  onCounterChange,
  onClick,
}) => {
  return (
    <div className={styles.root} onClick={onClick}>
      <div className={styles.image}>
        <img src={imgUrl} height={70} alt="" />
      </div>
      <div className={styles.description}>
        <span className={styles.price}>{price} ₽</span>
        <span className={styles.name}>{name}</span>
        <span className={styles.options}>{options}</span>
      </div>
      <div className={styles.actions}>
        <Counter initialCount={count} onChange={onCounterChange} />
      </div>
    </div>
  );
};
