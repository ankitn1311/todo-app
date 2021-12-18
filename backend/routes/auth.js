const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/Users");
const jwt = require("jsonwebtoken");
const verifyUser = require("../middleware/verify-user");

router.get("/my-details", verifyUser, async (req, res) => {
  console.log("hello");
  res.status(200).json({
    success: true,
    data: req.user,
  });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).send({
      success: false,
      message: "No user with this email found",
    });
  }

  const result = await bcrypt.compare(password, user.password);

  if (!result) {
    return res.status(401).send({
      success: false,
      message: "Password is incorrect",
    });
  }

  const payload = {
    user: user._id,
  };
  await jwt.sign(
    payload,
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "1d",
    },
    (err, token) => {
      if (err) {
        res.send({
          success: false,
          message: err.message,
        });
      }
      res.send({
        success: true,
        message: "Successfully logged in",
        token,
      });
    }
  );
});

module.exports = router;
