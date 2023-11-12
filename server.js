import express from "express";
import logger from "./utils/logger.js"
import sequelize from './database/sequelize.js';
import router from './route/studentRoutes.js';
import route from './route/departmentRoute.js';
const PORT = 2000;
const app =  express()
app.use(express.json());

app.get('/',(req,res) => {
  res.status(200).json({message:"WELCOME"})
  
})

app.use('/api',router)
app.use('/api',route)

try{
    await sequelize.authenticate();
    logger.info('connection has been established successfully');
}catch (error){
    logger.error('unable to connect to the database', error);
}

app.listen(PORT,() => {
    logger.info(`BACKEND SERVER RUNNING ON PORT ${PORT}`)
})
