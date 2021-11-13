const mongoose = require('mongoose');
const {Schema} = mongoose;

const clienteSchema = new Schema({

    nombreCliente: String,
    documentoCliente: String,
    
    
});

module.exports = mongoose.model('cliente', clienteSchema);