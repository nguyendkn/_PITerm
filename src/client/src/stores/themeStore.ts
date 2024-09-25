// src/stores/themeStore.ts
import { create } from "zustand";

// Định nghĩa kiểu dữ liệu cho ThemeStore
interface ThemeState {
  theme: "light" | "dark";
  toggleTheme: () => void;
  setTheme: (theme: "light" | "dark") => void;
}

// Tạo ThemeStore bằng zustand
export const useThemeStore = create<ThemeState>((set) => ({
  theme: "light",
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
  setTheme: (theme) =>
    set(() => {
      document.body.classList.toggle("dark", theme === "dark"); // Cập nhật class body
      return { theme };
    }),
}));
