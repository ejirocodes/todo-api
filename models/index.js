const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost:3000/todo-api');

mongoose.Promise = Promise;

module.exports.Todo = require('./todo')

