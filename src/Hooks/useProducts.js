import { useEffect, useState } from 'react';
import axios from 'axios';

const useProducts = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        axios.get(`https://hero-cycle-server-side-production.up.railway.app/cycles`)
        .then(result=>{
            setProducts(result?.data)
        })
    },[])
    return [products,setProducts]
};

export default useProducts;