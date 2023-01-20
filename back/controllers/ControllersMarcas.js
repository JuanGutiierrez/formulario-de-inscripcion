import { Sequelize } from "sequelize";
import Marcas from "../models/ModelsMarcas.js";

const crearMarcas = async(req, res) => {
    try {
        await Marcas.create(req.body)
        res.json({
            message: 'Marca creada correctamente'
        })
    } catch (error) {
        res.json({
            message: `No se pudo crear: ${error}`
        })
    }
}
const mostrarMarcas = async(req, res) => {
    try {
        const marcas = await Marcas.findAll()
        res.json(marcas)
    } catch (error) {
        res.json({
        Message: 'Base de datos vacia'
    })
    }
}

const mostrarMarca = async (req, res)=>{
    const { Op } = Sequelize
    try {
        const marcas = await Marcas.findOne({
            where: {
                [Op.or]: [
                {id: req.params.id},
                {document: req.params.id}
                ]
            }
        })
        res.json(marcas)
    } catch (error) {
        res.json({
            Message: 'La marca no existe en la base de datos. ' + error
        })
    }
}

export{
    crearMarcas,
    mostrarMarcas,
    mostrarMarca
}