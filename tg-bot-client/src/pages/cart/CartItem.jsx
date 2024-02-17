import { Counter } from "../../components/counter/Counter";

import styles from "./Cart.module.css";

export const CartItem = ({
  imgUrl,
  name,
  desc,
  price,
  count,
  onCounterChange,
}) => (
  <div className={styles.cartItem}>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={imgUrl} alt="" width={"50px"} height={"auto"} />
    </div>
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          width: "150px",
          textOverflow: "ellipsis",
          fontSize: "12px",
        }}
      >
        {name}
      </span>
      <span style={{ fontSize: "12px", color: "#8E8E93" }}>{desc}</span>
      <span style={{ fontSize: "14px", fontWeight: "600" }}>{price}</span>
    </div>
    <div style={{ width: "100%" }}>
      <Counter initialCount={count} onChange={onCounterChange} />
    </div>
  </div>
);
