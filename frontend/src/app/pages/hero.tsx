const Hero = () => {
  return (
    <section className="bg-[#FFF8F3] px-6 md:px-12 py-10 md:py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2B1B12] leading-tight">
            Find Your <br />
            <span className="text-[#2B1B12]">Dream Home</span>
          </h1>
          <p className="mt-4 text-gray-700 max-w-md">
            Explore our curated selection of exquisite properties meticulously tailored to your unique dream home vision
          </p>
          <button className="mt-6 bg-[#2B1B12] text-white px-6 py-3 rounded-md hover:bg-[#3c2b1c]">
            Sign up
          </button>
        </div>

        {/* Hero Image */}
        <div>
          <img
            src="/homesvg.svg" // Replace with actual path or use import
            alt="Modern House"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Filter/Search Bar */}
      <div className="max-w-5xl mx-auto mt-10 bg-[#E7D6C9] rounded-xl p-4 flex flex-col md:flex-row gap-4 items-center justify-between">
        <input
          type="text"
          placeholder="Location"
          className="flex-1 px-4 py-3 rounded-md bg-white text-[#2B1B12] placeholder:text-gray-500 outline-none"
        />
        <input
          type="text"
          placeholder="Type"
          className="flex-1 px-4 py-3 rounded-md bg-white text-[#2B1B12] placeholder:text-gray-500 outline-none"
        />
        <input
          type="text"
          placeholder="Price Range"
          className="flex-1 px-4 py-3 rounded-md bg-white text-[#2B1B12] placeholder:text-gray-500 outline-none"
        />
        <button className="bg-[#2B1B12] text-white px-6 py-3 rounded-md w-full md:w-auto">
          Sign up
        </button>
      </div>
    </section>
  );
};

export default Hero;
