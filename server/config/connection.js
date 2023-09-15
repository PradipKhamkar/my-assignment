const { default: mongoose } = require("mongoose")

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log('application connected to database..!!');
    } catch (error) {
        console.log('error failed to connect to ',error.message);
    }
}

module.exports = connectDB