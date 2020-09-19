const express = require('express');
const router = express.Router();
const db = require('../models')

router.get('/', async (req, res) => {
    try {
     let todos = await db.Todo.find()
    res.status(200).json(todos)
    } catch (e) {
        res.send(e)
    }
});

module.exports = router;