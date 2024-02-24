import { memo } from "react";
import PropTypes from "prop-types";

import styles from "./Card.module.css";

export const Card = memo(function Card({
  imgUrl,
  price,
  name,
  options,
  children,
}) {
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
      <div className={styles.actions}>{children}</div>
    </div>
  );
});

Card.propTypes = {
  imgUrl: PropTypes.string,
  price: PropTypes.number,
  name: PropTypes.string,
  options: PropTypes.number,
  children: PropTypes.node,
};
