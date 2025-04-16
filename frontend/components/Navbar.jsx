import React, { useEffect, useState } from "react";
// import logo from "/assets/logo.png";
import logo from "../src/Assets/Images/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom"; // <-- for active route
import { useUser } from "../src/UserContext";
import AppointmentDetails from "../src/pages/AppointmentDetails";
const Navbar = () => {
  const [active, setActive] = useState(false);
  const { user } = useUser();
  const location = useLocation(); // <-- current route
  const { logout } = useUser();
  const isActive = (path) => location.pathname === path;

  // const [user, setUser] = useState(null);
  const navigate = useNavigate();
  // useEffect(() => {
  //   const storedUser = localStorage.getItem("user");

  //   if (!storedUser) {
  //     navigate("/");
  //   } else {
  //     setUser(JSON.parse(storedUser));
  //   }
  // }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login"); // or login page
  };

  return (
    <div className=" relative flex justify-center items-center poppins">
      <nav className="w-[80%] border-b-1 py-3 h-full justify-between items-center">
        <div className="w-full py-2 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="w-9" />
            <h1 className="text-2xl fontUse font-bold">EstroVerse</h1>
          </div>

          {/* Links */}
          <div className="w-[50%] flex justify-center">
            <ul className="w-[60%] flex items-center font-medium justify-evenly text-black text-[16px]">
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
          </div>

          {user ? (
            <div
              onMouseEnter={() => {
                setActive(!active);
              }}
              className="cursor-pointer flex items-center gap-2 bg-[#5F6FFF] text-white px-1 fontUse py-2 rounded-4xl"
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
          className={`absolute  w-40 h-30 right-50 top-18 bg-[#eaeaec] ${
            active ? " visible" : " hidden"
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
      </nav>
    </div>
  );
};

export default Navbar;
