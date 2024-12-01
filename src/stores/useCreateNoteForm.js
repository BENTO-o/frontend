import dayjs from "dayjs";
import { create } from "zustand";

export const useCreateNoteFormStore = create((set) => ({
  form: {
    title: dayjs().format("YYYY-MM-DD") + "의 새로운 노트",
    folder: "",
    file: null,
    bookmark: [],
    memo: [],
    topic: [],
  },
  setFormField: (field, value) =>
    set((state) => ({
      form: {
        ...state.form,
        [field]: value,
      },
    })),
  resetForm: () =>
    set(() => ({
      form: {
        title: "",
        folder: "",
        file: null,
        bookmark: [],
        memo: [],
        topic: [],
      },
    })),
}));
