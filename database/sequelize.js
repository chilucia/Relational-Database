import { Sequelize } from "sequelize";

const sequelize = new Sequelize('learn-mysql', 'root', 'root',{
    host:'localhost',
    dialect: 'mysql'
});

export default sequelize;