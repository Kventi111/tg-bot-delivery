import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../../components/button/Button";
import { Counter } from "../../components/counter/Counter";
import { Select } from "../../components/select/Select";
import { CheckboxGroup } from "../../components/checkboxGroup/CheckboxGroup";
import { Footer } from "../../components/layout/Footer";
import { ContentInner } from "../../components/layout/ContentInner";
import { useOrderStore } from "../../store/order";

import styles from "./Datail.module.css";

const tg = window.Telegram.WebApp;

tg.BackButton.onClick(() => {
  tg.BackButton.hide();
  history.back();
});

export const Detail = () => {
  const { id } = useParams();
  const { list, setCount } = useOrderStore();
  tg.BackButton.show();
  const [option, setOption] = useState(null);
  const detailItem = list.find((i) => i.id == id);

  console.log({ id, detailItem, list });

  return (
    <>
      <div className={styles.imgWrapper}>
        <img
          style={{
            width: "190px",
            height: "auto",
          }}
          src="/assets/burger.png"
          alt=""
        />
      </div>
      <ContentInner>
        <div className={styles.description}>
          <span className={styles.name}>{detailItem.name}</span>
          <span className={styles.options}>
            200 gr chicken + cheese Lettuce + tomato
          </span>
        </div>
        <div style={{ marginBottom: "24px" }}>
          <div
            style={{ color: "#8E8E93", fontSize: "12px", marginBottom: "8px" }}
          >
            Прожарка
          </div>
          <Select
            items={[
              { id: "1", value: "Не жарить" },
              { id: "2", value: "Слегка поджарить" },
              { id: "3", value: "Средняя" },
              { id: "4", value: "Сильная" },
              { id: "5", value: "Уколек" },
              { id: "6", value: "Угольный уголь" },
            ]}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{ color: "#8E8E93", fontSize: "12px", marginBottom: "8px" }}
          >
            Дополнительно
          </div>

          <CheckboxGroup
            items={[
              { id: "1", value: "Жир" },
              { id: "2", value: "Яйца" },
              { id: "3", value: "Лук" },
            ]}
            onChange={() => {}}
          />
        </div>
      </ContentInner>
      <Footer>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Counter
            initialCount={detailItem.count}
            onChange={(count) => {
              setCount(detailItem.id, count);
            }}
          />
          <Button
            onClick={() => {}}
            text={`Добавить ${detailItem.count * detailItem.price}  ₽`}
          />
        </div>
      </Footer>
    </>
  );
};
