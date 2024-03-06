import { ReactNode } from "react";
import { formatPrice } from "../../utils/formatNumber";
import styles from "./Cart.module.css";
import { Product } from "../../store/types";

type CartItemProps = Partial<Product> & {
  children: ReactNode;
};

export const CartItem = ({
  imgUrl,
  name,
  description,
  price,
  children,
}: CartItemProps) => (
  <div className={styles.cartItem}>
    <div className={styles.cartItemImgWrapper}>
      <img src={imgUrl} alt="" />
    </div>
    <div className={styles.cartItemInfo}>
      <span className={styles.cartItemName}>{name}</span>
      <span className={styles.cartItemDesc}>{description}</span>
      <span className={styles.cartItemPrice}>{formatPrice(price)}</span>
    </div>
    <div>{children}</div>
  </div>
);
