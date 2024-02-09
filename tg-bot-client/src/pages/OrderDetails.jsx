import { useNavigate } from "react-router-dom";
import { Button } from "../components/button/Button";

const tg = window.Telegram.WebApp;

tg.BackButton.onClick(() => {
  tg.BackButton.hide();
  history.back();
});

const Footer = ({ children }) => <div className="footer">{children}</div>;

export const OrderDetails = () => {
  const navigate = useNavigate();
  tg.BackButton.show();

  return (
    <>
      <>
        <div>OrderDetails</div>
      </>
      <Footer>
        <Button onClick={() => navigate("/checkout")} text="Продолжить" />
      </Footer>
    </>
  );
};
