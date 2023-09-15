const jwt = require("jsonwebtoken")

const generateToken = async(userId)=>{
    return jwt.sign({userId},process.env.JWT_SECRET_KEY,{
        expiresIn:'5d'
    })
}

module.exports = generateToken