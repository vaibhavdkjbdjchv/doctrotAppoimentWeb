import React, { useEffect, useState } from "react";
// import logo from "/assets/logo.png";
import logo from "../src/Assets/Images/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom"; // <-- for active route
import { useUser } from "../src/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const { user } = useUser();
  const location = useLocation(); // <-- current route
  const { logout } = useUser();
  const isActive = (path) => location.pathname === path;

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login"); // or login page
  };

  const [resposive, setResponsive] = useState(true);

  return (
    <div className=" relative flex justify-center items-center poppins">
      <nav className="w-[80%] border-b-1 py-3 h-full justify-between items-center">
        <div className="w-full py-2 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="w-9" />
            <h1 className="text-2xl fontUse font-bold">EstroVerse</h1>
          </div>

          {/* web View  */}
          <div className="w-[50%] flex 2xl:justify-center justify-end">
            <ul className="w-[60%] 2xl:flex hidden items-center font-medium justify-evenly text-black text-[16px]">
              <li>
                <Link
                  to="/"
                  className={`hover:border-b ${
                    isActive("/") ? "font-bold  text-blue-500" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/AllDoctors"
                  className={`hover:border-b ${
                    isActive("/AllDoctors") ? "font-bold  text-blue-500" : ""
                  }`}
                >
                  AllDoctors
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`hover:border-b ${
                    isActive("/about") ? "font-bold  text-blue-500" : ""
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`hover:border-b ${
                    isActive("/contact") ? " font-bold  text-blue-500" : ""
                  }`}
                >
                  Contact
                </Link>
              </li>
              <li className="border px-3 py-1 font-sans rounded-3xl border-gray-400 text-sm">
                <Link target="_blank " to="/admin">
                  Admin panel
                </Link>
              </li>
            </ul>

            {/* mobile View  */}
            <div className="relative w-[50%] bg-amber-400 flex justify-end items-center  2xl:hidden visible">
              <FontAwesomeIcon
                icon={faBars}
                className={`${
                  resposive ? "visible" : "!hidden"
                } z-50 text-3xl absolute cursor-pointer `}
                onClick={() => setResponsive(!resposive)}
              />
              <FontAwesomeIcon
                icon={faCircleXmark}
                className={`${
                  resposive ? "!hidden" : "visible"
                } z-50 text-3xl text-red-600 absolute cursor-pointer `}
                onClick={() => setResponsive(!resposive)}
              />
            </div>

            <div
              onClick={() => !resposive}
              className={`${
                resposive ? "-top-100" : "top-0"
              } w-full left-0  py-15  absolute flex justify-center overflow-hidden duration-700 ease-in-out`}
            >
              <div
                className={ `2xl:hidden  w-full h-full top-0 z-0 absolute bg-[#000000ad] backdrop-blur-lg`}
              ></div>
              <ul className="2xl:hidden z-50  gap-5 flex flex-col items-center font-medium justify-evenly text-white text-[16px]">
                <li>
                  <Link
                    to="/"
                    className={`hover:border-b ${
                      isActive("/") ? "font-bold  text-blue-500" : ""
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/AllDoctors"
                    className={`hover:border-b ${
                      isActive("/AllDoctors") ? "font-bold  text-blue-500" : ""
                    }`}
                  >
                    AllDoctors
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className={`hover:border-b ${
                      isActive("/about") ? "font-bold  text-blue-500" : ""
                    }`}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className={`hover:border-b ${
                      isActive("/contact") ? " font-bold  text-blue-500" : ""
                    }`}
                  >
                    Contact
                  </Link>
                </li>
                <li className="border px-3 py-1 font-sans rounded-3xl border-gray-400 text-sm">
                  <Link target="_blank " to="/admin">
                    Admin panel
                  </Link>
                </li>
                {user ? (
                  <div
                    onMouseEnter={() => {
                      setActive(!active);
                    }}
                    className="2xl:hidden cursor-pointer flex items-center gap-2 bg-[#5F6FFF] text-white px-1 fontUse py-2 rounded-4xl"
                  >
                    <span className="text-2xl w-10 text-center font-bold">
                      {user.firstName[0]}
                    </span>
                  </div>
                ) : (
                  <div className=" bg-[#5F6FFF] text-white px-7 fontUse py-2 rounded-4xl">
                    <Link to="/userData">Create User</Link>
                  </div>
                )}
              </ul>
            </div>

            {/* mobile View End  */}
          </div>

          {user ? (
            <div
              onClick={() => {
                setActive(!active);
              }}
              className="2xl:flex cursor-pointer hidden items-center gap-2 bg-[#5F6FFF] text-white px-1 fontUse py-2 rounded-4xl"
            >
              <span className="text-2xl w-10 text-center font-bold">
                {user.firstName[0]}
              </span>
            </div>
          ) : (
            <div className=" bg-[#5F6FFF] text-white px-7 fontUse py-2 rounded-4xl">
              <Link to="/userData">Create User</Link>
            </div>
          )}
        </div>

        <div
          className={`absolute w-40 h-30 right-50 top-18 bg-[#eaeaec] ${
            active ? "visible" : " hidden"
          }`}
        >
          <ul className="w-full text-black font-normal h-full flex flex-col justify-evenly items-start px-5">
            <li>
              <Link to={"/Userdetails"}>User</Link>
            </li>
            <li>
              <Link to={"/appointment-details"}>My Appointment</Link>
            </li>
            <li>
              <button className="cursor-pointer" onClick={logout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
        {/* web view close */}
      </nav>
    </div>
  );
};

export default Navbar;
