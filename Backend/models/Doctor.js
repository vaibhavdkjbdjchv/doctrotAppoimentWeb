const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    specialization: { type: String, required: true },
    experience: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true }, // ✅ Unique email
    location: { type: String, required: true },
    profilePhoto: { type: String }, // ✅ Store image filename
  });

const Doctor = mongoose.model("Doctor", doctorSchema);
module.exports = Doctor;
