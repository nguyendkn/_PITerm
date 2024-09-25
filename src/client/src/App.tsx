import { AuthProvider } from "./context/AuthContext";
import { LayoutProvider } from "./context/LayoutContext";
import { ThemeProvider } from "./context/ThemeContext";
import AppRoutes from "./routes";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <LayoutProvider>
          <AppRoutes />
        </LayoutProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
