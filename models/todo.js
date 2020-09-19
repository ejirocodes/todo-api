const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name cannot be empty'],
        unique: [true, 'todo already exist'],
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    created_date: {
        type: Date,
        default: Date.now(),
    }
})

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;

//Name
//Completed
//Created date