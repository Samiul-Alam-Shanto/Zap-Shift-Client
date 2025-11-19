import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import { GoArrowUpRight } from "react-icons/go";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="">Services</NavLink>
      </li>
      <li>
        <NavLink to="">Coverage</NavLink>
      </li>
      <li>
        <NavLink to="">About Us</NavLink>
      </li>
      <li>
        <NavLink to="">Pricing</NavLink>
      </li>
      <li>
        <NavLink to="">Be a Rider</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar rounded-lg  bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content text-base-content rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className=" text-xl">
          <div className="flex items-end ">
            <img src={logo} alt="logo icon" />
            <p className="font-bold text-3xl text-black -mb-1 -ml-3">
              ZapShift
            </p>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-base-content font-medium px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <Link className="btn btn-outline text-base-content font-bold border-accent mx-2">
          Sign In
        </Link>

        <p className="btn btn-primary border-none pointer-events-none cursor-auto text-black">
          Be a Rider
        </p>
        <Link>
          <GoArrowUpRight className="text-4xl bg-black hover:bg-primary hover:text-black rounded-full text-primary p-1 font-bold" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
