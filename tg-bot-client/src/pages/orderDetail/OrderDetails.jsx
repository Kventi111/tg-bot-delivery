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
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [comment, setComment] = useState("");
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

        <div className={styles.form}>
          <div className={styles.field}>
            <Input
              label="Номер телефона"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className={styles.field}>
            <Input
              label="Адрес доставки"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className={styles.field}>
            <Input
              label="Комментарий"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
        </div>
      </ContentInner>
      <Footer>
        <Button size="lg" onClick={() => navigate("/checkout")}>
          Продолжить
        </Button>
      </Footer>
    </>
  );
};
