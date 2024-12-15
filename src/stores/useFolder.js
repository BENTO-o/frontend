import { create } from "zustand";

// Folder 상태 관리 Store
export const useFolderStore = create((set) => ({
    folderId: null,
    setFolderId: (folderId) => set({ folderId }),
    clearFolder: () => set({ folderId: null }),
  }));