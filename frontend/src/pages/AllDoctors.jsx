import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import AllDoctor from "../../components/AllDoctors";
import Footer from "../../components/Footer";

const DoctorList = () => {
  return (
    <div className="">
      <div className="">
        <Navbar />
      </div>
      <div className="py-5">
        <h1 className="xl:text-left  text-center lg:px-50 font-semibold poppins xl:text-2xl text-3xl xl:py-5">
          Browse through the doctors specialist.
        </h1>
        <div className="mt-10">
          <AllDoctor />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default DoctorList;
