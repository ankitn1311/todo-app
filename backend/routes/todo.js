const express = require("express");
const Todo = require("../models/Todos");
const route = express.Router();

route.get('/todos', async (req, res) => {
    try {
        const Todos = await Todo.find();
        res.status(200).json({
            success: true,
            message: "Todo created successfully",
            data: Todos
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error",
        })
    }
})

route.post('/todos', async (req, res) => {
    try {
        const { title, description } = req.body
        const newTodo = new Todo({ title, description })
        await newTodo.save();
        res.status(201).json({
            success: true,
            message: "Todo created successfully",
            data: newTodo
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error",
        })
    }
})

route.patch('/todos/:id', async (req, res) => {

    try {
        const updatedData = await Todo.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true})

      res.status(200).json({
        success: true,
        message: "todo updated successfuly",
        data: updatedData
    })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Server Error",
        })
    }
})

route.delete('/todos/:id', async (req, res) => {
    try {
        await Todo.findByIdAndRemove({_id: req.params.id});
        res.status(200).json({
            success: true,
            message: "removed successfuly",
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error",
        })
    }
})

module.exports = route