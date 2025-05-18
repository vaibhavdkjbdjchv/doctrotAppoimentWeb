import React, { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import AddDoctor from "./AddDoctor";
import Appoinment from "./Appoinment";
import DoctorList from "../pages/AllDoctors";
import Dashboard from "./Dashboard";
import AllDoctor from "../../components/AllDoctors";
import { faArrowRight, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AdminPanel = () => {
  const [activeComponent, setActiveComponent] = useState("home"); // State for tracking the active component

  // Function to render selected component
  const renderComponent = () => {
    switch (activeComponent) {
      case "addDoctor":
        return <AddDoctor />;
      case "appointments":
        return <Appoinment />;
      case "allDoctors":
        return <AllDoctor />;
      default:
        return <Dashboard />;
    }
  };

  const [active, setActive] = useState(true);
  return (
    <div className="w-screen bg-[#f8f9fd] h-screen overflow-hidden">
      {/* Navbar */}
      <div className={`w-full h-[7%]`}>
        <AdminNavbar />
      </div>
      <div
        onClick={() => setActive(!active)}
        className="absolute left-5 z-50 top-20 xl:hidden visible justify-center text-4xl rounded-full  py-5 bg-white px-5"
      >
        <FontAwesomeIcon icon={faBars} />
      </div>
      {/* Sidebar */}
      <div className="h-full flex">
        <div
          className={`${
            active ? "hidden" : "visible"
          } xl:w-[20%] bg-white xl:flex  border-r-1 xl:static absolute z-0 border-[#BEBEBE] xl:h-fu h-[90%]  top-20 justify-start`}
        >
          <div>
            <nav className="w-full px-10 py-20 justify-between items-center">
              <div className="py-10 h-full flex">
                <ul className="flex h-[30%] font-normal flex-col justify-between items- text-black text-lg space-y-4">
                  <li
                    onClick={() => setActiveComponent("Dashboard")}
                    className="cursor-pointer hover:text-blue-500"
                  >
                    Dasboard
                  </li>
                  <li
                    onClick={() => setActiveComponent("appointments")}
                    className="cursor-pointer hover:text-blue-500"
                  >
                    Appointments
                  </li>
                  <li
                    onClick={() => setActiveComponent("addDoctor")}
                    className="cursor-pointer hover:text-blue-500"
                  >
                    Add Doctor
                  </li>
                  <li
                    onClick={() => setActiveComponent("allDoctors")}
                    className="cursor-pointer hover:text-blue-500"
                  >
                    All Doctors
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className="xl:w-[80%] w-full p-5 flex justify-start ">
          {renderComponent()}
        </div>
      </div>
      {/* Main Content */}
    </div>
  );
};

export default AdminPanel;
