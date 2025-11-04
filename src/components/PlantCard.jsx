import { Link } from "react-router-dom";
import { Star } from "lucide-react";

export default function PlantCard({ plant }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-xl transition">
      <img src={plant.image} alt={plant.plantName} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{plant.plantName}</h3>
        <p className="text-sm text-gray-600">{plant.category}</p>
        <div className="flex items-center mt-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-4 h-4 ${i < Math.floor(plant.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
          ))}
          <span className="ml-1 text-sm">{plant.rating}</span>
        </div>
        <div className="flex justify-between items-center mt-3">
          <span className="text-xl font-bold text-primary">${plant.price}</span>
          <Link to={`/plant/${plant.plantId}`} className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary text-sm">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}