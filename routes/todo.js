const express = require("express");
const verifyUser = require("../middleware/verify-user");

const Todo = require("../models/Todos");
const route = express.Router();

route.get("/todos", verifyUser, async (req, res) => {
  let { page } = req.query;
  page = parseInt(page);
  try {
    if (!page) {
      page = 1;
    }
    const skip = (page - 1) * 3;
    const todos = await Todo.find({ user: req.user._id })
      .sort({ title: -1 })
      .limit(3)
      .skip(skip)
      .populate("user", "name email");
    // .populate({
    //   path: "user",
    //   select: "name email",
    //   options: { sort: { date: -1 } },
    // });
    res.status(200).json({
      success: true,
      data: todos,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

route.get("/todos", verifyUser, async (req, res) => {
  console.log("normal hit");
  try {
    const todos = await Todo.find({ user: req.user._id }).populate(
      "user",
      "name email"
    );
    // console.log("todos", todos);
    res.status(200).json({
      success: true,
      data: todos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

route.post("/todos", verifyUser, async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTodo = new Todo({ user: req.user._id, title, description });
    await newTodo.save();
    res.status(201).json({
      success: true,
      message: "Todo created successfully",
      data: newTodo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

route.patch("/todos/:id", verifyUser, async (req, res) => {
  try {
    const updatedData = await Todo.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "todo updated successfuly",
      data: updatedData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

route.delete("/todos/:id", verifyUser, async (req, res) => {
  try {
    await Todo.findByIdAndRemove({ _id: req.params.id });
    res.status(200).json({
      success: true,
      message: "removed successfuly",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

module.exports = route;
