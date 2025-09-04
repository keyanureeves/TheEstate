"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#FFF8F3] text-[#2B1B12] py-20">
      <div className="max-w-7xl mx-auto px-6 text-center md:text-left flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Discover, Buy & Rent <br /> Tokenized Real Estate
          </h1>
          <p className="text-lg text-gray-700 max-w-xl">
            Welcome to <span className="font-semibold">TheEstate</span>, 
            your gateway to a decentralized property marketplace. 
            Secure, transparent, and accessible to everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link
              href="/marketplace"
              className="bg-[#2B1B12] text-white px-6 py-3 rounded-md hover:bg-[#3c2b1c] transition"
            >
              Explore MarketPlace
            </Link>
            <Link
              href="/profile"
              className="border border-[#2B1B12] px-6 py-3 rounded-md hover:bg-[#2B1B12] hover:text-white transition"
            >
              View My Properties
            </Link>
          </div>
        </div>

        {/* Right Image / Graphic */}
        <div className="flex-1">
          <img
            src="/housesvg.svg" // 👉 put a custom image in /public
            alt="Real Estate Illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
