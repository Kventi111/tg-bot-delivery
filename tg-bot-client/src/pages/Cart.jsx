import { useNavigate } from "react-router-dom";
import { Button } from "../components/button/Button";
import { Counter } from "../components/counter/Counter";

const tg = window.Telegram.WebApp;

tg.BackButton.onClick(() => {
  tg.BackButton.hide();
  history.back();
});

// tg.MainButton.text = "test";
// tg.MainButton.show();

const Footer = ({ children }) => <div className="footer">{children}</div>;

const Item = ({ imgUrl, name, desc, price }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      backgroundColor: "white",
      gap: "16px",
      color: "black",
      borderRadius: "12px",
      padding: "8px 16px",
    }}
  >
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
    <div>
      <Counter initialCount={2} />
    </div>
  </div>
);

export const Cart = () => {
  const navigate = useNavigate();
  tg.BackButton.show();

  return (
    <>
      <div
        className="contentWrapper"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <Item
          imgUrl={"/assets/burger.png"}
          name={"Бургер из чего‑то там с чем‑то вкусным"}
          desc={"medium"}
          price={666}
        />
        <Item
          imgUrl={"/assets/burger.png"}
          name={"Бургер из чего‑то там с чем‑то вкусным"}
          desc={"medium"}
          price={666}
        />
        <Item
          imgUrl={"/assets/burger.png"}
          name={"Бургер из чего‑то там с чем‑то вкусным"}
          desc={"medium"}
          price={666}
        />
        <Item
          imgUrl={"/assets/burger.png"}
          name={"Бургер из чего‑то там с чем‑то вкусным"}
          desc={"medium"}
          price={666}
        />
        <Item
          imgUrl={"/assets/burger.png"}
          name={"Бургер из чего‑то там с чем‑то вкусным"}
          desc={"medium"}
          price={666}
        />
        <Item
          imgUrl={"/assets/burger.png"}
          name={"Бургер из чего‑то там с чем‑то вкусным"}
          desc={"medium"}
          price={666}
        />
        <Item
          imgUrl={"/assets/burger.png"}
          name={"Бургер из чего‑то там с чем‑то вкусным"}
          desc={"medium"}
          price={666}
        />
        <Item
          imgUrl={"/assets/burger.png"}
          name={"Бургер из чего‑то там с чем‑то вкусным"}
          desc={"medium"}
          price={666}
        />
        <Item
          imgUrl={"/assets/burger.png"}
          name={"Бургер из чего‑то там с чем‑то вкусным"}
          desc={"medium"}
          price={666}
        />
      </div>
      <Footer>
        <Button
          onClick={() => navigate("/orderDetails")}
          text="Оформить заказ 650 ₽"
        />
      </Footer>
    </>
  );
};
