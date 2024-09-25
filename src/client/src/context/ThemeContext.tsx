import React, { useEffect } from "react";
import { useThemeStore } from "@/stores/themeStore";
import { ConfigProvider, ThemeConfig, theme as antdTheme } from "antd";

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    // Khi component mount, thiết lập theme từ localStorage nếu có
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme); // Thiết lập theme từ giá trị lưu trữ
    } else {
      setTheme("light"); // Thiết lập mặc định là 'light' nếu không có trong localStorage
    }
  }, [setTheme]);

  // Lưu theme vào localStorage và cập nhật class body mỗi khi theme thay đổi
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.classList.toggle("dark", theme === "dark"); // Cập nhật class body theo theme
  }, [theme]);

  const themeAlgorithm =
    theme === "dark" ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm;
  const antdThemeConfig: ThemeConfig = {
    algorithm: themeAlgorithm,
    components: {
      Layout: {
        headerBg: theme === "light" ? "bg-white" : "bg-black",
      },
      Card: {},
    },
  };

  return <ConfigProvider theme={antdThemeConfig}>{children}</ConfigProvider>; // Không cần Provider vì zustand đã quản lý state trực tiếp
};
