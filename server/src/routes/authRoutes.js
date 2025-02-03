const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController");
const protect = require("../middleware/authMiddleware"); // Import middleware

// Public Routes
router.post("/signup", registerUser);
router.post("/login", loginUser);

// Protected Route (Requires Authentication)
router.get("/profile", protect, (req, res) => {
  res.json({ message: "You accessed a protected route!", user: req.user });
});

module.exports = router;
