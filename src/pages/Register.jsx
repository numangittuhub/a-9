import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", photoURL: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const [errors, setErrors] = useState({});

  const { signup, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  // Password validation
  const validate = () => {
    const err = {};
    if (form.password.length < 6) err.length = "Password must be at least 6 characters";
    if (!/[A-Z]/.test(form.password)) err.upper = "Password must contain an uppercase letter";
    if (!/[a-z]/.test(form.password)) err.lower = "Password must contain a lowercase letter";
    return err;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (Object.keys(err).length > 0) return setErrors(err);
    setErrors({});
    try {
      await signup(form.email, form.password, form.name, form.photoURL);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-green-100 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-6">Register</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none transition"
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none transition"
          />
          <input
            type="url"
            placeholder="Photo URL (optional)"
            value={form.photoURL}
            onChange={(e) => setForm({ ...form, photoURL: e.target.value })}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none transition"
          />
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
              className="w-full p-3 border rounded-lg pr-10 focus:ring-2 focus:ring-green-400 focus:outline-none transition"
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-3.5 text-gray-600"
            >
              {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Validation errors */}
          {errors.length && <p className="text-red-500 text-xs">{errors.length}</p>}
          {errors.upper && <p className="text-red-500 text-xs">{errors.upper}</p>}
          {errors.lower && <p className="text-red-500 text-xs">{errors.lower}</p>}

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-600 transition"
          >
            Register
          </button>
        </form>

        <button
          onClick={loginWithGoogle}
          className="w-full mt-4 border py-3 rounded-lg flex justify-center items-center gap-2 hover:bg-green-50 transition"
        >
          <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5" /> Sign up with Google
        </button>

        <p className="text-center mt-4">
          Already have an account? <Link to="/login" className="text-green-700 font-bold">Login</Link>
        </p>
      </div>
    </div>
  );
}
