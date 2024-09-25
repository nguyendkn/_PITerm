import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Navbar />

      <main className="flex-grow p-8 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
