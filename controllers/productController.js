import productModel from "../models/productModel.js"
import fs from 'fs'

export const createProductController = async (req,res)=>{
    try {
        const {name, slug, description,price,category,quantity,shipping} = req.fields
        const {photo} = req.files
        const products = await productModel
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in creating product',
            error,
        })
    }
}