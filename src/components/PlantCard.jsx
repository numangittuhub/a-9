import { Link } from "react-router-dom";
import { Star } from "lucide-react";

export default function PlantCard({ plant }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 overflow-hidden">
      <img
        src={plant.image}
        alt={plant.plantName}
        className="w-full h-52 sm:h-60 md:h-64 object-cover"
      />
      <div className="p-4 sm:p-5">
        <h3 className="font-semibold text-base sm:text-lg text-gray-800">
          {plant.plantName}
        </h3>
        <p className="text-sm text-gray-500">{plant.category}</p>

        <div className="flex items-center mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 sm:w-5 sm:h-5 ${
                i < Math.floor(plant.rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
          <span className="ml-1 text-sm text-gray-600">{plant.rating}</span>
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="text-lg sm:text-xl font-bold text-green-700">
            ${plant.price}
          </span>
          <Link
            to={`/plant/${plant.plantId}`}
            className="bg-green-700 hover:bg-green-800 text-white px-3 sm:px-4 py-2 rounded-lg text-sm transition-colors duration-200"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
