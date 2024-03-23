import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useBackButton } from "@tma.js/sdk-react";
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

export const EmptyState = () => {
  return "Тут пока пусто вернитесь и Добавьте товары в корзину";
};

export const Cart = () => {
  const backButton = useBackButton();
  const navigate = useNavigate();
  const { lineItems, totalPrice } = useCartStore();

  useEffect(() => {
    backButton.show();
    backButton.on("click", () => {
      backButton.hide();
      history.back();
    });
  }, []);

  return (
    <>
      <ContentInner>
        <div className={styles.title}>Заказ</div>
        <div className={styles.root}>
          {Object.values(lineItems).length ? (
            Object.values(lineItems).map((item) => (
              <CartItem
                key={item.id}
                imgUrl={item.imgUrl}
                name={item.name}
                description={"medium"}
                price={item.price}
              >
                <ProductCounter id={item.id} productCount={item.count} />
              </CartItem>
            ))
          ) : (
            <EmptyState />
          )}
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
