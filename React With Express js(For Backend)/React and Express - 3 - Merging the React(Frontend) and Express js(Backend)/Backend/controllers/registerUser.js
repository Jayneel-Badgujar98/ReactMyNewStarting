const User = require("../models/userSchema");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const { name, email, password , role} = req.body;

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Create new user
  const user = await User.create({ name, email, password , role });

  // Generate JWT
  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.SECRET_KEY,
    { expiresIn: "3d" }
  );

  res.status(201).json({
    success: true,
    token,
    user: {
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });
};

module.exports = registerUser;
