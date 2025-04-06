import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import AllDoctor from "../../components/AllDoctors";

const DoctorList = () => {
  return (
    <div>
      <Navbar />
      <AllDoctor />
    </div>
  );
};

export default DoctorList;
