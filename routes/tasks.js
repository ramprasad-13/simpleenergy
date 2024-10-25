const express = require('express');
const Task = require('../models/Task');
const authenticateJWT = require('../middleware/auth');
const router = express.Router();

// Create a task
router.post('/', authenticateJWT, async (req, res) => {
    const task = new Task({ ...req.body, createdBy: req.user.id });
    await task.save();
    res.status(201).json(task);
});

// Get all tasks
router.get('/', authenticateJWT, async (req, res) => {
    const tasks = await Task.find({ createdBy: req.user.id }).populate('collaborators');
    res.json(tasks);
});

// Update a task
router.put('/:id', authenticateJWT, async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(task);
});

// Delete a task
router.delete('/:id', authenticateJWT, async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

module.exports = router;
