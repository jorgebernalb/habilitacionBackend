
require('dotenv').config();
const chalk = require('chalk');
const express = require('express');
const cors = require ('cors');


require('./driver/mongo-conection');


const ventasRouter = require('./routes/ventas-routes')
const productosRouter = require('./routes/productos-routes')
const clientesRouter = require('./routes/clientes-routes')
const usuariosRouter = require('./routes/usuarios-routes')


const port = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(cors());

// routes// contollers//models

app.use('/api/ventas', ventasRouter);
app.use('/api/productos', productosRouter);
app.use('/api/clientes', clientesRouter);
app.use('/api/usuarios', usuariosRouter);


//app.post('/', function(){})

app.get('*', (request, response)=>{
    return response.send('Not found');
});


app.listen(port, function(){

    console.log(chalk.blue(`El servidor está listo en el puerto : ${port}!`));
});