// import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button/Button";
import { Footer } from "../../components/layout/Footer";
import { ContentInner } from "../../components/layout/ContentInner";
import { useCartStore } from "../../store/cart";
import { formatPrice } from "../../utils/formatNumber";

import styles from "./Checkout.module.css";

const tg = window.Telegram.WebApp;

tg.BackButton.onClick(() => {
  tg.BackButton.hide();
  history.back();
});

export const Checkout = () => {
  const { lineItems, totalPrice } = useCartStore();
  tg.BackButton.show();

  return (
    <>
      <ContentInner>
        <div className={styles.root}>
          Оплата заказа
          <div className={styles.separator} />
          <div className={styles.list}>
            {Object.values(lineItems).map((i) => (
              <div key={i.id} className={styles.item}>
                <div className={styles.name}>{i.name}</div>
                <span className={styles.count}>{`X${i.count}`}</span>
                <div className={styles.price}>{formatPrice(i.price)}</div>
              </div>
            ))}
            <div className={styles.item}>
              <div>Доставка</div>
              <div className={styles.price}>0 ₽</div>
            </div>
          </div>
          <div className={styles.separator} />
          <div className={styles.total}>
            <div>Игото</div>
            <div className={styles.price}>{formatPrice(totalPrice)}</div>
          </div>
        </div>
      </ContentInner>
      <Footer>
        <Button size="lg" onClick={() => {}}>
          Оформить заказ {formatPrice(totalPrice)}
        </Button>
      </Footer>
    </>
  );
};
