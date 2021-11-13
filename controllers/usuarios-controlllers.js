// CRUD
// Crear, Leer, Actualizar, Eliminar
const Usuario = require('./../models/usuarios-models');
//const Producto = require('./../models/productos-models');
const usuarios = [];


//POST
const createUsuarios = (request, response) => {
    // body
    const usuario = request.body;
    //crear
    const newUsuario = new Usuario(usuario)
    newUsuario.save((error, result)=>{
        if(error){
            return response.status(500).send({error})
        }
        return response.send(result);
    })
          
};

//GET
const readUsuarios = (request, response) => {

    const id = request.params.id;
    
    const filter = {};

    if(id){
        filter._id = id;
    }

    Usuario.find(filter, (error, result)=>{

        if(error){
            return response.status(500).send({error});
        }
        return response.send(result);
    });
};

// PATCH

const updateUsuarios = (request, response) => {
    const id = request.params.id;
    if(!id){
        return response.status(400).send({error: 'No hai id para modificar'});
    }

    Usuario.updateOne({_id: id}, request.body,(error, result)=>{
        if(error){
            return response.status(500).send({error});
        }

        Usuario.find({_id: id}, (error, result)=>{

            if(error){
                return response.status(500).send({error});
            }
            return response.send(result);
        });
       
    });
    
};

//DELETE

const deleteUsuarios = (request, response) => {
    const id = request.params.id;
    if(!id){
        return response.status(400).send({error: 'No hai id para eliminar'});
    }
    Usuario.remove({_id: id}, (error, result)=>{
        if(error){
            return response.status(500).send({error});
        }
        return response.send(result);

    })
};


module.exports = {

    createUsuarios,
    readUsuarios,
    updateUsuarios,
    deleteUsuarios,
}