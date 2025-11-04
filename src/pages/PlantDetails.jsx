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

  if (!plant) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <Link to="/" className="flex items-center gap-2 text-primary mb-6"><ArrowLeft size={20} /> Back</Link>
        <div className="grid md:grid-cols-2 gap-8 bg-white p-6 rounded-xl shadow">
          <img src={plant.image} alt={plant.plantName} className="w-full h-96 object-cover rounded-lg" />
          <div>
            <h1 className="text-3xl font-bold text-primary">{plant.plantName}</h1>
            <p className="text-gray-600">{plant.category} • {plant.careLevel}</p>
            <div className="flex items-center gap-1 mt-2">
              {[...Array(5)].map((_, i) => <Star key={i} className={`w-5 h-5 ${i < Math.floor(plant.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />)}
              <span className="ml-1">{plant.rating}</span>
            </div>
            <p className="mt-4 text-gray-700">{plant.description}</p>
            <div className="flex justify-between mt-6">
              <div>
                <span className="text-3xl font-bold text-primary">${plant.price}</span>
                <p className="text-sm text-gray-600">Stock: {plant.availableStock}</p>
              </div>
              <p className="text-right"><span className="text-sm text-gray-600">Provider</span><br /><strong>{plant.providerName}</strong></p>
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