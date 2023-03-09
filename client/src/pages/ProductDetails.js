import React,{useState,useEffect} from 'react'
import Layout from './../components/Layout/Layout';
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const params = useParams();
    const [product, setProduct] = useState({});
    //getProduct

    const getProduct = async () =>{
        try {
            const {data} = await axios.get(`/api/v1/product/get-product/${params.slug}`)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <Layout title={'Product-details'}>
        <h1>Product Details</h1>
    </Layout>
  )
}

export default ProductDetails