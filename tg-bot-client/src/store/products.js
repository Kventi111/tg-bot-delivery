export const createProductsSlice = (set, get) => ({
  products: [],
  categories: [],
  setProducts: (list) =>
    set(() => ({
      products: list,
      categories: [...new Set(list.map((i) => i.category))],
    })),
  setFilter: (category) =>
    set((state) => ({
      filteredList:
        category !== "Все"
          ? state.products.filter((i) => i.category === category)
          : undefined,
    })),
  setCount: (id, count) =>
    set((state) => {
      return {
        products: state.products.map((item) => {
          if (item.id === id) {
            const newItem = {
              ...item,
              count: count,
            };

            get().addToCart(newItem);

            return newItem;
          }

          return item;
        }),
      };
    }),
});
