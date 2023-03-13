import React,{useState,useEffect} from 'react';
import axios from "axios";
import toast from 'react-hot-toast';
import AdminMenu from './../../components/Layout/AdminMenu';
import Layout from './../../components/Layout/Layout';

const AdminOrders = () => {
    const [status,setStatus] = useState(['Not Process','Processing','Shipped', 'deliverd', 'cancel']);
    const [changeStatus, setChangeStatus] = useState("");
  return (
    <Layout title={'All Orders Data'}>
    <div className="row">
        <div className="col-md-3">
            <AdminMenu/>
        </div>
        <div className="col-md-9">
            <h1 className="text-center">All Orders</h1>
        </div>
    </div>
    </Layout>
  )
}

export default AdminOrders