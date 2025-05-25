import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  const handleCancel = (index) => {
    const storedAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];

    // Remove appointment at index (adjust for reversed display)
    // Since you show reversed list, index here corresponds to reversed
    // So, get the real index by reversing again
    const realIndex = storedAppointments.length - 1 - index;

    const updatedAppointments = storedAppointments.filter(
      (_, i) => i !== realIndex
    );

    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
    setAppointments(updatedAppointments.slice().reverse());
  };

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(stored.slice().reverse()); // latest on top, don't mutate original
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
                className="w-full h-full md:pb-0 pb-5 bg-white shadow-md rounded-xl overflow-hidden md:flex md:flex-row flex flex-col md:justify-between justify-center items-center  gap-4 hover:shadow-lg transition"
              >
                <div className="md:w-[20%] md:h-full h-60 w-full flex justify-center bg-[#5964f8]">
                  <img
                    src={`https://backend-1-i5yj.onrender.com/uploads/${appt.doctor.profilePhoto}`}
                    alt={appt.doctor.name}
                    className="h-full"
                  />
                </div>

                <div className="flex flex-col md:items-start justify-center items-center py-4 md:gap-0 gap-2">
                  <h2 className="md:text-xl text-4xl font-semibold text-[#222]">
                    Dr. {appt.doctor.name}
                  </h2>
                  <p className="text-gray-500 md:text-lg text-3xl mb-2">
                    {appt.doctor.specialization}
                  </p>

                  <div className="md:text-sm text-lg text-gray-700 space-y-1">
                    <p>
                      <span className="font-medium">Date:</span> {appt.selectedDate}
                    </p>
                    <p>
                      <span className="font-medium">Time:</span> {appt.timeSlot}
                    </p>
                    <p>
                      <span className="font-medium">Location:</span> {appt.doctor.address}
                    </p>
                    <p>
                      <span className="font-medium">Fee:</span> ₹{appt.doctor.fees}
                    </p>
                  </div>
                </div>

                <div className="flex md:w-[30%] px-5 flex-col justify-evenly gap-5 items-center">
                  {!appt.paid ? (
                    <>
                      <div
                        onClick={() => navigate(`/payment/${appointments.length - 1 - index}`)}
                        className="w-full text-center bg-green-500 font-bold text-white px-5 py-1 rounded-lg cursor-pointer"
                      >
                        Payment
                      </div>
                      <div
                        onClick={() => handleCancel(index)}
                        className="w-full text-center bg-red-500 font-semibold text-white px-5 py-1 rounded-lg cursor-pointer"
                      >
                        Cancel Appointment
                      </div>
                    </>
                  ) : (
                    <div className="w-full text-center bg-gray-400 font-semibold text-white px-5 py-1 rounded-lg cursor-not-allowed cursor-default">
                      Payment Done
                    </div>
                  )}
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
