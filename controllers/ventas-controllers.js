// CRUD
// Crear, Leer, Actualizar, Eliminar
//const productosModels = require('./../models/productos-models');
const Venta = require('./../models/ventas-model');
const Producto1 = require('./../models/productos-models');
const { readProductos } = require('./productos-controllers');
//const { readProductos } = require('./productos-controllers');
const ventas = [];
const productos = [];


//POST
const createVentas = (request, response) => {
    // body
    const venta = request.body;
    //validar fecha
    if(!venta.fecha){
        return response.status(400).send({ok: false})
    }

    //// anexar producto
    // const producto = readProductos();
    // productos.push(producto);
    // const producto1 = producto.readProductos;
    // console.log(producto1);

    const leerProductos = (request, response) => {

        const id = request.params.id;
        const filter = {};
        if(id){
            
            filter._id = id;
            }
    
            Producto1.find(filter, (error, result)=>{
    
                if(error){
                    return response.status(500).send({error});
                }
                return response.send(result);
            });
            
    };
    let producto2=leerProductos;
    console.log(producto2);

    //crear

    const newVenta = new Venta(venta)
    newVenta.save((error, result)=>{
        
        if(error){
            return response.status(500).send({error})
        }
        return response.send(result);
    })
          
};

//GET
const readVentas = (request, response) => {

    const id = request.params.id;
    

    const filter = {};

    if(id){
        
        filter._id = id;
}

    Venta.find(filter, (error, result)=>{

        if(error){
            return response.status(500).send({error});
        }
        return response.send(result);
    });
    //return response.send({ok: true, ventas});
    
};

// PATCH

const updateVentas = (request, response) => {
    const id = request.params.id;
    if(!id){
        return response.status(400).send({error: 'No hai id para modificar'});
    }

    Venta.updateOne({_id: id}, request.body,(error, result)=>{
        if(error){
            return response.status(500).send({error});
        }

        Venta.find({_id: id}, (error, result)=>{

            if(error){
                return response.status(500).send({error});
            }
            return response.send(result);
        });
       
    });
    
};

//DELETE

const deleteVentas = (request, response) => {
    const id = request.params.id;
    if(!id){
        return response.status(400).send({error: 'No hai id para eliminar'});
    }
    Venta.remove({_id: id}, (error, result)=>{
        if(error){
            return response.status(500).send({error});
        }
        return response.send(result);

    })
};


module.exports = {

    createVentas,
    readVentas,
    updateVentas,
    deleteVentas,
}