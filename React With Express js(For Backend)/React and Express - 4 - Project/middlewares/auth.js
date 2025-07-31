const jwt = require("jsonwebtoken")

function auth(req,res,next){
    const token = req.cookies.token ;

    if(!token){
        // return res.status(401).json({message : "Unauthorized"}) // 401 is unauthorized 
        return res.redirect("/user/login")
    }
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY);
        req.thisIsUser = decoded;
        return next();
    } catch (error) {
        res.status(401).json({message : "Unauthorized - The token is tampered or expired "})
    }
}

module.exports = auth 