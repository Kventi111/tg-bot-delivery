import { useEffect, useMemo } from "react";
import { useShallow } from "zustand/react/shallow";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardSkeleton } from "../../../components/card/Card";
import { fakeProducts } from "../../../store/fakeData";
import { useProductsStore } from "../../../store/products";
import { ProductCounter } from "./ProductCounter";

import styles from "../Home.module.css";
import { Button } from "../../../components/button/Button";

export const Products = () => {
  const products = useProductsStore(useShallow((state) => state.products));
  const filteredProducts = useProductsStore((state) => state.filteredList);
  const currentCategory = useProductsStore((state) => state.currentCategory);
  const currentFilter = useProductsStore((state) => state.currentFilter);
  const setProducts = useProductsStore((state) => state.setProducts);
  const productsList = useMemo(
    () => (products ? Object.values(products) : []),
    [products]
  );
  const filteredList = useMemo(
    () =>
      currentCategory === 0
        ? Object.values(products)
        : Object.values(products).filter((i) => i.category === currentFilter),
    [currentCategory, products, currentFilter]
  );

  useEffect(() => {
    if (!productsList.length) {
      setTimeout(() => setProducts(fakeProducts), 3000);
    }
  }, []);

  console.log({ currentCategory, currentFilter });

  return (
    <div className={styles.productItems}>
      {!productsList.length && (
        <>
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </>
      )}
      {filteredList.map((item) => (
        <Link key={item.id} to={`${item.id}`}>
          <Card
            imgUrl={item.imgUrl}
            name={item.name}
            price={item.price}
            options={item.weight_g}
            count={item.count}
          >
            {item.count === 0 ? (
              <Button variant="secondary" size="md">
                {item.price} ₽
              </Button>
            ) : (
              <ProductCounter id={item.id} productCount={item.count} />
            )}
          </Card>
        </Link>
      ))}
    </div>
  );
};
