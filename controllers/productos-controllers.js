// CRUD
// Crear, Leer, Actualizar, Eliminar
const Producto = require('./../models/productos-models');
const productos = [];


//POST
const createProductos = (request, response) => {
    // body
    const producto = request.body;
    //validar fecha
    // if(!venta.due){
    //     return response.status(400).send({ok: false})
    // }

    //crear
    const newProducto = new Producto(producto)
    newProducto.save((error, result)=>{
        if(error){
            return response.status(500).send({error})
        }
        return response.send(result);
    })
          
};

//GET
const readProductos = (request, response) => {

    const id = request.params.id;
    

    const filter = {};

    if(id){
        
        filter._id = id;
        }

        Producto.find(filter, (error, result)=>{

            if(error){
                return response.status(500).send({error});
            }
            return response.send(result);
        });
        
};

// PATCH

const updateProductos = (request, response) => {
    const id = request.params.id;
    if(!id){
        return response.status(400).send({error: 'No hai id para modificar'});
    }

    Producto.updateOne({_id: id}, request.body,(error, result)=>{
        if(error){
            return response.status(500).send({error});
        }

        Producto.find({_id: id}, (error, result)=>{

            if(error){
                return response.status(500).send({error});
            }
            return response.send(result);
        });
       
    });
    
};

//DELETE

const deleteProductos = (request, response) => {
    const id = request.params.id;
    if(!id){
        return response.status(400).send({error: 'No hai id para eliminar'});
    }
    Producto.remove({_id: id}, (error, result)=>{
        if(error){
            return response.status(500).send({error});
        }
        return response.send(result);

    })
};


module.exports = {

    createProductos,
    readProductos,
    updateProductos,
    deleteProductos,
}