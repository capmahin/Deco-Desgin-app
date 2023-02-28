import { useState, useEffect } from "react";
import { useAuth} from "../../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";

export default function PrivateRoute(){
    const [ok,setOk] = useState(false)
    const [auth,setAuth] = useAuth()

    useEffect(()=>{

         const authCheck= async()=>{
            const res = await axios.get('/api/v1/auth/user-auth',{
                headers:{
                    "Authorization":auth?.token
                }
            })
            if(res.data.ok){
                
            }
         }
    },[])

    return ok ?<Outlet/> : 'spinner'
}