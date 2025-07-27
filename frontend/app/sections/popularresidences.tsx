import { FaMapMarkerAlt, FaBed, FaRulerCombined } from 'react-icons/fa';

const residences = [
  {
    id: 1,
    image: '/file.svg', // Replace with actual image path
    location: 'San Francisco, California',
    rooms: 4,
    size: '3,500 sq ft',
    price: '$2,500,000',
  },
  {
    id: 2,
    image: '/file.svg',
    location: 'Beverly Hills, California',
    rooms: 3,
    size: '1,500 sq ft',
    price: '$850,000',
  },
  {
    id: 3,
    image: '/file.svg',
    location: 'Palo Alto, California',
    rooms: 6,
    size: '4,000 sq ft',
    price: '$3,700,000',
  },
];

const PopularResidences = () => {
  return (
    <section className="px-6 md:px-12 py-20 bg-white text-[#2B1B12]">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">Our Popular Residences</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {residences.map((res) => (
          <div key={res.id} className="bg-[#F6EDE6] rounded-xl overflow-hidden shadow-md">
            <img src={res.image} alt={res.location} className="w-full h-60 object-cover" />

            <div className="p-5 space-y-3">
              <div className="flex items-center text-sm text-[#2B1B12] font-medium">
                <FaMapMarkerAlt className="mr-2 text-[#2B1B12]" />
                {res.location}
              </div>

              <div className="flex items-center text-sm gap-4 text-gray-700">
                <div className="flex items-center">
                  <FaBed className="mr-1" /> {res.rooms} Rooms
                </div>
                <div className="flex items-center">
                  <FaRulerCombined className="mr-1" /> {res.size}
                </div>
              </div>

              <div className="flex items-center justify-between mt-4">
                <button className="bg-[#2B1B12] text-white text-sm px-4 py-2 rounded-md hover:bg-[#3c2b1c]">
                  Sign up
                </button>
                <span className="text-[#2B1B12] font-bold text-lg">{res.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularResidences;
