import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import AllDoctor from "../../components/AllDoctors";

const DoctorList = () => {
  return (
    <div className="">
      <div className="">
        <Navbar />
      </div>

      <div className="py-5">
        <h1 className="text-left px-50 font-semibold poppins text-2xl py-5">
          Browse through the doctors specialist.
        </h1>
        <div className="mt-10">
          <AllDoctor />
        </div>
      </div>
    </div>
  );
};

export default DoctorList;
