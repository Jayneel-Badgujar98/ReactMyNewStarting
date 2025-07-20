// const express = require('express');
// // import express from 'express'
// const app = express()
// const PORT = 3000

// app.get("/", (req,res) => {
//     res.send("Hello World")
// })

// app.listen(PORT, () => console.log("Server running on http://localhost:${PORT}"));


// // userRoutes.js
// const express = require('express');
// const router = express.Router();
// router.get('/profile', (req, res) => res.send('User Profile'));
// module.exports = router;

// // app.js
// const userRoutes = require('./userRoutes');
// app.use('/user', userRoutes); // Mounts all /user routes under /user path


// const http = require('http');
// const express = require('express');
// const app = express();

// const server = http.createServer(app);
// server.listen(3000);


// package json
// for using the import/export but not the type = commonjs which has the require and require is not available in type = module 
// {
//   "name": "backend",
//   "version": "1.0.0",
//   "description": "",
//   "main": "server.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "start": "node server.js"
//   },
//   "keywords": [],
//   "author": "",
//   "license": "ISC",
//   "type": "module",
//   "dependencies": {
//     "express": "^5.1.0"
//   }
// }


// const express = require('express');
// const app = express();
// const userRoutes = require('./routes/userRoutes');

// app.use(express.json());
// app.use('/api/users', userRoutes);

// app.listen(5000, () => {
//     console.log("Server running on port 5000");
// });


// const express = require('express');
// const app = express();

// const userProducts = require("./routes/userRoutes") ;
// app.use(express.json());
// app.use("/api/products", userProducts)

// app.listen(5000, () => {
//     console.log("Server running on port 5000");
// })


// const express = require("express");
// require("dotenv").config();

// const app = express();
// app.use(express.json());

// const authRoutes = require("./routes/authRoutes");
// const productRoutes = require("./routes/productRoutes");

// app.use("/api/auth", authRoutes);
// app.use("/api/products", productRoutes);

// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });


// file path : routes/authRoutes.js
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("Connected to MongoDB");
}).catch((error) => {
  console.log("Error connecting to MongoDB :-",error.message);
})
app.use(express.json())

const blogAuth = require("./routes/blogAuth");
const blogs = require("./routes/blogs");
const createBlog = require("./routes/createBlog")
const errorHandler = require("./middlewares/errorHandler")

app.use("/api/auth", blogAuth);
app.use("/api/blogs", blogs);
app.get("/", (req, res) => {
  res.send("Hello from server");
}
)
app.use("/", createBlog);
app.use(errorHandler);
app.listen(5000, () => {
  console.log("Server running on port 5000");
})
