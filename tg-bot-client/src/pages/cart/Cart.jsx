import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button/Button";
import { Footer } from "../../components/layout/Footer";
import { ContentInner } from "../../components/layout/ContentInner";
import { useCartStore } from "../../store/cart";
import { formatPrice } from "../../utils/formatNumber";

import { ProductCounter } from "../home/components/ProductCounter";

import { CartItem } from "./CartItem";

import styles from "./Cart.module.css";

const tg = window.Telegram.WebApp;

tg.BackButton.onClick(() => {
  tg.BackButton.hide();
  history.back();
});

export const Cart = () => {
  const navigate = useNavigate();
  const { lineItems, totalPrice } = useCartStore();
  tg.BackButton.show();

  return (
    <>
      <ContentInner>
        <div className={styles.title}>Заказ</div>
        <div className={styles.root}>
          {Object.values(lineItems).map((item) => (
            <CartItem
              key={item.id}
              imgUrl={item.imgUrl}
              name={item.name}
              desc={"medium"}
              price={item.price}
            >
              <ProductCounter id={item.id} productCount={item.count} />
            </CartItem>
          ))}
        </div>
      </ContentInner>
      <Footer>
        <Button size="lg" onClick={() => navigate("/orderDetails")}>
          Оформить заказ {formatPrice(totalPrice)} ₽
        </Button>
      </Footer>
    </>
  );
};
