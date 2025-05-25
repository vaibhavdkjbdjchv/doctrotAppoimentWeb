import React, { useState } from "react";

const Payment = () => {
  const [loading, setLoading] = useState(false);
  const [showCODForm, setShowCODForm] = useState(false);
  const [codDetails, setCodDetails] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });

  const handleFakePayment = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("✅ Payment Successful!");
    }, 2000);
  };

  const handleCODSubmit = (e) => {
    e.preventDefault();
    console.log("COD Order Placed:", codDetails);
    alert("✅ COD Order Placed!");
    setCodDetails({
      name: "",
      address: "",
      phone: "",
      email: "",
    });
  };

  const handleCODChange = (e) => {
    const { name, value } = e.target;
    setCodDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">💳 Payment Page</h1>

      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md space-y-6">
        <button
          onClick={handleFakePayment}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded w-full transition duration-200"
        >
          {loading ? "Processing Payment..." : "Pay Now"}
        </button>

        <hr className="border-gray-300" />

        <button
          onClick={() => setShowCODForm(true)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded w-full transition duration-200"
        >
          Cash on Delivery (COD)
        </button>

        {showCODForm && (
          <form onSubmit={handleCODSubmit} className="space-y-4 mt-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={codDetails.name}
              onChange={handleCODChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
            <textarea
              name="address"
              placeholder="Address"
              value={codDetails.address}
              onChange={handleCODChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={codDetails.phone}
              onChange={handleCODChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={codDetails.email}
              onChange={handleCODChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full transition duration-200"
            >
              Submit COD Order
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Payment;
