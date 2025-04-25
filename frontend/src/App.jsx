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
import AdminPanel from "./AdminLogin/Adminpanel";
import AppointmentDetails from "./pages/AppointmentDetails";
import RegisterForm from "../components/SaveUserToDB";
import SignUp from "./pages/SignLogin";
import SignUpForm from "./pages/SignLogin";
import Login from "./pages/Login";
import { UserProvider } from "./UserContext";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <div >
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AllDoctors" element={<DoctorList />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/userData" element={<SignUpForm />} />
            <Route path="/DoctorDetails" element={<DoctorDetails />} />
            <Route
              path="/appointment-details"
              element={<AppointmentDetails />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/Userdetails" element={<UserDetails />} />
          </Routes>
        </Router>
        <AppRoutes />
      </UserProvider>
    </div>
  );
}

export default App;
