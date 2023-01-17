import { DataTypes } from "sequelize";
import database from "../database/database.js";

const Clientes = database.define('clientes', {
    tipo_identificacion: {
        type: DataTypes.STRING
    }, 
    numero_identificacion: {
        type: DataTypes.STRING
    },
    nombres: {
        type: DataTypes.STRING
    },
    apellidos: {
        type: DataTypes.STRING
    },
    fecha_nacimiento: {
        type: DataTypes.DATE
    },
    direccion: {
        type: DataTypes.STRING
    },
    ciudad: {
        type: DataTypes.STRING
    },
    departamento: {
        type: DataTypes.STRING
    },
    pais: {
        type: DataTypes.STRING
    },
    marca: {
        type: DataTypes.STRING
    }
});

export default Clientes