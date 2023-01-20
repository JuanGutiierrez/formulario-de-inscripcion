import { Sequelize } from "sequelize";
import Ciudades from "../models/ModelsCiudad";

const crearCiudad = async(req, res) => {
    try {
        await Ciudades.create(req.body)
        res.json({
            message: 'Ciudad creada correctamente'
        })
    } catch (error) {
        res.json({
            message: `No se pudo crear: ${error}`
        })
    }
}
const mostrarCiudades = async(req, res) => {
    try {
        const ciudades = await Ciudades.findAll()
        res.json(ciudades)
    } catch (error) {
        res.json({
        Message: 'Base de datos vacia'
    })
    }
}

const mostrarCiudad = async (req, res)=>{
    const { Op } = Sequelize
    try {
        const ciudades = await Ciudades.findOne({
            where: {
                [Op.or]: [
                {id: req.params.id},
                {document: req.params.id}
                ]
            }
        })
        res.json(ciudades)
    } catch (error) {
        res.json({
            Message: 'El cliente no existe en la base de datos. ' + error
        })
    }
}

export{
    crearCiudad,
    mostrarCiudades,
    mostrarCiudad
}