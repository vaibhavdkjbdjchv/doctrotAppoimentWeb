import React from "react";
import bg from "../../src/Assets/Images/homebg.png";
import group_profiles from "../../src/Assets/Images/group_profiles.png";
import Dermatologist from "../../src/Assets/Images/Dermatologist.svg";
import Neurologist from "../../src/Assets/Images/Neurologist.svg";
import Pediatricians from "../../src/Assets/Images/Pediatricians.svg";
import Gynecologist from "../../src/Assets/Images/Gynecologist.svg";
import Gastroenterologist from "../../src/Assets/Images/Gastroenterologist.svg";
import General_physician from "../../src/Assets/Images/General_physician.svg";
import TopDoctors from "../../components/TopDoctors";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex flex-col gap-10 items-center ">
      <div className="w-full">
        <Navbar />
      </div>

      <div className="w-[80%] h-[60%] flex justify-between items-center  rounded-2xl bg-[#5F6FFF]">
        <div className="md:w-[50%] h-full flex justify-center">
          <div className="h-full  w-[80%] py-5 flex flex-col xl:gap-10 gap-5 justify-center md:items-start item-center text-white">
            <h1 className="text-4xl md:text-left text-center font-bold">
              Book Appointment With Trusted Doctors
            </h1>
            <div className="flex flex-col xl:gap-5 justify-center  md:items-start items-center ">
              <img src={group_profiles} alt="" className="xl:w-25 lg:w-20" />
              <h2 className="xl:text-lg lg:text-md font-mono md:text-left text-center font-medium">
                Simply browse through our extensive list of trusted doctors,
                schedule your appointment hassle-free.
              </h2>
            </div>
            <button
              onClick={() => navigate("/AllDoctors")}
              className="bg-white  text-black xl:py-3 xl:px-5 lg:py-2 lg:px-3 py-1 px-2 rounded-3xl"
            >
              Book appointment →
            </button>
          </div>
        </div>
        <div className="xl:w-[50%] w-[40%] h-full md:flex hidden justify-end items-end">
          <img src={bg} alt="" className=" bg-cover" />
        </div>
      </div>
      <div className="lg:w-[30%] w-[90%] flex flex-col gap-10">
        <h1 className="text-4xl font-bold text-center">Find by Speciality</h1>
        <p className="text-center">
          Simply browse through our extensive list of trusted doctors, schedule
          your appointment hassle-free
        </p>
      </div>
      <div className="w-full flex justify-center">
        <div className="flex flex-wrap w-[60%] justify-evenly gap-10">
          <div className="flex hover:-mt-10 duration-500  cursor-pointer ease-in-out  flex-col justify-center items-center capitalize py-2 font-medium text-lg">
            <img src={Dermatologist} alt="" className="w-25" />
            Dermatologist
          </div>
          <div className="flex hover:-mt-10 duration-500  cursor-pointer ease-in-out flex-col justify-center items-center capitalize py-2 font-medium text-lg">
            <img src={Neurologist} alt="" className="w-25" />
            Neurologist
          </div>
          <div className="flex hover:-mt-10 duration-500  cursor-pointer ease-in-out flex-col justify-center items-center capitalize py-2 font-medium text-lg">
            <img src={Pediatricians} alt="" className="w-25" />
            Pediatricians
          </div>
          <div className="flex hover:-mt-10 duration-500  cursor-pointer ease-in-out flex-col justify-center items-center capitalize py-2 font-medium text-lg">
            <img src={Gynecologist} alt="" className="w-25" />
            Gynecologist
          </div>
          <div className="flex hover:-mt-10 duration-500  cursor-pointer ease-in-out flex-col justify-center items-center capitalize py-2 font-medium text-lg">
            <img src={Gastroenterologist} alt="" className="w-25" />
            Gastroenterologist
          </div>
          <div className="flex hover:-mt-10 duration-500  cursor-pointer ease-in-out flex-col justify-center items-center capitalize py-2 font-medium text-lg">
            <img src={General_physician} alt="" className="xl:w-25 w-20" />
            General_physician
          </div>
        </div>
      </div>
      <div className="w-screen py-10 flex-col flex justify-center items-center">
        <TopDoctors />
        <div className="w-full flex justify-center">
          <h1 className="px-10 py-3  cursor-pointer bg-gray-300 rounded-4xl">
            more
          </h1>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
