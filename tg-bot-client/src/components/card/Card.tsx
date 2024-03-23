import { ReactNode, memo } from "react";

import { formatPrice } from "../../utils/formatNumber";

import styles from "./Card.module.css";
import { Product } from "../../store/types";

type CardProps = Partial<Product> & {
  children: ReactNode
  options: string
}

export function CardSkeleton() {
  return <span className={styles.skeleton} />;
}

export const Card = memo(function Card({
  imgUrl,
  price,
  name,
  options,
  children,
}: CardProps) {
  return (
    <div className={styles.root}>
      <div className={styles.image}>
        <img src={imgUrl} height={70} alt="" />
      </div>
      <div className={styles.description}>
        <span className={styles.price}>{price && formatPrice(price)}</span>
        <span className={styles.name}>{name}</span>
        <span className={styles.options}>{options}</span>
      </div>
      <div className={styles.actions}>{children}</div>
    </div>
  );
});
