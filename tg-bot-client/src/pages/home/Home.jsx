import { useState, useRef, useEffect } from "react";
import { useGesture } from "@use-gesture/react";
import { Link, useNavigate } from "react-router-dom";
import { Chip } from "../../components/chip/Chip";
import { Button } from "../../components/button/Button";
import { ContentInner } from "../../components/layout/ContentInner";
import { Footer } from "../../components/layout/Footer";
import { Card } from "../../components/card/Card";
import { useSlider } from "../../hooks/useSlider";

import styles from "./Home.module.css";

const categories = [
  {
    id: "1",
    value: "Бургеры",
  },
  {
    id: "2",
    value: "Пицца",
  },
  {
    id: "3",
    value: "Паста",
  },
  {
    id: "4",
    value: "Бургеры",
  },
  {
    id: "5",
    value: "Пицца",
  },
  {
    id: "6",
    value: "Пицца",
  },
  {
    id: "7",
    value: "Бургеры",
  },
  {
    id: "8",
    value: "Пицца",
  },
  {
    id: "9",
    value: "Пицца",
  },
  {
    id: "10",
    value: "Бургеры",
  },
  {
    id: "11",
    value: "Пицца",
  },
  {
    id: "12",
    value: "Пицца",
  },
];

export const Home = () => {
  // const { containerRef } = useSlider();
  const navigate = useNavigate();
  const [currentCategory, setCurrentCategory] = useState(null);
  const wheelOffset = useRef(0);
  const dragOffset = useRef(0);
  const target = useRef();

  console.log({ wheelOffset, dragOffset });

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

  return (
    <>
      {/* <div ref={containerRef} className={styles.categories}> */}
      <div ref={target} className={styles.categories}>
        <Chip
          items={categories}
          currentCategoryId={currentCategory?.id}
          onSelect={setCurrentCategory}
        />
      </div>
      {/* </div> */}
      <ContentInner>
        <div className={styles.productItems}>
          <Link to="/1">
            <Card
              imgUrl={"assets/burger.png"}
              name={"Бургер из чего‑то там"}
              price="650"
              options="350"
              count={0}
            />
          </Link>
          <Card
            imgUrl={"assets/burger.png"}
            name={"Бургер из чего‑то там с чем‑то вкусным"}
            price={"750"}
            options="100 гр."
            count={0}
          />
          <Card
            imgUrl={"assets/burger.png"}
            name={"Бургер из чего‑то там с чем-то там еще"}
            price={"1000"}
            options="1000"
            count={0}
          />
          <Card
            imgUrl={"assets/burger.png"}
            name={"Бургер из чего‑то там с чем-то там еще"}
            price={"1000"}
            options="1000"
            count={0}
          />
          <Card
            imgUrl={"assets/burger.png"}
            name={"Бургер из чего‑то там с чем-то там еще"}
            price={"1000"}
            options="1000"
            count={0}
          />
          <Card
            imgUrl={"assets/burger.png"}
            name={"Бургер из чего‑то там с чем-то там еще"}
            price={"1000"}
            options="1000"
            count={0}
          />
          <Card
            imgUrl={"assets/burger.png"}
            name={"Бургер из чего‑то там с чем-то там еще"}
            price={"1000"}
            options="1000"
            count={0}
          />
        </div>
      </ContentInner>
      <Footer>
        <Button onClick={() => navigate("/cart")} text="Корзина 650 ₽" />
      </Footer>
    </>
  );
};
