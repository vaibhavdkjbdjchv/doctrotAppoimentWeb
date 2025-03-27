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
      <h2 className="text-3xl font-bold text-center">Our Doctors</h2>
      <div className="w-[90%] grid grid-cols-1sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center items-center">
        {doctors.map((doctor) => (
          <div
            key={doctor._id}
            className="bg-white shadow-lg w-60 h-100 flex flex-col items-center"
          >
            <div className="w-full h-[65%] flex items-end justify-center bg-[#EAEFFF] ">
              <img
                src={`http://localhost:5000/uploads/${doctor.profilePhoto}`}
                alt={doctor.name}
                className="object-center"
              />
            </div>
            <div className="flex px-2 py-2 gap-1 flex-col justify-center items-start">
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
