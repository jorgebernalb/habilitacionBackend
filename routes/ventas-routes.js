const express = require('express');
const { createVentas, readVentas, updateVentas, deleteVentas } = require("../controllers/ventas-controllers");


//ROUTER
const router = express.Router();

router.post('/', createVentas );
router.get('/', readVentas );
router.get('/:id', readVentas );
router.patch('/:id', updateVentas );
router.delete('/:id', deleteVentas );

//GET, POST, PATCH, DELETE // Ventas


module.exports = router;