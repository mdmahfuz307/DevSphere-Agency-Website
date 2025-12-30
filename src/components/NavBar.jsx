import {
    ChevronRight,
    LayoutDashboard,
    LogOut,
    Menu,
    Moon,
    Sun,
    X
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blogs", path: "/blogs" },
  ];

  const isActive = (path) => location.pathname === path;

  const navClass = `glass-nav sticky top-0 z-50 border-b ${
    theme === "dark"
      ? "border-gray-700 bg-[rgba(8,12,20,0.65)]"
      : "border-gray-200 bg-[rgba(255,255,255,0.85)]"
  }`;

  const logoTextClass = theme === "dark" ? "text-white" : "text-secondary";

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-primary p-2 rounded-lg">
                <LayoutDashboard className="text-white w-6 h-6" />
              </div>
              <span className={`text-2xl font-bold ${logoTextClass} tracking-tight`}>
                Webcode<span className="text-primary">.</span>
              </span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              const linkClass = `${active
                ? theme === 'dark'
                  ? 'text-blue-300 font-semibold'
                  : 'text-primary font-semibold'
                : theme === 'dark'
                  ? 'text-gray-300 hover:text-blue-300'
                  : 'text-gray-600 hover:text-primary'
              } transition-colors duration-200`;
              return (
                <Link key={link.name} to={link.path} className={linkClass}>
                  {link.name}
                </Link>
              );
            })}

            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/dashboard" className={`btn btn-ghost btn-sm flex items-center space-x-2 ${theme==='dark' ? 'text-white' : ''}`}>
                  <img src={user.photoURL} alt="avatar" className="w-8 h-8 rounded-full border-2 border-primary" />
                  <span className={`hidden lg:inline ${theme==='dark' ? 'text-white' : 'text-secondary'} font-medium`}>
                    {user.displayName}
                  </span>
                </Link>
                <button onClick={logout} className={`btn btn-outline btn-sm ${theme==='dark' ? 'border-white/10 text-white' : ''}`}>
                  <LogOut className="w-4 h-4 mr-1" /> Logout
                </button>
              </div>
            ) : (
              <Link to="/login" className="btn btn-primary btn-md rounded-xl shadow-lg shadow-blue-200 text-white">
                Get Started <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            )}

            <button onClick={toggleTheme} className="btn btn-ghost btn-sm ml-2" aria-label="Toggle theme">
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={`${theme==='dark' ? 'text-gray-200' : 'text-gray-600'} hover:text-primary focus:outline-none`}>
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden ${theme==='dark' ? 'bg-[rgba(8,12,20,0.95)] border-b border-gray-700 text-gray-200' : 'bg-white border-b border-gray-200'} animate-in slide-in-from-top duration-300`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} onClick={() => setIsOpen(false)} className={`${theme==='dark' ? 'text-gray-200 hover:text-blue-300' : 'text-gray-700 hover:text-primary'} block px-3 py-4 text-base font-medium`}>
                {link.name}
              </Link>
            ))}
            {user ? (
              <>
                <Link to="/dashboard" onClick={() => setIsOpen(false)} className={`${theme==='dark' ? 'text-blue-300' : 'text-primary'} block px-3 py-4 text-base font-medium`}>
                  Dashboard
                </Link>
                <button onClick={() => { logout(); setIsOpen(false); }} className="w-full text-left px-3 py-4 text-base font-medium text-red-600 hover:bg-red-50">
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" onClick={() => setIsOpen(false)} className={`${theme==='dark' ? 'text-white bg-primary rounded-lg mx-2 text-center' : 'text-white bg-primary rounded-lg mx-2 text-center'} block px-3 py-4 text-base font-medium`}>
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
