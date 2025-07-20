const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  content: {
    type: String,
    required: [true, "Content is required"],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // we'll assume you have a User model later
    required: false,
  },
  // createdAt: { type: Date, default: Date.now },// If do not want to use the timestamps 
  // updatedAt: { type: Date, default: Date.now } // If do not want to use the timestamps 
}, { timestamps: true });

// const Blog = mongoose.model("Blog", blogSchema);// the third argument is the actual collection name and if not third arguent provided then the collection name will be the plural of the model name
// and the model name will be the lowercase of the collection name
const Blog = mongoose.model("Blogs", blogSchema, "blogsCollection");
module.exports = Blog;
