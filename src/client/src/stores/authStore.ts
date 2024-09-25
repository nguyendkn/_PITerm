import { create } from "zustand";

// Định nghĩa kiểu dữ liệu cho AuthStore
interface AuthState {
  user: { id: string; name: string; email: string } | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
}

// Tạo AuthStore bằng zustand
export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: (email, password) => {
    // Giả lập đăng nhập - trong thực tế bạn sẽ gọi API
    const fetchedUser = { id: "1", name: "John Doe", email, password };
    set({ user: fetchedUser, isAuthenticated: true });
    localStorage.setItem("user", JSON.stringify(fetchedUser));
  },
  logout: () => {
    set({ user: null, isAuthenticated: false });
    localStorage.removeItem("user");
  },
}));
