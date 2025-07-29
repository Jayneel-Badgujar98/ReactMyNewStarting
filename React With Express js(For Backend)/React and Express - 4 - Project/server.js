const express = require("express")
const userRoutes = require("./routes/user.routes")
const app = express()

app.set("view engine", "ejs")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.render("index")
})

app.use("/user",userRoutes)
app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running on port 3000")
})

//  "test": "echo \"Error: no test specified\" && exit 1",
//     "dev": "node --watch server.js",
//     "start": "node server.js",
//     "nodemon": "nodemon server.js"
//   },

// {
//   "name": "express",
//   "version": "1.0.0",
//   "description": "",
//   "license": "ISC",
//   "author": "",
//   "type": "commonjs",
//   "main": "index.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   }
// }
