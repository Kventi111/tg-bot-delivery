// import { useNavigate } from "react-router-dom";
import { Button } from "../components/button/Button";

const tg = window.Telegram.WebApp;

tg.BackButton.onClick(() => {
  tg.BackButton.hide();
  history.back();
});

const Footer = ({ children }) => <div className="footer">{children}</div>;

export const Checkout = () => {
  //   const navigate = useNavigate();
  tg.BackButton.show();

  return (
    <>
      <div className="contentWrapper">
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            color: "black",
            padding: "12px 0 12px 16px",
          }}
        >
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
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "#8E8E93",
              }}
            >
              <div>Пепперони х1</div>
              <div>1 650 ₽</div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "#8E8E93",
              }}
            >
              <div>Пепперони х1</div>
              <div>1 650 ₽</div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "#8E8E93",
              }}
            >
              <div>Пепперони х1</div>
              <div>1 650 ₽</div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "#8E8E93",
              }}
            >
              <div>Пепперони х1</div>
              <div>650 ₽</div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "#8E8E93",
              }}
            >
              <div>Доставка</div>
              <div>0 ₽</div>
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
            <div>123123 р</div>
          </div>
        </div>
      </div>
      <Footer>
        <Button onClick={() => {}} text="Оформить заказ 1000р" />
      </Footer>
    </>
  );
};
