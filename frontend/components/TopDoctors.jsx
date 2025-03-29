import { useEffect, useState } from "react";
import axios from "axios";

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/doctors/all"
        );
        setDoctors(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching doctors:", error);
        setError("Failed to load doctor data.");
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="w-full flex gap-15 flex-col justify-center items-center">
      <div>
        <h2 className="text-[40px] font-bold text-center">Top Doctors To Book</h2>
        <h3 className="text-[18px] text-[#4B5563]">Simply browse through our extensive list of trusted doctors.</h3>
      </div>

      <div className="w-[80%]   grid grid-cols-1sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center items-center">
        {doctors.map((doctor) => (
          <div
            key={doctor._id}
            className="bg-white hover:-mt-10  hover:shadow-lg duration-500 ease-in-out border-2 border-[#C9D8FF] rounded-2xl overflow-hidden  w-70 h-105 flex flex-col"
          >
            <div className="w-full h-[65%] flex items-end justify-center bg-[#EAEFFF] ">
              <img
                src={`http://localhost:5000/uploads/${doctor.profilePhoto}`}
                alt={doctor.name}
                className="object-center"
              />
            </div>
            <div className="flex px-3 py-3 gap-1 flex-col ">
              <p className="text-green-500 font-semibold">● Available</p>
              <h3 className="text-lg font-bold">Dr. {doctor.name}</h3>
              <p className="text-gray-500">{doctor.specialization}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-[80%]  grid grid-cols-1sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center items-center">
        {doctors.map((doctor) => (
          <div
            key={doctor._id}
            className="bg-white hover:-mt-10 duration-500 hover:shadow-lg ease-in-out border-2 border-[#C9D8FF] rounded-2xl overflow-hidden  w-70 h-105 flex flex-col"
          >
            <div className="w-full h-[65%] flex items-end justify-center bg-[#EAEFFF] ">
              <img
                src={`http://localhost:5000/uploads/${doctor.profilePhoto}`}
                alt={doctor.name}
                className="object-center"
              />
            </div>
            <div className="flex px-3 py-3 gap-1 flex-col ">
              <p className="text-green-500 font-semibold">● Available</p>
              <h3 className="text-lg font-bold">Dr. {doctor.name}</h3>
              <p className="text-gray-500">{doctor.specialization}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;
