const express = require('express');
const app = express();
const port = 3000;

const task = [{
    id: '123456',
    isCompleted: false,
    description: "Walk the dog",
}];

// Importa los routers
const listViewRouter = require('./list-view-router');
const listEditRouter = require('./list-edit-router');

app.use(express.json());

// Implementa los routers en rutas específicas
app.use('/list-view', listViewRouter);
app.use('/list-edit', listEditRouter);

app.listen(port, () => {
    console.log(`Servidor funcionando en el puerto ${port}`);
});