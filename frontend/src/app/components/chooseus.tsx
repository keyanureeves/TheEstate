"use client";

export default function ChooseUs() {
  const features = [
    {
      title: "Secure & Transparent",
      desc: "Every property is tokenized on blockchain ensuring transparency, immutability, and trust.",
      icon: "🔒",
    },
    {
      title: "Global Accessibility",
      desc: "Invest, buy, or rent properties from anywhere in the world with just a wallet.",
      icon: "🌍",
    },
    {
      title: "Fractional Ownership",
      desc: "Own part of premium properties with fractional tokens — lowering entry barriers.",
      icon: "🏠",
    },
  ];

  return (
    <section className="bg-[#FFF8F3] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2B1B12]">
          Why Choose <span className="text-[#2B1B12]">TheEstate?</span>
        </h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          We’re redefining real estate with blockchain technology. Here’s what makes us different:
        </p>

        {/* Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#E7D6C9] rounded-2xl shadow-md p-8 hover:shadow-xl transition"
            >
              <div className="text-4xl">{feature.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-[#2B1B12]">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-700">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
