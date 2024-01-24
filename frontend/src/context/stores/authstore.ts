import { create } from "zustand";

type TAuthStore = {
  isLoggedin: boolean;
  user: any;
  token: string;
  setIsLoggedin: (value: boolean) => void;
  setUser: (value: any) => void;
  setToken: (value: string) => void;
};

export const authStore = create<TAuthStore>((set) => ({
  isLoggedin: !!localStorage.getItem("Roleaks"),
  user: JSON.parse(localStorage.getItem("Roleaks")!),
  token: JSON.parse(localStorage.getItem("Roleaks")!)?.token,
  setIsLoggedin: (value: boolean) => {
    set({ isLoggedin: value });
  },
  setUser: (value) => {
    set({ user: value });
  },
  setToken: (value) => {
    set({ token: value });
  },
}));
