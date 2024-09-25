import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout: React.FC = () => {
  return (
    <div className="auth-layout">
      <header>Auth Header</header>
      <main>
        <Outlet /> {/* Outlet sẽ render nội dung của các trang con */}
      </main>
      <footer>Auth Footer</footer>
    </div>
  );
};

export default AuthLayout;
