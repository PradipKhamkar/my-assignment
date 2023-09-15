const sendError = require("../utils/sendError")
const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel");

const isAuthUser = async(req,res,next)=>{
try { 
    if(req?.cookies?.token){
        console.log(jwt.verify(req.cookies.token,process.env.JWT_SECRET_KEY));
     const {userId} = jwt.verify(req.cookies.token,process.env.JWT_SECRET_KEY);
     if(userId){
        req.user = await userModel.findById(userId).select("-password");
        next();
     }
    }else{ 
        sendError(res,'token not set yet')
    }
} catch (error) {
    console.log(error)
    sendError(res,"somethings wrong")
}
}

module.exports = isAuthUser