import Student from '../models/students.js';
import bcrypt from 'bcryptjs';

const newUser = async(req,res) => {
    try{
        const {fullname,department_id,year,email,password,gender} = req.body;
        const salt = await bcrypt.genSalt(10)
        const hashed  = bcrypt.hashSync(password,salt)

        const data = {
            fullname,
            department_id,
            year,
            email,
            password:hashed,
            gender
        }
        const checkmail = await Student.findOne({where: {email:email}})
            if (checkmail){
                res.send("email already exist")
            }else{
                const newest = await Student.create(data)
                res.status(201).json({
                    data:newest
                })
    
            }
        
    }catch(error){
        res.status(401).json({
            message:error.message
        })
    }
}
export default newUser;
