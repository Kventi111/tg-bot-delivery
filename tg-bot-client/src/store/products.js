import { create } from "zustand";

export const fakeItems = [
  {
    id: 1,
    count: 0,
    category: "Пицца",
    name: "Вегетарианская",
    description: "Пицца с миксом овощей и сыром.",
    price: 600,
    composition: {
      тесто: "пшеничное",
      соус: "томатный",
      сыр: "моцарелла",
      овощи: "перец, лук, грибы, помидоры",
    },
    weight_g: 380,
  },
  {
    id: 2,
    count: 0,
    category: "Пицца",
    name: "Четыре сыра",
    description: "Пицца с миксом четырех видов сыра.",
    price: 650,
    composition: {
      тесто: "пшеничное",
      соус: "сливочный",
      сыр: "дор блю, чеддер, пармезан, моцарелла",
    },
    weight_g: 400,
  },
  {
    id: 3,
    count: 0,
    category: "Пицца",
    name: "Мясная",
    description: "Пицца с миксом мяса: ветчина, пепперони, салями.",
    price: 700,
    composition: {
      тесто: "пшеничное",
      соус: "томатный",
      сыр: "моцарелла",
      мясо: "ветчина, пепперони, салями",
    },
    weight_g: 420,
  },
  {
    id: 4,
    count: 0,
    category: "Пицца",
    name: "Морепродукты",
    description: "Пицца с морепродуктами: креветки, мидии, кальмары.",
    price: 750,
    composition: {
      тесто: "пшеничное",
      соус: "сливочный",
      сыр: "моцарелла",
      морепродукты: "креветки, мидии, кальмары",
    },
    weight_g: 450,
  },
  {
    id: 6,
    count: 0,
    category: "Салаты",
    name: "Цезарь",
    description: "Салат с кусочками курицы, сыром пармезан и соусом Цезарь.",
    price: 350,
    composition: {
      "листья салата": "романо, айсберг",
      курица: "жареная",
      сыр: "пармезан",
      помидоры: "вишня",
    },
    weight_g: 280,
  },
  {
    id: 7,
    count: 0,
    category: "Салаты",
    name: "Греческий",
    description: "Салат с оливками, помидорами, огурцами, перцем и фетой.",
    price: 300,
    composition: {
      оливки: "коста",
      помидоры: "черри",
      огурцы: "свежие",
      перец: "болгарский",
      сыр: "фета",
    },
    weight_g: 250,
  },
  {
    id: 8,
    count: 0,
    category: "Напитки",
    name: "Кола",
    description: "Газированный напиток Кола 0.5л.",
    price: 100,
    composition: {
      напиток: "газированный",
      объем: "0.5 л",
    },
    weight_g: 500,
  },
  {
    id: 9,
    count: 0,
    category: "Напитки",
    name: "Лимонад",
    description: "Освежающий лимонад с натуральным лимонным соком.",
    price: 150,
    composition: {
      напиток: "безалкогольный",
      объем: "0.3 л",
      сок: "лимонный",
    },
    weight_g: 330,
  },
  {
    id: 10,
    count: 0,
    category: "Напитки",
    name: "Морс",
    description: "Фруктовый морс с малиной и черной смородиной.",
    price: 120,
    composition: {
      напиток: "фруктовый",
      объем: "0.3 л",
      фрукты: "малина, черная смородина",
    },
    weight_g: 350,
  },
  {
    id: 11,
    count: 0,
    category: "Супы",
    name: "Грибной крем-суп",
    description: "Ароматный грибной крем-суп с картофелем и сливками.",
    price: 250,
    composition: {
      грибы: "шампиньоны",
      картофель: "вареный",
      сливки: "20%",
      зелень: "укроп",
    },
    weight_g: 300,
  },
  {
    id: 12,
    count: 0,
    category: "Супы",
    name: "Томатный суп",
    description: "Томатный суп с мясными фрикадельками и зеленью.",
    price: 280,
    composition: {
      помидоры: "свежие",
      мясо: "говядина",
      зелень: "петрушка",
      специи: "базилик, орегано",
    },
    weight_g: 320,
  },
];

export const createProductsSlice = (set, get) => ({
  list: [],
  categories: [],
  setProducts: (items) =>
    set(() => ({
      list: items,
      categories: [...new Set(items.map((i) => i.category))],
    })),
  setFilter: (category) =>
    set((state) => ({
      filteredList:
        category !== "Все"
          ? state.list.filter((i) => i.category === category)
          : undefined,
    })),
  setCount: (id, count) =>
    set((state) => {
      console.log({ state });

      return {
        list: state.list.map((item) => {
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
