// file path - middleware/errorHandler
function errorHandler(err,req,res,next){
    console.error(err.message);

    // const status = req.statusCode == 200 ? 500 : req.statusCode ;
    // res.status(status).send({message:err.message});
    res.status(err.status == 200 ? 500 : err.status || 500).json({message: err.message || "Server Error" });
}

module.exports = errorHandler ; 