import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { addToCart, getCartLS } from '../../Hooks/useLocal/useLocal';
import Product from './../Product/Product';
import Cart from './../Cart/Cart';

const Products = () => {
    const [products,setProducts]=useState([])
    const [cart,setCart]=useState([])
    const [isAdded,setIsAdded]=useState(false)
    useEffect(()=>{
        axios.get(`https://hero-cycle-server-side-production.up.railway.app/cycles`)
        .then(result=>{
            setProducts(result?.data)
        })
    },[])

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
        setIsAdded(false)
        }
    },[products,isAdded])

    let addToLSHandler=productID=>{
        addToCart(productID)
        setIsAdded(true)
    }
    
    return (
        <div className='container-fluid bg-light'>
            <h1 className='text-center'>BiCycles {products.length}</h1>
            <div className="container">
                <div className="row">
                    <div className="col-6 col-md-8">
                        <h3>Cycles Show....</h3>
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {
                                products.map(product=><Product product={product}
                                addToLSHandler={addToLSHandler}
                                ></Product>)
                            }
                        </div>
                    </div>
                    <div className="col-6 col-md-4">
                        <Cart cart={cart}></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;