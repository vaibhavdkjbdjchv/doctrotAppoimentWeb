import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const { index } = useParams();
  const navigate = useNavigate();

  const [appointment, setAppointment] = useState(null);
  const [loading, setLoading] = useState(false);

  // COD form state
  const [codDetails, setCodDetails] = useState({
    address: "",
    phone: "",
    email: "",
  });
  const [showCODForm, setShowCODForm] = useState(false);

  useEffect(() => {
    const storedAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];
    if (storedAppointments[index]) {
      setAppointment(storedAppointments[index]);
    }
  }, [index]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCodDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleCODSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate 2 sec loading for payment processing
    setTimeout(() => {
      const storedAppointments =
        JSON.parse(localStorage.getItem("appointments")) || [];

      storedAppointments[index] = {
        ...storedAppointments[index],
        paid: true,
        paymentMethod: "COD",
        codDetails: codDetails,
      };

      localStorage.setItem("appointments", JSON.stringify(storedAppointments));
      setLoading(false);
      alert("COD payment successful! Your appointment is confirmed.");
      navigate("/myappointments");
    }, 2000);
  };

  const handleOnlinePayment = () => {
    // Just simulate payment success for now (you can expand)
    setLoading(true);
    setTimeout(() => {
      const storedAppointments =
        JSON.parse(localStorage.getItem("appointments")) || [];

      storedAppointments[index] = {
        ...storedAppointments[index],
        paid: true,
        paymentMethod: "Online",
      };

      localStorage.setItem("appointments", JSON.stringify(storedAppointments));
      setLoading(false);
      alert("Online payment successful! Your appointment is confirmed.");
      navigate("/myappointments");
    }, 2000);
  };

  if (!appointment) return <p>Loading appointment data...</p>;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Payment for Appointment</h2>

      <div className="mb-6">
        <p><strong>Doctor:</strong> Dr. {appointment.doctor.name}</p>
        <p><strong>Date:</strong> {appointment.selectedDate}</p>
        <p><strong>Time:</strong> {appointment.timeSlot}</p>
        <p><strong>Fee:</strong> ₹{appointment.doctor.fees}</p>
      </div>

      {!showCODForm ? (
        <>
          <button
            onClick={handleOnlinePayment}
            disabled={loading}
            className="w-full mb-4 bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            {loading ? "Processing..." : "Pay Online"}
          </button>

          <button
            onClick={() => setShowCODForm(true)}
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Cash on Delivery (COD)
          </button>
        </>
      ) : (
        <form onSubmit={handleCODSubmit} className="space-y-4 mt-4">
          <div>
            <label className="block font-semibold mb-1">Address</label>
            <textarea
              name="address"
              value={codDetails.address}
              onChange={handleInputChange}
              required
              className="w-full border px-3 py-2 rounded"
              placeholder="Enter your address"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={codDetails.phone}
              onChange={handleInputChange}
              required
              className="w-full border px-3 py-2 rounded"
              placeholder="Enter your phone number"
              pattern="[0-9]{10}"
              title="Enter 10-digit phone number"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={codDetails.email}
              onChange={handleInputChange}
              required
              className="w-full border px-3 py-2 rounded"
              placeholder="Enter your email"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            {loading ? "Processing..." : "Confirm COD"}
          </button>
        </form>
      )}
    </div>
  );
};

export default PaymentPage;
