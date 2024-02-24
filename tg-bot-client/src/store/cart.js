import { create } from "zustand";

export const useCartStore = create(() => ({
  lineItems: {},
  totalPrice: 0,
}));

// actions
export const addToCard = (item) =>
  useCartStore.setState((state) => {
    const l = state.lineItems;

    l[item.id] = { ...item };

    return {
      lineItems: l,
    };
  });

export const deleteFromCart = (id) =>
  useCartStore.setState((state) => {
    const l = state.lineItems;

    delete l[id];

    return {
      lineItems: l,
    };
  });

export const calcTotalPrice = () =>
  useCartStore.setState((state) => {
    console.log({ state });
    const totalPrice = Object.values(state.lineItems).reduce((acc, curr) => {
      return (acc += curr.price * curr.count);
    }, 0);

    return {
      totalPrice,
    };
  });
