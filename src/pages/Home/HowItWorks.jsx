import React from "react";
import icon from "../../assets/bookingIcon.png";

const texts = [
  {
    image: icon,
    title: "Booking Pick & Drop",
    text: "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    image: icon,
    title: "Cash On Delivery",
    text: "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    image: icon,
    title: "Delivery Hub",
    text: "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    image: icon,
    title: "Booking SME & Corporate",
    text: "From personal packages to business shipments — we deliver on time, every time.",
  },
];

const HowItWorks = () => {
  return (
    <div className="py-5 px-20">
      <h1 className="text-left text-4xl font-bold text-secondary mb-4">
        How it Works
      </h1>
      <div className="flex flex-wrap gap-4">
        {texts.map((text, index) => (
          <div
            key={index}
            className="flex-1 bg-base-100 p-10 space-y-2 rounded-2xl"
          >
            <img src={text.image} alt="" />
            <h2 className="text-secondary font-bold text-xl">{text.title}</h2>
            <p className="text-base-content">{text.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
