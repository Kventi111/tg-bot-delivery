import { useEffect, useMemo } from "react";
import { useShallow } from "zustand/react/shallow";
import { Link, useNavigate } from "react-router-dom";
import { Card } from "../../../components/card/Card";
import { fakeProducts } from "../../../store/fakeData";
import { useProductsStore } from "../../../store/products";
import { ProductCounter } from "./ProductCounter";

import styles from "../Home.module.css";
import { Button } from "../../../components/button/Button";

export const Products = () => {
  const navigator = useNavigate();
  const products = useProductsStore(useShallow((state) => state.products));
  const filteredProducts = useProductsStore((state) => state.filteredList);
  const setProducts = useProductsStore((state) => state.setProducts);
  const productsList = useMemo(
    () => (products ? Object.values(products) : []),
    [products]
  );
  const filteredList = useMemo(
    () => (filteredProducts ? Object.values(filteredProducts) : undefined),
    [filteredProducts]
  );

  useEffect(() => {
    if (!productsList.length) {
      console.log("!");
      setTimeout(() => setProducts(fakeProducts), 3000);
    }
  }, [setProducts]);

  return (
    <div className={styles.productItems}>
      {!filteredList &&
        productsList.map((item) => (
          <Link key={item.id} to={`${item.id}`}>
            <Card
              imgUrl={item.imgUrl}
              name={item.name}
              price={item.price}
              options={item.weight_g}
              count={item.count}
            >
              {item.count === 0 ? (
                <Button size="md">{item.price} ₽</Button>
              ) : (
                <ProductCounter id={item.id} productCount={item.count} />
              )}
            </Card>
          </Link>
        ))}
      {filteredList &&
        filteredList.map((item, index) => (
          <Link key={item.id} to={`${item.id}`}>
            <Card
              key={index}
              imgUrl={item.imgUrl}
              name={item.name}
              price={item.price}
              options={item.weight_g}
            >
              {item.count === 0 ? (
                <Button size="md">{item.price} ₽</Button>
              ) : (
                <ProductCounter id={item.id} productCount={item.count} />
              )}
            </Card>
          </Link>
        ))}
    </div>
  );
};
