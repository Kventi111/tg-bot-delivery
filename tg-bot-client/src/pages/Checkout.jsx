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
      <>
        <div>Checkout</div>
      </>
      <Footer>
        <Button onClick={() => {}} text="Оформить заказ 1000р" />
      </Footer>
    </>
  );
};
