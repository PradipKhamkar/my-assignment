const sendError = require("../utils/sendError");
const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel");

const isAuthUser = async (req, res, next) => {
  try {
    if (req?.cookies?.token) {
      const { userId } = jwt.verify(
        req.cookies.token,
        process.env.JWT_SECRET_KEY
      );
      if (userId) {
        req.user = await userModel.findById(userId).select("-password");
        next();
      }
    } else {
      console.log("token not set yrt");
      sendError(res, null);
    }
  } catch (error) {
    // console.log(error)
    sendError(res, null);
  }
};

module.exports = isAuthUser;
