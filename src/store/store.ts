import { create } from "zustand";

interface IUseUser {
  user: any;
  setUser: any;
}

export const useUser = create<IUseUser>((set, get) => ({
  user: null,
  setUser: (data: any) => set(() => ({ user: data })),
}));
