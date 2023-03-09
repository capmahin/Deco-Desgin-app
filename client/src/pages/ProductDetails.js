import React,{useState,useEffect} from 'react'
import Layout from './../components/Layout/Layout';
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const params = useParams();
    const [product, setProduct] = useState({});

    //initalp details
    useEffect(()=>{
        if(params?.slug) getProduct();
    },[params?.slug])
    //getProduct

    const getProduct = async () =>{
        try {
            const {data} = await axios.get(`/api/v1/product/get-product/${params.slug}`);
            setProduct(data?.product)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <Layout title={'Product-details'}>
       <div className="row container">
        <div className="col-md-6">
        <img src={`/api/v1/product/product-photo/${product._id}`} className="card-img-top" alt={product.name} />
        </div>
        <div className="col-md-6">details</div>
       </div>
       <div className="row">
        similar products
       </div>
    </Layout>
  )
}

export default ProductDetails