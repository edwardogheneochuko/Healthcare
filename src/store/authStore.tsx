
import { create } from "zustand";
import { AuthState, ForgotPasswordState } from "../types/type";

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  setAuth: (user, token) => set({ user, token }),
  clearAuth: () => set({ user: null, token: null }),
  
}));


export const useForgotStore = create<ForgotPasswordState>((set) => ({
    email: "",
    resetSent: false,
    setEmail: (email) => set({ email }),
    setResetSent: (sent) => set({ resetSent: sent }),
  }));