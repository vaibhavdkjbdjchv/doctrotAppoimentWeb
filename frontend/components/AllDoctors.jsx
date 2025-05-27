import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DoctorList = () => {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);
  const [selectedSpecialization, setSelectedSpecialization] = useState("All");
  const [loading, setLoading] = useState(true); // 👈 Loading state

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await axios.get("https://backend-1-i5yj.onrender.com/api/doctors/all");
        setDoctors(res.data);
        setLoading(false); // 🔓 Done loading
      } catch (err) {
        console.error("Error fetching doctors:", err);
        setLoading(false); // even if error, stop loading
      }
    };

    fetchDoctors();
  }, []);

  const specializations = [
    "All",
    ...new Set(doctors.map((doc) => doc.specialization)),
  ];

  const filteredDoctors =
    selectedSpecialization === "All"
      ? doctors
      : doctors.filter((doc) => doc.specialization === selectedSpecialization);

  return (
    <div className="w-screen flex justify-center items-center">
      <div className="xl:w-[80%] w-[90%] h-full xl:flex-row xl:items-start items-center flex-col flex xl:justify-between justify-start">
        <div className="xl:w-[15%]">
          <div className="w-full flex xl:flex-col flex-wrap justify-center gap-3 mb-10">
            {specializations.map((spec, index) => (
              <button
                key={index}
                onClick={() => setSelectedSpecialization(spec)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedSpecialization === spec
                    ? "bg-[#5F6FFF] text-white shadow-md"
                    : "bg-gray-100 text-gray-800 hover:bg-blue-100"
                }`}
              >
                {spec}
              </button>
            ))}
          </div>
        </div>

        {/* 💫 Loading or Doctor Cards */}
        <div className="w-[80%] h-full">
          {loading ? (
            <div className="w-full text-center py-20 text-lg text-gray-500 animate-pulse">
              Fetching awesome doctors... 🩺⏳
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {filteredDoctors.map((doc) => (
                <div
                  key={doc._id}
                  onClick={() => navigate("/DoctorDetails", { state: doc })}
                  className="bg-white rounded-2xl border border-gray-200 shadow hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    <div className="w-full xl:h-[65%] flex items-end justify-center rounded-t-2xl bg-[#5F6FFF]">
                      <img
                        src={`https://backend-1-i5yj.onrender.com/uploads/${doc.profilePhoto}`}
                        alt={doc.name}
                        className="h-[100%]"
                      />
                    </div>
                    <div className="p-5">
                      <div className="text-green-500 flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-green-600"></div>
                        Available
                      </div>
                      <h2 className="text-xl font-bold text-gray-900">
                        Dr. {doc.name}
                      </h2>
                      <p className="text-blue-600 font-medium">
                        {doc.specialization}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorList;
