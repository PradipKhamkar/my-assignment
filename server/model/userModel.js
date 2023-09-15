const  mongoose  = require("mongoose");

const userSchema  =  mongoose.Schema({
    email:{
        type:String,
        required:[true,'please enter email'],
        unqiue:[true,"Email ID Already Exit"]
    },
    password:{
        type:String,
        required:[true,'please enter password']
    }
})


const userModel =  mongoose.model('adminUser',userSchema)

module.exports =  userModel