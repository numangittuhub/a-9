import { useState } from "react";
import { toast } from "react-toastify";

export default function BookingForm({ plantName }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return toast.error("Please fill in all fields");
    toast.success(`Consultation booked successfully for ${plantName}!`);
    setName("");
    setEmail("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto bg-gradient-to-br from-green-50 to-emerald-100 p-6 sm:p-8 rounded-2xl shadow-md border border-green-200"
    >
      <h3 className="text-2xl font-bold text-green-800 mb-5 text-center">
        Book a Consultation
      </h3>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 sm:p-4 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-500"
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 sm:p-4 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-500"
          required
        />

        <button
          type="submit"
          className="w-full py-3 sm:py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition duration-200"
        >
          Book Now
        </button>
      </div>
    </form>
  );
}
