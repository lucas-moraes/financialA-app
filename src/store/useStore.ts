import { create } from 'zustand';
import { TStore } from '../interface/useStore';

export const useStore = create<TStore>(set => ({
  mode: 'month',
  updateMode: newMode => set({ mode: newMode }),

  showModal: false,
  updateShowModal: () => set(state => ({ showModal: !state.showModal })),

  selectedId: 0,
  updateSelectedId: (id: number) => set({ selectedId: id }),
}));
