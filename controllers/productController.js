import productModel from "../models/productModel.js"
import fs from 'fs'

export const createProductController = async (req,res)=>{
    try {
        const {name, slug, description,price,category,quantity,shipping} = req.fields
        const {photo} = req.files
        //validation
        switch(true){
            case !name:
                return res.status(500).send({error:'Name is Required'})
            case !slug:
                return res.status(500).send({error:'Slug is Required'})
            case !description:
                return res.status(500).send({error:'Description is Required'})
            case !price:
                return res.status(500).send({error:'Price is Required'})
            case !category:
                return res.status(500).send({error:'Category is Required'})
            case !quantity:
                return res.status(500).send({error:'Quantity is Required'})
            case !shipping:
                return res.status(500).send({error:'Shipping is Required'})
        }
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