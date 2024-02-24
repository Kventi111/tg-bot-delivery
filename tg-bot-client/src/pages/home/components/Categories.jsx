import { useState, useRef, useEffect } from "react";
import { useGesture } from "@use-gesture/react";
import { Chip } from "../../../components/chip/Chip";
import { useProductsStore } from "../../../store/products";

import styles from "../Home.module.css";

export const Categories = () => {
  const [currentCategory, setCurrentCategory] = useState(null);
  const wheelOffset = useRef(0);
  const dragOffset = useRef(0);
  const target = useRef();

  const categories = useProductsStore((state) => state.categories);
  const setFilter = useProductsStore((state) => state.setFilter);

  const categoriesOptions = categories.map((i, index) => ({
    id: index,
    value: i,
  }));

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
      if (target.current.contains(event.target)) {
        event.preventDefault();

        target.current.scrollLeft += event.deltaY;
      }
    };

    const handleDocumentTouchMove = (event) => {
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
    setCurrentCategory(category);
    setFilter(category.value);
  };

  return (
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
  );
};
