const jwt = require("jsonwebtoken");
const User = require("../models/Users");

module.exports = async function (req, res, next) {
  const token = req.header("x-auth-token");
  if (token === "null") {
    console.log("token", token);
    return res.status(203).json({
      success: false,
      message: "No token, authorization failed.",
    });
  }

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!data.user) {
      return res.status(401).json({
        success: false,
        message: "Invalid token.",
      });
    }
    const user = await User.findById(data.user).select("-password");
    req.user = user;
  } catch (err) {
    console.log("error", err);
  }

  next();
};
