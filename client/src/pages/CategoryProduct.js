import React,{useState,useEffect} from 'react'
import Layout from './../components/Layout/Layout';

const CategoryProduct = () => {
    const [products, setProducts] = useState([]);
    const getProductsByCat = async () =>{
        try {
            
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