import express from 'express'
import { crearCiudad, mostrarCiudades, mostrarCiudad } from '../controllers/ControllersCiudad';

const ciudadRouter = express.Router();

clienteRouter.post('/', crearCiudad);
clienteRouter.get('/', mostrarCiudades);
clienteRouter.get('/:id', mostrarCiudad);

export default ciudadRouter