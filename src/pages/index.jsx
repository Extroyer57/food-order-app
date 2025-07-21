import { menuItems } from "@/lib/data";
import { MenuItemCard } from "@/components/MenuItemCard";

export default function Home() {
  const categories = ["Meal", "Kota", "Chips", "Drinks", "Burger"];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-yellow-500">Menu</h1>
      {categories.map((category) => (
        <section key={category} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">{category}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {menuItems
              .filter((item) => item.category === category)
              .map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
