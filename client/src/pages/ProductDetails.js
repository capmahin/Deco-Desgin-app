import React,{useState,useEffect} from 'react'
import Layout from './../components/Layout/Layout';
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const params = useParams();
    const [product, setProduct] = useState({});
    const [relatedProducts, setRelatedProducts] = useState([]);

    //initalp details
    useEffect(()=>{
        if(params?.slug) getProduct();
    },[params?.slug])
    //getProduct

    const getProduct = async () =>{
        try {
            const {data} = await axios.get(`/api/v1/product/get-product/${params.slug}`);
            setProduct(data?.product);
            getSimilarProduct(data?.product._id, data?.product.category._id)
        } catch (error) {
            console.log(error)
        }
    };

    //get similar product
    const getSimilarProduct = async(pid,cid)=>{
        try {
            const {data} = await axios.get(`/api/v1/product/related-product/${pid}/${cid}`)
            setRelatedProducts(data?.products)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <Layout title={'Product-details'}>
       <div className="row container mt-2">
        <div className="col-md-6">
        <img src={`/api/v1/product/product-photo/${product._id}`} className="card-img-top" alt={product.name} 
        height="300"
        width={"350px"}
       
        />
        </div>
        <div className="col-md-6 ">
            <h1 className="text-center">Products Details</h1>
            <h5>Name : {product.name}</h5>
            <h5>Description : {product.description}</h5>
            <h5>Price : {product.price}</h5>
            {/* <h6>Category: {product.category.name}</h6> */}
            <button class="btn btn-secondary ms-1">ADD TO CART</button>
        </div>
       </div>
       <div className="row">
        <h1>Similar Product</h1>
        {JSON.stringify(relatedProducts, null, 4)}
       </div>
    </Layout>
  )
}

export default ProductDetails