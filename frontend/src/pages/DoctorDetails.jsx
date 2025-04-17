import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import vector from "../../src/Assets/Images/Vector2.png";
import { useUser } from "../../src/UserContext";
import { useState } from "react";

const DoctorDetails = () => {
  const { state: doctor } = useLocation();
  const { user } = useUser();
  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");

  if (!doctor) return <p>Doctor not found 😞</p>;

  const handleBook = () => {
    if (!selectedDate || !timeSlot) {
      alert("Please select both a date 📅 and time 🕐 before booking.");
      return;
    }

    if (user) {
      const newAppointment = {
        doctor,
        selectedDate,
        timeSlot,
        bookedAt: new Date().toISOString(),
      };

      const existingAppointments =
        JSON.parse(localStorage.getItem("appointments")) || [];

      localStorage.setItem(
        "appointments",
        JSON.stringify([...existingAppointments, newAppointment])
      );

      navigate("/appointment-details");
    } else {
      alert("Please login before booking 🙏");
      navigate("/login");
    }
  };

  return (
    <div className="w-screen min-h-screen fontUse">
      <Navbar />

      <div className="w-full flex flex-col items-center py-10">
        <div className="w-[80%] flex gap-10">
          {/* Left: Doctor Image */}
          <div className="w-[23%] flex justify-center bg-[#5F6FFF] rounded-2xl items-end">
            <img
              src={`http://localhost:5000/uploads/${doctor.profilePhoto}`}
              alt={doctor.name}
              className="h-[95%]"
            />
          </div>

          {/* Right: Doctor Info */}
          <div className="w-[70%] border border-gray-300 rounded-2xl p-8">
            <h1 className="text-3xl font-bold flex items-center gap-2 mb-4">
              Dr. {doctor.name} <img src={vector} alt="verified" />
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              {doctor.specialization} - {doctor.education}
            </p>
            <p className="text-sm mb-4">
              Experience: <strong>{doctor.experience} Years</strong>
            </p>
            <p className="text-lg text-gray-700 mb-6">
              {doctor.about || "No about info provided."}
            </p>
            <p className="text-xl font-semibold">
              Appointment Fee: ₹{doctor.fees}
            </p>
          </div>
        </div>

        {/* Booking Area */}
        <div className="w-[80%] mt-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">
            Book Your Slot
          </h2>

          {/* Date Picker */}
          <div className="mb-6">
            <label className="block mb-2 font-medium text-gray-600">
              Select Date
            </label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="border border-gray-300 px-4 py-2 rounded-lg w-full"
            />
          </div>

          {/* Time Slots */}
          <div className="mb-6">
            <label className="block mb-2 font-medium text-gray-600">
              Select Time Slot
            </label>
            <div className="flex gap-4 flex-wrap">
              {["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"].map((slot) => (
                <button
                  key={slot}
                  onClick={() => setTimeSlot(slot)}
                  className={`px-4 py-2 border rounded-lg ${
                    timeSlot === slot
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          {/* Book Button */}
          <button
            onClick={handleBook}
            className="bg-[#5F6FFF] text-white px-8 py-3 rounded-lg hover:bg-transparent hover:text-[#5F6FFF] hover:border border-[#5F6FFF] transition"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
