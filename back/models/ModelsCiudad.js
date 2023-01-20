import { DataTypes } from "sequelize";
import database from "../database/database.js";

const Ciudades = database.define('clientes', {
    city: {
        type: DataTypes.STRING
    }
});

export default Ciudades