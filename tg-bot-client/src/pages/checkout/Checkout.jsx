// import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button/Button";
import { Footer } from "../../components/layout/Footer";
import { ContentInner } from "../../components/layout/ContentInner";
import { useOrderStore } from "../../store/order";

import styles from "./Checkout.module.css";

const tg = window.Telegram.WebApp;

tg.BackButton.onClick(() => {
  tg.BackButton.hide();
  history.back();
});

export const Checkout = () => {
  //   const navigate = useNavigate();
  const { list, commonPrice } = useOrderStore();
  tg.BackButton.show();

  return (
    <>
      <ContentInner>
        <div className={styles.root}>
          Оплата заказа
          <div
            style={{
              backgroundColor: "black",
              width: "100%",
              height: "1px",
              margin: "12px 0",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            {list.map((i) => (
              <div
                key={i.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "#8E8E93",
                }}
              >
                <div>{`${i.name} X${i.count}`}</div>
                <div style={{ paddingRight: "16px" }}>{i.price} ₽</div>
              </div>
            ))}

            {/* <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "#8E8E93",
              }}
            >
              <div>Пепперони х1</div>
              <div style={{ paddingRight: "16px" }}>1 650 ₽</div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "#8E8E93",
              }}
            >
              <div>Пепперони х1</div>
              <div style={{ paddingRight: "16px" }}>1 650 ₽</div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "#8E8E93",
              }}
            >
              <div>Пепперони х1</div>
              <div style={{ paddingRight: "16px" }}>650 ₽</div>
            </div> */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "#8E8E93",
              }}
            >
              <div>Доставка</div>
              <div style={{ paddingRight: "16px" }}>0 ₽</div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "black",
              width: "100%",
              height: "1px",
              margin: "12px 0",
            }}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>Игото</div>
            <div style={{ paddingRight: "16px" }}>{commonPrice} ₽</div>
          </div>
        </div>
      </ContentInner>
      <Footer>
        <Button onClick={() => {}} text="Оформить заказ 10000р" />
      </Footer>
    </>
  );
};
