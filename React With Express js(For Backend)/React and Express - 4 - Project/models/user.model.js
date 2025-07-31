const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true ,
        unique : true ,
        trim : true ,
        lowercase : true ,
        minLength: [3 , "Username must be at least 3 characters long"]
    },
    email : {
        type : String,
        required : true ,
        unique : true ,
        trim : true ,
        lowercase : true,
        minLength: [3, "Email must be at least 3 characters long"]
    },
    password : {
        type : String ,
        required : true ,
        trim : true,
        minLength: [3 , "Password must be at least 3 characters long"]
    },
     images: [
    {
      url: String,
      public_id: String,
    },
  ],
})

const userModel = mongoose.model("user" , userSchema,"Test Users")

module.exports = userModel 