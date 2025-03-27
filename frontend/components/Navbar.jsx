import React from "react";
import logo from "../public/Assets/Images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center">
      <nav className="w-[80%]  border-b-1 h-full justify-between items-center">
        <div className="py-5 flex justify-between items-center">
          <div className="">
            <img src={logo} alt="" />
          </div>
          <div className="">
            <ul className="flex  text-black text-lg font-semibold  space-x-4">
              <li>
                <Link to="/" className=" hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/AllDoctors" className=" hover:underline">
                  AllDoctors
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className=" hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <button className="bg-[#5F6FFF] text-white font-bold py-2 px-5 rounded-2xl">
              Create Account
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
