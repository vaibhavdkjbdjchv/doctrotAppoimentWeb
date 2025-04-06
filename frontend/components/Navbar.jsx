import React from "react";
import logo from "../public/Assets/Images/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth0 } from "@auth0/auth0-react";

import {
  faCartShopping,
  faHome,
  faList,
  faSearch,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import AuthButtons from "./AuthButton";
const Navbar = () => {
  const { user, isAuthenticated, logout, isLoading } = useAuth0();
  return (
    <div className="flex justify-center  items-center poppins ">
      <nav className="w-[80%]  border-b-1 py-3 h-full justify-between items-center">
        <div className="w-full  py-2 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="w-9" /><h1 className="text-2xl fontUse font-bold">EstroVerse</h1>
          </div>
          <div className="w-[50%] flex justify-center">
            <ul className="w-[60%] flex items-center font-medium justify-evenly text-black text-[16px]">
              <li>
                <Link to="/" className=" hover:border-b">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/AllDoctors" className=" hover:border-b">
                  AllDoctors
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:border-b">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className=" hover:border-b">
                  Contact
                </Link>
              </li>
              <li className="border px-3 py-1 font-sans rounded-3xl border-gray-400 text-sm">
                <Link to="/Admin" className="">
                Admin panel
                </Link>
              </li>
            </ul>
          </div>
          <div>
            {!isAuthenticated ? (
              <AuthButtons />
            ) : (
              <div className="">
                <button
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  <div className=" w-15">
                    <img
                      src={user.picture}
                      alt=""
                      className="w-full rounded-full"
                    />
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
