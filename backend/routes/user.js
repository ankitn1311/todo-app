const express = require("express");
const router = express.Router();
const User = require("../models/Users");

router.post("/register", async (req, res) => {
  try {
    const name = "test";
    const email = "test@gmail.com";
    const password = "test";
    new User({ name, email, password }).save();
    res.status(203).send({
      success: true,
      message: "Created successfully",
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: "Something wrong",
    });
  }
});

module.exports = router;
