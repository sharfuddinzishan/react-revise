import { useEffect,useState } from 'react';
import { getCartLS } from './useLocal';

const useCart = (products,isChanged,setIsChanged) => {
    const [cart,setCart]=useState([])
        useEffect(()=>{
        let getlSData=getCartLS()
        let cartData=[]
        if(getlSData){
            for(let id in getlSData){
                let exists=products.find(data=>data._id===id)
                if(exists){
                    exists["quantity"]=getlSData[id]
                    cartData.push(exists)
                }
            }
        setCart(cartData)
        setIsChanged(false)
        }
    },[products,isChanged,setIsChanged])
    return [cart,setCart]
};

export default useCart;