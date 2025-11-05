import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const [resetEmail, setResetEmail] = useState("");

  const { login, loginWithGoogle, resetPassword } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate(from, { replace: true });
    } catch {console.error();
    } {
      toast.error("Login failed. Check your credentials.");
    }
  };

  const handleGoogle = async () => {
    try {
      await loginWithGoogle();
      navigate(from, { replace: true });
    } catch {console.error();
    } {
      toast.error("Google login failed.");
    }
  };

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(resetEmail);
      toast.success("Password reset link sent!");
      setShowReset(false);
    } catch {console.error();
    } {
      toast.error("Reset failed. Check the email.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
          />
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border rounded-lg pr-10 focus:ring-2 focus:ring-green-400 outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-3.5 text-gray-600"
            >
              {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-600 transition"
          >
            Login
          </button>
        </form>

        <button
          onClick={() => setShowReset(true)}
          className="text-sm text-green-700 block mx-auto mt-3 hover:underline"
        >
          Forgot Password?
        </button>

        <button
          onClick={handleGoogle}
          className="w-full mt-4 border py-3 rounded-lg flex justify-center items-center gap-2 hover:bg-green-50 transition"
        >
          <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5" />
          Continue with Google
        </button>

        <p className="text-center mt-4 text-gray-700">
          No account?{" "}
          <Link to="/register" className="text-green-700 font-bold hover:underline">
            Register
          </Link>
        </p>
      </div>

      {showReset && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-2xl w-full max-w-sm shadow-lg">
            <h3 className="font-bold text-lg text-green-800 mb-4">Reset Password</h3>
            <form onSubmit={handleReset} className="space-y-3">
              <input
                type="email"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              />
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-green-700 text-white py-2 rounded-lg hover:bg-green-600 transition"
                >
                  Send
                </button>
                <button
                  type="button"
                  onClick={() => setShowReset(false)}
                  className="flex-1 border py-2 rounded-lg hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
