import { useNavigate } from "react-router-dom";
import { Button } from "../components/button/Button";
import { Radio } from "../components/radio/Radio";
import { Input } from "../components/input/Input";

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
      <div className="contentWrapper">
        <div style={{ marginTop: "16px", marginBottom: "24px" }}>
          <div
            style={{ color: "#8E8E93", fontSize: "12px", marginBottom: "8px" }}
          >
            Доставка
          </div>
          <Radio
            items={[
              { value: "1", label: "Курьером" },
              { value: "2", label: "Самовывоз" },
            ]}
          />
        </div>
        <div style={{ marginBottom: "24px" }}>
          <div
            style={{ color: "#8E8E93", fontSize: "12px", marginBottom: "8px" }}
          >
            Оплата
          </div>
          <Radio
            items={[
              { value: "1", label: "Онлайн" },
              { value: "2", label: "Наличные" },
            ]}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <div
              style={{
                color: "#8E8E93",
                fontSize: "12px",
                marginBottom: "8px",
              }}
            >
              Номер телефона
            </div>
            <Input placeholder={"test"} />
          </div>
          <div>
            <div
              style={{
                color: "#8E8E93",
                fontSize: "12px",
                marginBottom: "8px",
              }}
            >
              Адрес доставки
            </div>
            <Input placeholder={"test"} />
          </div>
          <div>
            <div
              style={{
                color: "#8E8E93",
                fontSize: "12px",
                marginBottom: "8px",
              }}
            >
              Комментарий
            </div>
            <Input placeholder={"test"} />
          </div>
        </div>
      </div>
      <Footer>
        <Button onClick={() => navigate("/checkout")} text="Продолжить" />
      </Footer>
    </>
  );
};
