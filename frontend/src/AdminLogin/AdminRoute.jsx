// src/AppRoutes.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPanel from "./Adminpanel";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
