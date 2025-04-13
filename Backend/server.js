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




require("dotenv").config(); // Load .env file
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const doctorRoutes = require("./routes/doctorRoutes");
const User = require("./models/User"); // ✅ YOU NEED THIS!

const app = express();
app.use(express.json());
app.use(cors());

app.use("/uploads", express.static("uploads"));

// ✅ Choose your DB connection
const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  console.error("❌ MONGO_URI is missing in .env file!");
  process.exit(1);
}

// 🔌 Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully!"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// 🩺 Doctor routes
app.use("/api/doctors", doctorRoutes);

// 👤 Signup route
app.post('/api/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({ message: 'User created successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
});

// 🏁 Start server
app.listen(5000, () => console.log("🚀 Server running on port 5000"));
