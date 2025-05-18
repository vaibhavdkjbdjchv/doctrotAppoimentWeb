import React, { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import AddDoctor from "./AddDoctor";
import Appoinment from "./Appoinment";
import DoctorList from "../pages/AllDoctors";
import Dashboard from "./Dashboard";
import AllDoctor from "../../components/AllDoctors";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
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

  const [active, setActive] = useState(false);
  return (
    <div className="w-screen bg-[#f8f9fd] h-screen">
      {/* Navbar */}
      <div className={`w-full h-[7%]`}>
        <AdminNavbar />
      </div>

      {/* Sidebar */}
      <div className="h-[93%] flex">
        <div
          className={`${
            active ? "hidden" : "visible"
          } w-[20%] bg-white xl:flex border-r-1 border-[#BEBEBE] h-full  top-0 justify-start`}
        >
          <div>
            <div
              onClick={() => setActive(!active)}
              className="w-full bg flex justify-center  text-4xl bg-white px-5"
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
            <nav className="w-full h-full px-10 py-5 justify-between items-center">
              <div className="py-5 h-full flex">
                <ul className="flex h-[30%] font-normal flex-col justify-between items-start text-black text-lg space-y-4">
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
        <div className="w-[80%] p-5 flex justify-start ">
          {renderComponent()}
        </div>
      </div>
      {/* Main Content */}
    </div>
  );
};

export default AdminPanel;
