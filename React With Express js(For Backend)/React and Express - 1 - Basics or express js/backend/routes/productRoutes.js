const express = require("express");
const router = express.Router();
const protect = require("../middlewares/authMiddleware");

// Public route
router.get("/", (req, res) => {
  res.send("Public: List of products");
});

// Protected route
router.post("/", protect, (req, res) => {
  const { name, price } = req.body;
  res.send(`✅ Product added by ${req.user.username}: ${name} - ₹${price}`);
});

module.exports = router;
