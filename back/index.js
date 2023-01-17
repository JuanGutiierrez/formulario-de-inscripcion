import express from 'express';
import database from './database/database.js';

const app = express();
const port = 3100;

try {
    await database.authenticate()
    console.log(`Servidor corriendo`)
} catch (error) {
    console.log(`Servidor corriendo: ${error}`)
}

app.listen(port, ()=>{
    console.log('Servidor corriendo en el puerto' + port)
    console.log(`Servidor corriendo en http://localhost:3100`)
});