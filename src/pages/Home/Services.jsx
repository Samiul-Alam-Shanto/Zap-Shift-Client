import React from "react";
import img1 from "../../assets/live-tracking.png";
import img2 from "../../assets/safe-delivery.png";

const serviceInfo = [
  {
    image: img1,
    title: "Live Parcel Tracking",
    description: `Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.`,
  },
  {
    image: img2,
    title: "100% Safe Delivery",
    description: `We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.`,
  },
  {
    image: img2,
    title: "24/7 Call Center Support",
    description: `Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.`,
  },
];

const Services = () => {
  return (
    <div className="flex flex-col gap-5 px-20">
      {serviceInfo.map((info, i) => (
        <div
          key={i}
          className="flex flex-wrap lg:flex-nowrap gap-20 bg-base-100 rounded-2xl justify-start  items-center p-10"
        >
          <img src={info.image} alt="" />
          <div className="h-32 hidden lg:block md:h-40 border-l-2 border-dotted border-secondary"></div>
          <div>
            <h2 className="font-bold text-secondary text-2xl text-left">
              {info.title}
            </h2>
            <p className="font-medium text-base-content text-left">
              {info.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
