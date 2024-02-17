import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button/Button";
import { Footer } from "../../components/layout/Footer";
import { ContentInner } from "../../components/layout/ContentInner";
import { useOrderStore } from "../../store/order";

import { CartItem } from "./CartItem";

import styles from "./Cart.module.css";

const tg = window.Telegram.WebApp;

tg.BackButton.onClick(() => {
  tg.BackButton.hide();
  history.back();
});

export const Cart = () => {
  const navigate = useNavigate();
  const { items, commonPrice, setCount } = useOrderStore();
  tg.BackButton.show();

  return (
    <>
      <ContentInner>
        <div className={styles.title}>Заказ</div>
        <div className={styles.root}>
          {Object.values(items).map((item) => (
            <CartItem
              key={item.id}
              imgUrl={"/assets/burger.png"}
              name={item.name}
              desc={"medium"}
              price={item.price}
              count={item.count}
              onCounterChange={(count) => {
                console.log({ count });
                setCount(item.id, count);
              }}
            />
          ))}

          {/* <CartItem
            imgUrl={"/assets/burger.png"}
            name={"Бургер из чего‑то там с чем‑то вкусным"}
            desc={"medium"}
            price={666}
          />
          <CartItem
            imgUrl={"/assets/burger.png"}
            name={"Бургер из чего‑то там с чем‑то вкусным"}
            desc={"medium"}
            price={777}
          /> */}
        </div>
      </ContentInner>
      <Footer>
        <Button
          onClick={() => navigate("/orderDetails")}
          text={`Оформить заказ ${commonPrice} ₽`}
        />
      </Footer>
    </>
  );
};
