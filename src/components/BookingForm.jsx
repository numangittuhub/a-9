import { useState } from "react";
import { toast } from "react-toastify";

export default function BookingForm({ plantName }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return toast.error("Fill all fields");
    toast.success(`Consultation booked for ${plantName}!`);
    setName(""); setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Book Consultation</h3>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-3 mb-3 border rounded" required />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 mb-4 border rounded" required />
      <button type="submit" className="w-full bg-primary text-white py-3 rounded hover:bg-secondary">Book Now</button>
    </form>
  );
}