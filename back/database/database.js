import { Sequelize } from "sequelize";

const database = new Sequelize('registro', 'root', '', { 
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: true
    }
});

export default database 