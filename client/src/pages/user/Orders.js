import React,{useState,useEffect} from 'react'
import Layout from './../../components/Layout/Layout';
import UserMenu from './../../components/Layout/UserMenu';

const Orders = () => {
    const [orders,setOders] = useState([]);

    const getOrders = async()=>{
        try {
            
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <Layout title={'Your Orders'}>
        <div className="container-fluid p-3 m-3">
            <div className="row">
                <div className="col-md-3">
                    <UserMenu/>
                </div>
                <div className="col-md-9">
                    <h1>All Orders</h1>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Orders