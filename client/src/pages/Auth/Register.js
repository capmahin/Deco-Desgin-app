import React from 'react'
import Layout from './../../components/Layout/Layout';

const Register = () => {
  return (
    <Layout title={"Register - Deco Design"}>
      <div className="register">
        <h1>Register Page</h1>
        <form>
  <div className="mb-3">
    
    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Your Name" />
   
  </div>
  <div className="mb-3">
    
    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter Your Email"   />
   
  </div>
  <div className="mb-3">
   
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Your password"  />
  </div>
  <div className="mb-3">
    
    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Your Phone Number"  />
   
  </div>
  <div className="mb-3">

    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Your Address"  />
   
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

      </div>
    </Layout>
  )
}

export default Register