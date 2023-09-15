const express = require("express");
const { loginUser, getloggedUser, logOut } = require("../controller/userController");
const isAuthUser = require('../middlewares/isAuth');

const route = express.Router();

route.post('/login',loginUser);
route.get('/getloggedUser',isAuthUser,getloggedUser);
route.get('/logout',logOut)

module.exports = route