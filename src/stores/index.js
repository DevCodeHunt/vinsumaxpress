import { create } from "zustand";

export const useNavbarStore = create((set) => ({
  show: false,
  toggleMenu: () => set((state) => ({ ...state, show: !state.show })),
  showMenu: () => set({ show: true }),
  hideMenu: () => set({ show: false }),
}));

export const useJobApplyStore = create((set) => ({
  open: false,
  toggleOpen: () => set((state) => ({ ...state, open: !state.open })),
  onOpen: () => set({ open: true }),
  onClose: () => set({ open: false }),
  job: null,
  setJob: (job) => set({ job }),
  clearJob: () => set({ job: null }),
}));
