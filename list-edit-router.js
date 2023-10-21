const express = require('express');
const listEditRouter = express.Router();

// Ruta para crear una tarea (POST)
listEditRouter.post('/create', (req, res) => {
    // Aquí deberías implementar la lógica para crear una nueva tarea
    // Puedes acceder a los datos enviados en el cuerpo de la solicitud a través de req.body
    // y luego agregar la nueva tarea al array 'task'.
    // Por ejemplo:
    const newTask = {
        id: '789012',
        isCompleted: false,
        description: req.body.description // Debes enviar la descripción en el cuerpo de la solicitud.
    };
    task.push(newTask);
    res.json(newTask);
});

// Ruta para eliminar una tarea (DELETE)
listEditRouter.delete('/:taskId', (req, res) => {
    const taskId = req.params.taskId;
    const index = task.findIndex(t => t.id === taskId);
    if (index !== -1) {
        task.splice(index, 1);
        res.json({ message: 'Tarea eliminada con éxito' });
    } else {
        res.status(404).json({ message: 'Tarea no encontrada' });
    }
});

// Ruta para actualizar una tarea (PUT o PATCH)
listEditRouter.put('/:taskId', (req, res) => {
    const taskId = req.params.taskId;
    const updatedTask = req.body; // Debes enviar los datos actualizados en el cuerpo de la solicitud.
    const index = task.findIndex(t => t.id === taskId);
    if (index !== -1) {
        task[index] = updatedTask;
        res.json({ message: 'Tarea actualizada con éxito' });
    } else {
        res.status(404).json({ message: 'Tarea no encontrada' });
    }
});

module.exports = listEditRouter;