import styles from "./Card.module.css";

export const Card = ({ imgUrl, price, name, options, count }) => {
  return (
    <div className={styles.root}>
      <img className={styles.image} src={imgUrl} alt="" />
      <div className={styles.description}>
        <span className={styles.price}>{price} ₽</span>
        <span className={styles.name}>{name}</span>
        <span className={styles.options}>{options}</span>
      </div>
      <div className={styles.actions}>
        {count === 0 && <button>+</button>}
        {count > 0 && <span>{count}</span>}
        {count > 0 && <button>-</button>}
      </div>
    </div>
  );
};
