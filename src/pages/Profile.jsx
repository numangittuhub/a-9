import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { user, updateUserProfile, logout } = useAuth();
  const [form, setForm] = useState({ name: user?.displayName || "", photoURL: user?.photoURL || "" });
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile({ displayName: form.name, photoURL: form.photoURL });
    } catch {
      console.error();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">My Profile</h2>

        {/* User Info */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-8">
          <img
            src={user?.photoURL || `https://ui-avatars.com/api/?name=${user?.displayName}&background=2d6a4f&color=fff&size=128`}
            alt={user?.displayName}
            className="w-28 h-28 rounded-full object-cover shadow-sm"
          />
          <div className="text-center sm:text-left flex-1">
            <h3 className="text-xl font-semibold text-green-700 truncate">{user?.displayName}</h3>
            <p className="text-gray-600 truncate">{user?.email}</p>
          </div>
        </div>

        {/* Update Form */}
        <form onSubmit={handleUpdate} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none transition"
          />
          <input
            type="url"
            placeholder="Photo URL"
            value={form.photoURL}
            onChange={(e) => setForm({ ...form, photoURL: e.target.value })}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none transition"
          />
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-600 transition"
          >
            Update Profile
          </button>
        </form>

        {/* Logout */}
        <button
          onClick={() => { logout(); navigate("/"); }}
          className="w-full mt-6 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
