import { useState } from "react";
import HeroSlider from "../components/HeroSlider";
import PlantCard from "../components/PlantCard";
import ExpertCard from "../components/ExpertCard";

import plantsData from "../data/plants.json";

export default function Home() {
  const [plants] = useState(plantsData);
  const topRated = plants.filter((p) => p.rating >= 4.7).slice(0, 3);
  // const experts = [
  //   {
  //     name: "Dr. Sarah Green",
  //     specialty: "Tropical Plants",
  //     image: "https://i.postimg.cc/0jG8vJ0Z/expert1.jpg",
  //   },
  //   {
  //     name: "Mike Leaf",
  //     specialty: "Air Purifiers",
  //     image: "https://i.postimg.cc/5y7rVJ7K/expert2.jpg",
  //   },
  //   {
  //     name: "Luna Bloom",
  //     specialty: "Beginner Care",
  //     image: "https://i.postimg.cc/3xYkJ7nJ/expert3.jpg",
  //   },
  // ];

  return (
    <>
      <HeroSlider />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
        
        {/* Top Rated Plants */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-10">
            Top Rated Plants
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {topRated.map((plant) => (
              <PlantCard key={plant.plantId} plant={plant} />
            ))}
          </div>
        </section>

        {/* All Plants Section */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-10">
            All Plants
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {plants.map((plant) => (
              <PlantCard key={plant.plantId} plant={plant} />
            ))}
          </div>
        </section>

        {/* Plant Care Tips */}
        <section className="bg-green-50 p-8 sm:p-10 rounded-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-10">
            Plant Care Tips
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition">
              <h3 className="font-semibold text-lg text-green-700">Water Wisely</h3>
              <p className="text-sm text-gray-600 mt-1">
                Let the soil dry before watering again.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition">
              <h3 className="font-semibold text-lg text-green-700">Bright Light</h3>
              <p className="text-sm text-gray-600 mt-1">
                Most plants thrive in indirect sunlight.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition">
              <h3 className="font-semibold text-lg text-green-700">Fertilize</h3>
              <p className="text-sm text-gray-600 mt-1">
                Feed monthly during the growing season.
              </p>
            </div>
          </div>
        </section>

        {/* Experts */}
        <section>
          <ExpertCard></ExpertCard>
        </section>
      </div>
      
    </>
  );
}
