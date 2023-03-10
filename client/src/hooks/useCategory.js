import { useState , useEffect } from 'react';
import  axios  from 'axios';

export default function useCategory() {
    const [categories, setCategories] = useState([]);

    //get cat
    const getCategories = async () =>{
        try {
            
        } catch (error) {
            console.log(error)
        }
    }
}
