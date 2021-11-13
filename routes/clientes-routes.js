const express = require('express');
//const clienteController = require('./../controllers/clientes-controller');
const { createClientes, readClientes, updateClientes, deleteClientes } = require("../controllers/clientes-controller");


//ROUTER
const router = express.Router();

router.post('/', createClientes);
router.get('/', readClientes);
router.get('/:id', readClientes);
router.patch('/:id', updateClientes);
router.delete('/:id', deleteClientes);
//probando ruta
//router.get("/clientes", clienteController.listar);

//GET, POST, PATCH, DELETE // Ventas


module.exports = router;