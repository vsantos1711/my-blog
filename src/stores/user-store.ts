import { create } from "zustand";
import { IUser } from "@/api/getUser";

interface UserState {
  user: IUser;
  setUser: (user: IUser) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: {} as IUser,
  setUser: (user: IUser) => set({ user }),
}));
