import { useState } from "react";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllDoctors from "./pages/AllDoctors";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import AppRoutes from "./AdminLogin/AdminRoute";
import DoctorList from "./pages/AllDoctors";
import DoctorDetails from "./pages/DoctorDetails";

function App() {
  return (
    <div>
      <Router>
        <div className="">
          <div className="">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/AllDoctors" element={<DoctorList />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/DoctorDetails" element={<DoctorDetails />} />
            </Routes>
          </div>
        </div>
      </Router>
      <AppRoutes />
    </div>
  );
}

export default App;
