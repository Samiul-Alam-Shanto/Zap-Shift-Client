import React from "react";
import iconImg from "../../assets/service.png";
const OurService = () => {
  const cardInfo = [
    {
      image: iconImg,
      title: "Express & Standard Delivery",
      description:
        "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.",
    },
    {
      image: iconImg,
      title: "Nationwide Delivery",
      description:
        "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48-72 hours.",
    },
    {
      image: iconImg,
      title: "Fulfillment Solution",
      description:
        "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    },

    {
      image: iconImg,
      title: "Cash on Home Delivery",
      description:
        "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    },
    {
      image: iconImg,
      title: "Corporate Service / Contract In Logistics",
      description:
        "Customized corporate services which includes warehouse and inventory management support.",
    },
    {
      image: iconImg,
      title: "Parcel Return",
      description:
        "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    },
  ];

  return (
    <div className="bg-secondary p-10 my-10 rounded-2xl">
      <div className="text-center">
        <h2 className="font-bold text-4xl text-base-100">Our Services</h2>
        <p className="text-base-content font-semibold my-5">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to <br /> business shipments — we
          deliver on time, every time.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10 ">
        {cardInfo.map((info, i) => (
          <div
            key={i}
            className="bg-base-100 rounded-xl p-10 flex flex-col items-center justify-center text-center gap-3 hover:bg-primary hover:scale-105 transition ease-in-out duration-300 "
          >
            <img src={info.image} alt="icon" />
            <h2 className="font-bold text-xl text-secondary">{info.title}</h2>
            <p className="font-medium text-base-content ">{info.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurService;
