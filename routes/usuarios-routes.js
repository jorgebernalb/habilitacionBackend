const express = require('express');
const { createUsuarios, readUsuarios, updateUsuarios, deleteUsuarios } = require("../controllers/usuarios-controlllers");


//ROUTER
const router = express.Router();

router.post('/', createUsuarios);
router.get('/', readUsuarios);
router.get('/:id', readUsuarios);
router.patch('/:id', updateUsuarios);
router.delete('/:id', deleteUsuarios);

//GET, POST, PATCH, DELETE // Ventas


module.exports = router;