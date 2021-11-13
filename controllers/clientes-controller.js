// CRUD
// Crear, Leer, Actualizar, Eliminar
const Cliente = require('./../models/clientes-models');
//const Producto = require('./../models/productos-models');
const clientes = [];


//POST
const createClientes = (request, response) => {
    // body
    const cliente = request.body;
    
    //crear
    const newCliente = new Cliente(cliente)
    newCliente.save((error, result)=>{
        if(error){
            return response.status(500).send({error})
        }
        return response.send(result);
    })
          
};

//GET
const readClientes = (request, response) => {

    const id = request.params.id;
    
    const filter = {};

    if(id){
        filter._id = id;
    }

    Cliente.find(filter, (error, result)=>{

        if(error){
            return response.status(500).send({error});
        }
        return response.send(result);
    });
    
};

// PATCH

const updateClientes = (request, response) => {
    const id = request.params.id;
    if(!id){
        return response.status(400).send({error: 'No hai id para modificar'});
    }

    Cliente.updateOne({_id: id}, request.body,(error, result)=>{
        if(error){
            return response.status(500).send({error});
        }

        Cliente.find({_id: id}, (error, result)=>{

            if(error){
                return response.status(500).send({error});
            }
            return response.send(result);
        });
       
    });
    
};

//DELETE

const deleteClientes = (request, response) => {
    const id = request.params.id;
    if(!id){
        return response.status(400).send({error: 'No hai id para eliminar'});
    }
    createClientes.remove({_id: id}, (error, result)=>{
        if(error){
            return response.status(500).send({error});
        }
        return response.send(result);

    })
};


module.exports = {

    createClientes,
    readClientes,
    updateClientes,
    deleteClientes,
}