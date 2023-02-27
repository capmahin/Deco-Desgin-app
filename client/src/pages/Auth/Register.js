import React from 'react'
import Layout from './../../components/Layout/Layout';
import { useState } from 'react';

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  return (
    <Layout title={"Register - Deco Design"}>
      <div className="register">
        <h1>Register Page</h1>
        <form>
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

export default Register