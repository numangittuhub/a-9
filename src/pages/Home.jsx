import { useEffect, useState } from "react";
import HeroSlider from "../components/HeroSlider";
import PlantCard from "../components/PlantCard";
import ExpertCard from "../components/ExpertCard";
import Footer from "../components/Footer";
import plantsData from "../data/plants.json";

export default function Home() {
  const [plants] = useState(plantsData);
  const topRated = plants.filter(p => p.rating >= 4.7).slice(0, 3);
  const experts = [
    { name: "Dr. Sarah Green", specialty: "Tropical Plants", image: "https://i.postimg.cc/0jG8vJ0Z/expert1.jpg" },
    { name: "Mike Leaf", specialty: "Air Purifiers", image: "https://i.postimg.cc/5y7rVJ7K/expert2.jpg" },
    { name: "Luna Bloom", specialty: "Beginner Care", image: "https://i.postimg.cc/3xYkJ7nJ/expert3.jpg" },
  ];

  return (
    <>
      <HeroSlider />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Top Rated Plants</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topRated.map(plant => <PlantCard key={plant.plantId} plant={plant} />)}
          </div>
        </section>

        <section className="mb-16 bg-gray-100 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-center mb-8">Plant Care Tips</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded shadow text-center">
              <h3 className="font-semibold">Water Wisely</h3>
              <p className="text-sm mt-1">Let soil dry between waterings.</p>
            </div>
            <div className="bg-white p-6 rounded shadow text-center">
              <h3 className="font-semibold">Bright Light</h3>
              <p className="text-sm mt-1">Most plants love indirect sun.</p>
            </div>
            <div className="bg-white p-6 rounded shadow text-center">
              <h3 className="font-semibold">Fertilize</h3>
              <p className="text-sm mt-1">Monthly in growing season.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-center mb-8">Meet Our Experts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experts.map((e, i) => <ExpertCard key={i} {...e} />)}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}