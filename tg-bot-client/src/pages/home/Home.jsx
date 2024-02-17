import { useState, useRef, useEffect } from "react";
import { useGesture } from "@use-gesture/react";
import { useNavigate } from "react-router-dom";
import { Chip } from "../../components/chip/Chip";
import { Button } from "../../components/button/Button";
import { ContentInner } from "../../components/layout/ContentInner";
import { Footer } from "../../components/layout/Footer";
import { Card } from "../../components/card/Card";
import { fakeItems } from "../../store/products";
import { useOrderStore } from "../../store/order";

import styles from "./Home.module.css";

export const Home = () => {
  const navigate = useNavigate();
  const [currentCategory, setCurrentCategory] = useState(null);
  const wheelOffset = useRef(0);
  const dragOffset = useRef(0);
  const target = useRef();
  const { list, filteredList, categories, setProducts, setFilter, setCount } =
    useOrderStore();

  const { items, commonPrice } = useOrderStore();

  console.log({ list, categories, filteredList });
  console.log({ items, commonPrice });

  const categoriesOptions = categories.map((i, index) => ({
    id: index,
    value: i,
  }));

  useEffect(() => {
    setTimeout(() => setProducts(fakeItems), 3000);
  }, []);

  useGesture(
    {
      onDrag: ({ event, offset: [x], direction: [dx] }) => {
        event.preventDefault();
        event.stopPropagation();

        if (target.current.contains(event.target)) {
          if (dx) {
            console.log(x, dx);

            dragOffset.current = -x;
            target.current.scrollLeft -= dx * 12;
            // target.current.scrollLeft -= dx * 20;
            // runSprings(wheelOffset.current + -x, -dx)
          }
        }
      },
      onWheel: ({ event, offset: [x], direction: [dx] }) => {
        event.preventDefault();
        event.stopPropagation();

        if (target.current.contains(event.target)) {
          if (dx) {
            wheelOffset.current = x;

            target.current.scrollLeft += dx * 12;
            // runSprings(dragOffset.current + y, dy)
          }
        }
      },
    },
    {
      target,
      wheel: { eventOptions: { passive: false } },
      drag: { eventOptions: { passive: false } },
    }
  );

  useEffect(() => {
    const handleDocumentWheel = (event) => {
      // Если курсор мыши находится над контейнером слайдера,
      // предотвращаем дальнейшее всплытие события
      if (target.current.contains(event.target)) {
        event.preventDefault();

        target.current.scrollLeft += event.deltaY;
      }
    };

    const handleDocumentTouchMove = (event) => {
      // Если курсор мыши находится над контейнером слайдера,
      // предотвращаем дальнейшее всплытие события
      if (target.current.contains(event.target)) {
        event.preventDefault();
      }
    };

    document.addEventListener("wheel", handleDocumentWheel, { passive: false });
    document.addEventListener("touchmove", handleDocumentTouchMove, {
      passive: false,
    });

    return () => {
      document.removeEventListener("wheel", handleDocumentWheel);
      document.removeEventListener("touchmove", handleDocumentTouchMove);
    };
  }, []);

  const onCategorySelected = (category) => {
    console.log({ category });

    setCurrentCategory(category);
    setFilter(category.value);
  };

  return (
    <>
      <div ref={target} className={styles.categories}>
        <Chip
          items={[
            {
              id: 111,
              value: "Все",
            },
            ...categoriesOptions,
          ]}
          currentCategoryId={currentCategory?.id}
          onSelect={onCategorySelected}
        />
      </div>
      <ContentInner>
        <div className={styles.productItems}>
          {!filteredList &&
            list.map((item, index) => (
              <Card
                key={item.id}
                imgUrl={"assets/burger.png"}
                name={item.name}
                price={item.price}
                options={item.weight_g}
                count={item.count}
                onClick={() => navigate(`/${item.id}`)}
                onCounterChange={(count) => {
                  console.log({ count });
                  setCount(item.id, count);
                }}
              />
            ))}
          {filteredList &&
            filteredList.map((item, index) => (
              <Card
                key={index}
                imgUrl={"assets/burger.png"}
                name={item.name}
                price={item.price}
                options={item.weight_g}
                count={0}
              />
            ))}
        </div>
      </ContentInner>
      <Footer>
        <Button
          onClick={() => navigate("/cart")}
          text={`Корзина ${commonPrice} ₽`}
        />
      </Footer>
    </>
  );
};
