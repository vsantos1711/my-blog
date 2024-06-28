import { create } from "zustand";
import { IUser } from "@/api/getUser";

interface UserState {
  user: IUser | null;
  setUser: (user: IUser) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user: IUser) => set({ user }),
}));
