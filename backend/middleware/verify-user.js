const jwt = require("jsonwebtoken");
const User = require("../models/Users");

module.exports = async function (req, res, next) {
  console.log("checking token");
  const token = req.header("x-auth-token");
  if (!token) {
    res.status(301).json({
      success: false,
      message: "No token, authorization failed.",
    });
  }

  console.log("token checked");

  const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
  if (!data.user) {
    res.status(301).json({
      success: false,
      message: "Invalid token.",
    });
  }

  console.log("token verified");

  const user = await User.findById(data.user).select("-password");
  console.log("User: ", user);
  req.user = user;

  next();
};
