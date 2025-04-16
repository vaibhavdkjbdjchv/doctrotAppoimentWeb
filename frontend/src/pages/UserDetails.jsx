import React from "react";
import { useUser } from "../../src/UserContext"; // adjust the path as needed
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-xl font-semibold">User not logged in 😢</p>
        <button
          onClick={() => navigate("/login")}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-12 p-6 rounded-lg shadow-md border bg-white">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
        👤 User Details
      </h2>
      <div className="space-y-4 text-lg">
        <p>
          <strong>First Name:</strong> {user.firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {user.lastName}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>User ID:</strong> {user._id}
        </p>
        {/* you can add more fields as needed */}
      </div>
    </div>
  );
};

export default UserDetails;
