import { useState, useEffect,useContext, createContext } from "react";

const AuthContext = createContext()



const AuthProvider = () =>{
    const [auth,setAuth] = useState({
        user:null,
        token:""
    })
}