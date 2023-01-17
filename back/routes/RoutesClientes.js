import express from 'express'
import { crearCliente, mostrarClientes, mostrarCliente } from '../controllers/ControllersClientes.js';

const clienteRouter = express.Router();

clienteRouter.post('/', crearCliente);
clienteRouter.get('/', mostrarClientes);
clienteRouter.get('/:id', mostrarCliente);

export default clienteRouter