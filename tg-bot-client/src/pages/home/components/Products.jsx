import { useEffect, useMemo } from "react";
import { useShallow } from "zustand/react/shallow";
import { Link } from "react-router-dom";
import { Card } from "../../../components/card/Card";
import { fakeProducts } from "../../../store/fakeData";
import { useProductsStore } from "../../../store/products";
import { ProductCounter } from "./ProductCounter";

import styles from "../Home.module.css";

export const Products = () => {
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
    setTimeout(() => setProducts(fakeProducts), 3000);
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
            >
              <ProductCounter id={item.id} productCount={item.count} />
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
              <ProductCounter id={item.id} productCount={item.count} />
            </Card>
          </Link>
        ))}
    </div>
  );
};
