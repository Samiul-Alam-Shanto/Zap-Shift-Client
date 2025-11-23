import React, { useState } from "react";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("Story");

  // Exact content from the image for the Story tab
  // Mock content for other tabs to demonstrate functionality
  const tabContent = {
    Story: (
      <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base font-light">
        <p>
          We started with a simple promise — to make parcel delivery fast,
          reliable, and stress-free. Over the years, our commitment to real-time
          tracking, efficient logistics, and customer-first service has made us
          a trusted partner for thousands. Whether it's a personal gift or a
          time-sensitive business delivery, we ensure it reaches its destination
          — on time, every time.
        </p>
        <p>
          We started with a simple promise — to make parcel delivery fast,
          reliable, and stress-free. Over the years, our commitment to real-time
          tracking, efficient logistics, and customer-first service has made us
          a trusted partner for thousands. Whether it's a personal gift or a
          time-sensitive business delivery, we ensure it reaches its destination
          — on time, every time.
        </p>
        <p>
          We started with a simple promise — to make parcel delivery fast,
          reliable, and stress-free. Over the years, our commitment to real-time
          tracking, efficient logistics, and customer-first service has made us
          a trusted partner for thousands. Whether it's a personal gift or a
          time-sensitive business delivery, we ensure it reaches its destination
          — on time, every time.
        </p>
      </div>
    ),
    Mission: (
      <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base font-light">
        <p>
          Our mission is to redefine logistics through innovation and care. We
          aim to bridge distances not just by moving parcels, but by delivering
          trust. Every package we handle is treated with the utmost priority,
          ensuring that our clients can focus on what matters most to them while
          we handle the logistics.
        </p>
        <p>
          Sustainability is at the core of our operations. We are constantly
          optimizing our routes and investing in eco-friendly delivery methods
          to reduce our carbon footprint, ensuring a greener future for the
          planet while maintaining the speed and reliability you expect.
        </p>
      </div>
    ),
    Success: (
      <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base font-light">
        <p>
          Success to us is measured by the smiles of our customers. With over 1
          million successful deliveries and a 99.8% on-time rate, our track
          record speaks for itself. We have grown from a small local courier to
          a nationwide logistics network.
        </p>
        <p>
          Our success is built on a foundation of transparency. Our real-time
          tracking systems have set a new industry standard, giving customers
          complete visibility and peace of mind from pickup to drop-off.
        </p>
      </div>
    ),
    "Team & Others": (
      <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base font-light">
        <p>
          Behind every delivery is a dedicated team of logistics experts,
          drivers, and support staff. We believe in empowering our employees,
          because a happy team delivers the best service. Our diverse workforce
          brings together talent from all backgrounds to solve complex
          logistical challenges.
        </p>
        <p>
          We also partner with local businesses to strengthen community ties. By
          supporting local commerce, we help build resilient economies in the
          areas we serve.
        </p>
      </div>
    ),
  };

  const tabs = ["Story", "Mission", "Success", "Team & Others"];

  return (
    <div className="min-h-screen bg-white flex justify-center p-8 md:p-16 font-sans">
      <div className="w-full max-w-5xl">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            About Us
          </h1>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl leading-relaxed font-light">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-100 mb-10"></div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-8 md:gap-12 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-xl md:text-2xl transition-colors duration-200 ${
                activeTab === tab
                  ? "text-secondary font-bold" // Active color (olive green)
                  : "text-gray-400 font-light hover:text-gray-600" // Inactive color
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="animate-fade-in">{tabContent[activeTab]}</div>
      </div>
    </div>
  );
};

export default AboutUs;
