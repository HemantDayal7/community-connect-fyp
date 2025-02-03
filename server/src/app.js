require("dotenv").config(); // Load environment variables

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// ✅ Connect to MongoDB
connectDB();

// ✅ Middleware to log requests for debugging
app.use((req, res, next) => {
  console.log(`➡️ Received ${req.method} request at ${req.url}`);
  next();
});

// ✅ Middleware
app.use(express.json()); // Parse JSON request body
app.use(cors()); // Enable CORS

// ✅ Health Check Route
app.get("/", (req, res) => {
  console.log("✅ Health check endpoint hit!");
  res.status(200).send("🚀 Community Connect API is running...");
});

// ✅ Import Routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

// ✅ Start Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
