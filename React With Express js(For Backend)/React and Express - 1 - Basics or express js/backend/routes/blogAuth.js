// file path - routes/blogAuth
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");



router.post("/login",(req,res,next) => {
    
        if(!req.body.username){
            // return res.status(400).json({message:"Username required"})
        // throw new Error("Username required");// Not works with throw new Error 
          return next(new Error("Username required"));
        }
    const {username} = req.body ;

    const token = jwt.sign({username}, process.env.JWT_SECRET, {expiresIn:"100h"});
    res.json({token});
})

module.exports = router ;