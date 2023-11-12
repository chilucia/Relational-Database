import express from "express";
import newUser from '../controller/student.js';

const router = express.Router()

router.post('/user',newUser)

export default router;