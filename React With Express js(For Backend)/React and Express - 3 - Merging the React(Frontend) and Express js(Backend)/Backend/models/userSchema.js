// // file path - models/userSchema
// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String,
//     role: {
//         type: String,
//         default: "user",
//         enum: ["user", "admin"]
//     }
// }, {timestamps: true})
// const userShema = mongoose.model("user", userSchema, "UserModel");
// module.exports = userShema ;

// // models/User.js
// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema(
//   {
//     name: String,
//     email: String,
//     role: {
//       type: String,
//       enum: ['user', 'admin'],
//       default: 'user',
//     },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model('User', userSchema);


const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: 6,
    select: false, // will not return password by default
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
}, {
  timestamps: true,
});

// 🔒 Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// 🔓 Add a method to compare password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);

