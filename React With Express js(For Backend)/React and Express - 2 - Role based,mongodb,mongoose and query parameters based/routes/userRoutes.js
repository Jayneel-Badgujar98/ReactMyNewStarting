// // file path - routes/userRoutes
// const express = require('express');
// const router = express.Router();
// const  protect  = require('../middleware/authMiddleware');
// const { isAdmin, isUser } = require('../middleware/roleMiddleware');
// const generateToken = require('../controllers/generateToken');
// const getAllUsers = require('../controllers/getAllUsers');

// // 👇 Admin route
// router.get('/admin/dashboard', protect, isAdmin, (req, res) => {
//   res.json({ message: 'Welcome Admin!' });
// });

// // 👇 User-only route
// router.get('/user/dashboard', protect, isUser, (req, res) => {
//   res.json({ message: 'Welcome User!' });
// });

// router.post("/login",(req,res)=>{
//     const {username,role} = req.body;
//     const token = generateToken({username,role});
//     res.json({token});
// })
// router.get('/users',protect, getAllUsers);
// module.exports = router ;

const express = require("express");
const router = express.Router();
const registerUser = require("../controllers/registerUser");
const loginUser = require("../controllers/loginUser");
const getAllUsers = require("../controllers/getAllUsers"); // already created
const { isAuthenticated, isAdmin } = require("../middleware/auth");

// 📌 Public Routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// 🔐 Protected Routes
router.get("/users", isAuthenticated, isAdmin, getAllUsers);

module.exports = router;

