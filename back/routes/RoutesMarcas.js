import express from 'express'
import { crearMarcas, mostrarMarcas, mostrarMarca } from '../controllers/ControllersMarcas.js';

const marcaRouter = express.Router();

marcaRouter.post('/', crearMarcas);
marcaRouter.get('/', mostrarMarcas);
marcaRouter.get('/:id', mostrarMarca);

export default marcaRouter