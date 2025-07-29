const express = require('express');

const app = express.Router();
const { body , validationResult } = require('express-validator');


app.get('/register', (req, res) => {
    res.render('register')
})

app.post("/register", body("email").isEmail(),
    body("password").isLength({min:5}),
    body("username").isLength({min:3}),(req,res) => {

        const errors = validationResult(req);

        if(!errors.isEmpty()){
            // console.log(errors);
            // res.send(errors)
            // res.send(errors.errors[0].msg)
            res.status(400).json({errors:errors.errors[0].msg,message : "Invalid data"})
            // res.status(400).json({errors:errors.array()})
            // res.status(400).json({errors:errors.array({onlyFirstError:true})})

        }
        res.send("registered successfully")
    // console.log(req.body) 
    // const {email , username , password} = req.body ;
    // res.json({email,username,password})
    // res.send("Register")
})
module.exports = app