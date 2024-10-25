const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    priority: { type: String, enum: ['low', 'medium', 'high'] },
    dueDate: Date,
    collaborators: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    dependencies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
    status: { type: String, enum: ['incomplete', 'complete'], default: 'incomplete' },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now }
});


const Task = mongoose.model('Task', taskSchema);
module.exports = Task;