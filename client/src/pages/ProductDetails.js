import React,{useState,useEffect} from 'react'
import Layout from './../components/Layout/Layout';
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";

const ProductDetails = () => {
    const params = useParams();
    const navigate = useNavigate();
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
            <h6>Category: {product.category?.name}</h6>
            <button class="btn btn-secondary ms-1">ADD TO CART</button>
        </div>
       </div>
       <hr />
       <div className="row container">
        <h5>Similar Product</h5>
        {relatedProducts.length <1 && <p className="text-center"> No Similar Products found </p>}
        <div className="d-flex flex-wrap">
          {relatedProducts?.map(p=>(      
             <div className="card m-2" style={{width: '18rem'}} >
              <img src={`/api/v1/product/product-photo/${p._id}`} className="card-img-top" alt={p.name} height="200" />
              <div className="card-body">
              <h5 className="card-title">{p.name}</h5>
              <p className="card-text">{p.description.substring(0, 60)}...</p>
              <p className="card-text">$ {p.price}</p>
              <button class="btn btn-primary ms-1" 
             onClick={()=> navigate(`/product/${p.slug}`) }>More Details</button>
              <button class="btn btn-secondary ms-1">ADD TO CART</button>
             </div>
            </div>
                   
                
                ))}
          </div>
       </div>
    </Layout>
  )
}

export default ProductDetails