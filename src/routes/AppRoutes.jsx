import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Blogs from "../pages/Blogs";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Pricing from "../pages/Pricing";
import Services from "../pages/Services";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-100">
        <span className="loading loading-dots loading-lg text-primary"></span>
      </div>
    );
  }

  return user ? <>{children}</> : <Navigate to="/login" />;
};

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="*"
        element={
          <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <h1 className="text-9xl font-extrabold text-primary opacity-20">404</h1>
            <h2 className="text-3xl font-bold text-secondary mt-[-50px]">Page Not Found</h2>
            <p className="text-gray-500 mt-4 mb-8">The page you're looking for doesn't exist.</p>
            <a href="/" className="btn btn-primary rounded-xl px-10">Go Home</a>
          </div>
        }
      />
    </Routes>
  );
}
