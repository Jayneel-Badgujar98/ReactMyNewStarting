const express = require("express");
const protect = require( "../middlewares/authMiddleware.js")
const Blog = require("../models/blogModel.js");
const router = express.Router();

router.post("/createBlog", protect, async (req, res, next) => {
    const { title, content } = req.body;
    try {

        if (!title) {
            const error = new Error("Title is required");
            res.status(400)
            return next(error)
        }
        if (!content) {
            const error = new Error("Content is required");
            res.status(400)
           throw new Error("Content is required");
        }

        const blog = await Blog.create({
            title, content
        })
        res.status(201).json(blog)
    } catch (error) {
        next(error);
    }
})

router.get("/get",async(req,res,next) => {
    try {
        const blogs = await Blog.findOne();
        res.status(200).json(blogs);
    } catch (error) {
        console.log(error.message);
        next(error);
    }
})

router.get("/get/:id", async(req,res,next) =>
{
    try {
        const id = req.params.id ;
        const blog = await Blog.findById(id);
        res.status(200).json(blog);
    } catch (err) {
        next(err);
    }
})

router.get("/search/:title", async (req, res, next) => {
  try {
    const title = req.params.title;
    // const blog = await Blog.findOne({ title: title }); // can also write { title }
    const blog = await Blog.find({ title: title });// this also works
    res.status(200).json(blog);
  } catch (err) {
    next(err);
  }
});


router.get("/search/content/:content", async (req, res, next) => {
  try {
    const content = req.params.content;
    // const blog = await Blog.findOne({ title: title }); // can also write { title }
    const blog = await Blog.find({ content : {$regex : content , $options : "i"} });// this also works
    res.status(200).json(blog);
  } catch (err) {
    next(err);
  }
});

// router.patch("/update/:id", async (req, res, next) => {
//   try {
//     const id = req.params.id;
//     const updatedBlog = await Blog.findByIdAndUpdate(id, {title : "Updated 2 Title"}, { new: true });
//     res.status(200).json(updatedBlog);
//   } catch (err) {
//     next(err);
//   }
// });


router.put("/update/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedBlog = await Blog.findByIdAndUpdate(id, {title : "Updated 2 Title"}, { new: true });
    res.status(200).json(updatedBlog);
  } catch (err) {
    next(err);
  }
});

router.delete("/delete/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    await Blog.findByIdAndDelete(id);
    const findBlogs = await Blog.find();
    res.status(200).json({ message: "Blog deleted successfully" , findBlogs });
  } catch (err) {
    next(err);
  }
});



module.exports = router ;