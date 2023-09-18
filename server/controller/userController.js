const sendError = require("../utils/sendError");
const userModel = require("../model/userModel");
const generateToken = require("../utils/sentToken");
const bcyrpt = require("bcrypt");
const sentCookies = require("../utils/sentCookies");

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      const isUserExit = await userModel.findOne({
        email,
      });

      if (isUserExit) {
        const isPasswordIsValid = await bcyrpt.compare(
          password,
          isUserExit.password
        );

        if (isPasswordIsValid) {
          const token = await generateToken(isUserExit._id);
          sentCookies(token, res, "Login successfully...!!");
        } else {
          sendError(res, "invaild email or password");
        }
      } else {
        sendError(res, "invaild email or password");
      }
    } else {
      sendError(res, "email & peassword required");
    }
  } catch (error) {
    sendError(res, "login failed", error.message);
  }
};

const logOut = (req, res) => {
  res.cookie("token", null, { expries: new Date(Date.now()), httpOnly: true });
  res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
};

const getloggedUser = async (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
};

module.exports = { loginUser, getloggedUser, logOut };
