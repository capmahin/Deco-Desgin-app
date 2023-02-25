import userModel from '../models/userModel';


export const registerController = async (req, res) =>{
    try {
        const {name, email, password, phone, address}= req.body
        //validations
        if(!name){
            return res.send({error:'Name is Required'})
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in Registeration',
            error
        })
    }

}
