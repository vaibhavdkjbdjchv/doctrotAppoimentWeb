import express from "express";
import multer from "multer";
import Doctor from "../models/Doctor.js";

const router = express.Router();

// ✅ Multer Config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// ✅ Add Doctor API with profile photo
router.post("/add", upload.single("profilePhoto"), async (req, res) => {
  try {
    const {
      name,
      specialization,
      education,
      experience,
      fees,
      address,
      email,
      password,
      about,
    } = req.body;

    const profilePhoto = req.file ? req.file.filename : "";

    // 🔍 Email Check
    const existingDoctor = await Doctor.findOne({ email });
    if (existingDoctor) {
      return res.status(400).json({ message: "❌ Email already exists!" });
    }

    // 🎯 Create new doc
    const newDoctor = new Doctor({
      name,
      specialization,
      education,
      experience,
      fees,
      address,
      email,
      password,
      profilePhoto,
      about,
    });

    await newDoctor.save();
    res.status(201).json({
      message: "✅ Doctor added successfully!",
      doctor: newDoctor,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "❌ Error adding doctor", error });
  }
});

// ✅ Fetch All Doctors
router.get("/all", async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json(doctors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching doctors" });
  }
});

// module.exports = router;
export default  router