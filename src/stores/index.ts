import { create } from 'zustand'

export type State = {
  counter: number
  increment: () => void
  decrement: () => void
}

export const useStore = create<State>((set) => ({
  counter: 0,
  increment: () => {
    set((state) => ({ counter: state.counter + 1 }))
  },
  decrement: () => {
    set((state) => ({ counter: state.counter - 1 }))
  },
}))
