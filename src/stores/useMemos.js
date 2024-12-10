import { create } from "zustand";

export const useMemos = create((set) => ({
  memos: [],
  setMemos: (memos) => set({ memos }),
}));
