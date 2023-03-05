import React,{useState,useEffect} from 'react'
import AdminMenu from "../../components/Layout/AdminMenu"
import Layout from './../../components/Layout/Layout';
import axios from "axios";
import toast from 'react-hot-toast';


const Products = () => {
    const [products, setProducts] = useState([]);

    //get all products
    const getAllProducts = async()=>{
        try {
            const {data} = await axios.get('/api/v1/product/get-product')
            setProducts(data.products)
        } catch (error) {
            console.log(error)
            toast.error('Something went wrong')
        }
    };
    

    //lifecycle method
    useEffect(()=>{
        getAllProducts();
    },[])
  return (
    <Layout>
        <div className="row">
            <div className="col-md-3">
            <AdminMenu/>
            </div>
            <div className="col-md-9">
                <h1 className="text-center">All Products List</h1>
                {products?.map(p=>(
                    <div className="card" style={{width: '18rem'}}>
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

                ))}
            </div>
        </div>
    </Layout>
  )
}

export default Products