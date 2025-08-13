import { useEffect } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-theme-background text-theme-text transition-colors duration-300">
        <AppRoutes />
      </div>
    </ThemeProvider>
  );
}

export default App;
