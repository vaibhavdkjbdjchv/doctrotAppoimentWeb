import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DoctorList = () => {
  const navigate = useNavigate();
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
        // console.error("Error fetching doctors:", error);
        setError("Failed to load doctor data.");
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="w-[80%] mx-auto flex flex-col items-center gap-10 py-10">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-[36px] font-bold text-gray-800">
          Top Doctors to Book
        </h2>
        <p className="text-gray-500 text-[18px] mt-2">
          Simply browse through our extensive list of trusted doctors.
        </p>
      </div>

      {/* Doctors Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {doctors.map((doctor) => (
          <div
            key={doctor._id}
            onClick={() => navigate("/DoctorDetails", { state: doctor })}
            className=" bg-white shadow-md rounded-xl overflow-hidden cursor-pointer transition-transform hover:scale-105"
          >
            <div className="w-full border-[#C9D8FF] h-60 flex items-center justify-center bg-[#EAEFFF]">
              <img
                src={`http://localhost:5000/uploads/${doctor.profilePhoto}`}
                alt={doctor.name}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-4">
              <p className="text-green-500 font-medium text-sm mb-1">
                ● Available
              </p>
              <h3 className="text-lg font-bold text-gray-800">
                Dr. {doctor.name}
              </h3>
              <p className="text-gray-500 text-sm">{doctor.specialization}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;
