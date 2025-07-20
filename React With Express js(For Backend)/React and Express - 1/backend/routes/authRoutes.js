// file path - routes/authRoutes
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

// Dummy login
router.post("/login", (req, res) => {
  const { username } = req.body;

  // Usually you'd check username/password from DB
  if (!username) {
    return res.status(400).json({ message: "Username required" });
    // throw new Error("Username required");
  }

  const token = jwt.sign({ username }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({ token });
});

module.exports = router;
