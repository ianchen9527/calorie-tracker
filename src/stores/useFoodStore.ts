import { create } from "zustand"

export type FoodLog = {
  id: string
  name: string
  calories: number
  createdAt: string
}

type FoodState = {
  logs: FoodLog[]
  addLog: (log: FoodLog) => void
}

export const useFoodStore = create<FoodState>((set) => ({
  logs: [],
  addLog: (log) =>
    set((state) => ({
      logs: [...state.logs, log],
    })),
}))
