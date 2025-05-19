// require("dotenv").config(); // Load .env file
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const doctorRoutes = require("./routes/doctorRoutes");
// // const router = require("./routes/auth");

// const app = express();
// app.use(express.json());
// app.use(cors());

// app.use("/uploads", express.static("uploads"));

// const MONGO_URI = process.env.MONGO_URI;
// const MONGO_URI2 = process.env.MONGO_URI2;

// if (!MONGO_URI) {
//   console.error("❌ MONGO_URI is missing in .env file!");
//   process.exit(1);
// }

// // Connect to MongoDB
// mongoose
//   .connect(MONGO_URI && MONGO_URI2)
//   .then(() => console.log("✅ MongoDB Connected Successfully!"))
//   .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// app.use("/api/doctors", doctorRoutes);


// app.post('/api/signup', async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//       const userExists = await User.findOne({ email });
//       if (userExists) return res.status(400).json({ message: 'User already exists' });

//       const user = new User({ name, email, password });
//       await user.save();
//       res.status(201).json({ message: 'User created successfully!' });
//   } catch (err) {
//       res.status(500).json({ message: 'Server error', error: err });
//   }
// });


// // app.use("/api/signup", router);




// app.listen(5000, () => console.log("🚀 Server running on port 5000"));




// require("dotenv").config(); // Load .env file
import dotenv from "dotenv";
dotenv.config();

import express, { Router, json } from "express";
import { connect } from "mongoose";
const router = Router();
import cors from "cors";
import doctorRoutes from "./routes/doctorRoutes.js";
// const doctorRoutes = require("./routes/doctorRoutes.js");

// import User, { findOne } from "./models/User.js"; // ✅ YOU NEED THIS!
import User from "./models/User.js";


const app = express();
app.use(json());
app.use(cors());

// app.use("/uploads");
app.use("/uploads", express.static("uploads"));


// ✅ Choose your DB connection
const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  console.error("❌ MONGO_URI is missing in .env file!");
  process.exit(1);
}

// 🔌 Connect to MongoDB
connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully!"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// 🩺 Doctor routes
app.use("/api/doctors", doctorRoutes);

// 👤 Signup route
app.post('/api/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await findOne({ email });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({ message: 'User created successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
});
// API to fetch data
app.post('/api/login', async (req, res) => {
  const { name, password } = req.body;

  try {
    const user = await findOne({ name });
    const userPassword = await findOne({ password });

    if (!user) {
      return res.status(401).json({ message: 'User not found!' });
    }

    if (userPassword.password !== password) {
      return res.status(401).json({ message: 'Invalid password!' });
    }

    // If success
    res.status(200).json({ message: 'Login successful', user });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// routes/appointmentRoutes.j
// router.get('/api/appointments', async (req, res) => {
//   try {
//     const appointments = await Appointment.find()
//       .populate("doctor")
//       .populate("user");

//     res.status(200).json(appointments);
//   } catch (err) {
//     console.error("Error fetching appointments:", err.message);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// 🏁 Start server
app.listen(5000, () => console.log("🚀 Server running on port 5000"));
