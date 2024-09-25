import React, { createContext, ReactNode, useState } from "react";

interface LayoutContextType {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export const LayoutContext = createContext<LayoutContextType | undefined>(
  undefined
);

export const LayoutProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <LayoutContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </LayoutContext.Provider>
  );
};
