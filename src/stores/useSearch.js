import { create } from "zustand";

// Search 상태 관리 Store
export const useSearchStore = create((set) => ({
    searchQuery: "",
    setSearchQuery: (searchQuery) => set({ searchQuery }),
    clearSearch: () => set({ searchQuery: "" }),
  }));