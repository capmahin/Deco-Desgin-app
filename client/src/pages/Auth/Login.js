import React from 'react'
import Layout from './../../components/Layout/Layout';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import toast from 'react-hot-toast';
import "../../styles/AuthStyle.css"

const Login = () => {
    const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const navigate = useNavigate();

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
       const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,{name,email,password,phone,address});
       if( res && res.data.success){
        toast.success(res.data.message)
        navigate('/login')
       }else{
        toast.error(res.data.message)
       }
    } catch (error) {
      console.log(error)
      toast.error('Something went wrong')
    }
    
  }
  return (
    <Layout title={"Login - Deco Design"}>
    <div className="form-container">
      <h4 className="title">REGISTER FORM</h4>
      <form onSubmit={handleSubmit}>
<div className="mb-3">
  
  <input type="text" 
  value={name}
  onChange={(e)=>setName(e.target.value)}
  className="form-control" id="exampleInputEmail1" placeholder="Enter Your Name" 
  required/>
 
</div>
<div className="mb-3">
  
  <input type="email"
  value={email}
  onChange={(e)=>setEmail(e.target.value)}
  className="form-control" id="exampleInputEmail1" placeholder="Enter Your Email"  required />
 
</div>
<div className="mb-3">
 
  <input type="password"
  value={password} 
  onChange={(e)=>setPassword(e.target.value)}
  className="form-control" id="exampleInputPassword1" placeholder="Enter Your password" required />
</div>
<div className="mb-3">
  
  <input type="text" 
  value={phone}
  onChange={(e)=>setPhone(e.target.value)}
  className="form-control" id="exampleInputEmail1" placeholder="Enter Your Phone Number" required />
 
</div>
<div className="mb-3">

  <input type="text" 
  value={address}
  onChange={(e)=>setAddress(e.target.value)}
  className="form-control" id="exampleInputEmail1" placeholder="Enter Your Address" required />
 
</div>

<button type="submit" className="btn btn-primary">Submit</button>
</form>

    </div>
  </Layout>
  )
}

export default Login