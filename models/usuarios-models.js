const mongoose = require('mongoose');
const {Schema} = mongoose;

const usuarioSchema = new Schema({

    nombreUsuario: String,
    rolUsuario: String,
    estadoUsuario: String,
    
});

module.exports = mongoose.model('usuario', usuarioSchema);