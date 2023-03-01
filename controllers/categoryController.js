export const createCategoryController = async (req,res) =>{
    try {
        const {name} = req.body
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Error in Category'
        })
    }

}