import Image from "next/image";
export default function FoodsThingy() {
    const foods:{name:string; imageUrl:string}[] = [
        // {name: "Idiyappam", imageUrl: "/foods/idiyappam.png"},
        {name: "Puttu", imageUrl: "/foods/puttu.jpeg"},
        {name: "Kozhukatta", imageUrl: "/foods/kozhukatta.avif"},
        {name: "Unniappam", imageUrl: "/foods/unniappam.avif"},
        {name: "Payasam", imageUrl: "/foods/payasam.avif"}
    ];
    return (
        <section className="my-10 mb-24">
        <div className="rounded-xl p-6 w-full mx-auto font-satoshi">
          <h2 className="text-center font-satoshi text-5xl pb-16 text-whitex/95">Ahh, And Lots Of Great Foods.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 place-items-center gap-10">
            {foods.map((food, index) => (
              <div key={index} className="flex-row items-center justify-center">
                <Image src={food.imageUrl} alt={food.name} width={260} height={260} className="rounded-xl" />
                <span className="text-xl text-whitex/95">{food.name}</span>
              </div>
            ))}

          </div>
        </div>
        </section>
    );
}