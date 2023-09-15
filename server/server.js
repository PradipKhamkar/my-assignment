const express = require("express");
require("dotenv").config({path:"./server/.env"});
const cookieParser = require("cookie-parser");
const path  = require("path")
const userRoute = require('./Routes/userRoute');
const connectDB = require("./config/connection");

const app = express();

app.use(express.json());
app.use(cookieParser())

// db connection
connectDB()

app.listen(process.env.PORT,'localhost',()=>{
    console.log(`server is running on port ${process.env.PORT}`);
})


app.use('/api/v1/user',userRoute)

//Acessing Front End Stactic Files
app.use(express.static(path.join(__dirname,"../client/build")))

//Acessing Front End All URL
app.get("/*",(req,res)=>{
res.sendFile(path.resolve(__dirname,"../client/build/index.html"))
})