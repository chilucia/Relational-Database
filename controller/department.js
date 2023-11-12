import Department from '../models/department.js';

const newDepartment = async(req,res) => {
    try{
        const {name} = req.body;

        const checkDepartment = await Department.findOne({where: {name:name}})
            if (checkDepartment){
                res.send("Department already exist")
            }else{
                const newDepartment = await Department.create(req.body)
                res.status(201).json({
                    data:newDepartment
                })
    
            }
        
    }catch(error){
        res.status(400).json({
            message:error.message
        })
    }
}
export default newDepartment;
