import React, { useState } from 'react';
import { addToCart, removeFromCart } from '../../Hooks/useLocal';
import Product from './../Product/Product';
import Cart from './../Cart/Cart';
import useProducts from '../../Hooks/useProducts';
import useCart from '../../Hooks/useCart';

const Products = () => {
    const [products]=useProducts()
    const [isChanged,setIsChanged]=useState(false)
    const [cart]=useCart(products,isChanged,setIsChanged)


    let addToLSHandler=productID=>{
        addToCart(productID)
        setIsChanged(true)
    }
    let removeFromLSHandler=productID=>{
        removeFromCart(productID)
        setIsChanged(true)
    }
    
    return (
        <div className='container-fluid bg-light'>
            <h1 className='text-center'>Total {products.length} BiCycles Found</h1>
            <div className="container">
                <div className="row">
                    <div className="col-6 col-md-8">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {
                                products.map(product=><Product key={product._id} product={product}
                                addToLSHandler={addToLSHandler}
                                ></Product>)
                            }
                        </div>
                    </div>
                    <div className="col-6 col-md-4 bg-dark text-light h-75 position-sticky top-0">
                        <Cart cart={cart} removeFromLSHandler={removeFromLSHandler} productPage={1}></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;