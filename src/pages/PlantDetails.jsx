import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BookingForm from "../components/BookingForm";
import plantsData from "../data/plants.json";
import { Star, ArrowLeft } from "lucide-react";

export default function PlantDetails() {
  const { plantId } = useParams();
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    const found = plantsData.find(p => p.plantId === parseInt(plantId));
    setPlant(found);
  }, [plantId]);

  if (!plant) return <div className="text-center py-20 text-gray-600">Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <Link to="/" className="flex items-center gap-2 text-green-700 font-semibold mb-6 hover:underline">
          <ArrowLeft size={20} /> Back
        </Link>

        <div className="grid gap-8 md:grid-cols-2 bg-white p-6 rounded-2xl shadow-lg">
          <img
            src={plant.image}
            alt={plant.plantName}
            className="w-full h-80 md:h-96 object-cover rounded-xl shadow-sm"
          />

          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-green-800">{plant.plantName}</h1>
              <p className="text-gray-600 mt-1">{plant.category} • {plant.careLevel}</p>

              <div className="flex items-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(plant.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                  />
                ))}
                <span className="ml-1 text-gray-700">{plant.rating}</span>
              </div>

              <p className="mt-4 text-gray-700">{plant.description}</p>

              <div className="flex flex-col sm:flex-row justify-between mt-6 gap-4">
                <div>
                  <span className="text-3xl font-bold text-green-800">${plant.price}</span>
                  <p className="text-sm text-gray-600 mt-1">Stock: {plant.availableStock}</p>
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-600">Provider</span>
                  <br />
                  <strong className="text-gray-800">{plant.providerName}</strong>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <BookingForm plantName={plant.plantName} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
