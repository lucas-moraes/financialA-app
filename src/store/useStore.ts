import { create } from 'zustand';
import { TStore } from '../interface/useStore';

export const useStore = create<TStore>(set => ({
  mode: 'month',
  updateMode: newMode => set({ mode: newMode }),
}));
