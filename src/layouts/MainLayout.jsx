import React from "react";
import { Outlet } from "react-router";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";

const MainLayout = () => {
  return (
    <main className="bg-gray-100 ">
      <div className="container mx-auto">
        <Navbar />
        <div className="min-h-[50vh]">
          <Outlet />
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default MainLayout;
