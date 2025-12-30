import {
  AlertCircle,
  Chrome,
  Eye,
  EyeOff,
  Lock,
  LogIn,
  Mail
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login, signup, googleLogin } = useAuth();
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    setError("");
    try {
      if (isRegister) {
        await signup(data.email, data.password, data.name);
      } else {
        await login(data.email, data.password);
      }
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setError(err?.message || "Failed to log in. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-base-100">
      <div className="max-w-6xl w-full bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
        {/* Left Side: Illustration */}
        <div className="lg:w-1/2 bg-primary p-12 lg:p-20 flex flex-col justify-center text-white relative">
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mt-16"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-black/10 rounded-full -mr-16 -mb-16"></div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-8 relative z-10">
            Welcome to the <br />{" "}
            <span className="opacity-80">Next Generation.</span>
          </h2>
          <p className="text-blue-100 text-lg mb-12 relative z-10 leading-relaxed">
            Join 50,000+ developers and creators who are building the future
            with Webcode.
          </p>

          <div className="space-y-6 relative z-10">
            {[
              "Enterprise-grade security",
              "Lightning fast deployment",
              "Real-time analytics dashboard",
            ].map((feature, i) => (
              <div
                key={i}
                className="flex items-center space-x-3 bg-white/10 p-4 rounded-2xl"
              >
                <div className="bg-white/20 p-1.5 rounded-full">
                  <LogIn className="w-5 h-5" />
                </div>
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="lg:w-1/2 p-12 lg:p-20">
          <div className="max-w-md mx-auto">
            <h3 className="text-3xl font-bold text-secondary mb-2">
              {isRegister ? "Create Account" : "Welcome Back!"}
            </h3>
            <p className="text-gray-500 mb-10">
              {isRegister
                ? "Fill in the details to start your journey."
                : "Sign in to access your dashboard and projects."}
            </p>

            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-6 flex items-center">
                <AlertCircle className="w-5 h-5 mr-2" />
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {isRegister && (
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full pl-4 pr-4 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      {...register("name", { required: isRegister })}
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    placeholder="name@company.com"
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                  />
                </div>
                {errors.email && (
                  <span className="text-xs text-red-500 mt-1">
                    Please enter a valid email
                  </span>
                )}
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="block text-sm font-bold text-gray-700">
                    Password
                  </label>
                  {!isRegister && (
                    <button
                      type="button"
                      className="text-sm font-bold text-primary hover:underline"
                    >
                      Forgot Password?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full pl-12 pr-12 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    {...register("password", { required: true, minLength: 6 })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 disabled:opacity-50"
              >
                {isLoading ? (
                  <span className="loading loading-spinner loading-sm"></span>
                ) : isRegister ? (
                  "Sign Up"
                ) : (
                  "Sign In"
                )}
              </button>
            </form>

            <div className="relative my-10">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500 font-medium">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[{ name: "Google", icon: Chrome }].map((social) => (
                <button
                  key={social.name}
                  onClick={async () => {
                    setIsLoading(true);
                    setError("");
                    try {
                      if (social.name === "Google") {
                        await googleLogin();
                        navigate("/dashboard");
                      }
                    } catch (err) {
                      console.error(err);
                      setError("Social login failed");
                    } finally {
                      setIsLoading(false);
                    }
                  }}
                  className="flex items-center justify-center py-4 border border-gray-200 rounded-2xl hover:bg-gray-50 hover:border-primary transition-all group"
                >
                  <social.icon className="w-6 h-6 text-gray-600 group-hover:text-primary transition-colors" />
                </button>
              ))}
            </div>

            <p className="mt-10 text-center text-gray-500 font-medium">
              {isRegister
                ? "Already have an account?"
                : "Don't have an account?"}
              <button
                onClick={() => setIsRegister(!isRegister)}
                className="ml-2 text-primary font-bold hover:underline"
              >
                {isRegister ? "Sign In" : "Sign Up Free"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
