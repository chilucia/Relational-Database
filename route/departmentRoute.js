import express from "express";
import newDepartment from '../controller/department.js';

const route = express.Router()

route.post('/department',newDepartment)

export default route;