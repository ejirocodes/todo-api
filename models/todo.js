const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name cannot be blank',
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

const Todo = mongoose.Model('Todo', todoSchema);

module.exports = Todo;

//Name
//Completed
//Created date