import { create } from "zustand";

export const createCartSlice = (set) => ({
  items: {},
  commonPrice: 0,
  addToCart: (item) =>
    set((state) => {
      console.log({ state });

      return {
        items: { ...state.items, [item.id]: { ...item } },
        commonPrice: Object.values(state.items).reduce((acc, curr) => {
          return (acc += curr.price * curr.count);
        }, 0),
      };
    }),
});
