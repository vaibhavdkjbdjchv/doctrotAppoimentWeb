import { useState } from "react";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllDoctors from "./pages/AllDoctors";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import "@fontsource/montserrat";
import Dashboard from "./AdminLogin/Dashboard";

function App() {
  return (
    <div>
      <Router>
        <div className=""> 
          <div className="">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/AllDoctors" element={<AllDoctors />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/Admin" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
