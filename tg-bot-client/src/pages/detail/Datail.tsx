import { useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Button } from "../../components/button/Button";
import { Select } from "../../components/select/Select";
import { CheckboxGroup } from "../../components/checkboxGroup/CheckboxGroup";
import { Footer } from "../../components/layout/Footer";
import { ContentInner } from "../../components/layout/ContentInner";
import { Counter } from "../../components/counter/Counter";

import { useProductsStore } from "../../store/products";

import styles from "./Datail.module.css";

export const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, setCount: setProductCount } = useProductsStore();
  const [option, setOption] = useState("");
  const [options, setOptions] = useState({});
  let [count, setCount] = useState(1);

  const detailItem = products[id];

  const onIncreaseCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const onDecreaseCount = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, []);

  const onAdd = () => {
    setProductCount(id, count, "detail");
    navigate("/");
  };

  return (
    <>
      <div className={styles.imgWrapper}>
        <img src={detailItem?.imgUrl} alt="" />
      </div>
      <ContentInner>
        <div className={styles.description}>
          <span className={styles.name}>{detailItem.name}</span>
          <span className={styles.options}>
            200 gr chicken + cheese Lettuce + tomato
          </span>
        </div>
        <div style={{ marginBottom: "24px" }}>
          <Select
            value={option}
            label={"Прожарка"}
            onSelected={(value) => setOption(value)}
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
        <div className={styles.options}>
          <div className={styles.title}>Дополнительно</div>

          <CheckboxGroup
            selectedItems={options}
            items={[
              { id: "1", value: "Жир" },
              { id: "2", value: "Яйца" },
              { id: "3", value: "Лук" },
            ]}
            onChange={({ isChecked, value }) => {
              console.log({ isChecked, value });

              setOptions((prev) => ({ ...prev, [value]: isChecked }));
            }}
          />
        </div>
      </ContentInner>
      <Footer>
        <div className={styles.actions}>
          <Counter
            size="lg"
            count={count}
            onDecrease={onDecreaseCount}
            onIncrease={onIncreaseCount}
          />
          <Button onClick={onAdd} size="lg">
            Добавить {count * detailItem.price} ₽
          </Button>
        </div>
      </Footer>
    </>
  );
};
