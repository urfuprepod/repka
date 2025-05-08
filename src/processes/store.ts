import { create, useStore } from "zustand";

interface IStore {
  hasMeditation: boolean;
  updateMeditation: (val: boolean) => void;
}

const meditationStore = create<IStore>((set) => ({
  hasMeditation: false,
  updateMeditation: (val) => set((state) => ({ hasMeditation: val })),
}));

// function useMeditationStore(): IStore;
// function useMeditationStore<T>(selector: (state: IStore) => T): T;
export function useMeditationStore<T>(selector?: (state: IStore) => T) {
  return useStore(meditationStore, selector!);
}
