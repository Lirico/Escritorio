const { mostrarMensajitoController } = require('../controllers/controller')
const express = require('express');


// Configurar los routers
const router = express.Router();

// Definir las rutas correspondientes al router de esta hoja
router.get('/car', mostrarMensajitoController)


// Logica de las rutas -> delegado -> controller


module.exports = router;