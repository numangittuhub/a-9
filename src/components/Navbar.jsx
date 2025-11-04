import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-primary text-white fixed top-0 w-full z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <Link to="/" className="text-2xl font-bold">GreenNest</Link>
        <div className="hidden md:flex gap-6">
          <Link to="/" className="hover:text-accent">Home</Link>
          <Link to="/profile" className="hover:text-accent">Profile</Link>
        </div>
        <div className="flex items-center gap-3">
          {user ? (
            <div className="relative">
              <button onClick={() => setOpen(!open)} className="flex items-center gap-2">
                <img src={user.photoURL || `https://ui-avatars.com/api/?name=${user.displayName}`} alt="" className="w-8 h-8 rounded-full" />
                <span className="hidden md:block">{user.displayName}</span>
              </button>
              {open && (
                <div className="absolute right-0 mt-2 bg-white rounded shadow text-gray-800">
                  <button onClick={() => { logout(); navigate("/"); }} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Logout</button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="bg-secondary px-4 py-2 rounded hover:bg-accent">Login</Link>
              <Link to="/register" className="bg-accent px-4 py-2 rounded hover:bg-secondary">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}