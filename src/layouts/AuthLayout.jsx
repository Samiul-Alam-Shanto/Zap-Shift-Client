import React from "react";
import { Link, Outlet } from "react-router";
import logo from "../assets/logo.png";
import authImage from "../assets/authImage.png";
const AuthLayout = () => {
  return (
    <div className="container mx-auto p-5 ">
      <Link to="/" className="flex items-center text-xl w-fit">
        <img src={logo} alt="ZapShift logo" className="h-10 w-auto" />
        <span className="font-bold text-3xl text-black -mb-5 -ml-3">
          ZapShift
        </span>
      </Link>
      <div className="flex  min-h-[90vh] items-center justify-center  gap-5">
        <div className="flex-1 bg-base-100 flex w-full items-center justify-center ">
          <Outlet />
        </div>
        <div className=" hidden flex-1   md:flex flex-col justify-center h-[90vh] z-10 bg-[#FAFDF0]  ">
          <img src={authImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
