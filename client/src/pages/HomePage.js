import React,{useState,useEffect} from 'react'
import Layout from './../components/Layout/Layout';
import { useAuth } from "../context/auth";
import axios from "axios";

const HomePage = () => {
  const [auth, setAuth] = useAuth();
  const [products, setProducts] = useState([]);
  const [categories,setCategories] = useState([]);

  //get products
  const getAllProducts = async()=>{
    try {
      const {data} = await axios.get('/api/v1/product/get-product')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Layout title={'All Products - Best offers'}>
       <div className="row mt-3">
       <div className="col-md-3">
        <h4 className="text-center">Filter By Category</h4>
        </div> 
       <div className="col-md-9">
        <h1 className="text-center">All Products</h1>
        <div className="d-flex flex-wrap">
          <h1>products</h1>
          </div>
          </div> 
       </div>
    </Layout>
  )
}

export default HomePage