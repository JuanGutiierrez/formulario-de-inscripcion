import { DataTypes } from "sequelize";
import database from "../database/database.js";

const Marcas = database.define('marcas', {
    americanino: {
        type: DataTypes.STRING
    },
    americanEagle: {
        type: DataTypes.STRING
    },
    chevignon: {
        type: DataTypes.STRING
    },
    esprit: {
        type: DataTypes.STRING
    },
    nafNaf : {
        type: DataTypes.STRING
    },
    rifle: {
        type: DataTypes.STRING
    }
});

export default Marcas