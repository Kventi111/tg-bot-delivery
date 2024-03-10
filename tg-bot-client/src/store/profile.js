import { create } from "zustand";

export const useProfileStore = create((set) => ({
  user: {},
  token: null,
  setToken: (token) =>
    set(() => {
      return {
        token: token,
      };
    }),
}));
