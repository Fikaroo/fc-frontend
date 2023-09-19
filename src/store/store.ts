import { User } from "@/graphql/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface IUseUser {
  user: User | null;
  setUser: (data: User | null) => void;
}

export const useUser = create<IUseUser, [["zustand/persist", unknown]]>(
  persist(
    (set, get) => ({
      user: null,
      setUser: (data) => set(() => ({ user: data })),
    }),
    {
      name: "user",
    }
  )
);
