require("dotenv").config(); // Load .env file
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const doctorRoutes = require("./routes/doctorRoutes");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/uploads", express.static("uploads"));

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("❌ MONGO_URI is missing in .env file!");
  process.exit(1);
}

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully!"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

  app.use("/api/doctors", doctorRoutes);


app.listen(5000, () => console.log("🚀 Server running on port 5000"));
