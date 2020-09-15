const express = require('express');
const router = express.Router();
const db = require('../models')

router.get('/', async (req, res) => {
     // let todos = await db.Todo.find()
    res.send('Hello')
    // res.json(todos)
});

module.exports = router;