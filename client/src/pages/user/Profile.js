import React,{useState,useEffect} from 'react'
import UserMenu from "../../components/Layout/UserMenu";
import Layout from './../../components/Layout/Layout';
import { useAuth } from "../../context/auth";
import toast from 'react-hot-toast';
import  axios  from 'axios';


const Profile = () => {
    //context
    const [auth,setAuth] = useAuth()
    //state
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("");
    
    //get user data
    useEffect(()=>{
        const {email,name,phone,address,password} = auth.user
    },[])

   //from function    
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
           const res = await axios.post("/api/v1/auth/register",{name,email,password,phone,address});
           
        } catch (error) {
          console.log(error)
          toast.error('Something went wrong')
        }
        
      }
  return (
    <Layout title={'Your Profile'}>
        <div className="container-fluid m-3 p-3">
            <div className="row">
                <div className="col-md-3">
                    <UserMenu/>
                </div>
                <div className="col-md-9">
                <div className="form-container">
        <h4 className="title">USER PROFILE</h4>
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
  
  <button type="submit" className="btn btn-primary">UPDATE</button>
</form>

      </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Profile