import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { userApi, ORG_ID, tokenApi } from "./api";
import { API_KEY } from "./api/constants";
import { Home } from "./pages/home/Home";
import { PageLayout } from "./pages/PageLayout";
import { Detail } from "./pages/detail/Datail";
import { Cart } from "./pages/cart/Cart";
import { Checkout } from "./pages/checkout/Checkout";
import { OrderDetails } from "./pages/orderDetail/OrderDetails";
import { TestPage } from "./pages/testPage/TestPage";
import { useProfileStore } from "./store/profile";

const tg = window.Telegram.WebApp;

tg.expand();

function App() {
  const { setToken } = useProfileStore();

  useEffect(() => {
    tg.ready();

    // nomenclatureApi.getMenu("54e21b58-a3d7-402a-83ad-d96b074a171a")
    tokenApi
      .getToken(API_KEY)
      .then((data) => {
        setToken(data.token);
        return data;
      })
      .then(({ token }) => {
        userApi.getUserInfo(
          {
            phone: "+79890500210",
            organizationId: ORG_ID,
          },
          {
            Authorization: `Bearer ${token}`,
          }
        );
      });
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
