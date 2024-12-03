const express = require('express');
const router = require('../routes/routes');

// Configurar el servidor
const server = express();

// Configuracion de los routers -> delegado -> routers
server.get('/', (request, response) => {
    response.send("Bienvenidos a mi servidor")
})

// Ejecutar los routers
server.use('/', router)

module.exports = server;