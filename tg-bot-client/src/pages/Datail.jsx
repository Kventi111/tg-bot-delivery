import { useState } from "react";
import { Button } from "../components/button/Button";
import { Select } from "../components/select/Select";
import { CheckboxGroup } from "../components/checkboxGroup/CheckboxGroup";

const tg = window.Telegram.WebApp;

// tg.MainButton.show();
// tg.SettingsButton.show();

tg.BackButton.onClick(() => {
  tg.BackButton.hide();
  history.back();
});

const Footer = ({ children }) => <div className="footer">{children}</div>;

export const Detail = () => {
  // tg.BackButton.show();
  const [option, setOption] = useState(null);

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "32px 0" }}
      >
        <img
          style={{
            width: "190px",
            height: "auto",
          }}
          src="/assets/burger.png"
          alt=""
        />
      </div>
      <div style={{ padding: "0 16px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "20px",
          }}
        >
          <span style={{ fontSize: "20px" }}>
            Бургер из чего‑то там с чем‑то вкусным 490 г
          </span>
          <span style={{ fontSize: "16px", color: "#8E8E93" }}>
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
      </div>
      {/* <Footer>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <button>+</button>
            <span>0</span>
            <button>-</button>
          </div>
          <Button onClick={() => {}} text="Добавить 650 ₽" />
        </div>
      </Footer> */}
    </>
  );
};
