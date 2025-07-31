// file path - ./routes/user.routes
const express = require('express');
const userModel = require('../models/user.model');
const app = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")


app.get('/register', (req, res) => {
    res.render('register')
})

app.post("/register", body("email").isEmail(),
    body("password").isLength({ min: 5 }),
    body("username").isLength({ min: 3 }), async (req, res) => {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            // console.log(errors);
            // res.send(errors)
            // res.send(errors.errors[0].msg)
            return res.status(400).json({ errors: errors.errors[0].msg, message: "Invalid data" })
            // res.status(400).json({errors:errors.array()})
            // res.status(400).json({errors:errors.array({onlyFirstError:true})})

        }

        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await userModel.create({
            username,
            email,
            password: hashedPassword
        })

        res.json({ message: "User created successfully", user: newUser })
    })

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', body("username").trim().isLength({ min: 3 }), body("password").trim().isLength({ min: 5 }),
    async (req, res) => {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            // console.log(errors);
            // res.send(errors)
            // res.send(errors.errors[0].msg)
            return res.status(400).json({ errors: errors.errors[0].msg, message: "Invalid data", errors: errors.array() })
            // res.status(400).json({errors:errors.array()})
            // res.status(400).json({errors:errors.array({onlyFirstError:true})})
        }

        const { username, password } = req.body;

        const user = await userModel.findOne({ username })
        if (!user) {
            return res.status(400).json({ message: "Username or password is incorrect" })
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password)
        if (!isPasswordMatch) {
            return res.status(400).json({ message: "Username or password is incorrect - Invalid password" })
        }
        const token = jwt.sign({ userId: user._id, email: user.email, password: user.password }, process.env.JWT_SECRET_KEY, {
            expiresIn: "3d"
        });
        // res.json({ message: "User logged in successfully",token, user })
        // here in res.cookie any name can be given to the actual token here i have written token for my convention
        res.cookie("token", token)

        // res.send({ message: "User logged in successfully",token, user })

        res.render("home", { imageUrl: null, allUsers: await userModel.find(), user: await userModel.findOne({ username }) })
    })
module.exports = app