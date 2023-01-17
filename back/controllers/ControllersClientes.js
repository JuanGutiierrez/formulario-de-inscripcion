import { Sequelize } from "sequelize";
import Clientes from "../models/ModelsClientes.js";

const crearCliente = async(req, res) => {
    try {
        await Clientes.create(req.body)
        res.json({
            message: 'Cliente creado correctamente'
        })
    } catch (error) {
        res.json({
            message: `No se pudo crear: ${error}`
        })
    }
}
const mostrarClientes = async(req, res) => {
    try {
        const clientes = await Clientes.findAll()
        res.json(clientes)
    } catch (error) {
        res.json({
        Message: 'Base de datos vacia'
    })
    }
}

const mostrarCliente = async (req, res)=>{
    const { Op } = Sequelize
    try {
        const clientes = await Clientes.findOne({
            where: {
                [Op.or]: [
                {id: req.params.id},
                {document: req.params.id}
                ]
            }
        })
        res.json(clientes)
    } catch (error) {
        res.json({
            Message: 'El cliente no existe en la base de datos. ' + error
        })
    }
}

export{
    crearCliente,
    mostrarClientes,
    mostrarCliente
}