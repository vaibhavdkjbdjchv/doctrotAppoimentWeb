const express = require("express");
const multer = require("multer");
const Doctor = require("../models/Doctor");

const router = express.Router();

// ✅ Configure Multer Storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Save files to "uploads" folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Unique filename
  },
});

const upload = multer({ storage: storage });

// ✅ API: Add Doctor with Image Upload & Email Validation
router.post("/add", upload.single("profilePhoto"), async (req, res) => {
  try {
    const { name, specialization, experience, phone, email, location } = req.body;
    const profilePhoto = req.file ? req.file.filename : "";

    // 🔍 Check if email already exists
    const existingDoctor = await Doctor.findOne({ email });

    if (existingDoctor) {
      return res.status(400).json({ message: "❌ Email already exists!" });
    }

    // ✅ Create new doctor entry
    const newDoctor = new Doctor({
      name,
      specialization,
      experience,
      phone,
      email,
      location,
      profilePhoto,
    });

    await newDoctor.save();
    res.status(201).json({ message: "✅ Doctor added successfully!", doctor: newDoctor });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "❌ Error adding doctor", error });
  }
});



router.get("/all", async (req, res) => {
    try {
      const doctors = await Doctor.find();
      res.status(200).json(doctors);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error fetching doctors" });
    }
  });

module.exports = router;
