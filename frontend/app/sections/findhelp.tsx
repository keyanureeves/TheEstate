const FindHelpSection = () => {
  return (
    <section className="px-6 md:px-12 py-16 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div>
          <img
            src="/file.svg"// Replace with your actual image path (in public folder)
            alt="Modern House"
            className="w-full rounded-xl shadow-md"
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B1B12] mb-4">
            We Help You To Find<br />
            Your Dream Home
          </h2>
          <p className="text-gray-700 mb-8">
            From cozy cottages to luxurious estates, our dedicated team guides you
            through every step of the journey, ensuring your dream home becomes a reality.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-2xl font-bold text-[#2B1B12]">8K+</p>
              <p className="text-sm text-gray-600">Houses Available</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#2B1B12]">6K+</p>
              <p className="text-sm text-gray-600">Houses Sold</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#2B1B12]">2K+</p>
              <p className="text-sm text-gray-600">Trusted Agents</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindHelpSection;
