import PropTypes from "prop-types";
import { formatPrice } from "../../utils/formatNumber";
import styles from "./Cart.module.css";

export const CartItem = ({ imgUrl, name, desc, price, children }) => (
  <div className={styles.cartItem}>
    <div className={styles.cartItemImgWrapper}>
      <img src={imgUrl} alt="" />
    </div>
    <div className={styles.cartItemInfo}>
      <span className={styles.cartItemName}>{name}</span>
      <span className={styles.cartItemDesc}>{desc}</span>
      <span className={styles.cartItemPrice}>{formatPrice(price)}</span>
    </div>
    <div>{children}</div>
  </div>
);

CartItem.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string,
  desc: PropTypes.string,
  price: PropTypes.number,
  children: PropTypes.node,
};
