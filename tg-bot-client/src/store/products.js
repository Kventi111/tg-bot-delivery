import { create } from "zustand";
import { addToCard, calcTotalPrice, deleteFromCart } from "./cart";

export const useProductsStore = create((set) => ({
  products: new Map(),
  categories: [],
  setProducts: (list) =>
    set(() => ({
      products: list.reduce((acc, curr) => {
        acc[curr.id] = { ...curr };

        return acc;
      }, {}),
      categories: [...new Set(list.map((i) => i.category))],
    })),
  setFilter: (category) =>
    set((state) => {
      const f = Object.values(state.products).filter(
        (i) => i.category === category
      );

      return {
        filteredList: category !== "Все" ? f : state.products,
      };
    }),
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
}));
