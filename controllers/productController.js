import productModel from "../models/productModel.js"
import fs from 'fs'
import  slugify  from 'slugify';

export const createProductController = async (req,res)=>{
    try {
        const {name, slug, description,price,category,quantity,shipping} = req.fields
        const {photo} = req.files
        //validation
        switch(true){
            case !name:
                return res.status(500).send({error:'Name is Required'})
            
            case !description:
                return res.status(500).send({error:'Description is Required'})
            case !price:
                return res.status(500).send({error:'Price is Required'})
            case !category:
                return res.status(500).send({error:'Category is Required'})
            case !quantity:
                return res.status(500).send({error:'Quantity is Required'})
            case !photo && photo.size > 1000000:
                return res.status(500).send({error:'Photo is Required and should be less then 1mb'})
        }
        const products = new productModel({...req.fields, slug:slugify(name)})
        if(photo){
            products.photo.data = fs.readFileSync(photo.path)
            products.contentType = photo.type
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in creating product',
            error,
        })
    }
}