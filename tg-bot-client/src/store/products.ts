import { create } from "zustand";
import { addToCard, calcTotalPrice, deleteFromCart } from "./cart";

import { Product } from './types'

type Category = {
  id: number
  value: string
}

type ProductsStote = {
  products: Record<number,Product>
  categories: string[]
  currentCategory: number
  currentFilter: string
  setCount: (id: number, count: number, from: "home" | "detail") => void
  setProducts: (list: Product[]) => void
  setCurrentCategory: (category: Category) => void
}

export const useProductsStore = create<ProductsStote>((set) => ({
  products: {},
  categories: [],
  currentCategory: 0,
  currentFilter: "",
  setProducts: (list) =>
    set(() => ({
      products: list.reduce((acc, curr) => {
        acc[curr.id] = { ...curr };

        return acc;
      }, {}),
      categories: [...new Set(list.map((i) => i.category))],
    })),
  setCount: (id, count, from = "home") =>
    set((state) => {
      const p = state.products;
      const currentProduct = p[id];

      p[id] = {
        ...currentProduct,
        count: from === "home" ? count : currentProduct.count + count,
      };

      if (count === 0) {
        deleteFromCart(id);
        calcTotalPrice();
      } else {
        addToCard(p[id]);
        calcTotalPrice();
      }

      return {
        products: p,
      };
    }),
  setCurrentCategory: (category) =>
    set(() => {
      return {
        currentCategory: category.id,
        currentFilter: category.value,
      };
    }),
}));
