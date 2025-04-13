const mongoose = require("mongoose");

const userDb = mongoose.createConnection(process.env.MONGO_URI2, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

userDb.on("connected", () => console.log("👤 User DB connected"));
userDb.on("error", (err) => console.log("❌ User DB error:", err));

module.exports = userDb;
