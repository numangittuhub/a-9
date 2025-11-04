export default function ExpertCard({ name, specialty, image }) {
  return (
    <div className="text-center">
      <img src={image} alt={name} className="w-32 h-32 rounded-full mx-auto object-cover" />
      <h3 className="mt-3 font-semibold">{name}</h3>
      <p className="text-sm text-gray-600">{specialty}</p>
    </div>
  );
}