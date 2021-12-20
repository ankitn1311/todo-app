const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },

    title: {
        type: String,
        trim: true
    },

    description: {
        type: String,
        trim: true
    },
    
}, { timestamps: true });

const Todo = mongoose.model("todo", todoSchema);
module.exports = Todo;

