import Image from "next/image";

export default function FoodsThingy() {
  const foods: { name: string; imageUrl: string; description: string }[] = [
    {
      name: "Puttu",
      imageUrl: "/foods/puttu.jpeg",
      description: "Steamed rice flour and coconut cylinders, best with kadala curry.",
    },
    {
      name: "Kozhukatta",
      imageUrl: "/foods/kozhukatta.avif",
      description: "Sweet rice dumplings filled with jaggery and coconut, a festive treat.",
    },
    {
      name: "Unniappam",
      imageUrl: "/foods/unniappam.avif",
      description: "Golden brown fritters made with banana, rice flour, and jaggery.",
    },
    {
      name: "Payasam",
      imageUrl: "/foods/payasam.avif",
      description: "Rich and sweet dessert made with milk, jaggery, and vermicelli or rice.",
    },
    {
      name: "Sadhya",
      imageUrl: "/foods/sadhya.jpg",
      description: "A grand vegetarian feast served on banana leaf during festivals.",
    },
    {
      name: "Chicken Fry",
      imageUrl: "/foods/chicken_fry.jpg",
      description: "Spicy Kerala-style fried chicken, crispy outside and juicy inside.",
    },
    {
      name: "Fish Fry",
      imageUrl: "/foods/fish_fry.jpg",
      description: "Crispy seared fish with bold spices and coastal flavors.",
    },
    {
      name: "Idiyappam",
      imageUrl: "/foods/idiyappam.png",
      description: "Soft rice noodle cakes, usually served with coconut milk or curry.",
    },
  ];

  return (
    <section className="my-10 mb-24  px-8 sm:px-20">
      <div className="rounded-xl p-6 w-full mx-auto font-satoshi select-none">
        <h2 className="text-center font-satoshi text-5xl pb-20 text-whitex/95">
          Ahh, And Lots Of Great Food.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-16">
          {foods.map((food, index) => (
            <div key={index} className="flex flex-col items-start justify-center">
              <div className="w-[260px] h-[200px] relative rounded-xl overflow-hidden group">
                <Image
                  src={food.imageUrl}
                  alt={food.name}
                  fill
                  className="object-cover transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center px-4 select-none">
                  <p className="text-white text-left text-xl select-none">{food.description}</p>
                </div>
              </div>
              <span className="text-2xl text-whitex/95 mt-2">{food.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
