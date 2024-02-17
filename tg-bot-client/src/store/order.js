import { create } from "zustand";
import { createCartSlice } from "./cart";
import { createProductsSlice } from "./products";

export const useOrderStore = create((...a) => ({
  ...createCartSlice(...a),
  ...createProductsSlice(...a),
}));
