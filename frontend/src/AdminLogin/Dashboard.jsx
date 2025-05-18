import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [appointedDoctors, setAppointedDoctors] = useState([]);

  useEffect(() => {
    const storedAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(storedAppointments);

    // Find unique doctor IDs who have appointments
    const appointedSet = new Set(
      storedAppointments.map((appt) => appt.doctor.name)
    );
    setAppointedDoctors(Array.from(appointedSet));
  }, []);
  // const [doctors, setDoctors] = useState([]);
  // const [selectedSpecialization, setSelectedSpecialization] = useState("All");

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/doctors/all");
        setDoctors(res.data);
      } catch (err) {
        console.error("Error fetching doctors:", err);
      }
    };

    fetchDoctors();
  }, []);
  console.log(doctors.length);
  return (
    <div className="w-screen bg-[#F9FAFB] fontUse flex justify-center">
      <div className="max-w-5xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold text-[#333] text-center mb-10">
          🔧 Admin Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 shadow-md rounded-xl">
            <h2 className="text-xl font-semibold text-[#444] mb-2">
              👨‍⚕️ Total Doctors
            </h2>
            <p className="text-4xl font-bold text-[#5F6FFF]">
              {doctors.length}
            </p>
          </div>

          <div className="bg-white p-6 shadow-md rounded-xl">
            <h2 className="text-xl font-semibold text-[#444] mb-2">
              📋 Appointed Doctors
            </h2>
            <p className="text-4xl font-bold text-green-500">
              {appointedDoctors.length}
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">🧑‍⚕️ Doctors Appointed</h2>
          {appointedDoctors.length > 0 ? (
            <ul className="list-disc pl-6 text-lg text-[#555]">
              {appointedDoctors.map((docName, index) => (
                <li key={index}>
                  {docName}
                  { }
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No doctors appointed yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

// export default AdminDashboard;

export default Dashboard;
