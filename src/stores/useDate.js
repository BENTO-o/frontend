import { create } from "zustand";

export const useDateStore = create((set, get) => ({
  startDate: null,
  endDate: null,
  setStartDate: (startDate) => set({ startDate }),
  setEndDate: (endDate) => set({ endDate }),
  clearDates: () => set({ startDate: null, endDate: null }),
  isRangeSelected: () => get().startDate && get().endDate,
}));
