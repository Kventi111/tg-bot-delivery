import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Datail";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { OrderDetails } from "./pages/OrderDetails";
import "./App.css";

const tg = window.Telegram.WebApp;
// const isPremium = tg.initDataUnsafe?.user?.is_premium;
// tg.BackButton.isVisible = true;

function App() {
  console.log({ tg });

  useEffect(() => {
    tg.ready();

    // nomenclatureApi.getMenu("54e21b58-a3d7-402a-83ad-d96b074a171a")
    // tokenApi.getToken(API_KEY)
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path=":id" element={<Detail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="orderDetails" element={<OrderDetails />} />

        {/* <Route path="*" element={<NoMatch />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
