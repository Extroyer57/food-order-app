import { MenuItemCard } from "@/components/MenuItemCard";
import { menuItems } from "@/lib/data";
import { CartSheet } from "@/components/CartSheet";

export default function MenuPage() {
  const categories = ["Meal", "Kota", "Chips", "Drinks", "Burger"];

  return (
    <div className="container mx-auto px-4 py-6">
      {categories.map((category) => (
        <section key={category} className="mb-12">
          <h2 className="mb-6 text-3xl font-bold font-headline text-primary">
            {category}
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {menuItems
              .filter((item) => item.category === category)
              .map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
          </div>
        </section>
      ))}
      <CartSheet />
    </div>
  );
}
