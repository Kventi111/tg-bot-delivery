import { create } from "zustand";

import { Product } from './types'

type CartStore = {
  lineItems: Record<number,Product>
  totalPrice: number
}

export const useCartStore = create<CartStore>(() => ({
  lineItems: {},
  totalPrice: 0,
}));

// actions
export const addToCard = (item: Product) =>
  useCartStore.setState((state) => {
    const l = state.lineItems;

    l[item.id] = { ...item };

    return {
      lineItems: l,
    };
  });

export const deleteFromCart = (id: number) =>
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
