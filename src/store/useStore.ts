import { create } from 'zustand';
import { TStore } from '../interface/useStore';

export const useStore = create<TStore>(set => ({
  mode: 'month',
  updateMode: newMode => set({ mode: newMode }),

  showModal: false,
  updateShowModal: () => set(state => ({ showModal: !state.showModal })),

  selectedId: 0,
  updateSelectedId: (id: number) => set({ selectedId: id }),

  toEdit: false,
  updateToEdit: () => set(state => ({ toEdit: !state.toEdit })),

  toChoose: false,
  updateToChoose: () => set(state => ({ toChoose: !state.toChoose })),

  showFinder: false,
  updateShowFinder: () => set(state => ({ showFinder: !state.showFinder })),

  toLaunchMovement: false,
  updateToLaunchMovement: () => set(state => ({ toLaunchMovement: !state.toLaunchMovement })),

  toAddCategory: false,
  updateToAddCategory: () => set(state => ({ toAddCategory: !state.toAddCategory })),
}));
