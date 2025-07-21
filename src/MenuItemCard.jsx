export function MenuItemCard({ item }) {
  return (
    <div className="bg-black rounded-xl text-white shadow-md p-4 hover:scale-105 transition">
      <img
        src={item.image}
        alt={item.name}
        className="rounded-md w-full h-32 object-cover"
      />
      <h3 className="text-xl font-bold mt-3">{item.name}</h3>
      <p className="text-sm text-yellow-400">{item.description}</p>
      <div className="mt-2 font-bold text-lg text-yellow-500">R{item.price}</div>
    </div>
  );
}
