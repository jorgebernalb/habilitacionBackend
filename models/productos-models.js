const mongoose = require('mongoose');
const {Schema} = mongoose;

const productoSchema = new Schema({

    nombreProducto: String,
    descripcionProducto: String,
    precio: Number,
    estado: String,
    
});

module.exports = mongoose.model('producto', productoSchema);