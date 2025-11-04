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
    } catch {console.error();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow">
        <h2 className="text-3xl font-bold text-primary mb-6">My Profile</h2>
        <div className="flex items-center gap-4 mb-6">
          <img src={user?.photoURL || `https://ui-avatars.com/api/?name=${user?.displayName}`} alt="" className="w-20 h-20 rounded-full" />
          <div>
            <h3 className="text-xl font-semibold">{user?.displayName}</h3>
            <p className="text-gray-600">{user?.email}</p>
          </div>
        </div>
        <form onSubmit={handleUpdate} className="space-y-4">
          <input type="text" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full p-3 border rounded-lg" />
          <input type="url" placeholder="Photo URL" value={form.photoURL} onChange={(e) => setForm({ ...form, photoURL: e.target.value })} className="w-full p-3 border rounded-lg" />
          <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg">Update Profile</button>
        </form>
        <button onClick={() => { logout(); navigate("/"); }} className="w-full mt-4 bg-red-500 text-white py-3 rounded-lg">Logout</button>
      </div>
    </div>
  );
}