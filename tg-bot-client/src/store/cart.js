export const createCartSlice = (set) => ({
  lineItems: {},
  totalPrice: 0,
  addToCart: (item) =>
    set((state) => ({
      lineItems: { ...state.lineItems, [item.id]: { ...item } },
      totalPrice: Object.values(state.lineItems).reduce((acc, curr) => {
        return (acc += curr.price * curr.count);
      }, 0),
    })),
});
