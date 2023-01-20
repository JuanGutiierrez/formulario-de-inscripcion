import express from 'express'
import { crearCiudad, mostrarCiudades, mostrarCiudad } from '../controllers/ControllersCiudad.js';

const ciudadRouter = express.Router();

ciudadRouter.post('/', crearCiudad);
ciudadRouter.get('/', mostrarCiudades);
ciudadRouter.get('/:id', mostrarCiudad);

export default ciudadRouter