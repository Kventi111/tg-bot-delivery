import { Link, useNavigate } from "react-router-dom";
import { Chip } from "../components/chip/Chip";
import { Button } from "../components/button/Button";
import { Card } from "../components/card/Card";

const Footer = ({ children }) => <div className="footer">{children}</div>;

// const tg = window.Telegram.WebApp;
// tg.isExpanded = true;
// tg.BackButton = true;

// tg.BackButton.isVisible = false;
// tg.BackButton.hide();

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <>
        <div
          style={{
            display: "flex",
            gap: "12px",
            margin: "12px 0",
            overflow: "auto",
            width: "100%",
            scrollSnapAlign: "start",
            scrollSnapType: "x proximity",
          }}
        >
          <Chip text="Бургеры" active />
          <Chip text="Пицца" />
          <Chip text="Паста" />
          <Chip text="Бургеры" />
          <Chip text="Пицца" />
          <Chip text="Паста" />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "12px",
          }}
        >
          <Link to="/1">
            <Card
              imgUrl={
                "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2799&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              name={"Бургер из чего‑то там"}
              price={"650"}
              options="350"
              count={0}
            />
          </Link>
          <Card
            imgUrl={
              "https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=2822&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            name={"Бургер из чего‑то там с чем‑то вкусным"}
            price={"750"}
            options="100 гр."
            count={0}
          />
          <Card
            imgUrl={
              "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            name={"Бургер из чего‑то там с чем-то там еще"}
            price={"1000"}
            options="1000"
            count={0}
          />
          <Card
            imgUrl={
              "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            name={"Бургер из чего‑то там с чем-то там еще"}
            price={"1000"}
            options="1000"
            count={0}
          />
          <Card
            imgUrl={
              "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            name={"Бургер из чего‑то там с чем-то там еще"}
            price={"1000"}
            options="1000"
            count={0}
          />
          <Card
            imgUrl={
              "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            name={"Бургер из чего‑то там с чем-то там еще"}
            price={"1000"}
            options="1000"
            count={0}
          />
          <Card
            imgUrl={
              "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            name={"Бургер из чего‑то там с чем-то там еще"}
            price={"1000"}
            options="1000"
            count={0}
          />
        </div>
      </>
      <Footer>
        <Button onClick={() => navigate("/cart")} text="Корзина 650 ₽" />
      </Footer>
    </>
  );
};
