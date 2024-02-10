import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button/Button";
import { Radio } from "../../components/radio/Radio";
import { Input } from "../../components/input/Input";
import { Footer } from "../../components/layout/Footer";
import { ContentInner } from "../../components/layout/ContentInner";

import styles from "./OrderDetails.module.css";

const tg = window.Telegram.WebApp;

tg.BackButton.onClick(() => {
  tg.BackButton.hide();
  history.back();
});

export const OrderDetails = () => {
  const navigate = useNavigate();
  const [checkoutType, setCheckoutType] = useState("");
  const [paymentType, setPaymentType] = useState("");
  tg.BackButton.show();

  return (
    <>
      <ContentInner>
        <div className={styles.block}>
          <div className={styles.title}>Доставка</div>
          <Radio
            selected={checkoutType}
            onSelect={setCheckoutType}
            items={[
              { value: "1", label: "Курьером" },
              { value: "2", label: "Самовывоз" },
            ]}
          />
        </div>
        <div className={styles.block}>
          <div className={styles.title}>Оплата</div>
          <Radio
            selected={paymentType}
            onSelect={setPaymentType}
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
      </ContentInner>
      <Footer>
        <Button onClick={() => navigate("/checkout")} text="Продолжить" />
      </Footer>
    </>
  );
};
