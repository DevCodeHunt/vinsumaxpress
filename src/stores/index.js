import { create } from "zustand";

export const useNavbarStore = create((set) => ({
  show: false,
  toggleMenu: () => set((state) => ({ ...state, show: !state.show })),
  showMenu: () => set({ show: true }),
  hideMenu: () => set({ show: false }),
}));
