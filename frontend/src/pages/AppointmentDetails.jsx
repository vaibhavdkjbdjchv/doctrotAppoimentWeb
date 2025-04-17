import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  const handleCancel = (index) => {
    const storedAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];

    const updatedAppointments = storedAppointments.filter((_, i) => i !== index);

    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
    setAppointments(updatedAppointments); // update UI too
  };

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(stored.reverse()); // latest on top
  }, []);

  return (
    <div className="w-screen min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-4xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#333]">
          🗓️ My Appointments
        </h1>

        {appointments.length === 0 ? (
          <p className="text-center text-gray-600">No appointments yet.</p>
        ) : (
          <div className="w-full h-full space-y-6">
            {appointments.map((appt, index) => (
              <div
                key={index}
                className="w-full bg-white shadow-md rounded-xl overflow-hidden flex items-center gap-4 hover:shadow-lg transition"
              >
                <img
                  src={`http://localhost:5000/uploads/${appt.doctor.profilePhoto}`}
                  alt={appt.doctor.name}
                  className="w-[20%] h-full object-cover bg-[#5964f8]"
                />

                <div className="flex-1 py-4">
                  <h2 className="text-xl font-semibold text-[#222]">
                    Dr. {appt.doctor.name}
                  </h2>
                  <p className="text-gray-500 mb-2">
                    {appt.doctor.specialization}
                  </p>

                  <div className="text-sm text-gray-700 space-y-1">
                    <p>
                      <span className="font-medium">Date:</span>{" "}
                      {appt.selectedDate}
                    </p>
                    <p>
                      <span className="font-medium">Time:</span> {appt.timeSlot}
                    </p>
                    <p>
                      <span className="font-medium">Location:</span>{" "}
                      {appt.doctor.address}
                    </p>
                    <p>
                      <span className="font-medium">Fee:</span> ₹{appt.doctor.fees}
                    </p>
                  </div>
                </div>

                <div className="flex w-[30%] px-5 flex-col justify-evenly gap-5 items-center">
                  <div className="w-full text-center bg-green-500 font-bold text-white px-5 py-1 rounded-lg">
                    Pay Online
                  </div>
                  <div
                    onClick={() => handleCancel(index)}
                    className="w-full text-center bg-red-500 font-semibold text-white px-5 py-1 rounded-lg cursor-pointer"
                  >
                    Cancel Appointment
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyAppointments;
