import { Schema, model } from "mongoose";

const doctorSchema = new Schema({
  name: { type: String, required: true },
  specialization: { type: String, required: true },
  education: { type: String, required: true },
  experience: { type: String, required: true },
  fees: { type: String, required: true },
  address: { type: String, required: true }, // 🔥 single address field
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePhoto: { type: String },
  about: { type: String },
}, { timestamps: true });

export default model("Doctor", doctorSchema);
