import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { FaBars, FaTimes } from "react-icons/fa";
import { PiPlantFill } from "react-icons/pi";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
    setDropdownOpen(false);
    setMenuOpen(false);
  };

  return (
    <nav className="bg-green-700 text-white fixed top-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center h-16">
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-wide hover:text-green-200 transition-all duration-200"
        >
        <div className="flex items-center gap-4"> 
           <PiPlantFill></PiPlantFill> GREEN-NEST
        </div>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="hover:text-green-200 transition">
            Home
          </Link>
          <Link to="/profile" className="hover:text-green-200 transition">
            My Profile
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2"
              >
                <img
                  src={
                    user.photoURL ||
                    `https://ui-avatars.com/api/?name=${user.displayName}`
                  }
                  alt="user"
                  className="w-9 h-9 rounded-full border-2 border-white"
                />
                <span className="font-medium">{user.displayName}</span>
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white text-gray-800 rounded-lg shadow-md animate-fade-in">
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 rounded hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-white text-green-700 px-4 py-2 rounded-lg font-semibold hover:bg-green-100 transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-green-600 flex flex-col items-center gap-4 py-4 animate-slide-down">
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-green-200">Home</Link>
          <Link to="/profile" onClick={() => setMenuOpen(false)} className="hover:text-green-200">My Profile</Link>

          {user ? (
            <>
              <button
                onClick={handleLogout}
                className="bg-white text-green-700 px-4 py-2 rounded-lg font-semibold hover:bg-green-100"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="bg-white text-green-700 px-4 py-2 rounded-lg font-semibold hover:bg-green-100"
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600"
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
