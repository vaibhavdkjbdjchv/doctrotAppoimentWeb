const mongoose = require("mongoose");

const doctorDb = mongoose.createConnection(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

doctorDb.on("connected", () => console.log("🩺 Doctor DB connected"));
doctorDb.on("error", (err) => console.log("❌ Doctor DB error:", err));

module.exports = doctorDb;
