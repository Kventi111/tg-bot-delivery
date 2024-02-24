import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { tokenApi } from "./api";
import { API_KEY } from "./api/constants";
import { Home } from "./pages/home/Home";
import { PageLayout } from "./pages/PageLayout";
import { Detail } from "./pages/detail/Datail";
import { Cart } from "./pages/cart/Cart";
import { Checkout } from "./pages/checkout/Checkout";
import { OrderDetails } from "./pages/orderDetail/OrderDetails";
import { TestPage } from "./pages/testPage/TestPage";

const tg = window.Telegram.WebApp;

tg.expand();

function App() {
  console.log({ tg });

  useEffect(() => {
    tg.ready();

    // nomenclatureApi.getMenu("54e21b58-a3d7-402a-83ad-d96b074a171a")
    tokenApi.getToken(API_KEY);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path=":id" element={<Detail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="orderDetails" element={<OrderDetails />} />
        <Route path="test-page" element={<TestPage />} />

        {/* <Route path="*" element={<NoMatch />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
