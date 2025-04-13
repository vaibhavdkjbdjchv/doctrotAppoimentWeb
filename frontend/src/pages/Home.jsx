import React from "react";
import bg from "/public/Assets/Images/homebg.png";
import group_profiles from "/public/Assets/Images/group_profiles.png";
import Dermatologist from "/public/Assets/Images/Dermatologist.svg";
import Neurologist from "/public/Assets/Images/Neurologist.svg";
import Pediatricians from "/public/Assets/Images/Pediatricians.svg";
import Gynecologist from "/public/Assets/Images/Gynecologist.svg";
import Gastroenterologist from "/public/Assets/Images/Gastroenterologist.svg";
import General_physician from "/public/Assets/Images/General_physician.svg";
import TopDoctors from "../../components/TopDoctors";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex flex-col gap-10 items-center ">
      <div className="w-full">
        <Navbar />
      </div>

      <div className="w-[80%] h-[60%] flex justify-between items-center rounded-2xl bg-[#5F6FFF]">
        <div className="w-[50%] h-full flex justify-center">
          <div className="h-full w-[80%] flex flex-col gap-10 justify-center items-start  text-white">
            <h1 className=" text-4xl font-bold">
              Book Appointment With Trusted Doctors
            </h1>
            <div className="flex gap-5 justify-center items-center ">
              <img src={group_profiles} alt="" className="w-25" />
              <h2 className="text-lg font-mono font-medium">
                Simply browse through our extensive list of trusted doctors,
                schedule your appointment hassle-free.
              </h2>
            </div>
            <button
              onClick={() => navigate("/AllDoctors")}
              className="bg-white  text-black py-3 px-5 rounded-3xl"
            >
              Book appointment →
            </button>
          </div>
        </div>
        <div className="w-[50%]  h-full flex justify-end items-end">
          <img src={bg} alt="" className=" bg-cover" />
        </div>
      </div>
      <div className="w-[30%] flex flex-col gap-10">
        <h1 className="text-4xl font-bold text-center">Find by Speciality</h1>
        <p className="text-center">
          Simply browse through our extensive list of trusted doctors, schedule
          your appointment hassle-free
        </p>
      </div>
      <div className="w-full flex justify-center">
        <div className="flex w-[60%]  justify-evenly gap-10">
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
            <img src={General_physician} alt="" className="w-25" />
            General_physician
          </div>
        </div>
      </div>
      <div className="w-screen py-10 flex-col flex justify-center items-center">
        <TopDoctors />
        <div className="w-full flex justify-center">
          <h1 className="px-10 py-3  cursor-pointer bg-gray-300 rounded-4xl">more</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
