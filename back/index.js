import express from 'express';
import database from './database/database.js';
import ciudadRouter from './routes/RoutesCiudades.js';
import clienteRouter from './routes/RoutesClientes.js';
import marcaRouter from './routes/RoutesMarcas.js';

const app = express();
const port = 3100;

try {
    await database.authenticate()
    database.sync()
    console.log(`Servidor corriendo`)
} catch (error) {
    console.log(`Servidor corriendo: ${error}`)
}

app.use(express.json());

app.use('/clientes', clienteRouter);
app.use('/ciudades', ciudadRouter);
app.use('/marcas', marcaRouter);

app.listen(port, ()=>{
    console.log('Servidor corriendo en el puerto' + port)
    console.log(`Servidor corriendo en http://localhost:3100`)
});