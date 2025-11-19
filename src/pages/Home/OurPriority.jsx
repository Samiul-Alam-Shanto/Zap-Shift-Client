import React from "react";
import img1 from "../../assets/be-a-merchant-bg.png";
import img2 from "../../assets/location-merchant.png";

const OurPriority = () => {
  return (
    <div
      className="bg-secondary max-w-[1380px] mx-auto p-20 rounded-2xl bg-no-repeat flex  gap-5"
      style={{
        backgroundImage: `url(${img1})`,
        backgroundPosition: "top left ",
      }}
    >
      <div className="space-y-5 ">
        <h2 className="font-bold text-base-100 text-4xl ">
          Merchant and Customer Satisfaction is Our First Priority
        </h2>
        <p className="font-medium text-base-200">
          We offer the lowest delivery charge with the highest value along with{" "}
          <br />
          100% safety of your product. ZapShift courier delivers your parcels in{" "}
          <br />
          every corner of Bangladesh right on time.
        </p>
        <div className="space-x-2">
          <button className="btn btn-primary rounded-full border-none text-secondary font-bold">
            Become a Merchant
          </button>
          <button className="btn bg-transparent border-primary text-primary rounded-full ">
            Earn with ZapShift Courier
          </button>
        </div>
      </div>
      <div className="hidden lg:block">
        <img src={img2} alt="" />
      </div>
    </div>
  );
};

export default OurPriority;
