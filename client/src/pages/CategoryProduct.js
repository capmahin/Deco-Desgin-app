import React,{useState,useEffect} from 'react'
import Layout from './../components/Layout/Layout';
import { useParams } from "react-router-dom";
import axios from "axios";
const CategoryProduct = () => {
    const  params = useParams();
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const getProductsByCat = async () =>{
        try {
            const {data} = await axios.get(`/api/v1/product/product-category/${params.slug}`);
            setProducts(data?.products);
            setCategory(data?.category);
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <Layout>
        <div className="container">
           <h1>Cat Name</h1>
        </div>
    </Layout>
  )
}

export default CategoryProduct