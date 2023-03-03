import React,{useEffect,useState} from 'react'
import AdminMenu from "../../components/Layout/AdminMenu"
import Layout from "../../components/Layout/Layout"
import toast from 'react-hot-toast';
import axios from "axios";

const CreateCategory = () => {
  const [categories,setCategories] = useState([])

  //get all cat
  const getAllCategory = async () =>{
    try {
      const {data} = await axios.get('/api/v1/category/get-category')
      if(data.success){
        setCategories(data)
      }
    } catch (error) {
      console.log(error)
      toast.error('Something went wrong in getting category')
    }
  }
  return (
    <Layout title={'Dashboard-Create-Category'}>
        <div className="container-fluid m-3 p-3">
        <div className="row">
    <div className="col-md-3">
        <AdminMenu/>
    </div>
    <div className="col-md-9">
    <h1>Create Category</h1>
    </div>
</div>
</div>
</Layout>
  )
}

export default CreateCategory