import { Counter } from "../counter/Counter";

import styles from "./Card.module.css";

export const Card = ({ imgUrl, price, name, options, count }) => {
  return (
    <div className={styles.root}>
      <div className={styles.image}>
        <img src={imgUrl} height={70} alt="" />
      </div>
      <div className={styles.description}>
        <span className={styles.price}>{price} ₽</span>
        <span className={styles.name}>{name}</span>
        <span className={styles.options}>{options}</span>
      </div>
      <div className={styles.actions}>
        <Counter />
      </div>
    </div>
  );
};
