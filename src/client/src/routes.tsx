import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Sử dụng React.lazy để tải các component lười biếng
const SignInPage = lazy(() => import("@/pages/auth/SignInPage"));
const SignUpPage = lazy(() => import("@/pages/auth/SignUpPage"));

const AppLayout = lazy(() => import("@/layouts/AppLayout"));
const AuthLayout = lazy(() => import("@/layouts/AuthLayout"));

const DashboardPage = lazy(() => import("@/pages/app/DashboardPage"));
const WorkspacePage = lazy(() => import("@/pages/app/WorkspacePage"));

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Auth Layout */}
          <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
          </Route>

          {/* App Layout */}
          <Route element={<AppLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/workspace" element={<WorkspacePage />} />
            {/* Thêm các route dành cho nghiệp vụ tại đây */}
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
