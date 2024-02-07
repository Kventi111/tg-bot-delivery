import { useEffect } from "react";
import data from "./data.json";

import { nomenclatureApi, tokenApi } from "./api";
import { Button } from "./components/button/Button";
import { Chip } from "./components/chip/Chip";
import { Card } from "./components/card/Card";

import { API_KEY } from "./api/constants";
import "./App.css";

const tg = window.Telegram.WebApp;
const isPremium = tg.initDataUnsafe?.user?.is_premium;

const Header = () => {
  return (
    <div className="header">
      Header {tg.initDataUnsafe?.user?.username} {isPremium ? "rich" : "bitch"}
    </div>
  );
};

const Wrapper = ({ children }) => <div className="wrapper">{children}</div>;

const Content = ({ children }) => <div className="content">{children}</div>;

const Footer = ({ children }) => <div className="footer">{children}</div>;

const Item = ({ price, description }) => (
  <div className="item">
    <div className="description">{description}</div>
    <div>price : {price}</div>
    <div className="addToCard"> add to card </div>
  </div>
);

const List = ({ items }) => (
  <div className="list">
    {items.map(({ id, price, description }) => (
      <Item key={id} price={price} description={description} />
    ))}
  </div>
);

function App() {
  console.log({ tg });

  useEffect(() => {
    tg.ready();

    // nomenclatureApi.getMenu("54e21b58-a3d7-402a-83ad-d96b074a171a")
    // tokenApi.getToken(API_KEY)
  }, []);

  const onClose = () => tg.close();

  return (
    <Wrapper>
      {/* <Header /> */}
      <Content>
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
          <Card
            imgUrl={
              "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2799&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            name={"Бургер из чего‑то там"}
            price={"650"}
            options="350"
            count={0}
          />
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
        {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui saepe non blanditiis nostrum sint amet exercitationem illum dignissimos dolorum! Cupiditate dolorum sequi fugit. Ut reiciendis minima sapiente. Aperiam, reprehenderit exercitationem. */}
        {/* <List items={data} /> */}

        {/* <Button onClick={() => console.log('123')} text="123" /> */}
      </Content>
      <Footer>
        <Button onClick={onClose} text="Корзина 650 ₽" />
      </Footer>
    </Wrapper>
  );
}

export default App;
