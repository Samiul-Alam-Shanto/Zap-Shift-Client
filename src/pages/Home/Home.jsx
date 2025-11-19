import React from "react";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import OurService from "./OurService";
import Brands from "./Brands";
import Services from "./Services";
import OurPriority from "./OurPriority";
import CustomerCard from "./CustomerCard";

const Home = () => {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <OurService />
      <Brands />
      <Services />
      <div className="my-14  w-full border-t-2 text-secondary border-dotted" />
      <OurPriority />
      <CustomerCard />
    </div>
  );
};

export default Home;
