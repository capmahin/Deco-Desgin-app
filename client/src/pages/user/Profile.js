import React,{useState,useEffect} from 'react'
import UserMenu from "../../components/Layout/UserMenu";
import Layout from './../../components/Layout/Layout';
import { useAuth } from "../../context/auth";

const Profile = () => {
    //context
    const [auth,setAuth] = useAuth()
    //state
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
  return (
    <Layout title={'Your Profile'}>
        <div className="container-fluid m-3 p-3">
            <div className="row">
                <div className="col-md-3">
                    <UserMenu/>
                </div>
                <div className="col-md-9">
                    <h1>Your Profile</h1>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Profile