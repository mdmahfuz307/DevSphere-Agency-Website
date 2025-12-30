import { HashRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <NavBar />
            <main className="flex-grow">
              <AppRoutes />
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
