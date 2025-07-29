// file path - controllers/generateToken
const jwt = require('jsonwebtoken');

function generateToken(user){
   return jwt.sign({
        username : user.username,
        role : user.role
    }, process.env.SECRET_KEY, {expiresIn: '3d'});
   
}
module.exports = generateToken