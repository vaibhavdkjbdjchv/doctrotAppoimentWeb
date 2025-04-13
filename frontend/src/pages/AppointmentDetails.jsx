import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";

const AppointmentDetails = () => {
  const location = useLocation();
  const { doctor, timeSlot, selectedDate } = location.state || {};

  if (!doctor) return <p>No data available.</p>;

  return (
    <div className="w-screen h-screen">
      <Navbar />
      <div className="max-w-xl mx-auto mt-10 p-4 bg-white shadow-md rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Appointment Confirmation 📅</h2>
        <div className="flex gap-4 items-center mb-4">
          <img
            src={`http://localhost:5000/uploads/${doctor.profilePhoto}`}
            alt={doctor.name}
            className="w-24 h-24 object-cover rounded-full"
          />
          <div>
            <h3 className="text-xl font-semibold">Dr. {doctor.name}</h3>
            <p className="text-gray-500">{doctor.specialization}</p>
          </div>
        </div>
        <p>
          <strong>Date:</strong> {selectedDate}
        </p>
        <p>
          <strong>Time:</strong> {timeSlot}
        </p>
        <p>
          <strong>Location:</strong> {doctor.address}
        </p>
      </div>
    </div>
  );
};

export default AppointmentDetails;
