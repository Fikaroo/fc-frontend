import { User } from "@/graphql/generated/schema";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface IUseUser {
  user: User | null;
  setUser: (data: User) => void;
  removeUser: () => void;
}

export const useUser = create<IUseUser, [["zustand/persist", IUseUser]]>(
  persist(
    (set, get) => ({
      user: null,
      setUser: (data) => set(() => ({ user: data })),
      removeUser: () => set(() => ({ user: null })),
    }),
    {
      name: "user",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ ...state, user: state.user }),
    }
  )
);
