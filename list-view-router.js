const express = require('express');
const listViewRouter = express.Router();

// Ruta para listar las tareas completas
listViewRouter.get('/completed', (req, res) => {
    const completedTasks = task.filter(t => t.isCompleted);
    res.json(completedTasks);
});

// Ruta para listar las tareas incompletas
listViewRouter.get('/incomplete', (req, res) => {
    const incompleteTasks = task.filter(t => !t.isCompleted);
    res.json(incompleteTasks);
});

module.exports = listViewRouter;