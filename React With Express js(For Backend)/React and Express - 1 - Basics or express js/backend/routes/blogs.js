// file path - routes/blogs
const protect = require("../middlewares/authMiddleware") ;
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Public: List of blogs");
});

router.post("/",protect,(req,res) => {
    const {title,content} = req.body ;
    res.send(`✅ Blog added by ${req.user.username}: ${title} - ₹${content}`)
})

router.get("/throwError",(req,res,next) => {
  throw new Error("Database found the Error");
})

router.post("/add",(req,res,next) => {
  const {title,content} = req.body ;
  if(!title){
    const error = new Error("Title is required");
    res.status(400)
    return next(error)
  }
  if(!content){
    const error = new Error("Content is required");
    res.status(400)
    return next(error)
  }

    res.status(201).json({
    message: "Blog created successfully",
    blog: { title, content },
  });
})
module.exports = router ;