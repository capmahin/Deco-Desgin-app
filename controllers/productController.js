export const createProductController = async (req,res)=>{
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in creating product',
            error,
        })
    }
}