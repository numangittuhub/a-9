export default function ExpertsSection() {
  const experts = [
    {
      name: "John Miller",
      specialty: "Plant Growth Specialist",
      image:
        "https://plus.unsplash.com/premium_photo-1732139715621-2fd5a4f79e77?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=387",
    },
    {
      name: "Robert Adams",
      specialty: "Organic Farming Expert",
      image:
        "https://media.istockphoto.com/id/493551400/photo/winemaker-in-vineyard.jpg?s=1024x1024&w=is&k=20&c=oywkLPF6V36SOqdKraa5MMO4-O7aA3EorVzvN1yRSGg=",
    },
    {
      name: "Sophia Clark",
      specialty: "Bonsai Designer",
      image:
        "https://plus.unsplash.com/premium_photo-1663045211868-2c38d223d54b?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=387",
    },
  ];

  return (
    <section className="py-12 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-8">
          🌿 Meet Our Experts
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {experts.map((expert, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-green-50 to-emerald-100 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-5 flex flex-col items-center text-center border border-green-200"
            >
              <img
                src={expert.image}
                alt={expert.name}
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-green-300 shadow-sm"
              />
              <h3 className="mt-4 text-lg sm:text-xl font-semibold text-green-800">
                {expert.name}
              </h3>
              <p className="text-sm sm:text-base text-green-700 mt-1">
                {expert.specialty}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
