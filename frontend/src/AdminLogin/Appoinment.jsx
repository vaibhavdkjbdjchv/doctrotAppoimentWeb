import React, { useEffect, useState } from "react";
import axios from "axios";
import AppointmentDoctors from "../../components/AppointedDoctors";

const AdminAppointments = () => {
  return (
    <div className="w-screen ">
      <AppointmentDoctors />
    </div>
  );
};

export default AdminAppointments;
