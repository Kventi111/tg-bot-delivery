import { useState } from "react";
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

const categories = [
  {
    id: "1",
    value: "Бургеры",
  },
  {
    id: "2",
    value: "Пицца",
  },
  {
    id: "3",
    value: "Паста",
  },
  {
    id: "4",
    value: "Бургеры",
  },
  {
    id: "5",
    value: "Пицца",
  },
  {
    id: "6",
    value: "Пицца",
  },
];

export const Home = () => {
  const navigate = useNavigate();
  const [currentCategory, setCurrentCategory] = useState(null);

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "12px",
          margin: "12px 0 24px 0",
          overflow: "auto",
          width: "100%",
          scrollSnapAlign: "start",
          scrollSnapType: "x proximity",
        }}
      >
        <Chip
          items={categories}
          currentCategoryId={currentCategory?.id}
          onSelect={setCurrentCategory}
        />
      </div>
      <div className="contentWrapper">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            // gridTemplateRows: "max-content",
            alignItems: "stretch",
            gap: "12px",
            marginBottom: "100px",
          }}
        >
          <Link to="/1">
            <Card
              imgUrl={"assets/burger.png"}
              name={"Бургер из чего‑то там"}
              price="650"
              options="350"
              count={0}
            />
          </Link>
          <Card
            imgUrl={"assets/burger.png"}
            name={"Бургер из чего‑то там с чем‑то вкусным"}
            price={"750"}
            options="100 гр."
            count={0}
          />
          <Card
            imgUrl={"assets/burger.png"}
            name={"Бургер из чего‑то там с чем-то там еще"}
            price={"1000"}
            options="1000"
            count={0}
          />
          <Card
            imgUrl={"assets/burger.png"}
            name={"Бургер из чего‑то там с чем-то там еще"}
            price={"1000"}
            options="1000"
            count={0}
          />
          <Card
            imgUrl={"assets/burger.png"}
            name={"Бургер из чего‑то там с чем-то там еще"}
            price={"1000"}
            options="1000"
            count={0}
          />
          <Card
            imgUrl={"assets/burger.png"}
            name={"Бургер из чего‑то там с чем-то там еще"}
            price={"1000"}
            options="1000"
            count={0}
          />
          <Card
            imgUrl={"assets/burger.png"}
            name={"Бургер из чего‑то там с чем-то там еще"}
            price={"1000"}
            options="1000"
            count={0}
          />
        </div>
      </div>
      <Footer>
        <Button onClick={() => navigate("/cart")} text="Корзина 650 ₽" />
      </Footer>
    </>
  );
};
