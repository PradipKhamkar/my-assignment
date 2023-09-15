const sentCookies = (token,res,message)=>{
   
const options ={
    expires:new Date(Date.now() + process.env.COOKIES_EXPRIRY * 24 * 60 * 60 * 1000),
    httpOnly:true
}
res.cookie('token',token,options);
res.status(200).json({
    success:true,
    message
})
}
module.exports = sentCookies