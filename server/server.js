const express = require("express");
require("dotenv").config({ path: "./server/.env" });
const cookieParser = require("cookie-parser");
const expressFileUpload = require("express-fileupload");
const cloudinary = require("cloudinary");
const path = require("path");

const app = express();

const userRoute = require("./Routes/userRoute");
const productRoute = require("./Routes/productRoute");
const categoryRoute = require("./Routes/categoryRoute");
const connectDB = require("./config/connection");

// db connection
connectDB();

//middleware
app.use(
  express.json({
    limit: "10mb",
    extended: true,
  })
);
app.use(cookieParser());
app.use(expressFileUpload());

// coludinary configartion
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET_KEY,
});

//server
app.listen(process.env.PORT, "localhost", () => {
  console.log(`server is running on port ${process.env.PORT}`);
});

//routing
app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/category", categoryRoute);

//Acessing Front End Stactic Files
app.use(express.static(path.join(__dirname, "../client/build")));

//Acessing Front End All URL
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
});
