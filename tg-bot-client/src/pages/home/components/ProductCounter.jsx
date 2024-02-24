import { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { Counter } from "../../../components/counter/Counter";
import { useProductsStore } from "../../../store/products";

export const ProductCounter = ({ id, productCount = 0 }) => {
  let [count, setCount] = useState(productCount);

  const setProductCount = useProductsStore((state) => state.setCount);

  const onIncreaseCount = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();

      setCount((prevCount) => prevCount + 1);
      setProductCount(id, count + 1, "home");
    },
    [count, id, setProductCount]
  );

  const onDecreaseCount = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();

      setCount((prevCount) => prevCount - 1);
      setProductCount(id, count - 1, "home");
    },
    [count, id, setProductCount]
  );

  return (
    <Counter
      count={count}
      onDecrease={onDecreaseCount}
      onIncrease={onIncreaseCount}
    />
  );
};

ProductCounter.propTypes = {
  id: PropTypes.number,
  productCount: PropTypes.number,
};
