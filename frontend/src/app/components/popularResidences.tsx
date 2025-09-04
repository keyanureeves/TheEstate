"use client";

export default function PopularResidences() {
  const residences = [
    {
      id: 1,
      title: "Luxury Penthouse",
      location: "Nairobi, Kenya",
      price: "3.2 ETH",
      img: "/housesvg.svg",
    },
    {
      id: 2,
      title: "Beachfront Villa",
      location: "Mombasa, Kenya",
      price: "6.5 ETH",
      img: "/housesvg.svg",
    },
    {
      id: 3,
      title: "Modern Apartment",
      location: "Kisumu, Kenya",
      price: "1.8 ETH",
     img: "/housesvg.svg",
    },
    {
      id: 4,
      title: "Country House",
      location: "Nakuru, Kenya",
      price: "2.0 ETH",
      img: "/housesvg.svg",
    },
  ];

  return (
    <section className="bg-[#FFF8F3] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2B1B12]">
          Popular Residences
        </h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          Explore some of the most sought-after properties available on{" "}
          <span className="font-semibold">TheEstate</span>.
        </p>

        {/* Cards Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {residences.map((res) => (
            <div
              key={res.id}
              className="bg-[#E7D6C9] rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={res.img}
                alt={res.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-lg font-semibold text-[#2B1B12]">
                  {res.title}
                </h3>
                <p className="text-gray-700 text-sm">{res.location}</p>
                <p className="mt-2 font-bold text-[#2B1B12]">{res.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
