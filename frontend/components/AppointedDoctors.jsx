import React, { useEffect, useState } from "react";

const AppointmentDoctors = () => {
  const [appointments, setAppointments] = useState([]);

  const handleCancel = (index) => {
    const storedAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];

    const updatedAppointments = storedAppointments.filter(
      (_, i) => i !== index
    );

    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
    setAppointments(updatedAppointments); // update UI too
  };

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(stored.reverse()); // latest on top
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
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
                  {appt.doctor.name}
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
                    <span className="font-medium">Fee:</span> ₹
                    {appt.doctor.fees}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AppointmentDoctors;
