import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";

const Dashboard = () => {
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [appointedDoctors, setAppointedDoctors] = useState([]);

  useEffect(() => {
    // Fetch all doctors (assuming stored in localStorage for now)
    const storedDoctors = JSON.parse(localStorage.getItem("doctors")) || [];
    setDoctors(storedDoctors);

    // Fetch all appointments
    const storedAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(storedAppointments);

    // Find unique doctor IDs who have appointments
    const appointedSet = new Set(
      storedAppointments.map((appt) => appt.doctor.name)
    );
    setAppointedDoctors(Array.from(appointedSet));
  }, []);

  return (
    <div className="w-screen min-h-screen bg-[#F9FAFB] fontUse">
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
                <li key={index}>{docName}</li>
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
