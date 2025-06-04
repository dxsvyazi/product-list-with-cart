import { create } from 'zustand';

interface UserStore {
  token: string | null;
  refreshToken: string | null;
  setToken: (token: string) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  token: null,
  refreshToken: null,
  setToken: (token) => set({ token }),
}));
