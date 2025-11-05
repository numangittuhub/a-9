export default function ExpertCard({ name, specialty, image }) {
  return (
    <div className="bg-gradient-to-b from-green-50 to-emerald-100 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-5 flex flex-col items-center text-center border border-green-200">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-green-300 shadow-sm"
      />
      <h3 className="mt-4 text-lg sm:text-xl font-semibold text-green-800">
        {name}
      </h3>
      <p className="text-sm sm:text-base text-green-700 mt-1">{specialty}</p>
    </div>
  );
}
