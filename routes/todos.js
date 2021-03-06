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

router.post('/', async (req, res) => {
    console.log(req.body)
    try {
        let todo = await db.Todo.create(req.body)
        res.status(201).json({
            status: 'success',
            data: {
                todo
            }
        })
    } catch (e) {
        res.status(400).json({
            status: 'fail',
            message: e
        })
    }
})

router.get('/:id', async (req, res) => {
    try {
        let todo = await db.Todo.findById(req.params.id)
        res.status(200).json({
            status: 'success',
            data: {
                todo
            }
        })
    } catch (e) {
        res.status(400).json({
            status: 'fail',
            message: e
        })
    }
})

router.patch('/:id', async (req, res) => {
    try {
    let todo = await db.Todo.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })
             res.status(203).json({
                status: 'success',
                data: {
                    todo
                }
            })
    } catch (e) {
        res.status(400).json({
            status: 'fail',
            message: e
        })
    }
})

router.delete('/:id', async (req, res) => {
    try {
         await db.Todo.findByIdAndDelete(req.params.id)
        res.status(204).json({
            status: 'success',
            data: null
        })
    } catch (e) {
        res.status(400).json({
            status: 'fail',
            message: e
        })
    }
})
module.exports = router;