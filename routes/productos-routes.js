const express = require('express');
const { createProductos, readProductos, updateProductos, deleteProductos } = require("../controllers/productos-controllers");


//ROUTER
const router = express.Router();

router.post('/', createProductos );
router.get('/', readProductos );
router.get('/:id', readProductos );
router.patch('/:id', updateProductos );
router.delete('/:id', deleteProductos );

//GET, POST, PATCH, DELETE // Ventas


module.exports = router;