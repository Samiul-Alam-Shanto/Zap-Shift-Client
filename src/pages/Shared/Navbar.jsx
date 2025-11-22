import React from "react";
import { Link, NavLink, useNavigate } from "react-router";
import logo from "../../assets/logo.png";
import { GoArrowUpRight } from "react-icons/go";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  // console.log(user);

  const navLinks = (
    <>
      <li>
        <NavLink to="">Services</NavLink>
      </li>
      <li>
        <NavLink to="/coverage">Coverage</NavLink>
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

  const handleSignOut = () => {
    logOut()
      .then(() => {
        navigate("/");
        toast.success("Logout successful");
      })
      .catch((error) => toast.error(error.message));
  };

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
            className="menu menu-sm dropdown-content text-xl text-base-content rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="flex items-center text-xl">
          <img src={logo} alt="ZapShift logo" className="h-10 w-auto" />
          <span className="font-bold text-3xl text-black -mb-5 -ml-3">
            ZapShift
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-base-content text-xl font-medium px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button
            onClick={handleSignOut}
            className="btn btn-outline text-base-content font-bold border-accent mx-2"
          >
            Sign Out
          </button>
        ) : (
          <Link
            to="/login"
            className="btn btn-outline text-base-content font-bold border-accent mx-2"
          >
            Sign In
          </Link>
        )}

        <p className="btn btn-primary border-none pointer-events-none cursor-auto text-black">
          Be a Rider
        </p>
        <Link to="/be-a-rider">
          <GoArrowUpRight className="text-4xl bg-black hover:bg-primary hover:text-black rounded-full text-primary p-1 font-bold" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
