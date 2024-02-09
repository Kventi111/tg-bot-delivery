import { useNavigate } from "react-router-dom";
import { Button } from "../components/button/Button";

const tg = window.Telegram.WebApp;

tg.BackButton.onClick(() => {
  tg.BackButton.hide();
  history.back();
});

const Footer = ({ children }) => <div className="footer">{children}</div>;

export const Cart = () => {
  const navigate = useNavigate();
  tg.BackButton.show();

  return (
    <>
      <>
        <div>cart</div>
      </>
      <Footer>
        <Button
          onClick={() => navigate("/orderDetails")}
          text="Оформить заказ 650 ₽"
        />
      </Footer>
    </>
  );
};
