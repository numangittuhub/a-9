import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

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
    }
  };

  const handleGoogle = async () => {
    try {
      await loginWithGoogle();
      navigate(from, { replace: true });
    } catch {console.error();
    }
  };

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(resetEmail);
      setShowReset(false);
    } catch {console.error();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full p-3 border rounded-lg" />
          <div className="relative">
            <input type={showPass ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full p-3 border rounded-lg pr-10" />
            <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-3.5">
              {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg">Login</button>
        </form>

        <button onClick={() => setShowReset(true)} className="text-sm text-primary block mx-auto mt-2">Forgot Password?</button>

        <button onClick={handleGoogle} className="w-full mt-4 border py-3 rounded-lg flex justify-center items-center gap-2">
          <img src="https://www.google.com/favicon.ico" alt="" className="w-5" /> Google
        </button>

        <p className="text-center mt-4">
          No account? <Link to="/register" className="text-primary font-bold">Register</Link>
        </p>
      </div>

      {showReset && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <h3 className="font-bold mb-3">Reset Password</h3>
            <form onSubmit={handleReset}>
              <input type="email" value={resetEmail} onChange={(e) => setResetEmail(e.target.value)} placeholder="Email" className="w-full p-2 border mb-3" required />
              <div className="flex gap-2">
                <button type="submit" className="flex-1 bg-primary text-white py-2">Send</button>
                <button type="button" onClick={() => setShowReset(false)} className="flex-1 border py-2">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}