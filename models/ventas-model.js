const mongoose = require('mongoose');
const {Schema} = mongoose;

const ventaSchema = new Schema({

    nombreVenta: {
        type: String,
        required: true,    
    },
    fecha: {
        type: String,
        match: new RegExp('^[0-9]{4}-[0-9]{2}-[0-9]{2}$')
        },
    valorTotal: Number,
    estadoVenta: String,
    nombreVendedor : String,
    //producto: []
    

});

module.exports = mongoose.model('ventas', ventaSchema);
