import express from "express";
import Appointment from "../models/Appointment.js";

const router = express.Router();

// Fetch all appointments for admin
router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .populate("doctor")
      .populate("user");

    res.status(200).json(appointments);
  } catch (err) {
    console.error("Error fetching appointments:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
