import React,{useEffect,useState} from 'react'
import AdminMenu from "../../components/Layout/AdminMenu"
import Layout from "../../components/Layout/Layout"

const CreateCategory = () => {
  const [categories,setCategories] = useState([])

  //get all cat
  const getAllCategory = async () =>{
    try {
      
    } catch (error) {
      console.log(error)
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