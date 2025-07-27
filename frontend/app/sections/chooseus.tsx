import { FaMapMarkerAlt, FaUserEdit, FaClipboardList, FaHandshake } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <section className="px-6 md:px-12 py-20 bg-white text-[#2B1B12]">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Elevating Your Home Buying Experience with Expertise, Integrity,<br />
          and Unmatched Personalized Service
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
        {/* Card 1 */}
        <div className="bg-[#D9C2B4] p-6 rounded-xl shadow-md">
          <div className="bg-white w-12 h-12 flex items-center justify-center rounded mb-4">
            <FaMapMarkerAlt className="text-[#2B1B12]" size={20} />
          </div>
          <h3 className="font-bold text-lg mb-2">Expert Guidance</h3>
          <p className="text-sm text-gray-700">
            Benefit from our teams seasoned expertise for a smooth buying experience
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#D9C2B4] p-6 rounded-xl shadow-md">
          <div className="bg-white w-12 h-12 flex items-center justify-center rounded mb-4">
            <FaUserEdit className="text-[#2B1B12]" size={20} />
          </div>
          <h3 className="font-bold text-lg mb-2">Personalized Service</h3>
          <p className="text-sm text-gray-700">
            Our services adapt to your unique needs, making your journey stress-free
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#D9C2B4] p-6 rounded-xl shadow-md">
          <div className="bg-white w-12 h-12 flex items-center justify-center rounded mb-4">
            <FaClipboardList className="text-[#2B1B12]" size={20} />
          </div>
          <h3 className="font-bold text-lg mb-2">Transparent Process</h3>
          <p className="text-sm text-gray-700">
            Stay informed with our clear and honest approach to buying your home
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-[#D9C2B4] p-6 rounded-xl shadow-md">
          <div className="bg-white w-12 h-12 flex items-center justify-center rounded mb-4">
            <FaHandshake className="text-[#2B1B12]" size={20} />
          </div>
          <h3 className="font-bold text-lg mb-2">Exceptional Support</h3>
          <p className="text-sm text-gray-700">
            Providing peace of mind with our responsive and attentive customer service
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
